import { alarmProps } from '../interfaces';

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
};
export default THEMES;

export const pageSize = 8;
export const drawerWidth = 240;
export const menuHeight = 56;

export const defaultAlarm: alarmProps = {
  severity: 'info',
  title: '',
  msg: '',
  open: false
};
