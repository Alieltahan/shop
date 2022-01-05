import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  cartOverlayClose,
  productAddedToggle,
  setCartOverlayProd,
} from './store/cart';
import styled from 'styled-components';
import cartLogo from '../media/svg/EmptyCart-white.svg';
import { useNavigate } from 'react-router';
import { AddToCartChkr } from './common/AddToCartChkr';
import { ProductAttributesOverlay } from './common/ProdAttributesOverlay';
import { useForm } from './lib/useForm';
import { useState } from 'react';
import { SelectAllAttributes } from './common/SelectAllAttributes';

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
      z-index: 5;
    }
  }
  .product {
    position: relative;

    &__outOfStock {
      cursor: pointer;
      position: absolute;
      height: 42.4rem;
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
    &__attributes {
      position: absolute;
      top: 4rem;
      border-radius: 50%;
      padding: 1rem;
      background-color: #eee;
      &-container {
        background-color: #ccc;
        position: absolute;
        height: 100%;
        width: 50%;
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
          object-fit: contain;
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
          z-index: 2;
          &:hover {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transform: translateY(-2px);
          }
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
      @media only screen and (max-width: 65.625em) {
        align-items: center;
      }

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
      > div {
        font-family: var(--price-regular-font);
        color: var(--c-black);
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 160%;
        font-style: normal;
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
`;

/** @param Array of the Products */
export const ProductCard = ({ products }) => {
  const [selectAttributes, setSelectAttributes] = useState(false);
  // Getting Current Currency.
  const { currency } = useSelector((state) => state.ccy);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleAttributes, productOptionSelected, clearProductAtt } =
    useForm();

  const { cartOverlay } = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(
      addProduct({
        ...product,
        /* Making a unique ID for each product based on the attributes combined so user can get quantity of each specific attributes. */
        id: `${product.id},${productOptionSelected[0]?.attributes
          .map((opt) => Object.values(opt))
          .join('-')}`,
        selectedOptions: productOptionSelected,
        currency,
        quantity: 1,
      })
    );
    dispatch(cartOverlayClose());
    setSelectAttributes(false);
    dispatch(productAddedToggle());
    setTimeout(() => dispatch(productAddedToggle()), 2000);
    clearProductAtt();
  };

  const handleAddToCartFalse = (product) => {
    if (cartOverlay.isOpen) {
      setSelectAttributes(true);
    } else {
      dispatch(
        setCartOverlayProd({
          id: product.id,
          isOpen: true,
        })
      );
      setSelectAttributes(false);
    }
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
                onClick={() => handleProductDescription(product.id)}
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
                  onClick={() => {
                    setSelectAttributes(false);
                    AddToCartChkr({
                      ...product,
                      selectedOptions: productOptionSelected,
                    }) && cartOverlay.isOpen
                      ? handleAddToCart(product)
                      : handleAddToCartFalse(product);
                    clearProductAtt();
                  }}
                  className="product__image-container-carticon"
                >
                  <img alt="cartLogo" src={cartLogo} />
                </span>
              )}
              {product.id === cartOverlay.id && cartOverlay.isOpen && (
                <>
                  {selectAttributes && <SelectAllAttributes />}
                  <ProductAttributesOverlay
                    id={product.id}
                    handleAttributes={handleAttributes}
                    productOptionSelected={productOptionSelected}
                  />
                </>
              )}
              <img
                onClick={() => handleProductDescription(product.id)}
                src={product.gallery[0]}
                alt={product.name}
              ></img>
              <div className="product__content">
                <p>{product.name}</p>
                <div className={currency}>
                  {product.prices
                    .filter((price) => price.currency === currency)
                    .map((price) => price.amount.toFixed(2))
                    .join()}
                </div>
              </div>
            </div>
          </div>
        </ProductContainerStyle>
      ))}
    </>
  );
};
