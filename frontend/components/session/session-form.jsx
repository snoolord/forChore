import React from 'react';
import { Link, withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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

	navLink() {
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
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit.bind(this)} className="login-form-box">
          Welcome to forChore!
					<br/>
					{this.navLink()}
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label> Username: <br/>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>
						<br/>
						<label> Password: <br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<RaisedButton type="submit">{this.props.path === 'login' ? 'Login' : 'Sign Up'}</RaisedButton>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
