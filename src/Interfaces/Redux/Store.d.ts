import { Props } from 'react';

import {
    IHomePage,
    IStorePage
} from '@Interfaces';

export type IStore = {
    home: IHomePage.IStateProps,
    store: IStorePage.IStateProps
}