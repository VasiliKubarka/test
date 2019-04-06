// @flow

import gql from 'graphql-tag';

export const CardZoneFragment = gql`
  fragment CardZoneFragment on Space {
    id
    name
    type
    status
    devicesCount
    sensorsCount
  }
`;
