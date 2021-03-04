import { Color } from '@material-ui/lab/Alert';

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
};
export default THEMES;

export const pageSize = 8;

export interface alarmProps {
  severity?: Color;
  title?: string;
  msg?: string;
  open?: boolean;
}

export const defaultAlarm: alarmProps = {
  severity: 'info',
  title: '',
  msg: '',
  open: false
};
