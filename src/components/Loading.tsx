import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 50%;
`;

const Loading: React.FC = () => (
  <Wrapper>
    <CircularProgress color="secondary" />
  </Wrapper>
);

export default Loading;
