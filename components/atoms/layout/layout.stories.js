// @flow

import React, { Fragment } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { storiesOf } from '@storybook/react';
import { Row, Column } from './Layout';

const Block = styled.div`
  display: flex;
  min-width: 100px;
  min-height: 100px;
  background-color: ${R.prop('color')};
`;

const Blocks = () => (
  <Fragment>
    <Block color="chocolate" />
    <Block color="red" />
    <Block color="orange" />
    <Block color="green" />
    <Block color="purple" />
  </Fragment>
);

storiesOf('Atoms/FlexLayout', module)
  .add('default Row', () => (
    <Row>
      <Blocks />
    </Row>
  ))
  .add('default Column', () => (
    <Column>
      <Blocks />
    </Column>
  ))
  .add('with custom justifyContent', () => (
    <Row justifyContent="end">
      <Blocks />
    </Row>
  ))
  .add('with offset', () => (
    <Row offsetX="lg" offsetY="lg">
      <Blocks />
    </Row>
  ))
  .add('with gap', () => (
    <Fragment>
      <Row gap="lg">
        <Blocks />
      </Row>
      <Column gap="lg" offsetTop="lg">
        <Blocks />
      </Column>
    </Fragment>
  ));
