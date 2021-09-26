import { ICommonProps } from '@components/utils';
import { ReactText } from 'react';
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type InputType =
  | 'login'
  | 'password'
  | 'text'
  | 'number'
  | 'file'
  | 'email'
  | string;

export interface IInput extends ICommonProps {
  onChange?: (e: InputChangeEvent) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: ReactText;
  type?: InputType;
  placeholder?: string;
  fullWidth?: boolean;
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  color?: string;
  multiline?: boolean;
  defaultValue?: any;
  autoComplete?: string;
  name?: string;
}
