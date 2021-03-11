import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  containerTheme: {
    position: 'fixed',
    top: '0',
    left: '0'
  },
  iconLight: {
    position: 'absolute',
    top: '0.5rem',
    left: 'calc(100vw - 0.5rem - 60px)',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    border: '0',
    opacity: '0',
    zIndex: theme.zIndex.appBar + 17,
    cursor: 'pointer',

    /* color: ${props => props.theme.color.toggle}, */
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
  iconLightDark: {
    position: 'absolute',
    top: '0.5rem',
    left: 'calc(100vw - 0.5rem - 60px)',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    border: '0',
    opacity: '0',
    zIndex: theme.zIndex.appBar + 17,
    cursor: 'pointer',

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
  }
}));
