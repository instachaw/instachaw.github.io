'use strict';

import React from 'react'

import {
  SearchBarAddon,
  SearchBarInput,
  SearchBarWrapper
} from './SearchBarAtoms'

import { Icon } from '@Components';
import { theme } from '@Config';

type SearchBarProps = {
  inputRef: React.RefObject<HTMLInputElement>,
  inputValue: string
}

export const SearchBar:React.FC<SearchBarProps> = ({ inputRef, inputValue }) => {
  return (
    <label style={{ width: '100%' }}>
      <SearchBarWrapper width={1}>
        <SearchBarInput type="search" defaultValue={inputValue} ref={inputRef} placeholder={'Find great meals...'} />
        <SearchBarAddon>
          <Icon name="search" fill={theme.palette.grayscale[5]} />
        </SearchBarAddon>
      </SearchBarWrapper>
    </label>
  )
}