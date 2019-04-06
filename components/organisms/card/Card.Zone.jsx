// @flow

import * as React from 'react';
import { Card, P, Row } from 'components';
import type { CardExportProps } from 'components';
import { THEME_COLORS } from 'styles';
import type { CardZoneFragment } from 'types/CardZoneFragment';

type CardZoneProps = {|
  ...$Exact<CardZoneFragment>,
  ...CardExportProps,
|};

const renderValues = ({ type, devicesCount, sensorsCount }: CardZoneProps) => () => [
  <Card.Template.Item key={1} name="Type" value={type} color="default" />,
  <Card.Template.Item key={2} name="Devices" value={devicesCount} />,
  <Card.Template.Item key={3} name="Sensors " value={sensorsCount} />,
];

export const CardZone = (props: CardZoneProps) => {
  const { width, height, status, name } = props;
  return (
    <Card.Template.Base width={width} height={height} title={name} renderValues={renderValues(props)}>
      <Row>
        <P space uppercase sm bold color={THEME_COLORS.success}>
          {status}
        </P>
      </Row>
    </Card.Template.Base>
  );
};
