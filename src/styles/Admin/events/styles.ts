import { makeStyles } from '@material-ui/core/styles';
import { Itheme } from '../../../theme';
import { drawerWidth, menuHeight } from '../../../utils/constants';

export const useStyles = makeStyles((theme: Itheme) => ({
  container: {
    position: 'relative',
    width: -drawerWidth,
    // height: `calc(100vh - 56px - ${menuHeight}px)`,
    overflow: 'hidden',
    background: theme.palette.background.default
  }
}));
