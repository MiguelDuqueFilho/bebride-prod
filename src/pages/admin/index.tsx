import { GetServerSideProps } from 'next';

import { getSession } from 'next-auth/client';
import { EventProps } from '../../interfaces';

import Box from '@material-ui/core/Box';

import LayoutAdm from '../../components/LayoutAdm';
import EventList from '../../components/Events/EventList';
import api from '../../services/api';

interface ExtendPageProps {
  data: {
    events: EventProps[];
  };
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  if (session) {
    const response = await api.get('/api/events', {
      headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
    });
    return {
      props: {
        data: response.data
      }
    };
  } else {
    return {
      props: {
        data: []
      }
    };
  }
};

function Admin({ data }: ExtendPageProps) {
  return (
    <Box>
      <LayoutAdm title="Administração">
        <EventList data={data} />
      </LayoutAdm>
    </Box>
  );
}

export default Admin;
