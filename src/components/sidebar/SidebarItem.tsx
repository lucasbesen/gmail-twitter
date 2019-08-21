import React from 'react';
import styled from 'styled-components';

interface StyledProps {
  readonly isActive: boolean;
}

const SIDEBAR_ITEM_TYPE = {
  INBOX: 'INBOX',
  STARRED: 'STARRED',
  SNOOZED: 'SNOOZED',
};

const Wrapper = styled.div<StyledProps>`
  background-color: ${props => props.isActive ? '#fce8e6' : '#fff'};
  display: flex;
  height: 30px;
  margin-right: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  align-items: center;
  padding-left: 10px;
`;

const Text = styled.span<StyledProps>`
  color: ${props => props.isActive ? '#d93025' : '#d3d3d3'};
  font-weight: 600;
  margin-left: 20px;
`;

const Icon = styled.img.attrs({
  src: 'https://www.gstatic.com/images/icons/material/system/2x/inbox_gm_googlered600_20dp.png',
})`
  height: 20px;
`;

type Props = {
  isActive?: boolean;
  type?: string;
}

const SidebarItem: React.FC<Props> = ({ isActive = false, type }) => (
  <Wrapper isActive={isActive}>
    <Icon />
    <Text isActive={isActive}>Inbox</Text>
  </Wrapper>
);

export default SidebarItem;
