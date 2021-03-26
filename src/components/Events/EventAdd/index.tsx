import { useState } from 'react';
import { signIn } from 'next-auth/client';

import { Form, Formik, Field } from 'formik';
import * as yup from 'yup';
import { Box, InputBase } from '@material-ui/core';

import { useStyles } from './styles';
import { FaLock, FaEnvelope } from 'react-icons/fa';

interface ValuesLogin {
  userEmail: string;
  password: string;
  isNewUser: boolean;
}

const initialValuesLogin: ValuesLogin = {
  userEmail: '',
  password: '',
  isNewUser: false
};

const validationLogin = yup.object({
  userEmail: yup
    .string()
    .email('Entre com um E-mail válido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(8, 'Senha deve ter no minimo 8 caracteres de tamanho')
    .required('Senha é obrigatória')
});

interface ValuesRegister {
  userName: String;
  userEmail: string;
  password: string;
  isNewUser: boolean;
}

const initialValuesRegister: ValuesRegister = {
  userName: '',
  userEmail: '',
  password: '',
  isNewUser: true
};

const validationRegister = yup.object({
  userName: yup.string().required('Nome é obrigatório'),
  userEmail: yup
    .string()
    .email('Entre com um E-mail válido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(8, 'Senha deve ter no minimo 8 caracteres de tamanho')
    .required('Senha é obrigatória')
});

export default function LogIn() {
  const classes = useStyles();

  function onHandleSubmit(values: ValuesLogin) {
    console.log(values);
  }

  return (
    <Box>
      <Formik
        initialValues={initialValuesLogin}
        validationSchema={validationLogin}
        onSubmit={values => {
          onHandleSubmit(values);
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <h2>Login</h2>
            <Field type="hidden" name="isNewUser" value={false} />
            <Box>
              <i>
                <FaEnvelope />
              </i>
              <Field
                name="userEmail"
                type="email"
                as={InputBase}
                label="E-mail"
                placeholder="E-mail"
              />
            </Box>
            <Box>
              {touched.userEmail && errors.userEmail && errors.userEmail}
            </Box>
            <Box>
              <i>
                <FaLock />
              </i>
              <Field
                name="password"
                type="password"
                as={InputBase}
                label="Senha"
                placeholder="Senha"
              />
            </Box>
            <Box>{touched.password && errors.password && errors.password}</Box>
            <button type="submit">Login</button>

            <pre>{JSON.stringify(errors, null, 4)}</pre>
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
