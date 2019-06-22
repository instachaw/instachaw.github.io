import { ISearchPage, IStorePage } from '@Interfaces';
import { GenericList } from './GenericList';

export class SearchResultsList extends GenericList<ISearchPage.ISearchResultData> {}
export class StoresList extends GenericList<IStorePage.IStoreData> {}
export class StoresSkeletonList extends GenericList<string> {}
export class StoreProductsList extends GenericList<IStorePage.IStoreProductData> {}
