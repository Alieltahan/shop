import { Routes, Route } from 'react-router';
import Header from './Header';
import PDP from './pages/PDP';
import PLP from './pages/PLP';

const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/product" element={<PDP />} />
        <Route exact path="/" element={<PLP />} />
      </Routes>
    </>
  );
};

export default Main;
