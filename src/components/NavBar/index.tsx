// import NavBarx from '@material-ui/core/NavBar';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button
} from '@material-ui/core';
import { useStyles } from './styles';

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useSession } from 'next-auth/client';

const primaryMenu = [
  { id: 1, label: 'Home', path: '/', icon: HomeIcon },
  { id: 2, label: 'Dashboard', path: '/admin', icon: DashboardIcon },
  {
    id: 3,
    label: 'Eventos',
    path: '/admin/events',
    icon: EventIcon
  }
];

const secondaryManu = [
  { id: 1, label: 'Biblioteca', icon: VideoLibrary },
  { id: 2, label: 'Histórico', icon: History }
];

function NavBar() {
  const classes = useStyles();
  const router = useRouter();
  const [session] = useSession();

  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Canal 1' },
    { id: 2, name: 'Canal 2' },
    { id: 3, name: 'Canal 3' },
    { id: 4, name: 'Canal 4' },
    { id: 5, name: 'Canal 5' }
  ]);

  const isSelected = (item: any) => router.pathname === item.path;

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map(item => {
          const Icon = item.icon;
          return (
            <Link key={item.id} href={item.path} passHref>
              <ListItem
                button
                className={classes.listItem}
                selected={isSelected(item)}
                // onClick={() => {
                //   drawerClose();
                // }}
              >
                <ListItemIcon
                  className={isSelected(item) ? classes.listItemSelected : ''}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={item.label}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryManu.map(item => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon
                className={isSelected(item) ? classes.listItemSelected : ''}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box>
        {!session ? (
          <Box mx={4} my={2}>
            <Typography variant="body2">
              Faça login para curtur vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<AccountCircle />}
              >
                Fazer login
              </Button>
            </Box>
          </Box>
        ) : (
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                INSCRIÇÕES
              </ListSubheader>
            }
          >
            {subscriptions.map(item => (
              <ListItem
                key={item.id}
                button
                classes={{ root: classes.listItem }}
                selected={isSelected(item)}
              >
                <ListItemIcon>
                  <Avatar className={classes.avatar}>H</Avatar>
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={item.name}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.desktopDrawer }}
      open
      variant="persistent"
    >
      {content}
    </Drawer>
  );
}

export default NavBar;
