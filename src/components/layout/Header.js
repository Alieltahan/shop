import styled from 'styled-components';
import NavBar from './NavBar';

const HeaderContainer = styled.div`
  display: flex;
  height: 8rem;
  width: 100%;
  border-radius: 0px;
  justify-content: space-between;
  align-items: center;
  /* --c-white */
  background: var(--c-white);
  position: relative;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
