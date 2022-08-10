import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { string } from 'stylelint/lib/formatters';

class Header extends Component {
  reduc = () => {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, curr) => {
      const { currency, exchangeRates, value } = curr;
      return acc + (Number(exchangeRates[currency].ask) * Number(value));
    }, 0);
    return total.toFixed(2);
  };

  render() {
    const { emailState } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">{emailState}</p>
        <p data-testid="total-field">{ this.reduc() }</p>
        <p data-testid="header-currency-field">Cambio: BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  // total: PropTypes.number.isRequired,
  emailState: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  // total: state.wallet.total,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
