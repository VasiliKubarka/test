// @flow

import gql from 'graphql-tag';

export const CardNoteFragment = gql`
  fragment CardNoteFragment on Note {
    id
    description
    date
    author {
      id
      name
      image_url
    }
  }
`;
