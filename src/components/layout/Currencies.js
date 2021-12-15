import { useState } from 'react';
import styled from 'styled-components';
import arrow from '../../media/svg/arrow.svg';

const CcyStyle = styled.div`
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 13.1rem;
  span {
    margin-right: 2rem;
  }
  img {
    width: 1rem;
    height: 0.6rem;
    position: absolute;
    right: 0.5rem;
    top: 4rem;
  }
`;
const UListCcyStyles = styled.ul`
  position: absolute;
  list-style: none;
  top: 5rem;
  right: -2.5rem;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  &.collapse {
    height: 0;
  }
  li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 1.5rem;
  }
  .EUR:before {
    content: '\u20AC';
    padding-right: 0.5rem;
  }
  .USD:before {
    content: '\u0024';
    padding-right: 0.5rem;
  }
  .GBP:before {
    content: '£';
    padding-right: 0.5rem;
  }
  .RUB:before {
    content: '₽';
    padding-right: 0.5rem;
  }
  .JPY:before {
    content: '¥';
    padding-right: 0.5rem;
  }
  /* For Scability, Just add className with Currency Symbol */
  .AUD:before {
    content: 'A$';
    padding-right: 0.5rem;
  }
`;
const Symbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  RUB: '₽',
  JPY: '¥',
  AUD: 'A$',
};
const Currencies = ({ ccy }) => {
  const [currency, setCurrency] = useState('$');
  const [showCcy, setShowCcy] = useState(false);
  // For Un/Collapse Ccy list By Adding/Removing Class
  const ccy_list = showCcy ? '' : 'collapse';

  // Handling Ccy Symbol Change
  const handleCcyChange = (cc) => {
    const newCcy = Symbols[cc];
    setCurrency(newCcy);
    console.log(newCcy);
  };

  return (
    <CcyStyle onClick={() => setShowCcy(!showCcy)}>
      <span>{currency}</span>
      <img src={arrow}></img>
      <UListCcyStyles className={ccy_list}>
        {ccy?.map((cc) => (
          <li
            onClick={(cc) => handleCcyChange(cc.target.className)}
            className={cc}
            key={cc}
          >
            {cc}
          </li>
        ))}
      </UListCcyStyles>
    </CcyStyle>
  );
};

export default Currencies;
