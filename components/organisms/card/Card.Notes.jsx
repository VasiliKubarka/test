// @flow

import * as React from 'react';
import { Card, Column, DateTime, P, ProfileMarker, Row } from 'components';
import { THEME_COLORS } from 'styles';
import type { CardExportProps } from 'components';
import type { CardNoteFragment } from 'types/CardNoteFragment';

type CardNotesProps = {|
  ...$Exact<CardNoteFragment>,
  ...CardExportProps,
|};

const CardNotes = (props: CardNotesProps) => {
  const { width, height, description, author, date } = props;
  return (
    <Card.Base width={width} height={height}>
      <Column gap="sm" flex={1}>
        <Column flex={1}>
          <P>{description}</P>
        </Column>
        <Row justifyContent="between" alignItems="center">
          <ProfileMarker imageSrc={(author && author.image_url) || ''}>{(author && author.name) || ''}</ProfileMarker>
          <DateTime color={THEME_COLORS.battleship} time value={date} />
        </Row>
      </Column>
    </Card.Base>
  );
};
CardNotes.displayName = 'Card.Notes';

export { CardNotes };
