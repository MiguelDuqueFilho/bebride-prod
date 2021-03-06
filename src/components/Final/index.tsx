import React from 'react';
import Box from '@material-ui/core/Box';
import Image from 'next/image';
import { useStyles } from './styles';

import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';

const Final: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.containerTitle}>
        <h2 className={classes.h2}>
          <span className={classes.span}>
            SEU CASAMENTO É ÚNICO E TEM QUE SER PERFEITO
          </span>
          <p className={classes.p}>Vamos juntas?</p>
        </h2>
        <Box className={classes.teamSocial}>
          <a
            type="button"
            className={classes.socialIcon}
            href="https://www.facebook.com/bebridecasamentos"
          >
            <Facebook fontSize="large" />
          </a>
          <a
            className={classes.socialIcon}
            href="https://www.instagram.com/bebridecasamentos"
          >
            <Instagram fontSize="large" />
          </a>
          <a className={classes.socialIcon} href="https://twitter.com/bebride_">
            <Twitter fontSize="large" />
          </a>
        </Box>
        <Image
          className={classes.logoImage}
          src="/images/LogoBeBride3hand.png"
          alt="logo BeBride"
          width="500px"
          height="200px"
        />
      </Box>
    </Box>
  );
};

export default Final;
