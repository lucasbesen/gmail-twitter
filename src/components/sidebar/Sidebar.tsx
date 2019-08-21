import React from 'react';
import styled from 'styled-components';

import ComposeButton from '../ComposeButton';
import SidebarItem from './SidebarItem';
import { SIDEBAR_ITEM_TYPE } from './constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20%;
  background-color: #fff;
  height: 100%;
`;

const Sidebar: React.FC = () => (
  <Wrapper>
    <ComposeButton />
    <SidebarItem type={SIDEBAR_ITEM_TYPE.INBOX} isActive>
      Inbox
    </SidebarItem>
    <SidebarItem type={SIDEBAR_ITEM_TYPE.STARRED}>Starred</SidebarItem>
    <SidebarItem type={SIDEBAR_ITEM_TYPE.SNOOZED}>Snoozed</SidebarItem>
  </Wrapper>
);

export default Sidebar;
