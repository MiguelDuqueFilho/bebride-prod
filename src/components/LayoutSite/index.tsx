import Menu from '../Menu';
import Box from '@material-ui/core/Box';
import AccessNotification from '../AccessNotification';
import { useStyles } from './styles';

const LayoutSite: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {/* <AccessNotification /> */}
      <Menu />
      {children}
    </Box>
  );
};

export default LayoutSite;
