import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default
  },
  containerContent: {
    padding: '0 3rem'
  },
  containerTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '3rem 6rem'
  },
  p: {
    fontSize: '1.6em',
    lineHeight: '1.5em',
    color: theme.palette.primary.main,
    textAlign: 'center'
  },
  containerItens: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    flexDirection: 'row',
    height: ' 100%',
    flexWrap: 'wrap'
  },
  containerItem: {
    width: '30%',
    height: '100%',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    [theme.breakpoints.down('md')]: {
      width: '45%'
    },
    [theme.breakpoints.down('md')]: {
      width: '90%'
    }
  },
  containerCard: {
    width: '100%',
    height: '100%',
    borderRadius: '12px'
  },
  image: {
    borderRadius: '12px',
    maxWidth: '100%'
  },
  cardBody: {
    padding: '1rem 1rem'
  },
  h4Card: {
    fontSize: '1.6em',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    textAlign: 'center',
    paddingTop: '1rem'
  },
  pCard: {
    fontSize: '1.3em',
    color: theme.palette.text.primary,
    textAlign: 'justify',
    paddingTop: '1rem'
  }
}));
