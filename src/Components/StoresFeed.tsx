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
          <Col style={{ background: 'yellow' }}>
            <Heading use="h2" style={{ background: 'orange' }}>See All Stores</Heading>      
          </Col>
        </Row>
      </Grid>
    </div>
  )
}