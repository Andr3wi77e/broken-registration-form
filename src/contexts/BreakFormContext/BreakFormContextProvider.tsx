import React, { ReactNode, useState } from 'react';
import BreakFormContext from './BreakFormContext';
import Flex from '@components/Flex';
import BreakFormCheckbox from '@components/BreakFormCheckbox';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const BreakContainer = styled.div`
  position: absolute;
  height: 36px;
  z-index: 10;
`;

const BreakFormContextProvider = ({ children }: Props) => {
  const [isBroken, setIsBroken] = useState(true);

  const onChangeIsBroken = (condition?: boolean) => {
    if (condition !== undefined) {
      setIsBroken(condition);
    } else {
      setIsBroken(prevState => !prevState);
    }
  };

  return (
    <BreakFormContext.Provider value={{ isBroken, onChangeIsBroken }}>
      <Flex direction='column'>
        <BreakContainer>
          <BreakFormCheckbox
            isBroken={isBroken}
            onChangeIsBroken={onChangeIsBroken}
          />
        </BreakContainer>
        {children}
      </Flex>
    </BreakFormContext.Provider>
  );
};

export default BreakFormContextProvider;
