import { Props } from 'react';

import {
    IHomePage,
    IStoresPage
} from '@Interfaces';

export type IStore = {
    home: IHomePage.IStateProps,
    stores: IStoresPage.IStateProps
}