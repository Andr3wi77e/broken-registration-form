import { CSSProperties } from 'react';

export type MergeElementProps<
  T extends React.ElementType,
  P extends object = {}
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P;

export interface ICommonProps {
  style?: CSSProperties;
  className?: string;
}
