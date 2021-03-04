import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/client';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import useSettings from '../../hooks/useSettings';
import { THEMES } from '../../utils/constants';

import {
  ContainerMenu,
  ContainerToggle,
  MenuData,
  MenuItens,
  MyMenuIcon,
  MyMenuOpenIcon
} from './styles';

function Menu() {
  const [session, loading] = useSession();
  const [toggle, setToggle] = useState(false);
  const { settings, saveSettings } = useSettings();

  const handeChangeMenu = () => {
    setToggle(!toggle);
  };

  const handeClickMenu = (e: React.MouseEvent) => {
    setToggle(false);
  };

  useEffect(() => {}, [toggle]);

  const toggleTheme = () => {
    if (settings.theme === THEMES.LIGHT) {
      saveSettings({ theme: THEMES.DARK });
    } else {
      saveSettings({ theme: THEMES.LIGHT });
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <ContainerMenu className="menu-container">
      <ContainerToggle>
        <MyMenuIcon
          onClick={handeChangeMenu}
          className={toggle ? '' : 'checked'}
        />
        <MyMenuOpenIcon
          onClick={handeChangeMenu}
          className={toggle ? 'checked' : ''}
        />
      </ContainerToggle>
      <MenuData className={`menu ${toggle ? 'checked' : ''}`}>
        <MenuItens className={`${toggle ? 'checked' : ''}`}>
          <div>
            <ul>
              <li>
                <Link href="/">
                  <a onClick={handeClickMenu}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a onClick={handeClickMenu}>Sobre</a>
                </Link>
              </li>
              {session && (
                <li>
                  <Link href="/admin">
                    <a onClick={handeClickMenu}>Área Cliente</a>
                  </Link>
                </li>
              )}
              {!session && (
                <li>
                  <Link href="/loginout">
                    <a
                      onClick={e => {
                        if (toggle) setToggle(false);
                      }}
                    >
                      Login/Registrar
                    </a>
                  </Link>
                </li>
              )}
              {session && (
                <li>
                  <a>{session.user.name}</a>
                </li>
              )}
              {session && (
                <li>
                  <a
                    href={`/api/auth/signout`}
                    onClick={e => {
                      e.preventDefault();
                      if (toggle) setToggle(false);
                      signOut();
                    }}
                  >
                    Logoff
                  </a>
                </li>
              )}

              <li>
                <a onClick={handeClickMenu} href="#">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </MenuItens>
      </MenuData>
      <ThemeToggle Theme={toggleTheme} themeTitle={settings.theme} />
    </ContainerMenu>
  );
}

export default Menu;
