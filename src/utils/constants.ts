import { alarmProps } from '../interfaces';

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
};
export default THEMES;

export const pageSize = 8;

export const defaultAlarm: alarmProps = {
  severity: 'info',
  title: '',
  msg: '',
  open: false
};
