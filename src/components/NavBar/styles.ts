import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../theme';
import { menuHeight } from '../../utils/constants';

export const useStyles = makeStyles((theme: Itheme) => ({
  mobileDrawer: {
    width: 240
  },
  desktopDrawer: {
    width: 240,
    top: `${menuHeight}px`,
    height: `calc(100% - ${menuHeight}px)`,
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
