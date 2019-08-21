import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '../Logo';

it('should render Logo without error', () => {
  const component = renderer.create(<Logo />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
