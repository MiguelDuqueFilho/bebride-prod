import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/client';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import LayoutSite from '../../components/LayoutSite';
import { AppProps } from 'next/app';

import { useStyles } from './styles';

import {
  FaUser,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaEnvelope
} from 'react-icons/fa';

// export interface SignInResponse {
//   /** The reason for why the login process has stopped */
//   error: string | null;
//   /** @see https://developer.mozilla.org/en-US/docs/Web/API/Response/status */
//   status: number;
//   /** @see https://developer.mozilla.org/en-US/docs/Web/API/Response/ok */
//   ok: boolean;
// }

export default function LogInOut(props: AppProps) {
  const classes = useStyles();

  const [mode, setMode] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickRegister = () => {
    setMode('sign-up-mode');
  };

  const handleClickLogin = () => {
    setMode('');
  };

  async function onSubmitSignIn(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('credentials', { userEmail, password, isNewUser: false });
    // const response: SignInResponse = await signIn('credentials', {
    //   userEmail,
    //   password,
    //   isNewUser: false,
    //   redirect: false
    // });
    // console.log(response);
  }

  function onFacebookSignIn(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('facebook');
  }

  function onTwitterSignIn(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('twitter', { userEmail });
  }

  function onGoogleSignIn(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('google', { userEmail, isNewUser: false });
  }

  function onSubmitSignUp(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('credentials', { userName, userEmail, password, isNewUser: true });
  }

  function onFacebookSignUp(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('facebook');
  }

  function onTwitterSignUp(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('twitter', { userEmail, isNewUser: true });
  }

  function onGoogleSignUp(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('google', { userEmail, isNewUser: true });
  }

  return (
    <LayoutSite>
      <Box className={`${classes.container} ${mode}`}>
        <Box className={classes.formContainer}>
          <Box className={`${classes.signinSignUp} ${mode}`}>
            <form
              method="post"
              onSubmit={onSubmitSignIn}
              className={`${classes.form} ${classes.formSignin} ${mode}`}
            >
              <h2 className={classes.title}>Login</h2>
              {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
              <input
                type="hidden"
                name="isNewUser"
                value={0}
                className={classes.input}
              />
              <Box className={classes.inputField}>
                <i className={classes.containerIcon}>
                  <FaUser />
                </i>
                <input
                  className={classes.input}
                  name="userEmail"
                  type="email"
                  placeholder="Usuário"
                  onChange={e => setUserEmail(e.target.value)}
                />
              </Box>
              <Box className={classes.inputField}>
                <i className={classes.containerIcon}>
                  <FaLock />
                </i>
                <input
                  className={classes.input}
                  name="password"
                  type="password"
                  placeholder="Senha"
                  onChange={e => setPassword(e.target.value)}
                />
              </Box>
              <button type="submit" className={`${classes.button} btn solid`}>
                Login
              </button>
              <p className={classes.socialText}>
                ou Login com plataforma de mídia social
              </p>
              <p className={classes.socialMedia}>
                <i onClick={onFacebookSignIn} className={classes.socialMedia}>
                  <FaFacebook className={classes.socialIcon} />
                </i>
                <i onClick={onTwitterSignIn} className={classes.socialMedia}>
                  <FaTwitter className={classes.socialIcon} />
                </i>
                <i onClick={onGoogleSignIn} className={classes.socialMedia}>
                  <FaGoogle className={classes.socialIcon} />
                </i>
              </p>
            </form>
            <form
              method="post"
              onSubmit={onSubmitSignUp}
              className={`${classes.form} ${classes.formSignup} ${mode}`}
            >
              <h2 className={classes.title}>Registrar</h2>
              <input
                type="hidden"
                name="isNewUser"
                value={1}
                className={classes.input}
              />
              <Box className={classes.inputField}>
                <i className={classes.containerIcon}>
                  <FaUser />
                </i>
                <input
                  className={classes.input}
                  name="userName"
                  type="text"
                  placeholder="Usuário"
                  onChange={e => setUserName(e.target.value)}
                />
              </Box>
              <Box className={classes.inputField}>
                <i className={classes.containerIcon}>
                  <FaEnvelope />
                </i>
                <input
                  className={classes.input}
                  name="userEmail"
                  type="email"
                  placeholder="Email"
                  onChange={e => setUserEmail(e.target.value)}
                />
              </Box>
              <Box className={classes.inputField}>
                <i className={classes.containerIcon}>
                  <FaLock />
                </i>
                <input
                  className={classes.input}
                  name="password"
                  type="password"
                  placeholder="Senha"
                  onChange={e => setPassword(e.target.value)}
                />
              </Box>
              <input
                type="submit"
                value="SignUp"
                className={`${classes.button} btn`}
              />
              {/* <SocialText>
                ou Registre com plataforma de mídia social
              </SocialText>
              <SocialMedia className="social-media">
                <SocialIcon onClick={onFacebookSignUp} className="social-icon">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon onClick={onTwitterSignUp} className="social-icon">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon onClick={onGoogleSignUp} className="social-icon">
                  <FaGoogle />
                </SocialIcon>
              </SocialMedia> */}
            </form>
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
