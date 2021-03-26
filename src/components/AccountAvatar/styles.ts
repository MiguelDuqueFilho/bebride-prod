import { makeStyles } from '@material-ui/core/styles';

import { Itheme } from '../../theme';

export const useStyles = makeStyles((theme: Itheme) => ({
  avatarContainer: {
    position: 'fixed',
    top: '0.95rem',
    left: 'calc(100vw - 2rem - 60px)',
    width: '25px',
    height: '25px',
    zIndex: theme.zIndex.appBar + 20
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '0',
    cursor: 'pointer'
  }
}));
