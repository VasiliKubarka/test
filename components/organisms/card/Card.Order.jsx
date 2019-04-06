// @flow

import * as React from 'react';
import { Card, P, ProfileMarker, Row } from 'components';
import { THEME_COLORS } from 'styles';
import type { CardExportProps } from 'components/index';
import type { CardOrderFragment } from 'types/CardOrderFragment';

type CardOrderProps = {|
  ...$Exact<CardOrderFragment>,
  ...CardExportProps,
|};

const renderValues = ({ device, cost, payment_status }: CardOrderProps) => () => [
  <Card.Template.Item key={1} name="Device" value={device.name} flex={10} />,
  <Card.Template.Item key={2} name="Cost" value={`$${cost || ''}`} color="default" flex={7} />,
  <Card.Template.Item key={3} name="Payment " value={payment_status} color="default" flex={13} />,
];

const CardOrder = (props: CardOrderProps) => {
  const { width, height, status, name, executor } = props;
  return (
    <Card.Template.Base width={width} height={height} title={name} renderValues={renderValues(props)}>
      <Row justifyContent="between" alignItems="center">
        <P space uppercase sm bold color={THEME_COLORS.success}>
          {status}
        </P>
        <ProfileMarker imageSrc={(executor && executor.image_url) || ''}>
          {(executor && executor.name) || ''}
        </ProfileMarker>
      </Row>
    </Card.Template.Base>
  );
};
CardOrder.displayName = 'Card.Order';

export { CardOrder };
