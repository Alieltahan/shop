import styled from 'styled-components';

const CategoryNameStyle = styled.h2`
  margin-top: 8rem;
  margin-left: 10.1rem;
`;
const ProductsContainerStyle = styled.div`
  width: 38.6rem;
  height: 44.4rem;
  margin-top: 8.762rem;
  margin-left: 10rem;
  background-color: #ccc;
`;
const ProductStyle = styled.div`
  width: 38.6rem;
  height: 44.4rem;
  padding: 1.6rem;
`;
const SingleProduct = ({ product }) => {
  console.log(product);
  //   console.log(product);
  return (
    <>
      <CategoryNameStyle>Category</CategoryNameStyle>
      <ProductsContainerStyle>
        <ProductStyle></ProductStyle>
      </ProductsContainerStyle>
      ;
    </>
  );
};

export default SingleProduct;
