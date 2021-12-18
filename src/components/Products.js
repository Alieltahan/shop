import styled from 'styled-components';
import ProductCard from './ProductCard';

const CategoryNameStyle = styled.h3`
  margin-top: 8rem;
  margin-left: 10.1rem;
`;
// TODO Add Responsive Media Q
const ProductsContainer = styled.div`
  margin-top: 8.762rem;
  margin-left: 10rem;
  margin: 8.762rem 11.6rem 3rem 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(38.4rem, 1fr));
  column-gap: 4rem;
  row-gap: 10.3rem;
`;

const Products = ({ categories }) => {
  return (
    <>
      <CategoryNameStyle>All Categories</CategoryNameStyle>
      <ProductsContainer>
        <ProductCard categories={categories} />
      </ProductsContainer>
    </>
  );
};

export default Products;
