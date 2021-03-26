import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { EventProps } from '../../../interfaces';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import LayoutAdm from '../../../components/LayoutAdm';

import EventList from '../../../components/Events/EventList';
import EventAdd from '../../../components/Events/EventAdd';
import api from '../../../services/api';
import { useStyles } from '../../../styles/Admin/events/styles';

interface ExtendPageProps {
  data: {
    events: EventProps[];
  };
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const response = await api.get('/api/events', {
    headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
  });

  return {
    props: {
      data: response.data
    }
  };
};

function TabsAdmin({ data }: ExtendPageProps) {
  const classes = useStyles();
  const [value, setValue] = useState('1');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <LayoutAdm title="Gerenciamento de Eventos">
      <Box className={classes.container}>
        <TabContext value={value}>
          <AppBar position="static">
            <TabList
              onChange={handleChange}
              aria-label="Gerenciamento de Eventos"
            >
              <Tab label="List" value="1" />
              <Tab label="Criar" value="2" />
              <Tab label="Alterar" value="3" disabled />
            </TabList>
          </AppBar>
          <TabPanel value="1">
            <EventList data={data} />
          </TabPanel>
          <TabPanel value="2">
            <EventAdd data={data} />
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </LayoutAdm>
  );
}

export default TabsAdmin;
