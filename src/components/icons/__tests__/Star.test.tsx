import React from 'react';
import renderer from 'react-test-renderer';

import { Star } from '../';

it('should render Star icon without error', () => {
  const component = renderer.create(<Star />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
