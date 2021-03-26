import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';
import { menuHeight } from '../../utils/constants';

export const useStyles = makeStyles((theme: Itheme) => ({
  container: {
    position: 'relative',
    width: '100vw',
    minHeight: '100vh',
    overflow: 'hidden',
    background: theme.palette.background.default,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '2000px',
      height: '2000px',
      top: '-10%',
      right: '48%',
      transform: 'translatey(-50%)',
      backgroundImage: theme.palette.background.gradient,
      transition: '1.8s ease-in-out',
      borderRadius: '50%'
    },
    '&:before > &:filter': {
      progid: `DXImageTransform(
            startColorstr= "${theme.palette.background.gradienteStart}",
            endColorstr= "${theme.palette.background.gradienteEnd}",
            GradientType=1
          )`
    },
    '&.sign-up-mode:before': {
      transform: 'translate(100%, -50%)',
      right: '52%'
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '600px',
      height: '100vh',
      '&:before': {
        width: '1500px',
        height: '1500px',
        left: '40%',
        bottom: '65%',
        transform: 'translateX(-50%)',
        right: 'initial',
        top: 'initial',
        transition: '2s ease-in-out'
      },
      '&.sign-up-mode:before': {
        transform: 'translate(-50%, 100%)',
        bottom: '32%',
        right: 'initial'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:before': {
        bottom: '72%',
        left: '50%'
      },
      '&.sign-up-mode:before': {
        bottom: '28%',
        left: '50%'
      }
    }
  },
  formContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0'
  },
  signinSignUp: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    left: '75%',
    width: '50%',
    transition: '1s 0.7s ease-in-out',
    display: 'grid',
    gridTemplateColumns: '1fr',
    zIndex: theme.zIndex.appBar + 5,
    '&.sign-up-mode': {
      left: '25%'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      left: '50%',
      top: '95%',
      transform: 'translate(-50%, -100%)',
      transition: '1s 0.8s ease-in-out',
      '&.sign-up-mode': {
        top: '5%',
        transform: 'translate(-50%, 0)',
        left: '50%'
      }
    },
    [theme.breakpoints.down('sm')]: {
      height: '75%'
    }
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0rem 5rem',
    transition: 'all 0.2s 0.7s',
    overflow: 'hidden',
    gridColumn: '1 / 2',
    gridRow: '1 / 2',
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 1.5rem'
    }
  },
  formSignin: {
    opacity: '1',
    zIndex: theme.zIndex.appBar + 2,
    '&.sign-up-mode': {
      opacity: '0',
      zIndex: theme.zIndex.appBar + 1
    }
  },
  formSignup: {
    opacity: '0',
    zIndex: theme.zIndex.appBar + 1,
    '&.sign-up-mode': {
      opacity: '1',
      zIndex: theme.zIndex.appBar + 2
    }
  },
  title: {
    fontSize: '2.2rem',
    color: theme.palette.primary.contrastText,
    marginBottom: '10px'
  },
  inputField: {
    maxWidth: '380px',
    width: '100%',
    backgroundColor: theme.palette.background.field,
    height: '55px',
    margin: '10px 0',
    borderRadius: '55px',
    display: 'grid',
    gridTemplateColumns: '15% 85%',
    padding: '0 0.4rem'
  },
  containerIcon: {
    textAlign: 'center',
    lineHeight: '55px',
    color: '#acacac',
    fontSize: '1.1rem',
    transition: '0.5s'
  },
  input: {
    background: 'none',
    outline: 'none',
    border: 'none',
    lineHeight: '1',
    fontWeight: 700,
    fontSize: '1.1rem',
    color: theme.palette.text.secondary,
    '::placeholder': {
      color: '#aaa',
      fontWeight: 500
    }
  },
  inputErrors: {
    // marginTop: '-3%',
    color: theme.palette.error.main
  },
  button: {
    width: '150px',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    border: 'none',
    outline: 'none',
    height: '49px',
    borderRadius: '49px',
    textTransform: 'uppercase',
    fontWeight: 600,
    margin: '10px 0',
    cursor: 'pointer',
    transition: '0.5s',
    '&:hover': {
      transition: '0.4s',
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText
    }
  },
  btnTransparent: {
    // herda de button
    margin: '0',
    background: 'none',
    border: `2px solid ${theme.palette.primary.light}`,
    color: theme.palette.primary.contrastText,
    width: '130px',
    height: '41px',
    fontWeight: 600,
    fontSize: '0.8rem',
    [theme.breakpoints.down('md')]: {
      width: '110px',
      height: '35px',
      fontSize: '0.7rem'
    }
  },
  socialText: {
    // color: theme.color.title,
    padding: '0.7rem 0',
    fontSize: '1rem'
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'center'
  },
  socialIcon: {
    height: '41px',
    width: '41px',
    margin: '0 0.45rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: '1.1rem',
    borderRadius: '50%',
    transition: '0.3s',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderColor: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      borderColor: theme.palette.action.hover
    }
  },
  panelsContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: `${menuHeight}px`,
    left: '0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 2fr 1fr',
    [theme.breakpoints.down('md')]: {
      top: '0px',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr 2fr 1fr'
    }
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: theme.zIndex.appBar + 6,
    // pointerEvents: 'all',
    padding: '2rem 17% 2rem 12%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '2.5rem 8%',
      gridColumn: '1 / 2'
    }
  },
  panelLeft: {
    // herda de panel
    pointerEvents: 'all',
    padding: '2rem 17% 5rem 12%',

    '&.sign-up-mode': {
      pointerEvents: 'none'
    },
    [theme.breakpoints.down('md')]: {
      padding: '0rem 17% 0rem 12%',
      gridRow: '1 / 2'
    }
  },
  panelRight: {
    pointerEvents: 'none',
    padding: '2rem 12% 0rem 17%',

    '&.sign-up-mode': {
      pointerEvents: 'all'
    },
    [theme.breakpoints.down('md')]: {
      gridRow: '3 / 4'
    }
  },
  panelContent: {
    color: theme.palette.text.primary,
    transition: 'transform 0.9s 0.6s ease-in-out',
    transitionDelay: '0.6s',
    // background: 'transparent',
    [theme.breakpoints.down('md')]: {
      paddingRight: '15px',
      transition: 'transform 0.9s ease-in-out',
      transitionDelay: '0.6s'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2.5rem 1rem ',
      Height: '100%'
    },
    '& > h3': {
      fontWeight: 600,
      lineHeight: '1',
      fontSize: '1.5rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem'
      }
    },
    '& > p': {
      fontSize: '0.95rem',
      padding: '0.7rem 0',
      [theme.breakpoints.down('md')]: {
        fontSize: '0.7rem',
        padding: '0.5rem 0'
      }
    }
  },
  panelContentRight: {
    transform: 'translateX(800px)',
    '&.sign-up-mode': {
      transform: 'translateX(0px)'
    },
    [theme.breakpoints.down('md')]: {
      transform: 'translateY(300px)'
    }
  },
  panelContentLeft: {
    '&.sign-up-mode': {
      transform: 'translateX(-800px)'
    },
    [theme.breakpoints.down('md')]: {
      '&.sign-up-mode': {
        transform: 'translateY(-300px)'
      }
    }
  },
  imageRight: {
    width: '100%',
    transition: 'transform 1.1s ease-in-out',
    transitionDelay: '0.4s',
    transform: 'translateX(800px)',
    [theme.breakpoints.down('md')]: {
      transition: 'transform 0.9s ease-in-out',
      transitionDelay: '0.6s',
      width: '30%'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },

    '&.sign-up-mode': {
      transform: 'translateX(0px)'
      // [theme.breakpoints.down('md')]: {
      //   '&.sign-up-mode': {
      //     transform: 'translateY(0px)'
      //   }
      // }
    }
  },
  imageLeft: {
    width: '100%',
    transition: 'transform 1.1s ease-in-out',
    transitionDelay: '0.4s',
    [theme.breakpoints.down('md')]: {
      transition: 'transform 0.9s ease-in-out',
      transitionDelay: '0.6s',
      width: '30%'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '&.sign-up-mode': {
      transform: 'translateX(-800px)',
      [theme.breakpoints.down('md')]: {
        '&.sign-up-mode': {
          transform: 'translateY(-300px)'
        }
      }
    }
  }
}));
