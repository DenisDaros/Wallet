import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  // reduc = () => {
  //   const { expenses } = this.props;
  //   const total = expenses.reduce((acc, curr) => {
  //     const { currency, exchangeRates, value } = curr;
  //     return acc + (Number(exchangeRates[currency].ask) * Number(value));
  //   }, 0);
  //   console.log('teste');
  //   console.log(total);
  //   // this.setState({ valor: total });
  //   return total.toFixed(2);
  // };

  render() {
    // const { valor } = this.state;
    const { emailState, total } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">{emailState}</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">Cambio: BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  total: PropTypes.number.isRequired,
  emailState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps)(Header);
