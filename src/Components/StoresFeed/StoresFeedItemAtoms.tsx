'use strict';

import * as React from 'react';

import {
  Box,
  Card,
  Flex,
  Text
} from 'rebass';

import { theme } from '@Config';
import { Badge, VerificationMark, Stencil } from '@Components';

const { space } = theme;

type StoresFeedItemDescriptionProps = {
  /** Description for store */
  storeDescription: string,
  /** Renders <VerificationMark /> component */
  storeIsVerified?: boolean,
}

export const StoresFeedItemDescription:React.FC<StoresFeedItemDescriptionProps> = ({
  storeDescription,
  storeIsVerified,
}) => (
  <Box width={1} style={{ padding: `0 ${space[1]} ${space[1]} ${space[1]}` }}>
    <Flex alignItems={'center'}>
      { storeIsVerified && <VerificationMark /> }
    </Flex>

    <Text
      fontSize={theme.fontSizes[1]}
      lineHeight={space[1]}
      color={theme.palette.grayscale[2]}
      paddingLeft={space[0]}
      width={'95%'}
    >
      {storeDescription}
    </Text>
  </Box>
)

type StoresFeedItemFooterProps = {
  /** Store service hours */
  storeHours: string
  /** Store service fees */
  storeServiceFee: string,
}

export const StoresFeedItemFooter:React.FC<StoresFeedItemFooterProps> = ({
  storeHours,
  storeServiceFee,
}) => (
  <Flex
    width={1}
    padding={`0 ${space[0]} 0 ${space[2]}`}
    bg={theme.palette.grayscale[6]}
    justifyContent={'space-between'}
    alignItems={'center'}
  >
    <Text
      fontSize={theme.fontSizes[0]}
      fontWeight={600}
      color={theme.palette.grayscale[3]}
    >
      <b style={{ color: theme.palette.grayscale[1] }}>{storeServiceFee}</b> per delivery
    </Text>
    <Badge
      icon={'timer'}
      text={storeHours}
    />
  </Flex>
)

export const StoresFeedItemSkeleton:React.FC = ({}) => (
  <Box>
    <Card>
      <Flex margin={0} width={'100%'}>
        <Stencil
          width={'30%'}
          style={{
            marginTop: '8px',
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
            <Stencil width={'45%'} />
            <Stencil width={'24px'} height={'24px'} radius={'100%'} />
          </Flex>
          <Box width={'100%'}>
            <Stencil height={'14px'} width={'70%'} />
            <Stencil height={'14px'} width={'30%'} />
          </Box>
        </Flex>
      </Flex>
    </Card>
  </Box>
)