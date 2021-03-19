import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    width: '100%',
    height: '100%',
    padding: '15px',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  containerWhyTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'auto',
    alignContent: 'center',
    textAlign: 'center'
  },
  containerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: '1rem 3rem',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 3rem',
      flexDirection: 'column'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 1rem',
      flexDirection: 'column'
    }
  },
  containerWhyText: {
    color: theme.palette.background.bebride,
    textAlign: 'justify',
    fontSize: '1.5em',
    // margin: '1rem',

    [theme.breakpoints.down('md')]: {
      fontSize: ' 1.2em'
    }
  },
  h2: {
    textAlign: 'start',
    fontSize: '2em',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },

  p: {
    margin: '2rem 6rem',
    fontSize: '1.6em',
    lineHeight: '1.5em',
    color: theme.palette.background.bebride,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6em',
      lineHeight: '1.5em',
      paddingLeft: '0',
      margin: '2rem 4rem'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '2rem 2rem',
      fontSize: '1.1em'
    }
  },
  span: {
    margin: '1rem 2rem',
    fontSize: '1.3rem',
    textAlign: 'center',
    color: theme.palette.background.bebride
  },
  containerWhyDescr: {
    color: theme.palette.text.primary,
    textAlign: 'justify',
    margin: '1rem'
  },
  icon: {
    color: theme.palette.background.bebride,
    marginRight: '2rem',
    fontSize: '1.3em'
  },
  containerTeam2Imag: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 50%',
    maxWidth: '100%',
    marginTop: '40px',
    [theme.breakpoints.down('md')]: {
      flex: '0 0 50%',
      maxWidth: '80%',
      alignSelf: 'center',
      marginTop: '40px'
    },
    [theme.breakpoints.down('sm')]: {
      flex: '0 0 50%',
      maxWidth: '100%',
      marginTop: '40px'
    }
  },
  imageTeam2: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '12px'
  }
}));
