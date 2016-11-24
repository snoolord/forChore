import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// containers
import AppContainer from './app_container';
import SessionFormContainer from './session/session-form-container';
import AppBar from 'material-ui';
import SideBarContainer from './side-bar/side-bar-container';
import CreateGroupContainer from './group/create-group-container';
import GroupShowContainer from './group/group-show-container';
import EditGroupContainer from './group/edit-group-container';
import MyChoreContainer from './chores/my-chore-container';
// actions
import { fetchAGroup } from '../actions/group_actions';
import { filterUser } from '../actions/filter_actions';
import { fetchUsers } from '../actions/user_actions';
import { receiveErrors } from '../actions/session_actions';
// themes
import theme from './theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
    height: 40
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

const myTheme = getMuiTheme(theme);

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    let errors = [];
    console.log("are we redirecting!!!");
    store.dispatch(receiveErrors(errors));
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/dashboard');
    }
  };

  const _preventRootAccess = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser && nextState.location.pathname === '/') {
      console.log("whats going on are we preventing root access?");
      replace('/dashboard');
    }
  };
  const getUsers = () => {
    store.dispatch(fetchUsers());
  };

  // const _redirectIfLoggedOut = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   console.log(currentUser);
  //   console.log("are we going here? redirect if logged out");
  //   if (currentUser === null) {
  //     replace('/');
  //   }
  // };
  const handleUpdate = () => {
    window.scroll(0, 0);
  };

  const _requestAGroup = (nextState) => {
    store.dispatch(fetchAGroup(nextState.params.id));
    store.dispatch(filterUser(0));
  };

  return (
    <MuiThemeProvider muiTheme={myTheme}>
      <Provider store={store}>
        <Router history={hashHistory} onUpdate={handleUpdate}>
          <Route path="/" component={AppContainer} onEnter={_preventRootAccess}>
            <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/dashboard" component={SideBarContainer} onEnter={getUsers}>
              <IndexRoute component={MyChoreContainer} />
              <Route path="groups/:id" component={GroupShowContainer} onEnter={_requestAGroup} />
            </Route>
          </Route>
          <Route path="/create_group" component={CreateGroupContainer}/>
          <Route path="/edit_group/:groupId" component={EditGroupContainer}/>
      </Router>
    </Provider>
  </MuiThemeProvider>
  );
};

export default Root;
