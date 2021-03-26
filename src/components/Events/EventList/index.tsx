import { EventProps } from '../../../interfaces';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import EventCard from '../EventCard';

interface ExtendPageProps {
  data: {
    events: EventProps[];
  };
}

function EventList({ data }: ExtendPageProps) {
  return (
    <Box p={2}>
      <Grid container spacing={4}>
        {data.events.map((item: EventProps) => (
          <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
            <EventCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default EventList;
