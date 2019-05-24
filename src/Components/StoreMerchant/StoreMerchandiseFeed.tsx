import * as React from 'react';

import { Box, Heading } from 'rebass';
import { Grid } from '@Components';
import { theme } from '@Config';

type StoreMerchandiseFeedProps = {
  /** Displays merchandise loading animation */
  isFetchingMerchandise?: boolean,
};

export const StoreMerchandiseFeed:React.FC<StoreMerchandiseFeedProps> = ({ }) => {
  return (
    <Box padding={`${theme.space[1]} 0`}>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <Heading
              color={theme.palette.grayscale[1]}
              data-testid={'store-merchandise-screen-title'}
            >
              Make a Choice.
            </Heading>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Box>
  )
}