import React from 'react';
import { Props, FlexProps } from './interface';
import styled from 'styled-components';
import { shouldForwardProp, throwProp } from '@styledUtils';

const SFlex = styled.div.withConfig({
  shouldForwardProp: shouldForwardProp([
    'justify',
    'inline',
    'direction',
    'alignItems',
    'grow',
    'wrap'
  ])
})<FlexProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: ${throwProp('direction')};
  align-items: ${throwProp('alignItems')};
  justify-content: ${throwProp('justify')};
  flex-wrap: ${throwProp('wrap')};
  flex-grow: ${throwProp('grow')};
`;

const Flex = <P extends React.ElementType = 'div'>({
  children,
  ...rest
}: Props<P>) => <SFlex {...rest}>{children}</SFlex>;

export default Flex;
