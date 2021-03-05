import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  container: {
    width: '100%',
    height: '100%',
    padding: '3rem 0',
    margin: '3rem 0',
    backgroundColor: theme.palette.background.dark
  },
  containerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '10px'
  },
  containerItens: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  ContainerTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Cormorant Garamond, serif'
  },
  h2: {
    textAlign: 'start',
    fontSize: '1.7em',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      fontSize: '1.8em'
    }
  },
  p: {
    margin: '2rem 6rem',
    fontSize: '1.6em',
    lineHeight: '1.5em',
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6em',
      lineHeight: '1.5em',
      paddingLeft: '0',
      margin: '2rem 4rem'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '2rem 2rem'
    }
  },
  span: {
    margin: '1rem 3rem',
    fontSize: '1.4em',
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    textTransform: 'uppercase'
  },
  buttonWhatsApp: {
    padding: '0.75rem 1.75rem',
    marginTop: '3rem',
    fontFamily: 'romantisch, serif',
    fontSize: '1.6rem',
    color: theme.palette.secondary.contrastText,
    borderRadius: '49px',
    backgroundColor: theme.palette.secondary.dark,
    textDecoration: 'none',
    transition: '0.3s',
    display: 'inline-block',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  svg: {
    marginTop: '3px',
    marginRight: '1rem',
    verticalAlign: 'top',
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  }
}));
