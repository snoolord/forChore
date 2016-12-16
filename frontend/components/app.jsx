import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { logout } from '../actions/session_actions';
import { Link, withRouter } from 'react-router';
import theme from './theme';
import SideBarContainer from './side-bar/side-bar-container';
import SplashContainer from './splash/splash-container';

const style = {

};

class App extends React.Component {
   constructor(props) {
      super(props);
   }

   logo() {
      if (this.props.loggedIn) {
         return (
            <div>
               <Link to="/dashboard/"><img src="https://i.imgur.com/u9xEJsy.png" className="logo"></img></Link>
            </div>
         );
      } else {
         return (
            <Link to="/"><img src="https://i.imgur.com/u9xEJsy.png" className="logo"></img></Link>
         );
      }
   }
   handleLogout() {
      this.props.logout();
      this.props.router.push("/");
   }
   headerLinks() {
      let path = this.props.location.pathname.slice(1);
      if (path === "" && !this.props.loggedIn) {
         return (
            <nav className="nav-links">
               <Link to="/login" className="current"><FlatButton className="login-signup">Login</FlatButton></Link>
               <Link to="/signup" className="current"><FlatButton className="login-signup">Sign Up</FlatButton></Link>
            </nav>
         );
      } else if (path === "login" && !this.props.loggedIn){
         return (
            <nav className="nav-links">
               <Link to="/signup" className="current"><FlatButton className="login-signup">Sign Up</FlatButton></Link>
            </nav>
         );
      } else if (path === "signup" && !this.props.loggedIn) {
         return (
            <nav className="nav-links">
               <Link to="/login" className="current"><FlatButton className="login-signup">Login</FlatButton></Link>
            </nav>
         );
      } else if (this.props.loggedIn){
         return (
            <nav>
               <FlatButton
                  className="logout-signup"
                  id="logout-button"
                  onClick={this.handleLogout.bind(this)}
                  style={{verticalAlign: 'middle'}}
                  >Logout</FlatButton>
            </nav>
         );
      }
   }

   render() {
      return (
         <div className="main">
            <header>
               <nav
                  className="main-header"
                  >
                  <div className="icon-spacing">
                     {this.logo()}
                     {this.headerLinks()}
                  </div>
               </nav>
            </header>
            <SplashContainer location={this.props.location} />
            {this.props.children}
            <footer>
               <div className="footer">
                  <div className="footer-right">
                     <div className="created-by">
                        a solution forChores by <div className="my-name">Winston Zhao</div>
                  </div>
                  <a href="https://github.com/winstonjz"
                     >
                     <i className="fa fa-github social-icon" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/winstonjzhao"
                     >
                     <i className="fa fa-linkedin-square social-icon" aria-hidden="true"></i>
                  </a>
               </div>
            </div>
         </footer>
      </div>
   );
}
}

export default App;
