import * as React from 'react';
import { Box, Flex } from "rebass";
import { theme } from "@Config";
import { Icon, Hamburger, SearchBar, Grid } from "@Components";

type NavbarProps = {
  onSearchSubmit: (e:React.FormEvent) => any
  searchInputRef: React.RefObject<HTMLInputElement>,
  searchInputValue: string
}

type NavbarState = {}

type NavbarItemProps = {
  span?: number;
}

const NavbarItem:React.FC<NavbarItemProps> = ({ children, span=2, ...props }) => (
  <Grid.Col
    sm={span}
    md={span}
    lg={span}
    xl={span}
    gutterWidth={0}
    style={{
      alignItems: 'center',
      justifyContent: 'center'
    }}
    {...props}
  >{children}</Grid.Col>
)

export class Navbar extends React.Component<NavbarProps, NavbarState> {  
  render() {
    const { palette: { primary } } = theme;
    const brand = primary[3];
    const brandLightest = primary[6];
    const { onSearchSubmit, searchInputRef, searchInputValue } = this.props;

    return (
      <Box bg={brand} style={{ position: 'fixed', zIndex: 400 }} width={1} py={1}>
        <Grid>
          <Grid.Row>
            <NavbarItem>
              <Flex data-testid={'navbar-brand'} ><Icon size={32} name={'instachaw'} fill={brandLightest}/></Flex>
            </NavbarItem>
            <NavbarItem span={8}>
              <Flex data-testid={'search-bar'} width={1}>
                <form method="POST" style={{ width: '100%' }} onSubmit={onSearchSubmit}>
                  <SearchBar inputValue={searchInputValue} inputRef={searchInputRef}/>
                </form>
              </Flex>
            </NavbarItem>
            <NavbarItem>
              <Flex data-testid={'navbar-menu-toggle'}><Hamburger color={brandLightest} /></Flex>
            </NavbarItem>
          </Grid.Row>
        </Grid>
      </Box>
    )
  }
}