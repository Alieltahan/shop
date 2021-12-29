import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router';
import styled from 'styled-components';
import { QUERY_CATEGORIES } from '../http/graphql';
import { routeCategory } from '../store/activeCategory';
import { miniCartToggle } from '../store/cart';
import Header from './Header';
import CartPage from './pages/CartPage';
import PDP from './pages/PDP';
import PLP from './pages/PLP';
import SpecificCategory from './pages/SpecificCategory';

const Modal = styled.div`
  background-color: #ccc;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 4;
  opacity: 0.5;
`;
const Main = () => {
  const dispatch = useDispatch();
  const StoreCart = useSelector((state) => state.cart);
  const Location = useLocation().pathname;
  // Updating current Active Category when route Changes
  dispatch(routeCategory(Location));
  // Getting All The Categories Dynamically (For Scalability in the Future)
  const { data } = useQuery(QUERY_CATEGORIES);
  return (
    <>
      {StoreCart.miniCartToggle && (
        <Modal onClick={() => dispatch(miniCartToggle())} />
      )}
      <Header />
      <Routes>
        <Route path="/product/:id" element={<PDP />} />
        {data?.categories.map((category) => (
          <Route
            key={category.name}
            path={`/${category?.name}`}
            element={<SpecificCategory category={`${category?.name}`} />}
          />
        ))}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<PLP />} />
      </Routes>
    </>
  );
};

export default Main;
