import { MergeElementProps } from '@components/utils';
import { ReactText } from 'react';
import { IsBroken } from '@resources_types/brokenFormTypes';

export interface IInputGroupItem extends IsBroken {
  color?: string;
  textColor?: string;
  label: string;
  name: string;
  value: ReactText;
  id: string;
  type: InputGroupItem;
}

export type Props<P extends React.ElementType = 'input'> = {
  component?: P;
} & MergeElementProps<P, IInputGroupItem>;

export type InputGroupItem = 'checkbox' | 'radio';
