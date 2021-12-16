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

// Query All Products
export const QUERY_ALL_PRODUCTS = gql`
  query QUERY_ALL_PRODUCTS {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        brand
        prices {
          currency
          amount
        }
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;
