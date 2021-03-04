import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    fontFamily: 'Cormorant Garamond, serif',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  containerContent: {
    marginTop: '2rem'
  },
  containerText: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignContent: 'center',
    textAlign: 'center'
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
    color: theme.palette.primary.main,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6em',
      lineHeight: '1.5em',
      paddingLeft: '0',
      margin: '2rem 4rem'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '2rem 2rem',
      fontSize: '1em'
    }
  },
  containerTeam: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: '1rem 6rem',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 3rem',
      flexDirection: 'column'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 1rem',
      flexDirection: 'column'
    }
  },
  containerTeamImag: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 50%',
    maxWidth: '100%',
    [theme.breakpoints.down('md')]: {
      flex: '0 0 50%',
      maxWidth: '80%',
      alignSelf: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      flex: '0 0 50%',
      maxWidth: '100%'
    }
  },
  containerTeamText: {
    flex: '0 0 50%',
    maxWidth: '50%',
    marginTop: '2rem',
    [theme.breakpoints.down('md')]: {
      flex: '0 0 100%',
      maxWidth: '100%'
    }
  },
  imageTeam: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '12px'
  },
  teamDescr: {
    color: theme.palette.text.primary,
    textAlign: 'justify',
    fontSize: '1.5em',
    margin: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2em'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em'
    }
  }
}));
