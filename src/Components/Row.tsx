import * as React from 'react';
import styled from 'styled-components';
import { Flex } from 'reakit';

type RowProps = {
  gutterWidth?: string,
  style?: React.CSSProperties
};

export const Row:React.FC<RowProps> = (props) => {
  const {
    gutterWidth,
    children,
    style
  } = props;

  const RowElement = styled(Flex)`
    margin-left: -${gutterWidth};
    margin-right: -${gutterWidth};
    flex-wrap: wrap;
  `;

  return (
    <RowElement style={style}>
      {children}
    </RowElement>
  )
}

Row.defaultProps = {
  gutterWidth: '16px'
}