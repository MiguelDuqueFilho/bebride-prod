import { createContext, useState } from 'react';
import { alarmProps, defaultAlarm } from '../utils/constants';

const AlarmContext = createContext({
  alarm: defaultAlarm,
  saveAlarm: (alarm: alarmProps) => {}
});

export const AlarmProvider = ({ alarm, children }) => {
  const [currentAlarm, setCurrentAlarm] = useState(alarm);

  const handleSaveAlarm = (update = currentAlarm) => {
    const mergedSettings = update;
    setCurrentAlarm(mergedSettings);
  };

  return (
    <AlarmContext.Provider
      value={{
        alarm: currentAlarm,
        saveAlarm: handleSaveAlarm
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
};

export const AlarmConsumer = AlarmContext.Consumer;

export default AlarmContext;
