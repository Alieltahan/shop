import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 5;
  top: -6rem;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  background-color: #ccc;
  padding: 1rem;
  border-radius: 5%;
  color: red;
`;

/**@returns error Message to select all Product Attributes */

export const SelectAllAttributes = () => {
  return (
    <Container className="product__details-att">
      Please select all available options for the product!
    </Container>
  );
};
