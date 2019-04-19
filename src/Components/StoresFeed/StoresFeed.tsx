import * as React from 'react';

import { Box, Heading } from 'reakit';
import {
  Col,
  Row,
  Grid
} from '@Components';
import { theme } from '@Config';

import { StoresFeedItem } from './StoresFeedItem';

export const StoresFeed:React.SFC = () => {
  return (
    <Box padding={`${theme.spacing[0]} 0`}>
      <Grid>
        <Row>
          <Col>
            <Heading
              use="h3"
              margin={`${theme.spacing[1]} 0`}
              color={theme.palette.grayscale[2]}
            >Quick & Delightful.</Heading>

            <Box marginBottom={'8px'}>
              <StoresFeedItem
                description={'We offer a wide variety of meals and snacks.'}
                thumbnailImageSrc={'/static/img/brand-logo.jpg'}
                title={'Instachaw, Choba'}
                serviceHours={'8 am - 10 am'}
                serviceFee={'N300'}
                isVerified={true}
              />
            </Box>

            <StoresFeedItem
              description={'Our unique menu consists of select popular contemporary and Nigerian offerings.'}
              thumbnailImageSrc={'/static/img/kilimanjaro-lite.jpg'}
              title={'Kilimanjaro, Choba'}
              serviceHours={'8 am - 10 am'}
              serviceFee={'N300'}
              isVerified={false}
            />
          </Col>
        </Row>
      </Grid>
    </Box>
  )
}