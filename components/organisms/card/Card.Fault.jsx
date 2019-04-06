// @flow

import * as React from 'react';
import { Row } from 'components/atoms/layout';
import { Fault } from 'components/molecules/faults';
import { Button } from 'components/molecules/buttons';
import { OrderServiceSvg } from 'images';
import { THEME_COLORS } from 'styles';
import { Card } from 'components/index';
import type { CardExportProps } from 'components/';
import type { CardFaultFragment } from 'types/CardFaultFragment';

type CardFaultProps = {|
  ...$Exact<CardFaultFragment>,
  ...CardExportProps,
|};

const renderValues = ({ device, space }: CardFaultProps) => () => [
  <Card.Template.Item key={1} name="Device" value={device.name} flex={10} />,
  <Card.Template.Item
    key={2}
    name={(space.parent && space.parent.type) || ''}
    value={(space.parent && space.parent.name) || ''}
    flex={7}
  />,
  <Card.Template.Item key={3} name={space.type || ''} value={space.name} flex={13} />,
];

const CardFault = (props: CardFaultProps) => {
  const { width, height, name, status } = props;
  return (
    <Card.Template.Base width={width} height={height} title={name} renderValues={renderValues(props)}>
      <Row justifyContent="between">
        <Fault.Description status={status} />
        <Button.Text size="md" color="primary" renderIcon={() => <OrderServiceSvg fill={THEME_COLORS.white} />}>
          order service
        </Button.Text>
      </Row>
    </Card.Template.Base>
  );
};
CardFault.displayName = 'Card.Fault';

export { CardFault };
