import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import cart, { addProduct, decrementProduct } from './store/cart';

const ContainerStyles = styled.div`
  .emptyCart {
    text-align: center;
    margin: 3rem 0;
  }
  header {
    margin-top: 8rem;
    font-family: Raleway;
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 4rem;
    margin-left: 10rem;
  }
  .u-list {
    width: 109.7rem;
    margin: 5.9rem 0 3rem 10rem;
    position: relative;
    display: flex;
    flex-direction: column;
    &-mini {
      width: 32.5rem;
      max-height: 31.5rem;
      overflow: auto;
      margin: 2.3rem 0;
    }
  }
  .list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    list-style: none;
    border-top: 1px solid #000;
    width: 109.8rem;
    padding-top: 2rem;
    font-family: Raleway;
    font-size: 3rem;
    line-height: 2.7rem;
    &-mini {
      width: 29.3rem;
      border-top: 0;
      margin: 0 0 4.1rem 0;
      padding-top: 0;
      min-height: auto;
      > div {
        width: 13.6rem;
      }
    }
    .item {
      &__img {
        width: 14.1rem;
        display: flex;
        align-items: center;
        &-mini {
          width: 13.7rem;
        }
        img {
          object-fit: contain;
        }
      }
      &__counters {
        height: 100%;
        display: flex;
        margin-right: 1.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        &-mini {
          margin-right: 1rem;
        }
        &-container {
          display: flex;
          align-items: center;
          &-mini {
            max-height: 13.7rem;
          }
        }
        &-count {
          font-weight: 500;
          font-size: 2.4rem;
          text-align: center;
          &-mini {
            font-size: 1.6rem;
          }
        }
        &-op {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 4.5rem;
          height: 4.5rem;
          border: 1px solid #1d1f22;
          &-mini {
            font-size: 1.6rem;
            width: 2.4rem;
            height: 2.4rem;
          }
        }
      }
      &__brand {
        font-weight: 600;
        height: 2.7rem;
        &-mini {
          font-weight: 300;
          font-size: 1.6rem;
          line-height: 160%;
        }
      }
      &__name {
        margin-top: 3rem;
        font-weight: normal;
        &-mini {
          margin-top: 0;
          font-size: 1.6rem;
        }
      }
      &__price {
        margin-top: 2.6rem;
        font-weight: bold;
        font-size: 2.4rem;
        line-height: 1.8rem;
        color: #1d1f22;
        &-mini {
          margin-top: 0.5rem;
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 2.256rem;
        }
      }
      &__att {
        margin-top: 2.6rem;
        display: flex;
        &-mini {
          flex-wrap: wrap;
        }
        &-boxes {
          width: 6.3rem;
          height: 4.5rem;
          border: 1px solid #1d1f22;
          margin: 0.8rem 1.2rem 0 0;

          &-colored {
            display: block;
            &-mini {
            }
          }
          > p {
            display: flex;
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
          &-mini {
            width: 2.4rem;
            height: 2.4rem;
            /* due to iPhone 12 pro properties is too big for the box added padding */
            padding: 0 1.5rem;
            > p {
              font-size: 1.4rem;
            }
          }
          &-active {
            background-color: #1d1f22;
          }
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    align-items: center;
    color: #1d1f22;
    &__total {
      color: inherit;
      font-family: Roboto;
      font-weight: 500;
      line-height: 1.8rem;
      min-width: 5.5rem;
    }
    &__amount {
      color: inherit;
      font-family: Raleway;
      font-weight: bold;
      min-width: 9.5rem;
      text-align: end;
      height: 2.6rem;
    }
    &__btns {
      display: flex;
      justify-content: space-between;
      margin: 3.5rem -0.3rem 2rem -0.3rem;
    }
    &__btn {
      &:disabled {
        background-color: #dddddd;
        color: #1d1f22;
        opacity: 0.5;
        cursor: default;
      }
      cursor: pointer;
      font-family: Raleway;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      width: 14rem;
      height: 4.3rem;
      padding: 1.6rem 3.2rem;
      &-white {
      }
      &-co-primary {
        background-color: var(--c-primary);
        color: white;
      }
    }
  }
`;
const Cart = ({ mini }) => {
  const cartItems = useSelector((state) => state.cart);
  const currentCcy = useSelector((state) => state.ccy);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  console.log(cartItems);
  return (
    <>
      <ContainerStyles>
        {!mini && <header>CART</header>}
        {cartItems.products.length === 0 ? (
          <h5 className="emptyCart">
            There is no items in your cart yet!, go and grap some!
          </h5>
        ) : (
          <ul className={!mini ? 'u-list' : 'u-list u-list-mini'}>
            {cartItems.products.map((item) => (
              <li className={!mini ? 'list' : 'list list-mini'} key={item.id}>
                <div>
                  <div
                    className={
                      !mini ? 'item__brand' : 'item__brand item__brand-mini '
                    }
                  >
                    {item.brand}
                  </div>
                  <div
                    className={
                      !mini ? 'item__name' : 'item__name item__name-mini'
                    }
                  >
                    {item.name}
                  </div>
                  <div
                    className={
                      !mini ? 'item__price' : 'item__price item__price-mini'
                    }
                  >
                    {item.prices
                      .filter((price) => price.currency === currentCcy.currency)
                      .map((ccy) => (
                        <p key={ccy.currency} className={ccy.currency}>
                          {ccy.amount}
                        </p>
                      ))}
                  </div>
                  {item.attributes.map((att) => (
                    <>
                      <div
                        key={att.id}
                        className={
                          !mini ? 'item__att' : 'item__att item__att-mini'
                        }
                      >
                        {att.type === 'swatch'
                          ? att.items.map((item) => (
                              <div
                                key={item.id}
                                style={{
                                  backgroundColor: `${item.value}`,
                                }}
                                className={
                                  !mini
                                    ? 'item__att-boxes item__att-boxes-colored'
                                    : 'item__att-boxes item__att-boxes-colored item__att-boxes-mini item__att-boxes-colored-mini'
                                }
                              ></div>
                            ))
                          : att.items.map((item) => (
                              <>
                                <span
                                  key={item.id}
                                  className={
                                    !mini
                                      ? 'item__att-boxes'
                                      : 'item__att-boxes item__att-boxes-mini'
                                  }
                                >
                                  <p>{item.displayValue}</p>
                                </span>
                              </>
                            ))}
                      </div>
                    </>
                  ))}
                </div>
                <div
                  className={
                    !mini
                      ? 'item__counters-container'
                      : 'item__counters-container item__counters-container-mini'
                  }
                >
                  <div
                    className={
                      !mini
                        ? 'item__counters'
                        : 'item__counters item__counters-mini'
                    }
                  >
                    <div
                      onClick={() =>
                        dispatch(addProduct({ ...item, currentCcy }))
                      }
                      className={
                        !mini
                          ? 'item__counters-op'
                          : 'item__counters-op item__counters-op-mini'
                      }
                    >
                      +
                    </div>
                    <div
                      className={
                        !mini
                          ? 'item__counters-count'
                          : 'item__counters-count item__counters-count-mini'
                      }
                    >
                      {item.quantity}
                    </div>
                    <div
                      onClick={() =>
                        dispatch(decrementProduct({ ...item, currentCcy }))
                      }
                      className={
                        !mini
                          ? 'item__counters-op'
                          : 'item__counters-op item__counters-op-mini'
                      }
                    >
                      -
                    </div>
                  </div>
                  <div
                    className={!mini ? 'item__img' : 'item__img item__img-mini'}
                  >
                    <img src={item.gallery[0]} alt={item.name} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {mini && (
          <>
            <div className="footer">
              <div className="footer__total"> Total</div>
              <div className={`footer__amount ${currentCcy.currency}`}>
                {Math.floor(cartItems.totalAmount * 100) / 100 || 0}
              </div>
            </div>
            <div className="footer__btns">
              <button
                onClick={() => Navigate('/cart')}
                type="button"
                className="footer__btn footer__btn-white"
              >
                view bag
              </button>
              <button
                disabled={!cartItems.products.length}
                type="button"
                className="footer__btn footer__btn-co-primary"
              >
                checkout
              </button>
            </div>
          </>
        )}
      </ContainerStyles>
    </>
  );
};

export default Cart;