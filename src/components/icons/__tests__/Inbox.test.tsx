import React from 'react';
import renderer from 'react-test-renderer';

import { Inbox } from '../';

it('should render Inbox icon without error', () => {
  const component = renderer.create(<Inbox />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
