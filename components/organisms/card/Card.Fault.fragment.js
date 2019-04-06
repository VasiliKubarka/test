// @flow

import gql from 'graphql-tag';

export const CardFaultFragment = gql`
  fragment CardFaultFragment on Fault {
    id
    name
    status
    device {
      id
      name
    }
    space {
      id
      name
      type
      parent {
        id
        name
        type
      }
    }
  }
`;
