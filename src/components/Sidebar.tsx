import React from 'react';
import styled from 'styled-components';

import ComposeButton from './ComposeButton';
import SidebarItem from './SidebarItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20%;
  background-color: #fff;
  height: 100%;
`;

const Sidebar = () => (
  <Wrapper>
    <ComposeButton />
    <SidebarItem />
  </Wrapper>
);

export default Sidebar;
