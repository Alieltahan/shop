import ccy from './currency';
import cart from './cart';
import activeCategory from './activeCategory';
import { combineReducers } from 'redux';

const appReducer = combineReducers({ ccy, cart, activeCategory });

export default appReducer;
