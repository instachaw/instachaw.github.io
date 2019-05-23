import * as React from 'react';

import { Box, Heading } from 'rebass';
import { theme } from '@Config';

type StoreMerchantBriefProps = {};

export const StoreMerchantBrief:React.FC<StoreMerchantBriefProps> = ({ }) => {
  return (
    <Box>
      <Heading
        color={theme.palette.grayscale[3]}
        data-testid={'store-merchandise-brief-title'}
      >
        Kilimanjaro, Choba
      </Heading>
    </Box>
  )
}