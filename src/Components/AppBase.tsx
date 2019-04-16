import styled from 'styled-components';
import { Box } from "reakit";
import { palette } from "styled-tools";

export const AppBase = styled(Box)`
  font-family: Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: ${palette('grayscale', 6)};
  height: 100%;
`;