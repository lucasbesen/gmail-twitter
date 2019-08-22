import React from 'react';
import renderer from 'react-test-renderer';

import { Clock } from '../';

it('should render Clock icon without error', () => {
  const component = renderer.create(<Clock />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
