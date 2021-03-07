import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  container: {
    position: 'relative',
    width: '100vw',
    height: '80vh',
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse'
    }
  },
  containerContent: {
    width: '50vw',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '50vh'
    }
  },
  nameBebride: {
    fontFamily: 'romantisch',
    fontSize: '8em',
    marginBottom: '-20px',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      fontSize: '5rem',
      margin: '-30px 0'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      fontSize: '5rem'
    }
  },
  descrBebride: {
    fontSize: '1.5em',
    fontStyle: 'normal',
    // fontWeight: '600',
    lineHeight: '40px',
    letterSpacing: '0.13em',
    textAlign: 'left',
    marginBottom: '20px',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem'
    }
  },
  containerLogo: {
    width: '50vw',
    height: '100%',
    display: 'flex',

    borderRadius: '0 0 0 40vw',
    background: theme.palette.background.mainGradient,

    [theme.breakpoints.down('md')]: {
      width: '100vw',
      height: '75%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '50vh'
    }
  },

  logoImage: {
    width: '30vw',
    marginBottom: '30px',
    [theme.breakpoints.down('md')]: {
      width: '50vw',
      height: '100%'
    },
    [theme.breakpoints.down('md')]: {
      width: '60vw',
      height: '100%'
    }
  }
}));
