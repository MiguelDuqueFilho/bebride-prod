import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default
  },
  containerTitle: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '3rem 15px',
    textAlign: 'center',
    fontSize: '1.2rem',
    color: theme.palette.text.primary
  },
  h2: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem'
    }
  },
  span: {
    fontSize: '1.4rem',
    textAlign: 'center',
    color: theme.palette.text.primary
  },
  p: {
    margin: '1rem 15px',
    fontSize: '2.5rem',
    lineHeight: '1.5em',
    fontFamily: 'romantisch',
    color: theme.palette.primary.main
  },
  svg: {
    color: theme.palette.primary.main,
    marginRight: '2rem'
  },
  teamSocial: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: '30%',
    marginTop: '1rem',
    marginBottom: '30px',
    marginLeft: '15px',
    color: theme.palette.text.primary,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      width: '30%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '60%'
    }
  },

  socialIcon: {
    textDecoration: 'none',
    transition: '0.3s'
  },
  icon: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.secondary.dark,
    fontSize: '2.5em',
    '&:hover': {
      color: theme.palette.secondary.light
    }
  },
  logoImage: {
    marginBottom: '30px'
  }
}));
