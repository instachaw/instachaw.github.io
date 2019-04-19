'use strict';

import * as React from 'react';

import {
  Box,
  Flex,
  Heading,
  Paragraph
} from 'reakit';

import { theme } from '@Config';
import { Badge, VerificationMark } from '@Components';

type StoresFeedItemThumbnailProps = {
  src: string,
  width: string
};

export const StoresFeedItemThumbnail:React.FC<StoresFeedItemThumbnailProps> = ({ src, width }) => (
  <div
    style={{
      width,
      flex: 1,
      backgroundImage: `url("${src}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderTopLeftRadius: theme.radius[1],
      borderBottomLeftRadius: theme.radius[1],
      position: 'relative',
      zIndex: 10
    }}
  />
)

type StoresFeedItemDescriptionProps = {
  storeTitle: string,
  storeDescription: string,
  storeIsVerified?: boolean
}

export const StoresFeedItemDescription:React.FC<StoresFeedItemDescriptionProps> = ({
  storeDescription,
  storeTitle,
  storeIsVerified
}) => (
  <Box style={{ padding: `0 ${theme.spacing[1]} ${theme.spacing[1]} ${theme.spacing[1]}` }}>
    <Flex alignItems={'center'}>
      <Heading
        use="h6"
        style={{
          flex: 1,
          color: theme.palette.grayscale[1]
        }}>{storeTitle}</Heading>
      { storeIsVerified && <VerificationMark /> }
    </Flex>

    <Paragraph
      fontSize={theme.fontSizes[1]}
      lineHeight={theme.spacing[1]}
      color={theme.palette.grayscale[2]}
    >
      {storeDescription}
    </Paragraph>
  </Box>
)

type StoresFeedItemFooterProps = {
  storeHours: string
  storeServiceFee: string
}

export const StoresFeedItemFooter:React.FC<StoresFeedItemFooterProps> = ({
  storeHours,
  storeServiceFee
}) => (
  <Flex
    margin={0}
    width={'100%'}
    padding={`${theme.spacing[0]} ${theme.spacing[1]}`}
    background={theme.palette.grayscale[6]}
    justifyContent={'space-between'}
    alignItems={'center'}
  >
    <Paragraph
      fontSize={theme.fontSizes[0]}
      margin={0}
      fontWeight={'600'}
      color={theme.palette.grayscale[3]}
    >
      <b style={{ color: theme.palette.grayscale[1] }}>{storeServiceFee}</b> per delivery
    </Paragraph>
    <Badge
      icon={'timer'}
      text={storeHours}
    />
  </Flex>
)