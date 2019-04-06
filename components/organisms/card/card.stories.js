// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from 'components';

storiesOf('Organisms/Card', module)
  .add('Fault', () => <Card.Fault width={350} />)
  .add('Notes', () => <Card.Notes width={350} />)
  .add('Point', () => <Card.Point width={350} />)
  .add('Order', () => <Card.Order width={350} />)
  .add('Zone', () => <Card.Zone width={350} />);
