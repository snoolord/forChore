import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const App = ({ children }) => (
  <MuiThemeProvider>
    <div className="main">
      <header>
        <h1 className="main-header">forChore</h1>
        <GreetingContainer />
      </header>
      {children}
    </div>
  </MuiThemeProvider>
);

export default App;
