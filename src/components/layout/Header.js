import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import NavBar from './NavBar';

const HeaderContainer = styled.div`
  position: absolute;
  height: 8rem;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  /* --c-white */
  background: var(--c-white);
`;

const Header = () => {
  // TODO for Each Data...
  return (
    <HeaderContainer>
      <NavBar />
      {/* {dataCurrencies?.currencies.map((c) => (
        <div>{c}</div>
      ))} */}
    </HeaderContainer>
  );
};

export default Header;
