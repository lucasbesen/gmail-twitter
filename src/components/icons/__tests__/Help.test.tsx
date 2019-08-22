import React from 'react';
import renderer from 'react-test-renderer';

import { Help } from '../';

it('should render Help icon without error', () => {
  const component = renderer.create(<Help />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
