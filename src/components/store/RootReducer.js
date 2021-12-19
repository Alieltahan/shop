import ccy from './currency';
import cart from './cart';
import { combineReducers } from 'redux';

const appReducer = combineReducers({ ccy, cart });

export default appReducer;
