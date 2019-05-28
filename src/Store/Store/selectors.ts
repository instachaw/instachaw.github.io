import { denormalize } from 'normalizr';

import { IStore } from '@Interfaces/Redux/Store';
import { createSelector } from 'reselect';
import { getEntities } from '@Store/App/selectors'
import { storeSchema } from '@Store/schema'

export const getStores = createSelector([ getEntities ], (entities:any) => denormalize(
    Object.keys(entities.stores),
    [ storeSchema ],
    entities
  )
)

export const getStore = (id:number) => createSelector([ getEntities ], (entities:any) => entities.stores[id])

export const getStoreProducts = (storeId:number) => createSelector([ getEntities ], (entities:any) => {
  if (!('items' in entities)) return [];

  const { items } = entities;

  return Object
          .keys(items)
          .filter((item:string) => parseInt(items[item].store_id) === storeId)
          .map((item:string) => items[item])
})

export const getIsFetchingStores = (state:IStore):boolean => state.store.isFetchingStores;

export const getIsFetchingStoreProducts = (state:IStore):boolean => state.store.isFetchingStoreProducts;