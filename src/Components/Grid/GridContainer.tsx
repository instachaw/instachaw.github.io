import * as React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';

import { Column } from './Column';
import { Row } from './Row';

type GridContainerProps = {
  /** Width of the adjoining gutter space. */
  gutterWidth?: string,
  /** CSS styles. */
  style?: React.CSSProperties,
  /** React children */
  children?: React.ReactNode
};

export const GridContainer = (props:GridContainerProps) => {
  const {
    gutterWidth,
    children,
    style
  } = props;

  const GridContainerElement = styled(Box)`
    margin-left: auto;
    margin-right: auto;
    padding-left: ${gutterWidth};
    padding-right: ${gutterWidth};
  `;

  return (
    <GridContainerElement style={style}>
      {children}
    </GridContainerElement>
  )
}

GridContainer.Col = Column;
GridContainer.Row = Row;

GridContainer.defaultProps = {
  gutterWidth: '16px'
}