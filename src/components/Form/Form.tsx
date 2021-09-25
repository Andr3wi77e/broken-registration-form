import React from 'react';
import { IForm } from './interface';

const Form = ({ children }: IForm) => {
  return <table>{children}</table>;
};

export default Form;
