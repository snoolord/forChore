import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session-form-container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator';
import {
  pink500, blue700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  appBar: {
    height: 50
    },
  palette: {
    primary1Color: pink500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: pink500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
});

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };
  console.log(muiTheme);
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
  );
};

export default Root;
