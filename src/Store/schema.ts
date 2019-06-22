import { schema } from 'normalizr';

export const productSchema = new schema.Entity('items');
export const storeSchema = new schema.Entity('stores');
export const searchSchema = new schema.Entity('searchResults', {
  store: storeSchema
});
