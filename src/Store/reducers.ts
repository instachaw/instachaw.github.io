import { combineReducers } from 'redux';

import { HomeReducer } from './Home/reducer';
import { SearchReducer } from './Search/reducer';
import { StoreReducer } from './Store/reducer';
import { EntityReducer } from './Entity/reducer';

export const initialState = {
  home: HomeReducer,
  entities: EntityReducer,
  search: SearchReducer,
  store: StoreReducer
};

export default combineReducers(initialState);