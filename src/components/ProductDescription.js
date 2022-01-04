import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { QUERY_SINGLE_PRODUCT } from './http/graphql';
import AddToCartChkr from './common/AddToCartChkr';
import useForm from './lib/useForm';
import { currCategory } from './store/activeCategory';
import { addProduct } from './store/cart';
import ProductAttributes from './common/ProductAttributes';
const createDOMPurify = require('dompurify');
const DOMPurify = createDOMPurify(window);

const ProductContainer = styled.div`
  /* width: 144rem;
  height: 74.5rem; */
  padding-top:16rem;
  .product {
    &__details {
      display: grid;
      grid-template-columns: 61rem 29.2rem;
      padding-top:16rem;
      margin-left:2.542rem;
      width: 100.2rem;
      height: 51.3rem;
      &-att{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        background-color: #ccc;
        padding: 1rem;
        border-radius: 5%;
        color:red;

      }
      & img {
        height: 51.1rem;
        width: 61rem;
        object-fit:contain;
      }
      &__content {
        width: 29.2rem;
        height: 51.3rem;
        margin-left: 10rem;
        h4 {
          font-family: Raleway;
          font-weight: 600;
          font-size: 3rem;
          line-height: 2.7rem;
        }
        > p {
          font-family: Raleway;
          margin-top: 1.6rem;
          font-weight: normal;
          font-size: 3rem;
          color: #1d1f22;
          line-height: 2.7rem;
        }
      }
      &-description{
        margin-top: 4rem;
        font-family: Roboto;
        font-size: 1.6rem;
        line-height: 2.6rem;
      }
      &__attribute {
        &-text {
          margin-top: 4.3rem;
          text-transform: uppercase;
          font-size: 1.8rem;
          font-family: 'Roboto Condensed';
          line-height: 1.8rem;
          font-weight: bold;
          font-style: normal;
        }
        
        &-price{
           > p {
             margin-top: 4rem;
             font-size:1.8rem;
             line-height: 1.8rem;
             font-weight: bold;
             font-family: 'Robot Condensed';
             text-transform: uppercase;
          }
          > div {
            height: 4.6rem;
            display: flex;
            align-items: center;
            margin-top: 1rem;
            font-family: Raleway;
            font-weight: bold;
            font-size: 2.4rem;
            line-height: 1.8rem;

          }
        }
      }
      &-btn{
        margin-top: 2rem;
        background-color: #5ECE7B;
        display: flex;
        justify-content: center;
        padding: 1.6rem 3.2rem;
        width: 100%;
        text-transform: uppercase;
        color: var(--c-white);
        font-family: Raleway;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 120%;
        border: none;
        &:disabled{
          opacity: 0.5;
          &:hover{
            cursor: not-allowed;
            box-shadow: none;
            transform: translateY(0);
          }
        }
        &:hover{
          cursor: pointer;
          transform: translateY(-2px);
          box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        }
        &:active{
          transform: translateY(0);
          box-shadow: none;
        }
      }
    }
    &__sideImage- {
      cursor: pointer;
      position: relative;
      width: 7.9rem;
      height: 8rem;
      left: 9.671rem;
      top: 7.239rem;
      object-fit: contain;
      display: block;
      margin-bottom: 3.239rem;
      &main {
    }
  }
`;
const ProductDescription = ({ id }) => {
  const [thumbnail, setThumbnail] = useState(0);
  const [selectAttribute, setSelectAttribute] = useState(false);
  const { data, loading, error } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { id },
  });
  const { currency } = useSelector((state) => state.ccy);
  const dispatch = useDispatch();

  const ProductImages = data?.product?.gallery.map((image) => image);

  const handleImageChange = (index) => {
    setThumbnail(index);
  };
  /* Storing the Product */
  let Product = {};
  if (data) {
    Product = data.product;
  }
  /* Updating Active Category */
  dispatch(currCategory(Product.category));
  /* Custom Hook to handle the Products Attributes */
  const { handleAttributes, productOptionSelected, clearProductAtt } =
    useForm();

  const handleAddToCart = (Product, productOptionSelected) => {
    dispatch(
      addProduct({
        ...Product,
        /* Making a unique ID for each product based on the attributes combined so user can get quantity of each specific attributes. */
        id: `${Product.id},${productOptionSelected[0]?.attributes
          .map((opt) => Object.values(opt))
          .join('-')}`,
        selectedOptions: productOptionSelected,
        currency,
        quantity: 1,
      })
    );
    clearProductAtt();
  };

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error.message}</h3>;
  return (
    <ProductContainer>
      {Product.gallery?.map((image, index) => (
        <img
          onClick={() => handleImageChange(index)}
          className={`product__sideImage- product__sideImage-${index}`}
          key={`${image}` + index}
          src={image}
          alt={`${Product.name} pic ${index}`}
        />
      ))}
      <div className="product__details">
        {ProductImages && (
          <img
            src={ProductImages[thumbnail]}
            /* not safe due to endless loop */
            onError={(e) => {
              setThumbnail(0);
            }}
            className="product__image-main"
            alt={`product pic ${thumbnail + 1}`}
          />
        )}
        <div className="product__details__content">
          <h4 className="product__details__brand">{data?.product.brand}</h4>
          <p>{data?.product.name}</p>
          <ProductAttributes
            Product={Product}
            handleAttributes={handleAttributes}
            productOptionSelected={productOptionSelected}
          />
          <div className="product__details__attribute-price">
            <p>price:</p>
            <div>
              {Product.prices
                .filter((price) => price.currency === currency)
                .map((ccy) => (
                  <p key={ccy.currency} className={ccy.currency}>
                    {ccy.amount.toFixed(2)}
                  </p>
                ))}
            </div>
          </div>
          <div>
            <button
              disabled={!Product.inStock}
              onClick={() => {
                setSelectAttribute(false);
                AddToCartChkr({
                  ...Product,
                  selectedOptions: productOptionSelected,
                })
                  ? handleAddToCart(Product, productOptionSelected)
                  : setSelectAttribute(true);
              }}
              className="product__details-btn"
            >
              {!Product.inStock ? 'out of stock' : 'add to cart'}
            </button>
          </div>
          {selectAttribute && (
            <div className="product__details-att">
              !Please select all available options for the product!
            </div>
          )}
          <div
            className="product__details-description"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(Product.description),
            }}
          ></div>
        </div>
      </div>
    </ProductContainer>
  );
};

export default ProductDescription;
