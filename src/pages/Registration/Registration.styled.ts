import styled from 'styled-components';
import Flex from '@components/Flex';
import Text from '@components/Text';
import Input from '@components/Input';
import Button from '@components/Button';
import Form from '@components/FormComponents/Form';
import {
  brokenTransformScale,
  brokenTransformSkew
} from '@helpers/brokenStyles';
import { shouldForwardProp } from '@styledUtils';
import { IsBroken } from '@resources_types/brokenFormTypes';

export const Container = styled(Flex).attrs(() => ({
  direction: 'column',
  grow: 1,
  alignItems: 'center',
  justify: 'center',
  role: 'header' // семантика
}))`
  width: 100%;
  height: 100vh;
`;

export const Title = styled(Text)
  .withConfig({ shouldForwardProp: shouldForwardProp(['isBroken']) })
  .attrs(({ isBroken }: IsBroken) => ({
    size: 20,
    role: 'h6',
    as: isBroken ? 'table' : undefined
  }))<IsBroken>`
  ${brokenTransformScale};
  ${brokenTransformSkew};
`;

export const FieldsContainer = styled(Flex).attrs(() => ({
  direction: 'column',
  justify: 'center'
}))``;

export const Field = styled(Input)`
  margin: 10px 0 0;
`;

export const SubmitButton = styled(Button)`
  margin: 10px;
`;

export const SForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
