import styled from 'styled-components';
import Flex from '@components/Flex';
import Text from '@components/Text';
import Input from '@components/Input';
import Button from '@components/Button';
import Form from '@components/Form';

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

export const Title = styled(Text).attrs(() => ({ size: 20, role: 'h6' }))``;

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
