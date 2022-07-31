import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newActionUser } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };
  }

 inputChange = ({ target }) => {
   const { name, value } = target;
   this.setState({ [name]: value }, () => this.validLogin());
 }

 validLogin = () => {
   const { email, password } = this.state;
   const magicNumber = 6;
   const emailValidation = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;
   const condition = (emailValidation.test(email) && password.length >= magicNumber);
   this.setState({ disabled: !condition });
 }

 redirectLogin = () => {
   const { email } = this.state;
   const { newActionUserDispatch } = this.props;
   newActionUserDispatch(email);
   this.setState({
     redirect: true,
   });
 }

 render() {
   const { email, password, disabled, redirect } = this.state;
   return (
     <>
       {redirect && <Redirect to="/carteira" />}
       {!redirect && (
         <div>
           Login
           <form>
             <label htmlFor="email">
               E-mail:
               <input
                 type="email"
                 name="email"
                 value={ email }
                 data-testid="email-input"
                 onChange={ this.inputChange }
               />
             </label>
             <label htmlFor="password">
               Senha:
               <input
                 type="password"
                 name="password"
                 value={ password }
                 data-testid="password-input"
                 onChange={ this.inputChange }
               />
             </label>
             <button
               type="button"
               name="Entrar"
               disabled={ disabled }
               onClick={ () => this.redirectLogin() }
             >
               entrar
             </button>
           </form>
         </div>

       )}
     </>
   );
 }
}

Login.propTypes = {
  newActionUserDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  newActionUserDispatch: (email) => dispatch(newActionUser(email)) });

export default connect(null, mapDispatchToProps)(Login);
