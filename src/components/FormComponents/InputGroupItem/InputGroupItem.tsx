import React from 'react';
import { Props } from './interface';
import styled from 'styled-components';
import { shouldForwardProp } from '@styledUtils';
import { IsBroken } from '@resources_types/brokenFormTypes';
import { brokenIndent } from '@helpers/brokenStyles';

const Label = styled.label`
  height: 36px;
  display: inline-flex;
  align-items: center;
  color: black;
  font-family: 'Roboto', sans-serif;
`;

const Input = styled.input.withConfig<IsBroken>({
  shouldForwardProp: shouldForwardProp(['isBroken'])
})`
  margin: 5px;
  ${brokenIndent};
`;

const InputGroupItem = <P extends React.ElementType = 'input'>({
  value,
  label,
  name,
  id,
  isBroken,
  ...rest
}: Props<P>) => {
  return (
    <Label htmlFor={id}>
      <Input
        type='radio'
        value={value}
        name={name}
        id={id}
        {...rest}
        isBroken={isBroken}
      />
      {label}
    </Label>
  );
};

export default InputGroupItem;
