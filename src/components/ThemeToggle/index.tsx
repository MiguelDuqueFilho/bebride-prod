import React, { useState, useEffect } from 'react';

import { ContainerTheme, IconLight, IconDark } from './styles';

type themeProps = {
  Theme: Function;
  themeTitle: string;
};

function ThemeToggle({ Theme, themeTitle }: themeProps) {
  const [theme, setTheme] = useState(themeTitle);

  const handeClickTheme = (e: React.MouseEvent) => {
    const changeTheme = theme === 'LIGHT' ? 'DARK' : 'LIGHT';
    setTheme(changeTheme);
    Theme(changeTheme);
  };

  useEffect(() => {
    setTheme(themeTitle === 'LIGHT' ? 'LIGHT' : 'DARK');
  }, [themeTitle]);

  return (
    <ContainerTheme className="menu-container">
      <IconDark
        onClick={handeClickTheme}
        className={theme === 'LIGHT' ? 'checked' : ''}
      />

      <IconLight
        onClick={handeClickTheme}
        className={theme === 'DARK' ? 'checked' : ''}
      />
    </ContainerTheme>
  );
}

export default ThemeToggle;
