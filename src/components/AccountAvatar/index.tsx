import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/client';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Link from 'next/link';

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStyles } from './styles';

function AccountAvatar() {
  const classes = useStyles();
  const [session, loading] = useSession();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box className={classes.avatarContainer}>
        {session && (
          <Avatar
            className={classes.avatar}
            src={session.user.image}
            alt="account"
            onClick={handleClick}
            aria-controls="account-menu"
            aria-haspopup="true"
          />
        )}
        {!session && (
          <Link href="/loginout">
            <AccountCircleIcon className={classes.avatar} />
          </Link>
        )}
      </Box>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default AccountAvatar;
