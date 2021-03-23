import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  mobileDrawer: {
    width: 240
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 56px)',
    borderRight: 'none'
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3)
  },
  listItemSelected: {
    color: '#f44336'
  },
  listItemText: {
    fontSize: 14
  }
}));
