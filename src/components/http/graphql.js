import { gql } from '@apollo/client';

// Getting the Categories
export const QUERY_CATEGORIES = gql`
  query QUERY_CATEGORIES {
    categories {
      name
    }
  }
`;

// Getting the Currencies
export const QUERY_CURRENCIES = gql`
  query QUERY_CURRENCIES {
    currencies
  }
`;
