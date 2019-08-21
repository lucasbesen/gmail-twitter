import React, { useState, useEffect } from 'react';
import * as R from 'ramda';
import { useQuery } from '@apollo/react-hooks';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Tweet from '../components/Tweet';
import Loading from '../components/Loading';

import { IQuery, ITweet } from '../types';
import getFilterValue from '../utils/getFilterValue';

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

const Home: React.FC<RouteComponentProps> = ({ location }) => {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const { data, loading } = useQuery<IQuery, TweetsQueryVars>(TWEETS_QUERY, {
    variables: { q: '#mars', count: 40, resultType: 'recent' },
  });

  useEffect(() => {
    if (!R.isEmpty(data) && !R.isEmpty(data!.twitter)) {
      setTweets(data!.twitter.search || []);
    }
  }, [tweets, data]);

  const renderTweets = () => {
    const search = getFilterValue(location.search);
    if (search) {
      const filteredTweets = R.filter(R.where({ text: R.contains(search) }))(data!.twitter.search || []);
      return R.map((tweet: ITweet) => <Tweet key={tweet.id} tweet={tweet} />, filteredTweets);
    }
    return R.map((tweet: ITweet) => <Tweet key={tweet.id} tweet={tweet} />, tweets);
  };

  return <Wrapper>{loading ? <Loading /> : renderTweets()}</Wrapper>;
};

export default withRouter(Home);
