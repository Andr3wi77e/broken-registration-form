import { ICommonProps, MergeElementProps } from '../utils';
import { ReactNode } from 'react';

export type FlexDirection = 'row' | 'column';
export type FlexAlignItems = 'center' | 'flex-end' | 'flex-start' | 'stretch';
export type FlexJustify =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'flex-end';
export type FlexWrap = 'nowrap' | 'wrap';

export interface FlexProps extends ICommonProps {
  inline?: boolean;
  wrap?: FlexWrap;
  direction?: FlexDirection;
  alignItems?: FlexAlignItems;
  justify?: FlexJustify;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  grow?: number;
}

export type Props<P extends React.ElementType = 'div'> = {
  component?: P;
} & MergeElementProps<P, FlexProps>;
