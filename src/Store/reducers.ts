import { combineReducers } from 'redux';

import { HomeReducer } from './Home/reducer';
import { StoreReducer } from './Store/reducer';

export default combineReducers({
  home: HomeReducer,
  store: StoreReducer
});