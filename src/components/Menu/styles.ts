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
    opacity: '0',
    transition: '0.4s',
    '&.checked': {
      opacity: '1',
      zIndex: theme.zIndex.appBar + 19,
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.action.text,
      '&:hover': {
        transition: '0.4s',
        color: theme.palette.action.textHover
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
    height: '55px',
    width: '100vw',

    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.secondary.dark
    },
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      width: '2400px',
      height: '1600px',
      borderRadius: '50%',
      top: '50%',
      left: '50%',
      transform: 'translateX(-150%) translateY(-50%)',
      webkitTransform: 'translate3d(-150%, -50%, 0)',
      backgroundColor: theme.palette.background.dark,

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
    marginLeft: '20%',
    width: '50vw',
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
    // textTransform: 'uppercase',
    transition: '0.3s',
    fontFamily: 'Roboto',
    color: theme.palette.action.text,
    fontSize: '1.1rem',
    lineHeight: '1rem',
    zIndex: theme.zIndex.appBar + 20,
    '&:hover': {
      color: theme.palette.action.textHover
    }
  }
}));
