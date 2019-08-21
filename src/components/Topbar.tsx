import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import ProfilePic from './ProfilePic';
import TextField from './TextField';

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

const Topbar = () => (
  <Wrapper>
    <Logo />
    <TextField />
    <ProfilePic />
  </Wrapper>
);

export default Topbar;
