import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { debounce } from 'lodash';
import { Menu } from 'styled-icons/material/Menu';
import { Apps } from 'styled-icons/material/Apps';
import { HelpCircle } from 'styled-icons/boxicons-regular/HelpCircle';

import Logo from './Logo';
import ProfilePic from './ProfilePic';
import TextField from './TextField';
import getFilterValue from '../utils/getFilterValue';

const sharedStyle = css`
  height: 25px;
  color: #5f6368;
  margin-right: 25px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  background-color: #fff;
  height: 64px;
  border-bottom: 1px solid #eee;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled(Menu)`
  ${sharedStyle}
`;

const AppsButton = styled(Apps)`
  ${sharedStyle}
`;

const HelpButton = styled(HelpCircle)`
  ${sharedStyle}
`;

const Topbar: React.FC<RouteComponentProps> = ({ location, history }) => {
  const [filter, setFilter] = useState(getFilterValue(location.search));

  const onChangeFilter = debounce((value: string): void => {
    history.push(`?search=${value}`);
  }, 800);

  const handleFilter = (value: string): void => {
    onChangeFilter(value);
    setFilter(value);
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <MenuButton />
        <Logo />
      </InnerWrapper>
      <TextField defaultValue={filter} onChange={e => handleFilter(e.target.value)} />
      <InnerWrapper>
        <HelpButton />
        <AppsButton />
        <ProfilePic />
      </InnerWrapper>
    </Wrapper>
  );
};

export default withRouter(Topbar);
