import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fce8e6;
  display: flex;
  height: 30px;
  margin-right: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  align-items: center;
  padding-left: 10px;
`;

const Text = styled.span`
  color: #d93025;
  font-weight: 600;
  margin-left: 20px;
`;

const Icon = styled.img.attrs({
  src: 'https://www.gstatic.com/images/icons/material/system/2x/inbox_gm_googlered600_20dp.png',
})`
  height: 20px;
`;

const SidebarItem: React.FC = () => (
  <Wrapper>
    <Icon />
    <Text>Inbox</Text>
  </Wrapper>
);

export default SidebarItem;
