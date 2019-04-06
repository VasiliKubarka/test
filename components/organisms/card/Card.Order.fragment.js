// @flow

import gql from 'graphql-tag';

export const CardOrderFragment = gql`
  fragment CardOrderFragment on Order {
    id
    name
    device {
      id
      name
    }
    cost
    payment_status
    status
    executor {
      id
      name
      image_url
    }
  }
`;
