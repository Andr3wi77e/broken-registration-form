import React from 'react';
import { TextProps, Props } from './interface';
import styled from 'styled-components';
import { shouldForwardProp } from '@styledUtils';

const SText = styled.span.withConfig({
  shouldForwardProp: shouldForwardProp(['color', 'size', 'lineHeight', 'bold'])
})<TextProps>`
  font-size: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
  line-height: ${({ lineHeight }) =>
    typeof lineHeight === 'number' ? `${lineHeight}px` : lineHeight};
  color: ${({ color }) => (color === 'inherit' ? 'inherit' : color)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-family: 'Roboto', sans-serif;
`;

const Text = <P extends React.ElementType = 'span'>({
  children,
  color = '#000',
  size = 18,
  lineHeight = 'normal',
  ...rest
}: Props<P>) => (
  <SText color={color} size={size} lineHeight={lineHeight} {...rest}>
    {children}
  </SText>
);

export default Text;
