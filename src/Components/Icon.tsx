'use strict';

import React from 'react'
import styled from 'styled-components'

import { getIconsPath } from '@Utilities'
import { theme } from '@Config';

type BaseProps = {
  name: string,
  size: number|string,
  legacy: boolean,
}

const defaultProps = {
  name: 'checkLight',
  size: 24,
  legacy: true,
  theme: theme
}

const Base:React.FC<BaseProps> = ({ name, size, legacy, ...props }):(React.ReactElement<any>) => {
  const icon = getIconsPath({ name, legacy })

  return (
    <svg
      {...props}
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill="currentcolor"
    >
      <path d={icon.path} />
    </svg>
  )
}

const Icon = styled(Base)`
  flex: none;
  ${theme.spacing[0]} ${theme.palette.grayscale[0]};
`

Icon.displayName = 'Icon'

Icon.defaultProps = defaultProps;

export default Icon
