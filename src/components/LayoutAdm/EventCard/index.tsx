import { Box, Typography, Avatar } from '@material-ui/core';
import { useStyles } from './styles';
import { EventProps } from '../../../interfaces';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';
import Image from 'next/image';

dayjs.extend(relativeTime);

function EventCard(event: EventProps) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box>
      <Image
        width={500}
        height={300}
        alt={event.title}
        src={event.fileLocation}
        className={classes.img}
        layout="responsive"
        onClick={() =>
          router.push({
            pathname: '/events/[id]',
            query: { id: event.id }
          })
        }
      />

      <Box display="flex" mt="1">
        {/* <Box mr={2}>
          <Avatar alt="time" src={event.fileLocation} />
        </Box> */}
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {event.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {event.content}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${event.status} • ${dayjs(event.eventDate)
              .locale('pt-br')
              .fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default EventCard;
