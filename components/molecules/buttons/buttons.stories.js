// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './';
// $FlowFixMe
import { ReactComponent as LogoSvg } from './logo.svg';
import { Column, Row } from 'components';
import { withActions } from '@storybook/addon-actions';

storiesOf('Molecules/Buttons', module)
  .addDecorator(withActions('click'))
  .add('default sizes', () => (
    <Row>
      <Column>
        <Button size="sm">small</Button>
        <Button size="md">medium button</Button>
        <Button size="lg">large button</Button>
        <Button size="sm">small button with large text</Button>
        <Button>default button</Button>
      </Column>
      <Column>
        <Button renderIcon={() => <LogoSvg />} size="sm">
          small
        </Button>
        <Button renderIcon={() => <LogoSvg />} size="md">
          medium button
        </Button>
        <Button renderIcon={() => <LogoSvg />} size="lg">
          large button
        </Button>
        <Button renderIcon={() => <LogoSvg />} size="sm">
          small button with large text
        </Button>
        <Button renderIcon={() => <LogoSvg />}>default button</Button>
      </Column>
    </Row>
  ))
  .add('default text', () => (
    <Row>
      <Button.Text renderIcon={() => <LogoSvg />}>default button</Button.Text>
      <Button.Text size="sm">default button</Button.Text>
      <Button.Text size="md">default button</Button.Text>
      <Button.Text renderIcon={() => <LogoSvg />} size="lg">
        default button
      </Button.Text>
      <Button.Text size="sm">small button with large text</Button.Text>
    </Row>
  ))
  .add('common', () => (
    <Row>
      <Column>
        <Button.Text size="md">Button</Button.Text>
        <Button.Text disabled size="md">
          Button
        </Button.Text>
        <Button.Text loading size="md">
          Button
        </Button.Text>
      </Column>
      <Column>
        <Button.Text color="primary" size="md">
          Button
        </Button.Text>
        <Button.Text disabled color="primary" size="md">
          Button
        </Button.Text>
        <Button.Text color="primary" loading size="md">
          Button
        </Button.Text>
      </Column>
    </Row>
  ));
