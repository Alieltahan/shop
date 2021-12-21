import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addProduct, decrementProduct } from './store/cart';

const ContainerStyles = styled.div`
.emptyCart{
  text-align: center;
}
.lists-container{
  display: flex;
  flex-direction: column;
  
}
header {
  margin-top: 8rem;
  font-family: Raleway;
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 4rem;
  margin-left: 10rem;
}
ul {
  width: 109.7rem;
  margin: 5.9rem 0 3rem 10rem;
  position: relative;
  display: flex;
  flex-direction: column;
}
li {
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
    min-height: 18.5rem;
    .item {
        &__img{
          width: 14.1rem;
          display: flex;
          align-items:center;
            img{
                object-fit: contain;
            }
        }
        &__counters{
          display: flex;
          min-height: 18.5rem;
          &-container{
            display: flex;
            align-items: center;
          }
          margin-right: 1.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
            &-count{
              font-weight: 500;
              font-size: 2.4rem;
              text-align: center;
            }
            &-op{
              cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 4.5rem;
                height: 4.5rem;
                border: 1px solid  #1D1F22;
               
            }
        }
      &__brand {
        font-weight: 600;
        height: 2.7rem;
      }
      &__name {
        margin-top: 1.6rem;
        font-weight: normal;
      }
      &__price {
        margin-top: 2.6rem;
        font-weight: bold;
        font-size: 2.4rem;
        line-height: 1.8rem;
      }
      &__att {
        margin-top: 2.6rem;
        display: flex;
        &-boxes {
          width: 6.3rem;
          height: 4.5rem;
          border: 1px solid #1d1f22;
          margin: 0.8rem 1.2rem 0 0;
          &-colored{
              display: block;
          }
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
    }
  }
`;
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const currentCcy = useSelector((state) => state.ccy);
  const dispatch = useDispatch();

  /* console.log(cartItems); */
  return (
    <ContainerStyles>
      <header>CART</header>
      {cartItems.length === 0 ? (
        <h5 className="emptyCart">
          There is no items in your cart yet!, go and grap some!
        </h5>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="lists-container">
                <div className="item__brand">{item.brand}</div>
                <div className="item__name">{item.name}</div>
                <div className="item__price">
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
                    <div key={att.id} className="item__att">
                      {att.type === 'swatch'
                        ? att.items.map((item) => (
                            <div
                              key={item.id}
                              style={{
                                backgroundColor: `${item.value}`,
                              }}
                              className="item__att-boxes item__att-boxes-colored"
                            ></div>
                          ))
                        : att.items.map((item) => (
                            <>
                              <span key={item.id} className="item__att-boxes">
                                <p>{item.displayValue}</p>
                              </span>
                            </>
                          ))}
                    </div>
                  </>
                ))}
              </div>
              <div className="item__counters-container">
                <div className="item__counters">
                  <div
                    onClick={() => dispatch(addProduct(item))}
                    className="item__counters-op"
                  >
                    +
                  </div>
                  <div className="item__counters-count">{item.quantity}</div>
                  <div
                    onClick={() => dispatch(decrementProduct(item))}
                    className="item__counters-op"
                  >
                    -
                  </div>
                </div>
                <div className="item__img">
                  <img src={item.gallery[0]} alt={item.name} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </ContainerStyles>
  );
};

export default Cart;
