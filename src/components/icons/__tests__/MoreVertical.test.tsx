import React from 'react';
import renderer from 'react-test-renderer';

import { MoreVertical } from '../';

it('should render MoreVertical icon without error', () => {
  const component = renderer.create(<MoreVertical />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
