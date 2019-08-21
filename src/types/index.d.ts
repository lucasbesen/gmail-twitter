interface IUser {
  name: string;
}

export interface ITweet {
  created_at: Date;
  id: string;
  text: string;
  user: IUser;
}

export interface ITwitter {
  search?: ITweet[];
  tweet?: ITweet;
}

export interface IQuery {
  twitter: ITwitter;
}
