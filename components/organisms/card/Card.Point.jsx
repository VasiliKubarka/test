// @flow

import * as React from 'react';
import { Card, H1, Indicator, P, Row } from 'components/index';
import { THEME_COLORS } from 'styles';
import type { CardExportProps } from 'components/index';
import type { CardPointFragment } from 'types/CardPointFragment';

type CardPointProps = {|
  ...$Exact<CardPointFragment>,
  ...CardExportProps,
|};

const CardPoint = (props: CardPointProps) => {
  const { width, height, dataType, hardwareId, dataUnitType, value } = props;
  return (
    <Card.Base width={width} height={height}>
      <Row justifyContent="between" alignItems="center">
        <Row alignItems="center" gap="xs">
          <Indicator.Large />
          <P bold lg>
            {dataType.friendlyName}
          </P>
        </Row>
        <div>...</div>
      </Row>
      <Row flex={1}>
        <P color={THEME_COLORS.battleship}>{hardwareId}</P>
      </Row>
      <H1 light>{`${(value && value.value) || ''} ${(dataUnitType && dataUnitType.friendlyName) || ''}`}</H1>
    </Card.Base>
  );
};
CardPoint.displayName = 'Card.Point';

export { CardPoint };
