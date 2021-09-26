import { ReactNode } from 'react';
import { MergeElementProps } from '@components/utils';

export interface IForm {
  children: ReactNode;
}

export type Props<P extends React.ElementType = 'form'> = {
  component?: P;
} & MergeElementProps<P, IForm>;
