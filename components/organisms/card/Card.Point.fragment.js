// @flow

import gql from 'graphql-tag';

export const CardPointFragment = gql`
  fragment CardPointFragment on Sensor {
    id
    dataType {
      id
      friendlyName
    }
    dataUnitType {
      id
      friendlyName
    }
    hardwareId
    value {
      value
    }
  }
`;
