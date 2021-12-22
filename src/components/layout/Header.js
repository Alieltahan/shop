import styled from 'styled-components';
import NavBar from '../NavBar';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  height: 8rem;
  width: 100%;
  border-radius: 0px;
  justify-content: space-between;
  align-items: center;
  /* --c-white */
  background: var(--c-white);
  z-index: 4;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
