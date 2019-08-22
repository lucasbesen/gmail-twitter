import React from 'react';
import renderer from 'react-test-renderer';

import { FilledStar } from '../';

it('should render FilledStar icon without error', () => {
  const component = renderer.create(<FilledStar />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
