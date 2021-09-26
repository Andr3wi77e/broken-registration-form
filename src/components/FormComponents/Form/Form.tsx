import React from 'react';
import { Props } from './interface';

const Form = <P extends React.ElementType = 'form'>({
  children,
  ...rest
}: Props<P>) => {
  return <form {...rest}>{children}</form>;
};

export default Form;
