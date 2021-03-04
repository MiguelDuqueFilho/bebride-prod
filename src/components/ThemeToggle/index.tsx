import React, { useState, useEffect } from 'react';

import { useStyles } from './styles';
import Box from '@material-ui/core/Box';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

type themeProps = {
  Theme: Function;
  themeTitle: string;
};

function ThemeToggle({ Theme, themeTitle }: themeProps) {
  const classes = useStyles();
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
    <Box className={classes.containerTheme}>
      <Brightness4Icon
        onClick={handeClickTheme}
        className={`${classes.iconLightDark} ${
          theme === 'LIGHT' ? 'checked' : ''
        }`}
      />

      <Brightness7Icon
        onClick={handeClickTheme}
        className={`${classes.iconLightDark} ${
          theme === 'DARK' ? 'checked' : ''
        }`}
      />
    </Box>
  );
}

export default ThemeToggle;
