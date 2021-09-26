import React from 'react';
import {
  Container,
  Title,
  FieldsContainer,
  Field,
  SubmitButton,
  SForm
} from './Registration.styled';

const Registration = () => {
  const fields = [
    { key: 'name', placeholder: 'Имя' },
    { key: 'surname', placeholder: 'Фамилия' },
    { key: 'email', placeholder: 'E-mail' },
    { key: 'password', placeholder: 'пароль', type: 'password' }
  ];

  const onSubmit = (e: any) => {
    e.preventDefault();
    const { name, surname, email, password } = e.target.elements;
    console.log({
      name: name.value,
      surname: surname.value,
      email: email.value,
      password: password.value
    });
  };

  return (
    <Container>
      <Title>Страница регистрации</Title>
      <SForm onSubmit={onSubmit}>
        <FieldsContainer>
          {fields.map(({ key, placeholder, type = 'text' }) => (
            <Field key={key} name={key} type={type} placeholder={placeholder} />
          ))}
        </FieldsContainer>
        <SubmitButton type='submit'>Отправить</SubmitButton>
      </SForm>
    </Container>
  );
};

export default Registration;
