import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { QUERY_CATEGORIES, QUERY_CURRENCIES } from './http/graphql';
import logo from '../media/svg/logo.svg';
import cartLogo from '../media/svg/cart.svg';
import { Currencies } from './Currencies';
import { useDispatch, useSelector } from 'react-redux';
import { MiniCart } from './MiniCart';
import { miniCartToggle } from './store/cart';

const HeaderStyles = styled.div`
  display: flex;
  margin-left: 10.1rem;
  height: 8rem;
  position: absolute;
  bottom: 0;
  font-family: Raleway;
  @media only screen and (max-width: 50em) {
    margin-left: 2rem;
  }
`;

const HeaderCategoryStyles = styled.div`
  display: flex;
  align-items: center;
  font-family: inhert;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 120%;
  padding: 2.8rem 1.6rem 3.2rem 1.6rem;
  margin-bottom: 2px;
  height: 100%;
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
  @media only screen and (max-width: 50em) {
    display: none;
  }

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
  cursor: pointer;
  @media only screen and (max-width: 33.125em) {
    right: 2rem;
  }
  .count {
    position: absolute;
    top: 4.25%;
    right: -6.3%;
    color: #fff;
    width: 2rem;
    height: 2rem;
    border-radius: 6rem;
    background-color: #1d1f22;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CartStyle = styled.div`
  position: static;
  width: 2rem;
  height: 2rem;
  right: 0;
  top: calc(50% -20px / 2);
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const NavBar = () => {
  const { data: dataCurrencies } = useQuery(QUERY_CURRENCIES);
  const { data: dataCategories } = useQuery(QUERY_CATEGORIES);

  const dispatch = useDispatch();

  let { totalCount } = useSelector((state) => state.cart);
  const handleToggleCart = () => {
    dispatch(miniCartToggle());
  };

  let actvCategory = useSelector(
    (state) => state.activeCategory.activeCategory
  );
  return (
    <>
      {/* Logo - Center */}
      <LogoStyle>
        <img src={logo} alt="logo"></img>
      </LogoStyle>
      <CartCurrencyWrapper>
        {/* Curencies */}
        <Currencies ccy={dataCurrencies?.currencies} />
        {/* Cart */}
        <CartStyle onClick={handleToggleCart}>
          <img alt="cart logo" className="cart" src={cartLogo} />
          {totalCount ? <div className="count">{totalCount}</div> : ''}
        </CartStyle>
      </CartCurrencyWrapper>
      {/* Categories */}
      <HeaderStyles>
        <NavLink className={actvCategory === '' ? 'active' : null} to="/">
          <HeaderCategoryStyles>All</HeaderCategoryStyles>
        </NavLink>
        {dataCategories?.categories?.map((cat) => (
          <NavLink
            className={actvCategory === cat.name ? 'active' : ''}
            key={cat?.name}
            to={cat?.name}
          >
            <HeaderCategoryStyles>{cat?.name}</HeaderCategoryStyles>
          </NavLink>
        ))}
      </HeaderStyles>
      <MiniCart />
    </>
  );
};
