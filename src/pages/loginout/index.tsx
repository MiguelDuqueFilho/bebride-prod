import { useState } from 'react';
import { signIn } from 'next-auth/client';

import { Form, Formik, Field } from 'formik';
import * as yup from 'yup';
import { Box, InputBase } from '@material-ui/core';

import LayoutSite from '../../components/LayoutSite';
import { useStyles } from '../../styles/loginout/styles';

import {
  FaUser,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaEnvelope
} from 'react-icons/fa';

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

export default function LogInOut() {
  const classes = useStyles();

  const [mode, setMode] = useState('');

  const handleClickRegister = () => {
    setMode('sign-up-mode');
  };

  const handleClickLogin = () => {
    setMode('');
  };

  function onSubmitSignIn(values: ValuesLogin) {
    signIn('credentials', values);
  }

  async function onSubmitSignUp(values: ValuesRegister) {
    signIn('credentials', values);
  }

  function onFacebookSignIn() {
    signIn('facebook');
  }

  function onTwitterSignIn() {
    signIn('twitter');
  }

  function onGoogleSignIn() {
    signIn('google');
  }

  return (
    <LayoutSite>
      <Box className={`${classes.container} ${mode}`}>
        <Box className={classes.formContainer}>
          <Box className={`${classes.signinSignUp} ${mode}`}>
            <Formik
              initialValues={initialValuesLogin}
              validationSchema={validationLogin}
              onSubmit={values => {
                onSubmitSignIn(values);
              }}
            >
              {({ values, errors, touched }) => (
                <Form
                  className={`${classes.form} ${classes.formSignin} ${mode}`}
                >
                  <h2 className={classes.title}>Login</h2>
                  <Field
                    type="hidden"
                    name="isNewUser"
                    value={false}
                    className={classes.input}
                  />
                  <Box className={classes.inputField}>
                    <i className={classes.containerIcon}>
                      <FaEnvelope />
                    </i>
                    <Field
                      name="userEmail"
                      type="email"
                      as={InputBase}
                      label="E-mail"
                      placeholder="E-mail"
                      className={classes.input}
                    />
                  </Box>
                  <Box className={classes.inputErrors}>
                    {touched.userEmail && errors.userEmail && errors.userEmail}
                  </Box>
                  <Box className={classes.inputField}>
                    <i className={classes.containerIcon}>
                      <FaLock />
                    </i>
                    <Field
                      name="password"
                      type="password"
                      as={InputBase}
                      label="Senha"
                      placeholder="Senha"
                      className={classes.input}
                    />
                  </Box>
                  <Box className={classes.inputErrors}>
                    {touched.password && errors.password && errors.password}
                  </Box>
                  <button
                    type="submit"
                    className={`${classes.button} btn solid`}
                  >
                    Login
                  </button>
                  <p className={classes.socialText}>
                    ou Login com plataforma de mídia social
                  </p>
                  <p className={classes.socialMedia}>
                    <i
                      onClick={onFacebookSignIn}
                      className={classes.socialMedia}
                    >
                      <FaFacebook className={classes.socialIcon} />
                    </i>
                    <i
                      onClick={onTwitterSignIn}
                      className={classes.socialMedia}
                    >
                      <FaTwitter className={classes.socialIcon} />
                    </i>
                    <i onClick={onGoogleSignIn} className={classes.socialMedia}>
                      <FaGoogle className={classes.socialIcon} />
                    </i>
                  </p>
                  {/* <pre>{JSON.stringify(errors, null, 4)}</pre> */}
                  {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
                </Form>
              )}
            </Formik>
            <Formik
              initialValues={initialValuesRegister}
              validationSchema={validationRegister}
              onSubmit={values => {
                onSubmitSignUp(values);
              }}
            >
              {({ values, errors, touched }) => (
                <Form
                  className={`${classes.form} ${classes.formSignup} ${mode}`}
                >
                  <h2 className={classes.title}>Registrar</h2>
                  <Field
                    type="hidden"
                    name="isNewUser"
                    value={false}
                    className={classes.input}
                  />
                  <Box className={classes.inputField}>
                    <i className={classes.containerIcon}>
                      <FaUser />
                    </i>
                    <Field
                      name="userName"
                      type="text"
                      as={InputBase}
                      label="Usuário"
                      placeholder="Usuário"
                      className={classes.input}
                    />
                  </Box>
                  <Box className={classes.inputErrors}>
                    {touched.userName && errors.userName && errors.userName}
                  </Box>
                  <Box className={classes.inputField}>
                    <i className={classes.containerIcon}>
                      <FaEnvelope />
                    </i>
                    <Field
                      name="userEmail"
                      type="email"
                      as={InputBase}
                      label="E-mail"
                      placeholder="E-mail"
                      className={classes.input}
                    />
                  </Box>
                  <Box className={classes.inputErrors}>
                    {touched.userEmail && errors.userEmail && errors.userEmail}
                  </Box>
                  <Box className={classes.inputField}>
                    <i className={classes.containerIcon}>
                      <FaLock />
                    </i>
                    <Field
                      name="password"
                      type="password"
                      as={InputBase}
                      label="Senha"
                      placeholder="Senha"
                      className={classes.input}
                    />
                  </Box>
                  <Box className={classes.inputErrors}>
                    {touched.password && errors.password && errors.password}
                  </Box>
                  <input
                    type="submit"
                    value="SignUp"
                    className={`${classes.button} btn`}
                  />
                  {/* {<pre>{JSON.stringify(errors, null, 4)}</pre>}
                  {<pre>{JSON.stringify(values, null, 4)}</pre>} */}
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
        <Box className={classes.panelsContainer}>
          <Box
            className={`panel left-panel ${classes.panel}  ${classes.panelLeft} ${mode}`}
          >
            <Box
              className={`content ${classes.panelContent} ${classes.panelContentLeft} ${mode}`}
            >
              <h3>Novo aqui?</h3>
              <p>Click para se registrar. Vamos Juntas.</p>
              <button
                type="button"
                className={` ${classes.button} ${classes.btnTransparent}`}
                onClick={handleClickRegister}
              >
                registrar
              </button>
            </Box>
            <img
              className={`${classes.imageLeft} ${mode}`}
              src="/images/wedding.svg"
              // layout="intrinsic"
              width={250}
              height={250}
            />
          </Box>
          <Box
            className={`panel right-panel ${classes.panel} ${classes.panelRight} ${mode}`}
          >
            <Box
              className={`content ${classes.panelContent} ${classes.panelContentRight} ${mode}`}
            >
              <h3>Um de nós?</h3>
              <p>O login terá um tempo de 30 minutos de inatividade.</p>
              <button
                type="button"
                className={`${classes.button} ${classes.btnTransparent}`}
                onClick={handleClickLogin}
              >
                Login
              </button>
            </Box>
            <img
              className={`${classes.imageRight} ${mode}`}
              src="/images/login.svg"
              // layout="intrinsic"
              width={250}
              height={250}
            />
          </Box>
        </Box>
      </Box>
    </LayoutSite>
  );
}
