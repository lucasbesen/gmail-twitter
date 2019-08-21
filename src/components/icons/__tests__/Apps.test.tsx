import React from 'react';
import renderer from 'react-test-renderer';

import { Apps } from '../';

it('should render Apps icon without error', () => {
  const component = renderer.create(<Apps />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
