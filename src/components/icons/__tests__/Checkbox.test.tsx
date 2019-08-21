import React from 'react';
import renderer from 'react-test-renderer';

import { Checkbox } from '../';

it('should render Checkbox icon without error', () => {
  const component = renderer.create(<Checkbox />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
