import { combineReducers } from 'redux';

import cartReducer from './example/reducer';

export default combineReducers({
  cart: cartReducer,
});
