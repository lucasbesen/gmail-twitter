import React from 'react';
import styled from 'styled-components';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import AppRouter from './AppRouter';

const AppWrapper = styled.div`
  height: 100%;
  overflow-y: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 100%;
`;

const App: React.FC = () => (
  <AppWrapper>
    <Topbar />
    <Wrapper>
      <Sidebar />
      <AppRouter />
    </Wrapper>
  </AppWrapper>
);

export default App;
