import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { addProduct, decrementProduct, miniCartToggle } from './store/cart';
import ArrowImg from '../media/svg/ArrowImg.svg';
import { useState } from 'react';

const ContainerStyles = styled.div`
  .emptyCart {
    text-align: center;
    margin: 3rem 0;
  }
  header {
    margin-top: 16rem;
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
        position: relative;
        &-mini {
          width: 13.7rem;
        }
        &-arrow {
          height: 100%;
          width: 2rem;
          z-index: 2;
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30%;
          > img {
            height: 2rem;
            width: 2rem;
          }
          &-container {
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3;
            height: 100%;
            width: 100%;
          }
          &-rt {
            height: 2rem;
            width: 2rem;
          }
          &-lf {
            height: 2rem;
            width: 2rem;
            transform: rotate(180deg);
          }
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
        &-container {
          cursor: pointer;
        }
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
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            > div {
              font-size: 1.6rem;
              background-color: var(--c-white);
              border-radius: 50%;
              height: 100%;
            }
            &-selected {
              background-color: #1d1f22;
              border: 3px solid #1d1f22;
              color: #ffffff;
              opacity: 0.5;
              &-mini {
                background-color: #ffffff;
                color: #1d1f22;
              }
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
            position: relative;
            width: 2.4rem;
            height: 2.4rem;
            /* due to iPhone 12 pro attributes is too big for the box added padding */
            padding: 0 2rem;
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
  const cartStore = useSelector((state) => state.cart);
  const currentCcy = useSelector((state) => state.ccy);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleNextImg = (product) => {
    let { id, gallery } = product;
    let [existingItem] = Object.keys(inputs).filter((input) => input === id);
    if (existingItem && gallery.length - 1 > inputs[existingItem])
      setInputs({ ...inputs, [id]: inputs[existingItem] + 1 });
    else {
      setInputs({ ...inputs, [id]: 1 });
    }
  };
  const handlePrevImg = (product) => {
    let currentIds = { ...inputs };
    let { id, gallery } = product;
    let [existingItem] = Object.keys(inputs).filter((input) => input === id);
    if (existingItem && inputs[existingItem] !== 0)
      setInputs({ ...inputs, [id]: inputs[existingItem] - 1 });
    else {
      setInputs({ ...currentIds, [id]: gallery.length - 1 });
    }
  };
  console.log(cartStore.products);
  return (
    <>
      <ContainerStyles>
        {!mini && <header>CART</header>}
        {cartStore.products.length === 0 ? (
          <h5 className="emptyCart">
            There is no items in your cart yet!, go and grap some!
          </h5>
        ) : (
          <ul className={!mini ? 'u-list' : 'u-list u-list-mini'}>
            {cartStore.products.map((item) => (
              <li className={!mini ? 'list' : 'list list-mini'} key={item.id}>
                <div>
                  <span
                    className="item__brand-container"
                    onClick={() => {
                      Navigate(`product/${item.id}`);
                      dispatch(miniCartToggle());
                    }}
                  >
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
                  </span>
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
                          ? att.items.map((option) => (
                              <div
                                key={option.id}
                                style={{
                                  backgroundColor: `${option.value}`,
                                }}
                                className={
                                  !mini
                                    ? `${
                                        item.selectedOptions.some(
                                          (opt) => opt.option === option.id
                                        )
                                          ? 'item__att-boxes item__att-boxes-colored item__att-boxes-colored-selected'
                                          : 'item__att-boxes item__att-boxes-colored'
                                      }`
                                    : `${
                                        item.selectedOptions.some(
                                          (opt) => opt.option === option.id
                                        )
                                          ? 'item__att-boxes item__att-boxes-colored item__att-boxes-mini item__att-boxes-colored-selected'
                                          : 'item__att-boxes item__att-boxes-colored item__att-boxes-mini item__att-boxes-colored-selected-mini'
                                      }`
                                }
                              ></div>
                            ))
                          : att.items.map((option) => (
                              <>
                                <span
                                  key={option.id}
                                  className={
                                    !mini
                                      ? `${
                                          item.selectedOptions.some(
                                            (opt) => opt.option === option.id
                                          )
                                            ? 'item__att-boxes selected '
                                            : 'item__att-boxes'
                                        }`
                                      : `${
                                          item.selectedOptions.some(
                                            (opt) => opt.option === option.id
                                          )
                                            ? 'item__att-boxes item__att-boxes-mini item__att-boxes-mini selected-mini '
                                            : 'item__att-boxes item__att-boxes-mini'
                                        }`
                                  }
                                >
                                  <p>{option.value}</p>
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
                    {/* Rendering the Arrows only if there is more than 1 pic */}
                    {item.gallery.length !== 1 && (
                      <span className="item__img-arrow">
                        <span
                          onClick={() => handlePrevImg(item)}
                          className="item__img-arrow-container"
                        >
                          <img
                            src={ArrowImg}
                            className="item__img-arrow-lf"
                            alt="arrow"
                          />
                        </span>
                        <div></div>
                        <span
                          onClick={() => handleNextImg(item)}
                          className="item__img-arrow-container"
                        >
                          <img
                            src={ArrowImg}
                            className="item__img-arrow-rt"
                            alt="arrow"
                          />
                        </span>
                      </span>
                    )}

                    <img
                      src={item.gallery[inputs[item.id]] || item.gallery[0]}
                      alt={item.name}
                    />
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
                {Math.floor(cartStore.totalAmount * 100) / 100 || 0}
              </div>
            </div>
            <div className="footer__btns">
              <button
                onClick={() => {
                  Navigate('/cart');
                  dispatch(miniCartToggle());
                }}
                type="button"
                className="footer__btn footer__btn-white"
              >
                view bag
              </button>
              <button
                disabled={!cartStore.products.length}
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
