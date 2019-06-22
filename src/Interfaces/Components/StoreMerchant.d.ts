import { Props } from 'react';

declare module IStoreMerchant {
    export interface IProps extends Props<{}> {
        text: string;
    }

    export interface IState { }

    export interface StoreMerchantProductProps {
        /** Merchant store id */
        storeId: number,
        /** Merchant store URL string */
        storePath: string,
        /** Merchant product id */
        productId: number,
        /** Title of the product */
        productTitle: string,
        /** Description for the product */
        productDesc?: string,
        /** Price for the product */
        productPrice: number,
        /** Product photo filename */
        photo: string,
        /** Displays a collapsed section */
        hasCollapsedSection?: boolean
    };
}