import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailState } = this.props;
    console.log(emailState);
    return (
      <header>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">{ emailState }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">Cambio: BRL</p>
      </header>
    );
  }
}

Wallet.propTypes = {
  emailState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailState: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
