import styled from 'styled-components';
import SingleProduct from './SingleProduct';

const CategoryNameStyle = styled.h3`
  margin-top: 8rem;
  margin-left: 10.1rem;
`;

const Products = ({ categories }) => {
  return (
    <>
      <CategoryNameStyle>All Categories</CategoryNameStyle>
      <SingleProduct categories={categories} />
    </>
  );
};

export default Products;
