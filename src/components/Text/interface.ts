import { MergeElementProps } from '@components/utils';
import { ReactNode } from 'react';

export interface TextProps {
  color?: string;
  size?: number | string;
  lineHeight?: number | string;
  children?: ReactNode;
  bold?: boolean;
}

export type StyledTextProps = Omit<Props, 'component'>;

export type Props<P extends React.ElementType = 'span'> = {
  component?: P;
} & MergeElementProps<P, TextProps>;
