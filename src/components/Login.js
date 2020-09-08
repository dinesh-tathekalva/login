import React, { Component } from 'react';



class Login extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      error: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.firstName)  {
      return this.setState({ error: 'First name is required' });
    }

    if (!this.state.lastName) {
      return this.setState({ error: 'Last name is required' });
    }

    if (!this.state.email) {
        return this.setState({ error: 'Email is required' });
      }

    return this.setState({ error: '' });
  }

  handleFirstNameChange = evt => {
    this.setState({
        firstName: evt.target.value,
    });
  };

  handleLastNameChange = evt => {
    this.setState({
        lastName: evt.target.value,
    });
  }

  handleEmailChange = evt => {
    this.setState({
        email: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    const styles = {
        form: {
          display: 'flex',
          flexDirection: 'column',
          width: '20%',
          justifyContent: 'center'
       }
     }

    return (
        
      <div>
        <form style={styles.form} onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              {this.state.error}
            </h3>
          }

          <div></div> 
          <label>First Name</label>
          <input type="text" data-test="username" value={this.state.firstName} onChange={this.handleFirstNameChange} />

          <label>Last Name</label>
          <input type="text" data-test="username" value={this.state.lastName} onChange={this.handleLastNameChange} />

          <label>Email</label>
          <input type="text" data-test="username" value={this.state.email} onChange={this.handleEmailChange} />

          <input style={{marginTop: '1em'}} type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}

export default Login;