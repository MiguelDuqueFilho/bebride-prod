import React from 'react';

import Box from '@material-ui/core/Box';

import { useStyles } from './styles';

const BannerBody: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.containerContent}>
        <p className={classes.nameBebride}>be bride</p>
        <span className={classes.descrBebride}>ASSESSORIA E CERIMONIAL</span>
      </Box>
      <Box className={classes.containerLogo}>
        <img className={classes.logoImage} src="/images/love.svg" />
      </Box>
    </Box>
  );
};

export default BannerBody;
