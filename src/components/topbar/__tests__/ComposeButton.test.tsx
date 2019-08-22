import React from 'react';
import renderer from 'react-test-renderer';

import ComposeButton from '../ComposeButton';

it('should render ComposeButton without error', () => {
  const component = renderer.create(<ComposeButton />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
