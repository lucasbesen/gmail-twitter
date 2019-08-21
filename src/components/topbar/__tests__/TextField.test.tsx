import React from 'react';
import renderer from 'react-test-renderer';

import TextField from '../TextField';

it('should render TextField without error', () => {
  const component = renderer.create(<TextField />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
