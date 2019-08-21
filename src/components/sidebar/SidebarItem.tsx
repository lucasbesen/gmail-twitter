import React from 'react';
import styled from 'styled-components';

import { FilledStar, Clock, Inbox } from '../icons';

import { SIDEBAR_ITEM_TYPE } from './constants';

import { IStyledProps } from './types';

const Wrapper = styled.div<IStyledProps>`
  background-color: ${props => (props.isActive ? '#fce8e6' : '#fff')};
  display: flex;
  height: 30px;
  margin-right: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
`;

const Text = styled.span<IStyledProps>`
  color: ${props => (props.isActive ? '#d93025' : '#000')};
  font-weight: ${props => props.isActive && '600'};
  margin-left: 20px;
  font-size: 14px;
`;

type Props = {
  isActive?: boolean;
  type: string;
};

const renderIcon: React.FC<{ type: string }> = type => {
  switch (type as any) {
    case SIDEBAR_ITEM_TYPE.SNOOZED:
      return <Clock />;
    case SIDEBAR_ITEM_TYPE.STARRED:
      return <FilledStar />;
    default:
      return <Inbox />;
  }
};

const SidebarItem: React.FC<Props> = ({ isActive = false, type, children }) => (
  <Wrapper isActive={isActive}>
    {renderIcon(type as any)}
    <Text isActive={isActive}>{children}</Text>
  </Wrapper>
);

export default SidebarItem;
