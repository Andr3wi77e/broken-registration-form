import { createContext } from 'react';

export interface IBreakFormContext {
  isBroken: boolean;
  onChangeIsBroken: (condition?: boolean) => void;
}

const BreakFormContext = createContext<IBreakFormContext>({
  isBroken: true,
  onChangeIsBroken: () => null
});

export default BreakFormContext;
