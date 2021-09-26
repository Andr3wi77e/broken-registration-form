import React from 'react';
import { IGroupInputItems } from './interface';
import styled from 'styled-components';
import Flex from '@components/Flex';
import InputGroupItem from '@components/FormComponents/InputGroupItem';

const Container = styled(Flex).attrs(() => ({ direction: 'column' }))``;

const GroupInputItems = ({
  name,
  values,
  type,
  isBroken
}: IGroupInputItems) => {
  return (
    <Container>
      {values.map(({ label, value, name: vName = name, id, ...rest }) => (
        <InputGroupItem
          isBroken={Boolean(isBroken)}
          label={label}
          /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
          name={vName!}
          value={value}
          key={id}
          id={id}
          type={type}
          {...rest}
        />
      ))}
    </Container>
  );
};

export default GroupInputItems;
