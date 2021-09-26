import { MergeElementProps } from '@components/utils';
import { ReactNode, ReactText } from 'react';
import { IsBroken } from '@resources_types/brokenFormTypes';

export interface IButton extends IsBroken {
  children: ReactNode | ReactText;
  color?: string;
  textColor?: string;
}

export type Props<P extends React.ElementType = 'button'> = {
  component?: P;
} & MergeElementProps<P, IButton>;
