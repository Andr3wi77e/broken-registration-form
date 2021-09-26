import {
  IInputGroupItem,
  InputGroupItem
} from '@components/FormComponents/InputGroupItem/interface';
import { IsBroken } from '@resources_types/brokenFormTypes';

export interface IGroupInputItems extends IsBroken {
  name?: string;
  values: InputGroupItemValue[];
  type: InputGroupItem;
}

export type InputGroupItemValue = Omit<
  IInputGroupItem,
  'name' | 'type' | 'isBroken'
> & {
  name?: string;
  isBroken?: boolean;
};
