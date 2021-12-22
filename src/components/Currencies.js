import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import arrow from '../media/svg/arrow.svg';
import { updateCcy } from './store/currency';

// Currency & Arrow Wrapper
const WrapperCcyArrowStyle = styled.div`
  position: static;
  width: 3.8rem;
  height: 2.9rem;
  left: 12.4rem;
  top: 0.55rem;
  cursor: pointer;
  & > img {
    transition: all 0.3s;
    &.rotate {
      transform: rotate(180deg);
    }
  }
`;
// Space box on the left side of the Wrapper
const SpaceStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 4rem;
  height: 4rem;
`;
// CCy Symbol Frame
const SymbolFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0 1rem;
  position: absolute;
  width: 3.2rem;
  height: 2.9rem;
  left: 12.4rem;
  top: 0.55rem;
`;
// TODO Add Font
const CcyStyle = styled.span`
  z-index: 10;

  span {
    /* TODO Add Font */
    font-family: Raleway;
    font-style: normal;
    weight: 500;
    font-size: 1.8rem;
    line-height: 160%;
    color: var(--c-black);
    display: flex;
    align-items: flex-end;
  }
  img {
    position: absolute;
    width: 0.6rem;
    height: 0.3rem;
    left: 15.6rem;
    bottom: 1.6rem;
  }
`;
const CcySwitcherStyle = styled.ul`
  background-color: var(--c-white);
  position: absolute;
  list-style: none;
  top: 4rem;
  right: -1.8rem;
  display: grid;
  width: 11.4rem;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 8px;
  /* height: max-content; */
  /* To Enable Transition has to identify the height */
  /* TODO Edit if new ccy implemented (current 5 Ccys) */
  height: 22.7rem;
  transition: all 0.3s;
  &.collapse {
    height: 0;
    visibility: none;
    overflow: hidden;
  }
  li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: end;
    position: static;
    left: 0;
    top: 0;
    width: 5.4rem;
    height: 2.9rem;
    text-align: right;
    margin: 1.05rem 4rem 0rem 2rem;
    &:first-of-type {
      margin-top: 2rem;
    }
    &:last-of-type {
      margin-bottom: 2rem;
    }
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
  /* For Scability, Just add className with Currency Symbol & Add It To The CONST Symbol */
  .AUD:before {
    content: 'A$';
    padding-right: 0.5rem;
  }
`;
// For Scability... Just Add the New Ccy Symbol Here..
const Symbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  RUB: '₽',
  JPY: '¥',
  AUD: 'A$',
};

const Currencies = ({ ccy }) => {
  const [showCcy, setShowCcy] = useState(false);
  const CurrentCcy = useSelector((state) => state.ccy.currency);
  const dispatch = useDispatch();
  // For Un/Collapse Ccy list By Adding/Removing Class
  const ccy_list = showCcy ? '' : 'collapse';

  // Handling Ccy Change
  const handleCcyChange = (cc) => {
    dispatch(updateCcy({ currency: `${cc}` }));
  };

  return (
    <CcyStyle onClick={() => setShowCcy(!showCcy)}>
      <WrapperCcyArrowStyle>
        <SymbolFrame>
          <span>{Symbols[CurrentCcy]}</span>
        </SymbolFrame>
        <img
          className={showCcy ? 'rotate' : ''}
          alt="currency expand"
          src={arrow}
        ></img>
        <SpaceStyle />
        <CcySwitcherStyle className={ccy_list}>
          {ccy?.map((cc) => (
            <li
              onClick={(cc) => handleCcyChange(cc.target.className)}
              className={cc}
              key={cc}
            >
              {cc}
            </li>
          ))}
        </CcySwitcherStyle>
      </WrapperCcyArrowStyle>
    </CcyStyle>
  );
};

export default Currencies;
