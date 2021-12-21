import styled from 'styled-components';
import ProductCard from './ProductCard';

const CategoryNameStyle = styled.h3`
  margin-top: 8rem;
  margin-left: 10.1rem;
  text-transform: capitalize;
`;
// TODO Add Responsive Media Q
const ProductsContainer = styled.div`
  margin: 8.762rem 11.6rem 10rem 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(38.4rem, 1fr));
  column-gap: 4rem;
  row-gap: 10.3rem;
`;

const Products = ({ data }) => {
  return (
    <>
      <CategoryNameStyle>{data?.category.name} Categories</CategoryNameStyle>
      <ProductsContainer>
        <ProductCard products={data.category?.products} />
      </ProductsContainer>
    </>
  );
};

export default Products;
