import React from 'react';
import { Link, withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import {grey500, blue500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
  errorStyle: {
    color: grey500,
  },
  underlineStyle: {
    borderColor: grey500,
  },
  floatingLabelStyle: {
    color: grey500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}
  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;

		this.props.processForm(user);
	}

	navLink( ) {
		if (this.props.path === "login") {
			return <Link to="/signup"><RaisedButton className="session-form-instead-button">Sign up</RaisedButton></Link>;
		} else {
			return <Link to="/login" className="session-form-instead-button"><RaisedButton>Login</RaisedButton></Link>;
		}
	}


  renderErrors() {
  return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  );
}

	render() {
		return (
      <div className="login-box">
        <Card className="login-form-container">
          <form onSubmit={this.handleSubmit.bind(this)} className="login-form-box">
            Welcome to forChore!

            <div className="session-username">
              <TextField
                floatingLabelText="Username"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                onChange={this.update("username")}
                >
              </TextField>
            </div>
            <br/>
            <div className="session-password">
              <TextField
                floatingLabelText="Password"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                onChange={this.update("password")}
                >
              </TextField>
            </div>
            {this.renderErrors()}
            <RaisedButton className="session-submit-button" type="submit"
              backgroundColor={styles.floatingLabelFocusStyle.color}
              >{this.props.path === 'login' ? 'Login' : 'Sign Up'}</RaisedButton>
          </form>
        </Card>
      </div>
		);
	}

}

export default withRouter(SessionForm);
