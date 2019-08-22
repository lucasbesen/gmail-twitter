import React from 'react';
import renderer from 'react-test-renderer';

import Sidebar from '../Sidebar';

it('should render Sidebar without errors', () => {
  const component = renderer.create(<Sidebar />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
