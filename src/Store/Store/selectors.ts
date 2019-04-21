import { IStorePage } from '@Interfaces';

export const getStores = (state:IStorePage.IStateProps) => state.stores;
export const getIsFetchingStores = (state:IStorePage.IStateProps):boolean => state.isFetchingStores;