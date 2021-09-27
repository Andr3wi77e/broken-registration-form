import React from 'react';
import {
  Container,
  Title,
  FieldsContainer,
  Field,
  SubmitButton,
  SForm
} from './Registration.styled';
import GroupInputItems from '@components/FormComponents/GroupInputItems';
import { InputGroupItemValue } from '@components/FormComponents/GroupInputItems/interface';
import useBreakFormContext from '@contexts/BreakFormContext';

const radioGroupValues: InputGroupItemValue[] = [
  { id: 'male', value: 'male', label: 'male' },
  { id: 'female', value: 'female', label: 'female' }
];

const brokenRadioGroupValues: InputGroupItemValue[] = radioGroupValues.map(
  item => ({ ...item, name: 'gender' })
);

const Registration = () => {
  const { isBroken } = useBreakFormContext();
  const fields = [
    { key: 'name', placeholder: 'Имя' },
    { key: 'surname', placeholder: 'Фамилия' },
    { key: 'email', placeholder: 'E-mail' },
    { key: 'password', placeholder: 'пароль', type: 'password' }
  ];

  const onSubmit = (e: any) => {
    e.preventDefault();
    const { name, surname, email, password, gender } = e.target.elements;
    console.log({
      name: name.value,
      surname: surname.value,
      email: email.value,
      password: password.value,
      gender: gender.value
    });
  };

  return (
    <Container>
      <Title isBroken={isBroken}>Страница регистрации</Title>
      <SForm onSubmit={onSubmit}>
        <FieldsContainer>
          {fields.map(({ key, placeholder, type = 'text' }) => (
            <Field
              key={key}
              name={key}
              type={type}
              placeholder={placeholder}
              isBroken={isBroken}
            />
          ))}
        </FieldsContainer>
        <GroupInputItems
          name='gender'
          values={isBroken ? brokenRadioGroupValues : radioGroupValues}
          type={isBroken ? 'checkbox' : 'radio'}
          isBroken={isBroken}
        />
        <SubmitButton type='submit' isBroken={isBroken}>
          Отправить
        </SubmitButton>
      </SForm>
    </Container>
  );
};

export default Registration;
