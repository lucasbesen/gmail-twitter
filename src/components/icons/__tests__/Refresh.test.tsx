import React from 'react';
import renderer from 'react-test-renderer';

import { Refresh } from '../';

it('should render Refresh icon without error', () => {
  const component = renderer.create(<Refresh />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
