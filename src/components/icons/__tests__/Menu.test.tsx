import React from 'react';
import renderer from 'react-test-renderer';

import { Menu } from '../';

it('should render Menu icon without error', () => {
  const component = renderer.create(<Menu />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
