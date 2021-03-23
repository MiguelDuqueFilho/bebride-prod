import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/client';
import Link from 'next/link';

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import ThemeToggle from '../ThemeToggle';
import useSettings from '../../hooks/useSettings';
import { THEMES } from '../../utils/constants';
import { useStyles } from './styles';
import AccountAvatar from '../AccountAvatar';

function Menu() {
  const classes = useStyles();
  const [session, loading] = useSession();
  const [toggle, setToggle] = useState(false);
  const { settings, saveSettings } = useSettings();

  const handeChangeMenu = () => {
    setToggle(!toggle);
  };

  const handeClickMenu = (e: React.MouseEvent) => {
    setToggle(false);
  };

  const toggleTheme = () => {
    if (settings.theme === THEMES.LIGHT) {
      saveSettings({ theme: THEMES.DARK });
    } else {
      saveSettings({ theme: THEMES.LIGHT });
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Box className={classes.containerMenu}>
      <Box className={classes.containerToggle}>
        <MenuIcon
          className={`${classes.myMenuIcon} ${toggle ? '' : 'checked'}`}
          onClick={handeChangeMenu}
        />
        <MenuOpenIcon
          className={`${classes.myMenuIcon} ${toggle ? 'checked' : ''}`}
          onClick={handeChangeMenu}
        />
      </Box>
      <Box className={`${classes.menuData} ${toggle ? 'checked' : ''}`}>
        <Box className={`${classes.menuItens} ${toggle ? 'checked' : ''}`}>
          <Box
            className={`${classes.listConteiner} ${toggle ? 'checked' : ''}`}
          >
            <ul className={classes.ul}>
              <li className={classes.li}>
                <Link href="/">
                  <a className={classes.a} onClick={handeClickMenu}>
                    Home
                  </a>
                </Link>
              </li>
              <li className={classes.li}>
                <Link href="/about">
                  <a className={classes.a} onClick={handeClickMenu}>
                    Sobre
                  </a>
                </Link>
              </li>
              {session && (
                <li className={classes.li}>
                  <Link href="/admin">
                    <a className={classes.a} onClick={handeClickMenu}>
                      Área Cliente
                    </a>
                  </Link>
                </li>
              )}
              {/* {session && (
                <li className={classes.li}>
                  <a className={classes.a}>{session.user.name}</a>
                </li>
              )} */}
              <li className={classes.li}>
                <a className={classes.a} onClick={handeClickMenu} href="#">
                  Contato
                </a>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <ThemeToggle Theme={toggleTheme} themeTitle={settings.theme} />
      <AccountAvatar />
    </Box>
  );
}

export default Menu;
