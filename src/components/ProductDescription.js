import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { QUERY_SINGLE_PRODUCT } from './http/graphql';

const ProductContainer = styled.div`
  width: 144rem;
  height: 74.5rem;
  position: relative;
  background-color: wheat;
  .product {
    &__image- {
      &0 {
      }
    }
  }
`;
const ProductDescription = ({ id }) => {
  const { data, loading, error } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { id },
  });

  console.log(data);
  if (error) return <h3>{error.message}</h3>;
  return (
    <ProductContainer>
      {data?.product?.gallery?.map((image, index) => (
        <img
          className={`product__image-${index}`}
          key={`${image}` + index}
          src={image}
          alt={`${data?.product?.description} pic ${index}`}
        />
      ))}
    </ProductContainer>
  );
};

export default ProductDescription;
