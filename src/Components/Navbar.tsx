import * as React from 'react';
import { Avatar, Toolbar, Input } from "reakit";
import { theme } from "@Config";
import { HamburgerIcon } from "@Components";

type NavbarProps = {
  isMenuOpen: boolean,
  onMenuToggleClick: () => void
}

const defaultProps = {
  isMenuOpen: false
}

export const Navbar:React.FC<NavbarProps> = (props) => {
  const { isMenuOpen, onMenuToggleClick } = props;

  const { palette: { primary } } = theme;
  const brand = primary[3];

  return (
    <Toolbar background={brand} gutter={'8px 16px'}>
      <Toolbar.Content align={'center'}>
        <Input width={'60vw'} placeholder={'Search...'} /> 
      </Toolbar.Content>
      <Toolbar.Content align="end">
        <Toolbar.Focusable
          use={HamburgerIcon}
          color={'#fff'}
          isOpen={isMenuOpen}
          menuClicked={onMenuToggleClick}
        />
      </Toolbar.Content>
    </Toolbar>
  )
}

Navbar.defaultProps = defaultProps;