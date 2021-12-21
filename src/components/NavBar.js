import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { QUERY_CATEGORIES, QUERY_CURRENCIES } from './http/graphql';
import logo from '../media/svg/logo.svg';
import cartLogo from '../media/svg/cart.svg';
import Currencies from './Currencies';
import { useNavigate } from 'react-router';

const HeaderStyles = styled.div`
  display: flex;
  margin-left: 10.1rem;
  height: 5.6rem;
  position: absolute;
  bottom: 0;
`;

const HeaderCategoryStyles = styled.div`
  text-transform: uppercase;
  padding: 1.6rem;
  margin-bottom: 2px;
  height: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;
`;

const LogoStyle = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  img {
    justify-content: center;
    width: 3.118rem;
    height: 2.862rem;
  }
`;
const CartCurrencyWrapper = styled.div`
  position: absolute;
  top: 2.3rem;
  right: 10.1rem;
  width: 20.4rem;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;
const CartStyle = styled.div`
  position: static;
  width: 2rem;
  height: 2rem;
  right: 0;
  top: calc(50% -20px / 2);
  img {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }
`;

const NavBar = () => {
  const { data: dataCurrencies, loading: ccyLoading } =
    useQuery(QUERY_CURRENCIES);
  const { data: dataCategories, loading: catLoading } =
    useQuery(QUERY_CATEGORIES);

  // TODO Remove
  const Navigate = useNavigate();
  const handleCartClicked = () => {
    Navigate('/cart');
  };
  return (
    <>
      {/* Logo - Center */}
      <LogoStyle>
        <img src={logo}></img>
      </LogoStyle>
      <CartCurrencyWrapper>
        {/* Curencies */}
        <Currencies ccy={dataCurrencies?.currencies} />
        {/* Cart */}
        <CartStyle>
          <img onClick={handleCartClicked} className="cart" src={cartLogo} />
        </CartStyle>
      </CartCurrencyWrapper>
      {/* Categories */}
      <HeaderStyles>
        {dataCategories?.categories?.map((cat) => (
          <NavLink key={cat?.name} to={cat?.name}>
            <HeaderCategoryStyles>{cat?.name}</HeaderCategoryStyles>
          </NavLink>
        ))}
      </HeaderStyles>
    </>
  );
};

export default NavBar;
