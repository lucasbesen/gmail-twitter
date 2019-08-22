import React from 'react';
import renderer from 'react-test-renderer';

import ProfilePic from '../ProfilePic';

it('should render ProfilePic without error', () => {
  const component = renderer.create(<ProfilePic />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
