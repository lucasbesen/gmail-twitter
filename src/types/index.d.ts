interface IUser {
  name: string;
}

export interface ITweet {
  created_at: string;
  id: string;
  text: string;
  user: IUser;
}

export interface ITwitter {
  search?: ITweet[];
  tweet?: ITweet;
}
