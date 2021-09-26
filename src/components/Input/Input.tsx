import React from 'react';
import { IInput } from './interface';
import styled from 'styled-components';

const SInput = styled.input`
  height: 36px;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
`;

const Input = ({ ...rest }: IInput) => (
  <label>
    <SInput {...rest} />
  </label>
);

export default Input;
