import { GetServerSideProps } from 'next';

import { useStyles } from '../../../styles/admin/styles';
import { EventProps } from '../../../interfaces';

import { Box, Grid } from '@material-ui/core';
import LayoutAdm from '../../../components/LayoutAdm';
import EventCard from '../../../components/LayoutAdm/EventCard';
import api from '../../../services/api';

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

function Admin({ data }: ExtendPageProps) {
  const classes = useStyles();
  return (
    <Box>
      <LayoutAdm title="Administração">
        <Box p={2}>
          <Grid container spacing={4}>
            {data.events?.map((item: EventProps) => (
              <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
                <EventCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </LayoutAdm>
    </Box>
  );
}

export default Admin;
