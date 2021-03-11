import React from 'react';

import Box from '@material-ui/core/Box';
import Image from 'next/image';
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
        <Image
          className={classes.logoImage}
          src="/images/love.svg"
          layout="intrinsic"
          width="510px"
          height="317px"
        />
      </Box>
    </Box>
  );
};

export default BannerBody;
