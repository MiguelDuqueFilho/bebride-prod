import { useContext } from 'react';
import AlarmContext from '../contexts/AlarmContext';

const useAlarm = () => useContext(AlarmContext);

export default useAlarm;
