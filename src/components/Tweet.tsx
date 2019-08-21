import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { ITweet } from '../types';

const Wrapper = styled.div`
  font-size: 14px;
  border-bottom: 1px solid #eee;
  padding: 14px;
  display: flex;
  cursor: pointer;

  :hover {
    box-shadow: 0px 1px 2px 0px #d3d3d3;
  }
`;

const TweetInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  font-weight: 600;
`;

const TweetText = styled.div`
  flex: 8;
  padding-right: 15px;
`;

interface Props {
  tweet: ITweet;
}

const Tweet: React.FC<Props> = ({ tweet }) => (
  <Wrapper>
    <TweetInfo>{tweet.user.name}</TweetInfo>
    <TweetText>{tweet.text}</TweetText>
    <TweetInfo>{moment(new Date(tweet.created_at)).format('DD/MM/YYYY HH:mm')}</TweetInfo>
  </Wrapper>
);

export default Tweet;
