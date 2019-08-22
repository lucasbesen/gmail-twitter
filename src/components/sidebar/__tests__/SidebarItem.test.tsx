import React from 'react';
import renderer from 'react-test-renderer';

import { SIDEBAR_ITEM_TYPE } from '../constants';
import SidebarItem from '../SidebarItem';

it('should render SidebarItem active', () => {
  const component = renderer.create(
    <SidebarItem isActive={true} type={SIDEBAR_ITEM_TYPE.INBOX}>
      Inbox
    </SidebarItem>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render SidebarItem snoozed', () => {
  const component = renderer.create(<SidebarItem type={SIDEBAR_ITEM_TYPE.SNOOZED}>Snoozed</SidebarItem>);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render SidebarItem starred', () => {
  const component = renderer.create(<SidebarItem type={SIDEBAR_ITEM_TYPE.STARRED}>Starred</SidebarItem>);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
