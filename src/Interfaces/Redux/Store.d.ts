import { Props } from 'react';

import {
    IHomePage,
    ISearchPage,
    IStorePage,
    IStoresPage,
    IEntity
} from '@Interfaces';

export type IStore = {
    home: IHomePage.IStateProps,
    search: ISearchPage.IStateProps,
    store: IStorePage.IStateProps,
    stores: IStoresPage.IStateProps,
    entities: IEntity.IStateProps,
}