import React, { useState, useEffect } from 'react';
import * as R from 'ramda';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Tweet from '../components/Tweet';
import Loading from '../components/Loading';

import { ITweet, ITwitter } from '../types';

interface TweetsQueryData {
  twitter: ITwitter;
}

interface TweetsQueryVars {
  q: string;
  count: number;
  resultType: string;
}

const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
`;

const TWEETS_QUERY = gql`
  query TweetsQuery($q: String!, $count: Int!, $resultType: SearchReponse!) {
    twitter {
      search(q: $q, count: $count, result_type: $resultType) {
        id
        text
        created_at
        user {
          name
        }
      }
    }
  }
`;

const Home: React.FC = () => {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const { data, loading } = useQuery<TweetsQueryData, TweetsQueryVars>(TWEETS_QUERY, {
    variables: { q: '#mars', count: 40, resultType: 'recent' },
  });

  useEffect(() => {
    if (!R.isEmpty(data) && !R.isEmpty(data!.twitter)) {
      setTweets(data!.twitter.search);
    }
  }, [data, tweets]);

  const renderTweets = R.map((tweet: ITweet) => <Tweet key={tweet.id} tweet={tweet} />);

  return <Wrapper>{loading ? <Loading /> : renderTweets(tweets)}</Wrapper>;
};

export default Home;
