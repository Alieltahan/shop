import styled from 'styled-components';
import cartLogo from '../media/svg/EmptyCart-white.svg';

const ProductContainerStyle = styled.div`
  position: static;
  top: 0;
  left: 0;
  background-color: wheat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.6rem;
  width: 38.6rem;
  height: 44.4rem;
  background-color: var(--c-white);
  &:hover {
    box-shadow: var(--product-card-box-shadow);
  }
  .product {
    position: absolute;
    &__image-container {
      position: static;
      width: 35.4rem;
      height: 3.3rem;
      left: 1.6rem;
      top: 1.6rem;
      img {
        position: static;
        left: 1.6rem;
        top: 1.6rem;
        width: 35.4rem;
        height: 33rem;
        object-fit: cover;
        background-size: 100% 100%;
      }
      &-cartIcon {
        width: 5.2rem;
        height: 5.2rem;
        background-color: var(--c-primary);
        position: absolute;
        right: 1.5rem;
        bottom: -32.3rem;
        border-radius: 50%;
        img {
          width: 2.4rem;
          height: 2.4rem;
          position: absolute;
          top: 26.92%;
          bottom: 26.92%;
          left: 26.92%;
          right: 26.92%;
          fill: red;
        }
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      position: static;
      width: 35.4rem;
      height: 5.8rem;
      left: 1.6rem;
      top: 37rem;
      p {
        display: flex;
        align-items: center;
        color: var(--c-black);
        font-family: Raleway;
        font-style: normal;
        line-height: 160%;
        font-size: 1.8rem;
        position: static;
        height: 2.9rem;
        left: 0;
        top: 0;
      }
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        position: static;
        width: 5.8rem;
        height: 2.9rem;
        left: 0;
        top: 2.9rem;
      }
    }
  }
  .EUR:before {
    content: '\u20AC';
  }
  .USD:before {
    content: '\u0024';
  }
  .GBP:before {
    content: '£';
  }
  .RUB:before {
    content: '₽';
  }
  .JPY:before {
    content: '¥';
  }
  /* For Scability, Just add className with Currency Symbol & Add It To The CONST Symbol */
  .AUD:before {
    content: 'A$';
  }
`;
const ImageContainer = styled.span`
  /* position: absolute;
  img {
    position: static;
    left: 1.6rem;
    top: 1.6rem;
    width: 35.4rem;
    height: 33rem;
    object-fit: cover;
    background-size: 100% 100%;
  } */
`;

const ProductStyle = styled.div`
  /* position: absolute;
  width: 38.6rem;
  height: 44.4rem;
  margin: 1.6rem;
  margin-bottom: 2rem;
  color: var(--c-black);

  p {
    position: static;
    height: 2.9rem;
    width: 35.4rem;

    top: 0;
    right: 0;
  }
  div {
    width: 5.8rem;
    height: 2.9rem;
  } */
`;

const CartIconOnProduct = styled.span`
  /* background-color: var(--c-primary);
  width: 5.2rem;
  height: 5.2rem;
  position: absolute;
  right: 1.5rem;
  bottom: -2.6rem;
  border-radius: 50%;
  filter: var(--button-box-shadow);

  img {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    position: absolute;
    top: 26.92%;
    right: 26.92%;
    left: 26.92%;
    bottom: 26.92%;
  } */
`;

const ProductCard = ({ categories }) => {
  return (
    <>
      {categories?.map((category) =>
        category?.products?.map((product) => (
          <ProductContainerStyle key={product.id}>
            <div className="product">
              <div className="product__image-container">
                <img src={product.gallery[0]} alt={product.name}></img>
                <span className="product__image-container-cartIcon">
                  <img alt="cartLogo" src={cartLogo} />
                </span>
                <div className="product__content">
                  <p>{product.name}</p>
                  {/* TODO Get it from REDUX STATE */}
                  <div className="USD">
                    {Number(
                      product.prices
                        .filter((price) => price.currency === 'USD')
                        .map((price) => price.amount)
                        .join()
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ProductContainerStyle>
        ))
      )}
    </>
  );
};

export default ProductCard;