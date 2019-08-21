import { sharedStyle, sidebarIconSharedStyle } from '../utils';

it('should return css for sharedStyle utils', () => {
  expect(sharedStyle).toMatchSnapshot();
});

it('should return css for sidebarIconSharedStyle utils', () => {
  expect(sidebarIconSharedStyle).toMatchSnapshot();
});
