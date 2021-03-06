import { makeStyles } from '@material-ui/core/styles';
import { url } from 'node:inspector';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '2rem 0',
    backgroundColor: theme.palette.grey[900],
    fontFamily: 'Roboto'
  },
  footerWrap: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '80%',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
  },
  wrapContainer: {
    position: 'relative',
    paddingtop: '2rem'
  },
  // a: {
  //   color: theme.palette.text.normal
  // },
  ul: {
    listStyle: 'none'
  },
  li: {
    padding: '5px 0 5px 10px',
    background: 'url("/images/cat_li.png") no-repeat left'
  },
  liA: {
    textDecoration: 'none',
    color: theme.palette.grey[600],

    '&:hover': {
      color: theme.palette.action.linkHover
    }
  },
  liP: {
    color: theme.palette.grey[200]
  },
  foot: {
    fontSize: '14px',
    background: 'url("/images/foot_bg.jpg") repeat',
    color: theme.palette.grey[400],
    textTransform: 'uppercase',
    position: 'relative'
  },
  footWrap: {
    margin: '0 auto',
    textAlign: 'center',
    padding: '35px 0'
  },
  footA: {
    color: theme.palette.grey[200]
  },
  footerTitle: {
    color: theme.palette.grey[100],
    fontSize: '24px',
    padding: '0 0 18px 0',
    display: 'block'
  },
  fTitleA: {
    color: theme.palette.grey[200],
    '&:hover': {
      textdecoration: 'none'
    }
  },
  clear: {
    clear: 'both',
    lineheight: '0',
    height: '0',
    fontsize: '1px'
  }
}));
