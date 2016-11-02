import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <MuiThemeProvider>
    <div className="main">
      <header>
        <GreetingContainer />
      </header>
      {children}
    </div>
  </MuiThemeProvider>
);

export default App;
