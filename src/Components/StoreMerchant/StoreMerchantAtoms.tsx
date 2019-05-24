'use strict';

import * as React from 'react';

import {
  Box,
  Flex
} from 'rebass';

import { Stencil } from '@Components';

export const StoresMerchantBriefSkeleton:React.FC = ({}) => (
  <Box data-testid={'stores-merchant-brief-skeleton'}>
    <Flex flexDirection={'column'} alignItems={'center'} py={1}>
      <Stencil
        width={'64px'}
        style={{
          margin: '16px 0',
          height: '64px'
        }}
      />
      <Stencil width={'50%'} />
      <Stencil width={'32%'} height={'10px'} />
      <Box width={'58%'} mt={1}> <Stencil width={'100%'} height={'10px'} /></Box>
    </Flex>
  </Box>
)