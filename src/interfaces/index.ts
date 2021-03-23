import { Color } from '@material-ui/lab/Alert';

export interface UserCredentialsPost {
  userName?: string;
  userEmail: string;
  password: string;
  isNewUser?: boolean;
}

export interface Personxxx {
  name: string;
  username: string;
  avatar: string;
}

export interface EventProps {
  id?: number;
  title: string;
  content: string;
  status: string;
  initialDate?: string;
  eventDate?: string;
  finishDate?: string;
  fileKey?: string;
  fileLocation: string;
}

export interface alarmProps {
  severity?: Color;
  title?: string;
  msg?: string;
  open?: boolean;
}
