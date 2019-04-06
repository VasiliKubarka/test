// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from 'components';
import * as R from 'ramda';

storiesOf('Atoms/Grid', module)
  .add('default', () => (
    <Grid>
      {R.times(
        index => (
          <div key={index}>{index}</div>
        ),
        5,
      )}
    </Grid>
  ))
  .add('row', () => (
    <Grid columns="repeat(3, 1fr)" gap="lg">
      {R.times(
        index => (
          <div key={index}>{index}</div>
        ),
        10,
      )}
    </Grid>
  ));
