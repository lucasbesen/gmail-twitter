import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

interface User {
  name: string;
}

interface Tweet {
  created_at: Date;
  id: string;
  text: string;
  user: User;
}

interface Twitter {
  search: Tweet[];
}

interface TweetsQueryData {
  twitter: Twitter;
}

interface TweetsQueryVars {
  q: string;
  count: number;
  resultType: string;
}

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
  const { data, loading } = useQuery<TweetsQueryData, TweetsQueryVars>(TWEETS_QUERY, {
    variables: { q: '#mars', count: 40, resultType: 'recent' },
  });

  return <div>testing</div>;
};

export default Home;
