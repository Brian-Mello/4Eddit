import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"
import styled from "styled-components";
import { login } from "../../actions";
import {StyledTextField, StyledButtonForms, StyledHeaderForms, StyledImgForms} from "../../style/styled";
import Foureddit from "../images/4eddit.png"

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
  background-color: rgb(237, 127, 97);
  color: white;
`;



class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state;

    this.props.login ( email, password )
    this.setState({
      email: "",
      password:"",
    })
  }

  render() {
    const { email, password } = this.state;
    const { goToSignUpScreen } = this.props;

    return (
      <div>
        <StyledHeaderForms>
          <StyledImgForms src = {Foureddit} />
        </StyledHeaderForms>
          <LoginWrapper onSubmit={this.handleFormSubmit}>
            <h1>Log in</h1>
            <StyledTextField
              color="primary"
              onChange={this.handleFieldChange}
              name="email"
              type="email"
              label="E-mail"
              required
              value={email}
            />
            <StyledTextField
              onChange={this.handleFieldChange}
              name="password"
              type="password"
              label="Password"
              required
              value={password}
            />
            <StyledButtonForms type="submit">Entrar</StyledButtonForms>
            <StyledButtonForms onClick = {goToSignUpScreen}>Cadastro</StyledButtonForms>
          </LoginWrapper>
      </div>
    );
  }
}

const mapDispathToProps = (dispath) => ({
    goToSignUpScreen: () => dispath(push(routes.signUp)),
    login: (email, password) => dispath (login(email, password))
})

export default connect
(
  null,
  mapDispathToProps
)
(LoginPage);