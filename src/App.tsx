import React, { ReactElement } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Main from './pages/index';

const App = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
};

export default App;
