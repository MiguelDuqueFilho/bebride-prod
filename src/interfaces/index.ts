export type PlanType = {
  id: number;
  title: string;
  resume: string;
  icon: string;
  url: string;
  show: boolean;
};

export type DepositionItem = {
  id: number;
  eventId: number;
  depositionTitle: string;
  depositionDescription: string;
  depositionFilename: string;
  uploadId: number;
  depositionShow: boolean;
  updatedAt: string;
  Events: [
    {
      eventName: string;
    }
  ];
};

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
