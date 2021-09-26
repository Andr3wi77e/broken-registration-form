import React from 'react';
import { IButton, Props } from './interface';
import styled from 'styled-components';
import { shouldForwardProp, throwProp } from '@styledUtils';
import { brokenIndent, brokenTransformRotate } from '@helpers/brokenStyles';

const SButton = styled.button.withConfig({
  shouldForwardProp: shouldForwardProp(['color', 'textColor', 'isBroken'])
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

  &:hover {
    opacity: 0.95;
  }
  &:active {
    opacity: 0.7;
  }
  transition: opacity ease-in 100ms;

  ${brokenIndent};
  ${brokenTransformRotate}
`;

const Button = <P extends React.ElementType = 'button'>({
  children,
  color = '#2F7FCF',
  textColor = '#fff',
  isBroken,
  ...rest
}: Props<P>) => (
  <SButton color={color} textColor={textColor} {...rest} isBroken={isBroken}>
    {children}
  </SButton>
);

export default Button;
