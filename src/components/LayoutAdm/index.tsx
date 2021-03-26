import { useState, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import Head from 'next/head';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

import { Alert, AlertTitle } from '@material-ui/lab';

import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import useSettings from '../../hooks/useSettings';
import ThemeToggle from '../ThemeToggle';
import { THEMES } from '../../utils/constants';

import { useStyles } from './styles';
import NavBar from '../NavBar';
import AccountAvatar from '../AccountAvatar';
// import AccessNotification from '../AccessNotification';

interface LayoutAdmProps {
  title: string;
  children: ReactNode;
}

function LayoutAdm({ children, title }: LayoutAdmProps) {
  const router = useRouter();
  const classes = useStyles();
  const [session, loading] = useSession();
  const [open, setOpen] = useState(true);
  const { settings, saveSettings } = useSettings();

  if (loading) {
    return (
      <>
        <Alert severity="info" variant="outlined">
          Loading....
        </Alert>
      </>
    );
  }

  const toggleTheme = () => {
    if (settings.theme === THEMES.LIGHT) {
      saveSettings({ theme: THEMES.DARK });
    } else {
      saveSettings({ theme: THEMES.LIGHT });
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!loading && !session) {
    router.push('/login');
    return (
      <>
        <Alert severity="error" variant="outlined">
          <AlertTitle>Acesso negado!!!</AlertTitle>
          Fazer Login para ter acesso!
        </Alert>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {/* <AccessNotification /> */}
        <div className={classes.root}>
          <AccountAvatar />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar className={classes.Toolbar}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                {title}
              </Typography>

              <ThemeToggle Theme={toggleTheme} themeTitle={settings.theme} />
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                <MenuOpenIcon />
              </IconButton>
              <Typography variant="h6"> Menu</Typography>
            </div>
            <NavBar />
          </Drawer>
          <main
            className={clsx(classes.content, { [classes.contentShift]: open })}
          >
            <div className={classes.drawerHeader} />
            {children}
          </main>
        </div>
      </>
    );
  }
}
export default LayoutAdm;
