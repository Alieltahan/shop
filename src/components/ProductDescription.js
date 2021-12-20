import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { QUERY_SINGLE_PRODUCT } from './http/graphql';

const ProductContainer = styled.div`
  width: 144rem;
  height: 74.5rem;
  position: relative;
  .product {
    &__details {
      display: grid;
      grid-template-columns: 61rem 29.2rem;
      position: absolute;
      width: 100.2rem;
      height: 51.3rem;
      left: 21.9rem;
      top: 3.3rem;
      margin: 4.859rem 0 0 2.542rem;
      & img {
        height: 51.1rem;
        width: 61rem;
        object-fit: contain;
      }
      &__content {
        width: 29.2rem;
        height: 51.3rem;
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
      &__attribute {
        /* TODO Font */
        &-text {
          margin-top: 4.3rem;
          text-transform: uppercase;
          font-size: 1.8rem;
          font-family: 'Roboto Condensed';
          line-height: 1.8rem;
          font-weight: bold;
          font-style: normal;
        }
        &-boxes {
          width: 6.3rem;
          height: 4.5rem;
          border: 1px solid #1d1f22;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: 0.8rem 1.2rem 0 0;
          > p {
            display:flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;
            height: 100%;
            line-height: 1.8rem;
            font-size: 1.6rem;
            font-weight: normal;
            font-family: 'Source Sans Pro';
            font-style: normal;
          }
          &-active {
            background-color: #1d1f22;
          }
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
        text-transform: uppercase;
        color: var(--c-white);
        font-family: Raleway;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 120%;
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
  const { data, loading, error } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { id },
  });
  const currentCcy = useSelector((state) => state.ccy);

  console.log(data);
  const ProductImages = data?.product?.gallery?.map((image) => image);

  const handleImageChange = (index) => {
    setThumbnail(index);
  };

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error.message}</h3>;
  return (
    <ProductContainer>
      {data?.product?.gallery?.map((image, index) => (
        <img
          onClick={() => handleImageChange(index)}
          className={`product__sideImage- product__sideImage-${index}`}
          key={`${image}` + index}
          src={image}
          alt={`${data?.product?.name} pic ${index}`}
        />
      ))}
      <div className="product__details">
        {ProductImages && (
          <img
            src={ProductImages[thumbnail]}
            className="product__image-main"
            alt={`product pic ${thumbnail + 1}`}
          />
        )}
        <div className="product__details__content">
          <h4 className="product__details__brand">{data?.product.brand}</h4>
          <p>{data?.product.name}</p>
          <div className="product__details__attribute">
            {data?.product?.attributes.map((att) => (
              <div key={att.id}>
                <p className="product__details__attribute-text">{att.id}:</p>
                {att.type === 'swatch'
                  ? att.items.map((item) => (
                      <>
                        <span
                          style={{ backgroundColor: `${item.value}` }}
                          className="product__details__attribute-boxes"
                        ></span>
                      </>
                    ))
                  : att.items.map((item) => (
                      <>
                        <span className="product__details__attribute-boxes">
                          <p>{item.displayValue}</p>
                        </span>
                      </>
                    ))}
              </div>
            ))}
          </div>
          <div className="product__details__attribute-price">
            <p>price:</p>
            <div>
              {data?.product?.prices
                .filter((price) => price.currency === currentCcy.currency)
                .map((ccy) => (
                  <p className={ccy.currency}>{ccy.amount}</p>
                ))}
            </div>
          </div>
          <div className="product__details-btn">add to cart</div>
          <div
            style={{
              marginTop: '4rem',
              fontFamily: 'Roboto',
              fontSize: '1.6rem',
              lineHeight: '2.6rem',
            }}
            dangerouslySetInnerHTML={{ __html: data?.product?.description }}
          ></div>
        </div>
      </div>
    </ProductContainer>
  );
};

export default ProductDescription;
