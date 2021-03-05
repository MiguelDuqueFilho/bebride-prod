import React from 'react';

import Box from '@material-ui/core/Box';
// import Icon from '@material-ui/core/Icon';
import Event from '@material-ui/icons/Event';
import DateRange from '@material-ui/icons/DateRange';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import CalendarToday from '@material-ui/icons/CalendarToday';

import { useStyles } from './styles';
import { PlanType } from '../../utils/sampdata';

type Props = {
  item: PlanType;
};

function Types({ item }: Props) {
  const classes = useStyles();

  return (
    <Box className={classes.containerItem}>
      <Box className={classes.containerIcon}>
        {item.icon === 'Event' && <Event className={classes.svg} />}
        {item.icon === 'DateRange' && <DateRange className={classes.svg} />}
        {item.icon === 'AssignmentTurnedIn' && (
          <AssignmentTurnedIn className={classes.svg} />
        )}
        {item.icon === 'CalendarToday' && (
          <CalendarToday className={classes.svg} />
        )}
        <h2 className={classes.h2}>{`${item.title}`}</h2>
        <p className={classes.p}>{item.resume}</p>
      </Box>
    </Box>
  );
}

export default Types;
