import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import components from './templates';

/**
 * In development, App.js loads all template components
 * and creates name-match routes e.g. Home.js -> /home
 */
function App() {
  return (
    <Router>
      {Object.keys(components).map(c => {
        return <Route key={c} path={`/${c}`} exact component={components[c]} />;
      })}
    </Router>
  );
}

export default App;
