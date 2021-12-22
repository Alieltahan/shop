import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Cart from './Cart';

const Container = styled.div`
  padding: 0 1.6rem; 0 1.6rem;
  max-width: 32.5rem;
  height: auto;
  max-height: 54rem;
  background-color: #FFFFFF;
  position: absolute;
  top: 5.583rem;
  right: 0rem;
  z-index: 5;
  header {
    margin: 0.8rem auto 0 1.6rem;
    font-size: 1.6rem;
    line-height: 2.56rem;
    font-family: Raleway;
    font-weight: 500;
    > span {
      font-weight: 700;
    }
  }
`;
const MiniCart = () => {
  const storeCart = useSelector((state) => state.cart);
  let TotalProducts = storeCart.totalCount;
  return (
    <div className="miniCart">
      {storeCart.miniCartToggle && (
        <Container>
          <header>
            <span>My Bag</span>, {TotalProducts} item{TotalProducts > 1 && 's'}
          </header>
          {/* default option is true */}
          <Cart mini />
        </Container>
      )}
    </div>
  );
};

export default MiniCart;
