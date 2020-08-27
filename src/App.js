import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import './App.css';

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
