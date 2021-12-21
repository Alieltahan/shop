import { useQuery } from '@apollo/client';
import { Routes, Route } from 'react-router';
import { QUERY_CATEGORIES } from '../http/graphql';
import Header from './Header';
import CartPage from './pages/CartPage';
import PDP from './pages/PDP';
import PLP from './pages/PLP';
import SpecificCategory from './pages/SpecificCategory';

const Main = () => {
  // Getting All The Categories Dynamically (For Scalability in the Future)
  const { data } = useQuery(QUERY_CATEGORIES);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product/:id" element={<PDP />} />
        {data?.categories.map((category) => (
          <Route
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
