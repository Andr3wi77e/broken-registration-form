import React from 'react';
import { IBreakFormCheckbox } from './interface';
import Button from '@components/Button';

const BreakFormCheckbox = ({
  isBroken,
  onChangeIsBroken
}: IBreakFormCheckbox) => {
  return (
    <Button
      isBroken={false}
      onClick={() => {
        onChangeIsBroken();
      }}
      color={!isBroken ? '#EB5757' : '#219653'}
    >
      {!isBroken ? 'Сломать' : 'Починить'}
    </Button>
  );
};

export default BreakFormCheckbox;
