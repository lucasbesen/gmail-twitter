import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import Topbar from '../Topbar';

it('should render Topbar without error', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Topbar />
    </MemoryRouter>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
