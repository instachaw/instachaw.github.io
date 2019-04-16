import * as React from 'react';

import { Provider } from 'reakit';
import { theme } from "../../src/Config";
import { AppBase } from '@Components';

export const RootComponent:React.SFC = ({ children }) => {
  return (
    <Provider theme={theme}>
      <AppBase>{children}</AppBase>
    </Provider>
  )
}