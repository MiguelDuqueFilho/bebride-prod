import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.secondary.dark
  },
  containerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '25px 0'
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
    flexDirection: 'column'
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
    fontSize: '1.7em',
    lineHeight: '1.5em',
    color: theme.palette.secondary.contrastText,
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
    fontSize: '1.5em',
    textAlign: 'center',
    color: theme.palette.secondary.contrastText,
    textTransform: 'uppercase'
  },
  containerButton: {
    marginBottom: '30px'
  },
  buttonWhatsApp: {
    padding: '0.75rem 1.75rem',
    marginTop: '2rem',
    fontFamily: 'romantisch',
    fontSize: '1.7rem',
    borderRadius: '49px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    textDecoration: 'none',
    transition: '0.3s',
    display: 'inline-block',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  svg: {
    color: theme.palette.secondary.contrastText,
    marginRight: '1rem',
    verticalAlign: 'top',
    fontSize: '1.3em'
  }
}));
