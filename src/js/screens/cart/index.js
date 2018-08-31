import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import reducerInjector from "../../redux/reducerInjector";

import { Flex, Text, Link as UILink, GreenButton } from "pcln-design-system";
import { OutlineButton, Radio } from "../../components/UI/atoms";
import { ActionStrip } from "../../components/UI/molecules";
import { CartEmptyState } from "../../components/UI/organisms";
import {
  CheckoutInfo,
  Summary,
  CartModal,
  SteemFundingModal
} from "../../components/UI/ecosystems";

import { REDUCER_NAME } from "./constants";

import { fetchCart, clearCart, setCartModalStatus } from "./actions";
import {
  setFundingModalStatus,
  setFundingAmount,
  fetchTransactionsCount,
  fetchTransactionToken,
  setTransactionsCount,
  setFundingAttemptingStatus,
  setUser,
  setFundingMethod
} from "../../screens/account/actions";
import {
  setPaymentMethod,
  setPaymentMode,
  setDeliveryAddress
} from "../../screens/checkout/actions";
import { setHeaderVisibility } from "../../containers/header/actions";
import { setFooterVisibility } from "../../containers/footer/actions";

import Feed from "../../containers/feed";

import { getAppState } from "../../containers/app/reducer";
import { cartReducer, getCartState } from "./reducer";
import { getAccountState } from "../../screens/account/reducer";
import { getCheckoutState } from "../../screens/checkout/reducer";

import AccountService from "../../services/AccountService";
import { roundToDecimalPlaces } from "../../util/util";

class Cart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isSummaryMinimized: true,
      paymentMethod: "STEEM",
      isPaymentMinimized: true,
      isPaymentModeMinimized: true
    };

    this.setActivePaymentMethod = this.setActivePaymentMethod.bind(this);
    this.setActivePaymentMode = this.setActivePaymentMode.bind(this);
    this.setCurrentDeliveryAddress = this.setCurrentDeliveryAddress.bind(this);
    this.onFundingSubmit = this.onFundingSubmit.bind(this);
    this.onCartSubmit = this.onCartSubmit.bind(this);
  }

  componentDidMount() {
    const {
      setHeaderVisibility,
      setFooterVisibility,
      onLoadCart,
      match,
      app
    } = this.props;

    setTimeout(() => {
      setHeaderVisibility({
        isHeaderVisible: false
      });
      setFooterVisibility({
        isFooterVisible: false
      });
    }, 200);

    if (app.url !== match.url) {
      onLoadCart(match.path);
    }
  }

  componentWillUnmount() {
    this.setActivePaymentMethod = null;
    this.setActivePaymentMode = null;
    this.setCurrentDeliveryAddress = null;
    this.paymentStatusInterval = clearInterval(this.paymentStatusInterval);
    this.onFundingSubmit = null;
    this.onCartSubmit = null;
  }

  render() {
    const subtotal = this.getPaymentSubtotal();
    const {
      account,
      cart,
      checkout,
      history,
      setFundingAmount,
      setFundingMethod,
      setFundingModalStatus
    } = this.props;
    const { paymentMethod, paymentMode, deliveryAddress } = checkout;
    const { items, isCartModalOpen } = cart;
    const {
      fundingAmount,
      fundingMethod,
      isAttemptingFunding,
      isFundingModalOpen,
      user
    } = account;

    const vat = isNaN(this.getPaymentVat()) ? 0 : this.getPaymentVat();
    const total = this.getTotal(paymentMethod);

    return items.length ? (
      <Flex flexDirection="column">
        <CartModal
          isCartModalOpen={isCartModalOpen}
          cartItems={items}
          onSetCartModalStatus={status => this.props.setCartModalStatus(status)}
        />
        {isFundingModalOpen && (
          <SteemFundingModal
            fundingAmount={fundingAmount}
            fundingMethod={fundingMethod}
            isAttemptingFunding={isAttemptingFunding}
            isFundingModalOpen={isFundingModalOpen}
            onFundingSubmit={e => this.onFundingSubmit(e)}
            onSetFundingAmount={data => setFundingAmount(data)}
            onSetFundingMethod={data => {
              setFundingAmount({
                fundingAmount: this.getPaymentAmount(fundingMethod)
              });
              setFundingMethod(data);
            }}
            onClose={e => {
              this.props.setFundingModalStatus({
                isFundingModalOpen: false
              });

              this.props.setFundingAttemptingStatus({
                isAttemptingFunding: false
              });

              if (this.paymentStatusInterval) {
                this.paymentStatusInterval = clearInterval(
                  this.paymentStatusInterval
                );
              }
            }}
          />
        )}

        <Flex mt={3} px={3} flexDirection="column">
          <Flex alignItems="center" justify="center">
            <Flex
              style={{
                display:
                  isCartModalOpen || isFundingModalOpen ? "none" : "block"
              }}
              width={[1, 0.9, 0.7, 0.7]}
            >
              <Flex mb={3}>
                <Flex style={{ flex: 2 }}>
                  <Text fontSize={3} mr={2} bold>
                    My Order
                  </Text>
                  <Text regular color="gray" mt={2} fontSize={0}>
                    ( {items.length} {items.length == 1 ? "Item" : "Items"} )
                  </Text>
                </Flex>
                <Flex alignItems="flex-end" mt={2}>
                  <UILink
                    onClick={e =>
                      confirm("Take this action?") && this.props.clearCart()}
                  >
                    <Text fontSize={0}>Clear Order</Text>
                  </UILink>
                </Flex>
              </Flex>

              <Feed items={[items[0]]} />

              {items.length > 1 && (
                <Flex mb={3}>
                  <OutlineButton
                    py={2}
                    onClick={e => this.props.setCartModalStatus(true)}
                    fullWidth
                  >
                    See {items.length - 1} more &nbsp;
                    {items.length == 2 ? "treat" : "treats"}.
                  </OutlineButton>
                </Flex>
              )}

              <CheckoutInfo
                rates={this.props.app.rates}
                amount={this.getPaymentTotal()}
                history={history}
                isUserAuthenticated={user !== null}
                getWalletBalance={wallet => this.getWalletBalance(wallet)}
                onSetDeliveryAddress={this.setCurrentDeliveryAddress}
                currentDeliveryAddress={deliveryAddress}
                onPaymentToggleClick={e =>
                  this.setState({
                    isPaymentMinimized: !this.state.isPaymentMinimized
                  })}
                onPaymentModeToggleClick={e =>
                  this.setState({
                    isPaymentModeMinimized: !this.state.isPaymentModeMinimized
                  })}
                isPaymentMinimized={this.state.isPaymentMinimized}
                isPaymentModeMinimized={this.state.isPaymentModeMinimized}
                onSetActivePaymentMethod={this.setActivePaymentMethod}
                onSetActivePaymentMode={this.setActivePaymentMode}
                activePaymentMethod={paymentMethod}
                activePaymentMode={paymentMode}
                userAddresses={user !== null ? user.addresses : []}
              />

              <Summary
                onSummaryToggleClick={e =>
                  this.setState({
                    isSummaryMinimized: !this.state.isSummaryMinimized
                  })}
                isMinimized={this.state.isSummaryMinimized}
                total={total}
                subtotal={subtotal}
                paymentMethod={paymentMethod}
                vat={vat}
                mb={2}
              />
              <GreenButton
                disabled={!this.isValidForm()}
                onClick={e => this.onCartSubmit(e)}
                mb={4}
                fullWidth
              >
                Complete Checkout
              </GreenButton>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    ) : (
      <CartEmptyState onShowTreatsButtonClick={e => history.push("/")} />
    );
  }

  setCurrentDeliveryAddress(address) {
    this.props.setDeliveryAddress({
      deliveryAddress: address
    });
  }

  setActivePaymentMethod(method) {
    this.props.setPaymentMethod({
      paymentMethod: method
    });
  }

  setActivePaymentMode(mode) {
    this.props.setPaymentMode({
      paymentMode: mode
    });
  }

  getValidWallet() {
    return this.getWalletBalance("SBD") < this.getPaymentAmount("SBD")
      ? "STEEM"
      : "SBD";
  }

  getTotal(paymentMethod) {
    let total = this.getPaymentTotal();

    if (paymentMethod === "naira") return total;

    return this.getPaymentAmount(paymentMethod);
  }

  getWallet(wallet) {
    return this.props.account.user !== null
      ? this.props.account.user.wallets.filter(
          currentWallet => currentWallet.title === wallet
        )[0]
      : null;
  }

  getWalletBalance(wallet) {
    return this.props.account.user !== null
      ? this.props.account.user.wallets.filter(
          currentWallet => currentWallet.title === wallet
        )[0].balance
      : 0;
  }

  getPaymentSubtotal() {
    return roundToDecimalPlaces(
      this.props.cart.items.reduce(
        (total, item) =>
          total + parseFloat(item.price) * parseInt(item.qty, 10),
        0
      )
    );
  }

  getPaymentVat() {
    return roundToDecimalPlaces(
      this.props.cart.items.reduce(
        (total, item) => total + parseFloat(item.vat) * parseInt(item.qty, 10),
        0
      )
    );
  }

  getPaymentTotal() {
    let vat = parseFloat(this.getPaymentVat(), 10);
    vat = isNaN(vat) ? 0 : vat;
    return roundToDecimalPlaces(
      parseFloat(this.getPaymentSubtotal(), 10) + vat
    );
  }

  getPaymentAmount(paymentCurrency = "SBD") {
    let paymentAmount = this.getPaymentTotal();
    return paymentCurrency === "SBD"
      ? roundToDecimalPlaces(paymentAmount / this.props.app.rates["SBD"], 3)
      : roundToDecimalPlaces(paymentAmount / this.props.app.rates["STEEM"], 3);
  }

  onCartSubmit(e) {
    const total = this.getTotal();

    if (this.props.checkout.paymentMode === "on-demand") {
      if (this.props.checkout.paymentMethod === "naira") {
        alert(`Sorry, we only accept cash for pay on delivery at the moment.`);
        return false;
      } else {
        if (this.props.checkout.paymentMethod === "STEEM") {
          if (this.getWalletBalance("STEEM") < total) {
            this.props.setPaymentMethod({
              paymentMethod: "SBD"
            });

            if (this.getWalletBalance("SBD") < total) {
              this.props.setFundingAmount({
                fundingAmount: total
              });

              return this.props.setFundingModalStatus({
                isFundingModalOpen: true
              });
            }
          }
        } else {
          if (this.getWalletBalance("SBD") < total) {
            this.props.setPaymentMethod({
              paymentMethod: "STEEM"
            });

            if (this.getWalletBalance("STEEM") < total) {
              this.props.setFundingAmount({
                fundingAmount: total
              });
              return this.props.setFundingModalStatus({
                isFundingModalOpen: true
              });
            }
          }
        }
      }
    }

    this.props.history.push("/checkout");
  }

  onFundingSubmit(event) {
    event.preventDefault();

    AccountService.processFundingRequest({
      account: this.props.account,

      handleFetchTransactionToken: this.props.fetchTransactionToken,

      handleSetFundingAttemptingStatus: data =>
        this.props.setFundingAttemptingStatus(data),

      handleSetTransactionsCount: data => this.props.setTransactionsCount(data),

      handleFetchTransactionsCount: (data, cb) =>
        this.props.fetchTransactionsCount(data, cb),

      handlesSetUser: data => this.props.setUser(data),

      handleSetFundingModalStatus: data =>
        this.props.setFundingModalStatus(data),

      handleSetupPaymentStatusInterval: cb => {
        this.paymentStatusInterval = setInterval(() => {
          cb();
        }, 7000);
      },
      handleTeardownPaymentStatusInterval: () => {
        this.paymentStatusInterval = clearInterval(this.paymentStatusInterval);
      }
    });
  }

  getWalletBalance(wallet) {
    return this.props.account.user !== null
      ? this.props.account.user.wallets.filter(
          currentWallet => currentWallet.title === wallet
        )[0].balance
      : 0;
  }

  isValidForm() {
    return (
      this.props.checkout.deliveryAddress.length > 1 &&
      this.props.account.user !== null
    );
  }

  static fetchData(store, { path }) {
    return store.dispatch(fetchCart(path));
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: cartReducer };
  }
}

const mapStateToProps = state => {
  const account = getAccountState(state).toJS();

  return {
    app: getAppState(state).toJS(),
    cart: getCartState(state).toJS(),
    checkout: getCheckoutState(state).toJS(),
    account
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setHeaderVisibility: data => dispatch(setHeaderVisibility(data)),
    setFooterVisibility: data => dispatch(setFooterVisibility(data)),
    onLoadCart: data => dispatch(fetchCart(data)),
    setCartModalStatus: data => dispatch(setCartModalStatus(data)),
    setFundingModalStatus: data => dispatch(setFundingModalStatus(data)),
    setFundingAmount: data => dispatch(setFundingAmount(data)),
    setFundingMethod: data => dispatch(setFundingMethod(data)),
    setPaymentMethod: data => dispatch(setPaymentMethod(data)),
    setPaymentMode: data => dispatch(setPaymentMode(data)),
    setFundingAttemptingStatus: data =>
      dispatch(setFundingAttemptingStatus(data)),
    fetchTransactionsCount: (data, cb) =>
      dispatch(fetchTransactionsCount(data, cb)),
    fetchTransactionToken: cb => dispatch(fetchTransactionToken(cb)),
    setUser: data => dispatch(setUser(data)),
    setTransactionsCount: data => dispatch(setTransactionsCount(data)),
    setDeliveryAddress: data => dispatch(setDeliveryAddress(data)),
    clearCart: data => dispatch(clearCart())
  };
};

const withReducer = reducerInjector(REDUCER_NAME, cartReducer)(Cart);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withReducer)
);
