// @flow

import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input, Column, Row, Box } from 'components';

const StyledMock = (
  <Column flex={1} gap="md" offsetY="md" offsetX="md">
    <Input.Base name="input" value="value" onChange={action('onChange')} />
    <Input.Base name="input" placeholder="placeholder" onChange={action('onChange')} />
    <Input.Base name="input" readOnly value="value" onChange={action('onChange')} />

    <Input.Base name="input" kind="underline" value="value" onChange={action('onChange')} />
    <Input.Base name="input" kind="underline" placeholder="placeholder" onChange={action('onChange')} />
    <Input.Base name="input" kind="underline" readOnly value="value" onChange={action('onChange')} />

    <Input.Base name="input" kind="transparent" value="value" onChange={action('onChange')} />
    <Input.Base name="input" kind="transparent" placeholder="placeholder" onChange={action('onChange')} />
    <Input.Base name="input" kind="transparent" readOnly value="value" onChange={action('onChange')} />
  </Column>
);
storiesOf('Molecules/Input', module)
  .add('with different styles', () => (
    <Row>
      {StyledMock}
      <Box background="aliceblue">{StyledMock}</Box>
    </Row>
  ))
  .add('without value', () => <Input.Base name="input" onChange={action('onChange')} />)
  .add('with value', () => <Input.Base name="input" value="value" onChange={action('onChange')} />)
  .add('with placeholder', () => (
    <Input.Base name="input" placeholder="custom placeholder" onChange={action('onChange')} />
  ))
  .add('with error', () => <Input.Base name="input" error onChange={action('onChange')} />)
  .add('with loader', () => <Input.Base name="input" loading onChange={action('onChange')} />)
  .add('disabled or readonly', () => (
    <Fragment>
      <Input.Base name="input" readOnly value="value" onChange={action('onChange')} />
      <Input.Base name="input" disabled onChange={action('onChange')} />
    </Fragment>
  ))
  .add('with stretch=false', () => <Input.Base name="input" stretch={false} onChange={action('onChange')} />)
  .add('with custom width', () => <Input.Base name="input" width={5} onChange={action('onChange')} />)
  .add('with icons', () => (
    <Fragment>
      <Input.Base name="input" leftIcon="i" />
      <Input.Base name="input" value="value" leftIcon="i" />
      <Input.Base name="input" loading leftIcon="i" />
    </Fragment>
  ))
  .add('with html auto-complete', () => <Input.Base name="name" autoComplete />)
  .add('with center align', () => <Input.Base name="input" align="center" />);
