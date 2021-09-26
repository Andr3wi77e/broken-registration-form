import { useContext } from 'react';
import BreakFormContext from './BreakFormContext';

const useBreakFormContext = () => {
  return useContext(BreakFormContext);
};

export default useBreakFormContext;
