import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { QUERY_CATEGORIES, QUERY_CURRENCIES } from '../http/graphql';

const HeaderStyles = styled.div`
  /* * Navigation */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1.1rem;
  margin-top: 2.4rem;

  position: absolute;
  width: 234px;
  height: 8rem;
  left: 101px;
  bottom: 0px;
`;

const HeaderCategoryStyles = styled.div`
  text-transform: uppercase;
  padding: 1.6rem;
  margin-bottom: 2px;
  height: 100%;
  font-size: 1.6rem;
  font-weight: 600;
`;

const NavBar = () => {
  const { data: dataCurrencies, loading: ccyLoading } =
    useQuery(QUERY_CURRENCIES);
  const { data: dataCategories, loading: catLoading } =
    useQuery(QUERY_CATEGORIES);
  return (
    <HeaderStyles>
      {/* <nav> */}
      {dataCategories?.categories?.map((cat) => (
        <NavLink key={cat.name} to={cat.name}>
          <HeaderCategoryStyles>{cat.name}</HeaderCategoryStyles>
        </NavLink>
      ))}
      {/* </nav> */}
    </HeaderStyles>
  );
};

export default NavBar;
