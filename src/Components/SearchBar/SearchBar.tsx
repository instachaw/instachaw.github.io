'use strict';

import React from 'react'

import {
  SearchBarAddon,
  SearchBarInput,
  SearchBarWrapper
} from './SearchBarAtoms'

import { Icon } from '@Components';
import { theme } from '@Config';

export const SearchBar:React.FC = () => {
  return (
    <label>
      <SearchBarWrapper>
        <SearchBarInput width={'60vw'} placeholder={'Find great meals...'} />
        <SearchBarAddon>
          <Icon name="search" fill={theme.palette.grayscale[5]} />
        </SearchBarAddon>
      </SearchBarWrapper>
    </label>
  )
}