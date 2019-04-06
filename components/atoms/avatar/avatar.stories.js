// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar, Box, Grid } from 'components';

const IMAGE_URL = 'https://static.comicvine.com/uploads/original/11/110482/3191339-aang+1.jpg';

storiesOf('Atoms/avatar', module)
  .add('default', () => (
    <Box background="aqua">
      <Grid columns="repeat(auto-fit, minmax(100px, 1fr))">
        <Avatar imageSrc={IMAGE_URL} />
        <Avatar size="md" imageSrc={IMAGE_URL} />
        <Avatar size="lg" imageSrc={IMAGE_URL} />
      </Grid>
    </Box>
  ))
  .add('empty', () => (
    <Box background="aqua">
      <Grid columns="repeat(auto-fit, minmax(100px, 1fr))">
        <Avatar imageSrc="" />
        <Avatar size="md" imageSrc="" />
        <Avatar size="lg" imageSrc="" />
      </Grid>
    </Box>
  ));
