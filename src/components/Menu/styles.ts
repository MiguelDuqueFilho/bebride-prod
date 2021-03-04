import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  containerMenu: {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: theme.zIndex.appBar + 18
  },
  containerToggle: {
    display: 'none',
    backgroundColor: theme.palette.background.dark,
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  myMenuIcon: {
    position: 'absolute',
    top: '0.5rem',
    left: '0.5rem',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    zIndex: theme.zIndex.appBar + 17,
    cursor: 'pointer',
    color: theme.palette.common.white,
    opacity: '0',
    transition: '0.4s',
    '&.checked': {
      opacity: '1',
      zIndex: theme.zIndex.appBar + 19,
      '&:hover': {
        transition: '0.4s',
        backgroundColor: theme.palette.background.default
      }
    }
  },
  menuData: {
    [theme.breakpoints.down('md')]: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      visibility: 'hidden',
      transition: '0.6s',
      ' &.checked': {
        visibility: 'visible'
      }
    }
  },
  menuItens: {
    position: 'absolute',
    top: '0',
    height: '40px',
    width: '100vw',
    opacity: '0.8',

    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      width: '2400px',
      height: '1600px',
      borderRadius: '50%',
      top: '50%',
      left: '50%',
      transform: 'translateX(-150%) translateY(-50%)',
      webkitTransform: 'translate3d(-150%, -50%, 0)',
      background: theme.palette.background.mainGradient,

      transition: '1.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&.checked': {
        transform: 'translateX(-50%) translateY(-50%)',
        webkitTransform: 'translate3d(-50%, -50%, 0)'
      }
    }
  },
  listConteiner: {
    [theme.breakpoints.down('md')]: {
      maxWidth: '90vw',
      maxHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      opacity: '0',
      transition: '0.6s'
    },
    '&.checked': {
      opacity: '1'
    }
  },
  ul: {
    position: 'absolute',
    top: '0',
    marginTop: '11px',
    marginLeft: '40px',
    width: '70vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      margin: '0px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-arround',
      alignItems: 'center'
    }
  },
  li: {
    listStyle: 'none'
  },
  a: {
    textDecoration: 'none',
    margin: '0.5rem',
    display: 'inline-block',
    textTransform: 'uppercase',
    transition: '0.3s',
    fontFamily: 'Roboto Times serif',
    color: theme.palette.common.white,
    fontSize: '1.1rem',
    lineHeight: '1rem',
    zIndex: theme.zIndex.appBar + 20,
    'a:hover': {
      color: theme.palette.common.black
    }
  }
}));
