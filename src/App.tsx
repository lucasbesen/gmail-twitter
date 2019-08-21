import React from 'react';
import styled from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';

import apolloClient from './graphql/apolloClient';

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
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <AppWrapper>
        <Topbar />
        <Wrapper>
          <Sidebar />
          <AppRouter />
        </Wrapper>
      </AppWrapper>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
