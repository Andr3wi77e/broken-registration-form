import React from 'react';
import { IButton, Props } from './interface';
import styled from 'styled-components';
import { shouldForwardProp, throwProp } from '@styledUtils';

const SButton = styled.button.withConfig({
  shouldForwardProp: shouldForwardProp(['color', 'textColor'])
})<IButton>`
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${throwProp('color')};
  color: ${throwProp('textColor')};
  border: none;
  cursor: pointer;
  height: 36px;
  padding: 8px 16px;
  font-size: 14px;
`;

const Button = <P extends React.ElementType = 'button'>({
  children,
  color = '#7DB7EE',
  textColor = '#fff',
  ...rest
}: Props<P>) => (
  <SButton color={color} textColor={textColor} {...rest}>
    {children}
  </SButton>
);

export default Button;
