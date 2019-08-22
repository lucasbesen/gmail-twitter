import { ITweet } from '../types';

export const tweetMock: ITweet = {
  id: '11111111',
  text: 'This is a tweet',
  user: {
    name: 'User number 1',
  },
  created_at: 'Wed Aug 21 23:17:05 +0000 2019',
};

export const tweetMock2: ITweet = {
  id: '22222222',
  text: 'This is a tweet 2',
  user: {
    name: 'User number 2',
  },
  created_at: 'Wed Aug 19 23:17:05 +0000 2019',
};
