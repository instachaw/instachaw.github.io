import * as React from 'react';

import { Flex, Heading, Image, Text } from 'rebass';
import { theme } from '@Config';
import { Grid } from '@Components'


const { palette: { grayscale }, Card } = theme;

type StoreMerchantBriefProps = {
  /** Store merchant name or title */
  title: string,
  /** Store merchant service fee */
  serviceFee: string,
  /** Store merchant brand image path */
  brandSrc: string
};

export const StoreMerchantBrief = ({ brandSrc, title, serviceFee }:StoreMerchantBriefProps) => (
  <Card my={1} py={2}>
    <Flex flexDirection={'column'} alignItems={'center'}>
      <Image width={theme.space[5]} src={brandSrc} />
      <Heading color={grayscale[1]} fontSize={3}>{title}</Heading>

      <Flex mb={1}>
        <Text fontSize={1} color={grayscale[2]} mr={0}>Open from:</Text>
        <Text fontSize={1} fontWeight={'bold'} color={theme.palette.green[1]}>9 AM - 8 AM</Text>
      </Flex>
      <Flex>
        <Text fontSize={1} color={grayscale[2]} mr={0}>Fast. Low waiting times.</Text>
        <Text fontSize={1} fontWeight={'bold'} color={grayscale[2]}>{serviceFee} only</Text>
      </Flex>
    </Flex>
  </Card>
)

export const StoreMerchantBriefWrapper:React.FC = ({ children }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Col>
          {children}
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}