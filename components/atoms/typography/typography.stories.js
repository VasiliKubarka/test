// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { H1, H2, H3, P } from './Typography';

storiesOf('Atoms/Typography', module).add('all', () => (
  <div>
    <H1>Header 1</H1>
    <H2>Header 2</H2>
    <H3>Header 3</H3>
    <P lg>Regular text</P>
    <P color="#4a54ff">Regular text</P>
    <P sm color="red">
      Regular text
    </P>
  </div>
));
