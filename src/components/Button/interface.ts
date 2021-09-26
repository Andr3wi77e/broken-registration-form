import { MergeElementProps } from '@components/utils';
import { ReactNode, ReactText } from 'react';

export interface IButton {
  children: ReactNode | ReactText;
  color?: string;
  textColor?: string;
}

export type Props<P extends React.ElementType = 'button'> = {
  component?: P;
} & MergeElementProps<P, IButton>;
