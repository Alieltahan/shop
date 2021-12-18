import styled from 'styled-components';

// TODO Add Responsive Media Q
const ProductsContainer = styled.div`
  margin-top: 8.762rem;
  margin-left: 10rem;
  margin: 8.762rem 11.6rem 3rem 10rem;
  background-color: #916969;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4rem;
  row-gap: 10.3rem;
`;
const ProductContainerStyle = styled.div`
  width: 38.6rem;
  height: 44.4rem;
  background-color: #ccc;
`;
const ProductStyle = styled.div`
  width: 38.6rem;
  height: 44.4rem;
  padding: 1.6rem;
`;
const ImgContainer = styled.span``;

const SingleProduct = ({ categories }) => {
  //   const Product = category[0].product[0];
  console.log(categories);
  return (
    <ProductsContainer>
      {categories?.map((category) =>
        category?.products?.map((product) => (
          <ProductContainerStyle>
            <ProductStyle>{product.brand}</ProductStyle>
          </ProductContainerStyle>
        ))
      )}
    </ProductsContainer>
  );
};

export default SingleProduct;
