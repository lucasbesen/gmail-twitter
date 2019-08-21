import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { debounce } from 'lodash';

import getFilterValue from '../../utils/getFilterValue';
import Logo from './Logo';
import ProfilePic from './ProfilePic';
import TextField from './TextField';
import { Menu, Help, Apps } from '../icons';

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
        <Menu />
        <Logo />
      </InnerWrapper>
      <TextField defaultValue={filter} onChange={e => handleFilter(e.target.value)} />
      <InnerWrapper>
        <Help />
        <Apps />
        <ProfilePic />
      </InnerWrapper>
    </Wrapper>
  );
};

export default withRouter(Topbar);
