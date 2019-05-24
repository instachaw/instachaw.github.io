import * as React from 'react';

import { Flex, Heading, Image, Text } from 'rebass';
import { theme } from '@Config';
import { Grid } from '@Components'

const { palette: { grayscale }, Card } = theme;

type StoreMerchantBriefProps = {};

export const StoreMerchantBrief:React.FC<StoreMerchantBriefProps> = ({ }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Col>
          <Card my={1} py={2}>
            <Flex flexDirection={'column'} alignItems={'center'}>
              <Image width={'64px'} src={'/static/img/kilimanjaro-brand.png'} />
              <Heading color={grayscale[1]} fontSize={3}>Kilimanjaro, Choba</Heading>

              <Flex mb={1}>
                <Text fontSize={1} color={grayscale[2]} mr={0}>Open from:</Text>
                <Text fontSize={1} fontWeight={'bold'} color={theme.palette.green[1]}>9 AM - 8 AM</Text>
              </Flex>
              <Flex>
                <Text fontSize={1} color={grayscale[2]} mr={0}>Fast. Low waiting times.</Text>
                <Text fontSize={1} fontWeight={'bold'} color={grayscale[2]}>N300 only</Text>
              </Flex>
            </Flex>
          </Card>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}