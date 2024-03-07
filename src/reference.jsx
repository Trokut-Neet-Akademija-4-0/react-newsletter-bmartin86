import './App.css';
import React, { Component } from 'react';
import logoMobile from './assets/illustration-sign-up-mobile.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      valid: 0, //0 estado inicial, 1 the field is left empty, 2 invalid email
      form: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.backToForm = this.backToForm.bind(this);
  }
  handleChange(e) {
    this.setState({ email: e.target.value, valid: 0 });
  }
  backToForm() {
    this.setState({ email: '', valid: 0, form: true });
  }
  checkEmail() {
    const regex =
      /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;
    if (this.state.email == '') {
      this.setState({
        valid: 1,
      });
    } else if (regex.test(this.state.email) || this.state.email === 'test') {
      this.setState({
        form: false,
      });
    } else {
      this.setState({
        valid: 2,
      });
    }
  }
  render() {
    const validation =
      this.state.valid == 0
        ? ''
        : this.state.valid == 1
        ? 'The field is left empty'
        : this.state.valid == 2
        ? 'The email address is invalid'
        : null;

    return (
      <div>
        {this.state.form ? (
          <div className="box-main">
            <img
              className="ilustration mobile"
              src={logoMobile}
              alt="icon list"
            ></img>
            <div className="box-text">
              <h1>Stay update!</h1>
              <h2>
                Join 60,000+ product managers receiving monthly updates on:
              </h2>

              <p>
                <img src="src/assets/icon-list.svg" alt="icon list"></img>
                Product discovery and building what matters
              </p>
              <p>
                <img src="src/assets/icon-list.svg" alt="icon list"></img>
                Measuring to ensure updates are a success
              </p>
              <p>
                <img src="src/assets/icon-list.svg" alt="icon list"></img>And
                much more!
              </p>
              <form>
                <div className="labels">
                  <label>email address</label>
                  <label className="validations">{validation}</label>
                </div>
                <input
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  placeholder="email@company.com"
                ></input>
                <btn onClick={this.checkEmail} className="btn">
                  Subscribe to monthly newsletter
                </btn>
              </form>
            </div>
            <img
              className="ilustration desktop"
              src="src/assets/illustration-sign-up-desktop.svg"
              alt="icon list"
            ></img>
          </div>
        ) : (
          <div className="box-message">
            <img
              className="icon-success"
              src="src/assets/icon-success.svg"
              alt="icon success"
            ></img>
            <h1>Thanks for subscribing!</h1>
            <p className="msg">
              A confirmation email has been sent to{' '}
              <span>{this.state.email}</span>. Please open it and click the
              button inside to confirm your subscription
            </p>
            <div onClick={this.backToForm} className="btn">
              Dismiss message
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
