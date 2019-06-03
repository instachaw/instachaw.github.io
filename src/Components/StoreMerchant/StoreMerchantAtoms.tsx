'use strict';

import * as React from 'react';

import {
  Box,
  Card,
  Flex
} from 'rebass';

import { Stencil } from '@Components';
import { theme } from '@Config';

const { space } = theme;

export const StoreMerchantBriefSkeleton:React.FC = ({}) => (
  <Box data-testid={'stores-merchant-brief-skeleton'}>
    <Flex flexDirection={'column'} alignItems={'center'} py={1}>
      <Stencil
        width={space[5]}
        style={{
          margin: `${space[1]} 0`,
          height: space[5]
        }}
      />
      <Stencil width={'50%'} />
      <Stencil width={'32%'} height={'10px'} />
      <Box width={'58%'} mt={1}> <Stencil width={'100%'} height={'10px'} /></Box>
    </Flex>
  </Box>
)

export const StoreProductItemSkeleton:React.FC = () => (
  <Box data-testid={'store-product-item-skeleton'}>
    <Card>
      <Flex margin={0} width={'100%'}>
        <Stencil
          width={'30%'}
          style={{
            marginTop: space[0],
            height: '82px'
          }}
        />
        <Flex width={'70%'} flexDirection={'column'} alignItems={'center'} padding={`12px`}>
          <Flex
            alignItems={'center'}
            width={'100%'}
            justifyContent={'space-between'}
            marginBottom={space[0]}
          >
            <Stencil width={'60%'} />
            <Stencil width={space[2]} height={space[2]} radius={'100%'} />
          </Flex>
          <Box width={1}><Stencil height={'14px'} width={'20%'} /></Box>
        </Flex>
      </Flex>
    </Card>
  </Box>
)