import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './store/cart';
import styled from 'styled-components';
import cartLogo from '../media/svg/EmptyCart-white.svg';
import { useNavigate } from 'react-router';

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
    & .product__image-container-carticon {
      cursor: pointer;
      opacity: 1;
      z-index: 2;
    }
  }
  .product {
    position: relative;

    &__outOfStock {
      position: absolute;
      height: 44.4rem;
      width: 100%;
      background-color: #ffffff;
      opacity: 0.5;
      &-hide {
        display: none;
        visibility: hidden;
      }
      p {
        font-family: Raleway;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 3.84rem;
        color: #8d8f9a;
        height: 33.8rem;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &__image {
      &-container {
        position: static;
        width: 35.4rem;
        height: 33.8rem;
        left: 1.6rem;
        top: 1.6rem;
        img {
          cursor: pointer;
          position: static;
          left: 1.6rem;
          top: 1.6rem;
          width: 35.4rem;
          height: 33rem;
          object-fit: cover;
          background-size: 100% 100%;
        }

        &-carticon {
          width: 5.2rem;
          height: 5.2rem;
          background-color: var(--c-primary);
          position: absolute;
          right: 1.5rem;
          bottom: -1.6rem;
          border-radius: 50%;
          transition: all 0.3s;
          opacity: 0;
          img {
            width: 2.4rem;
            height: 2.4rem;
            position: absolute;
            top: 26.92%;
            bottom: 26.92%;
            left: 26.92%;
            right: 26.92%;
          }
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

const ProductCard = ({ products }) => {
  console.log(products);
  // Getting Current Currency.
  const CurrentCcy = useSelector((state) => state.ccy.currency);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  // Add Product to Cart
  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };
  const handleProductDescription = (id) => {
    Navigate(`/product/${id}`);
  };
  return (
    <>
      {products?.map((product) => (
        <ProductContainerStyle key={product.id}>
          <div className="product">
            <div className="product__image-container">
              <div
                className={
                  !product.inStock
                    ? 'product__outOfStock'
                    : 'product__outOfStock-hide'
                }
              >
                <p>OUT OF STOCK</p>
              </div>
              {/* Won't render the Cart Icon if Product out of Stock */}
              {product.inStock && (
                <span
                  onClick={() => handleAddToCart(product)}
                  className="product__image-container-carticon"
                >
                  <img alt="cartLogo" src={cartLogo} />
                </span>
              )}
              <img
                onClick={() => handleProductDescription(product.id)}
                src={product.gallery[0]}
                alt={product.name}
              ></img>
              <div className="product__content">
                <p>{product.name}</p>
                <div className={CurrentCcy}>
                  {Number(
                    product.prices
                      .filter((price) => price.currency === CurrentCcy)
                      .map((price) => price.amount)
                      .join()
                  )}
                </div>
              </div>
            </div>
          </div>
        </ProductContainerStyle>
      ))}
    </>
  );
};

export default ProductCard;
