import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter } from 'react-router';
import wait from 'waait';

import Home, { TWEETS_QUERY } from '../Home';
import { tweetMock, tweetMock2 } from '../../mocks/tweets';

const mocks = [
  {
    request: {
      query: TWEETS_QUERY,
      variables: {
        q: '#mars',
        count: 40,
        resultType: 'recent',
      },
    },
    result: {
      data: {
        twitter: {
          search: [...[tweetMock], ...[tweetMock2]],
        },
      },
      loading: false,
    },
  },
];

it('should render Home with loading', async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </MockedProvider>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render Home without error', async () => {
  await act(async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </MockedProvider>,
    );
    await wait(0);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
