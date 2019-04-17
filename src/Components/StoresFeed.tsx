import * as React from 'react';

import { Heading } from 'reakit';

import {
  Col,
  Row,
  Grid
} from '@Components';

export const StoresFeed:React.SFC = () => {
  return (
    <div>
      <Grid>
        <Row>
          <Col>
            <Heading use="h2">See All Stores</Heading>      
          </Col>
        </Row>
      </Grid>
    </div>
  )
}