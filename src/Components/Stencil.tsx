import * as React from 'react';
import styled from 'styled-components';
import { Flex } from 'reakit';

type StencilProps = {
  radius?: string,
  height?: string,
  width?: string
};

export const Stencil:React.FC<StencilProps> = (props) => {
  const {
    width,
    height,
    radius
  } = props;

  const StencilElement = styled(Flex)`
    animation: progress 1.2s ease-in-out infinite;
    background-color: #eee;
    background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    display: inline-block;
    line-height: 16px;
    height: 100%;
    width: 100%;
    border-radius: ${radius};
  `;

  return (
    <div style={{
      width,
      height,
      marginBottom: '4px'
    }}>
      <StencilElement />
    </div>
  );
}

Stencil.defaultProps = {
  radius: '16px',
  height: '16px',
  width: '100px'
}