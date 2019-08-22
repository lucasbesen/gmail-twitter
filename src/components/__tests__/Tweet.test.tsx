import React from 'react';
import renderer from 'react-test-renderer';

import Tweet from '../Tweet';
import { tweetMock } from '../../mocks/tweets';

it('should render Tweet without error', () => {
  const component = renderer.create(<Tweet tweet={tweetMock} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
