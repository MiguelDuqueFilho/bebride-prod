import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  containerItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '20%',

    [theme.breakpoints.down('md')]: {
      width: '40%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '70%'
    }
  },
  containerIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '1rem'
  },
  svg: {
    fontSize: '3rem',
    color: theme.palette.secondary.contrastText
  },
  h2: {
    color: theme.palette.secondary.contrastText,
    fontSize: '1.5em',
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  p: {
    color: theme.palette.secondary.contrastText,
    fontSize: '1.1em',
    paddingTop: '1rem',
    minHeight: '8rem',
    textAlign: 'justify',
    [theme.breakpoints.down('md')]: {
      fontSize: '1em'
    }
  }
}));
