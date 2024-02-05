import { ITab } from './entities';
import { ISerializableError } from '../api/api';

export interface ITabsState {
  data: ITab[] | null;
  loading: boolean;
  error: ISerializableError | null;
}

/*---------------------------------------*/
