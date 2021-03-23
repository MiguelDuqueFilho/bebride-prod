import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  img: {
    width: '100%',
    borderRadius: '12px'
  },
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
  }
}));
