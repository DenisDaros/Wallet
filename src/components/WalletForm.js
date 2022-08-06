import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchApi } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      despesa: 0,
      descrição: '',
      moeda: '',
      pagamento: '',
      categoria: '',
    };
  }

  componentDidMount() {
    const { newActionGetApiDispatch } = this.props;
    newActionGetApiDispatch();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { despesa, descrição, moeda, pagamento, categoria } = this.state;
    const { currencies } = this.props;

    return (
      <main>
        { !currencies
          ? <h1>Carregando...</h1>
          : (
            <>
              <div>
                { console.log(currencies) }
                <h1>WalletForm</h1>
              </div>
              <form>
                <label htmlFor="despesa">
                  Despesa:
                  <input
                    type="number"
                    name="despesa"
                    id="despesa"
                    placeholder="Valor"
                    data-testid="value-input"
                    value={ despesa }
                    onChange={ this.handleChange }
                  />
                </label>

                <label htmlFor="descrição">
                  Descrição da despesa:
                  <input
                    type="text"
                    name="descrição"
                    id="descrição"
                    placeholder="Descrição"
                    data-testid="description-input"
                    value={ descrição }
                    onChange={ this.handleChange }
                  />
                </label>

                <label htmlFor="moeda">
                  Moeda:
                  <select
                    type="select"
                    name="moeda"
                    data-testid="currency-input"
                    id="moeda"
                    value={ moeda }
                    onChange={ this.handleChange }
                  >
                    {currencies.map((i) => (
                      <option key={ i }>{ i }</option>
                    ))}
                  </select>
                </label>

                <label htmlFor="pagamento">
                  Forma de pagamento:
                  <select
                    type="select"
                    name="pagamento"
                    id="pagamento"
                    data-testid="method-input"
                    value={ pagamento }
                    onChange={ this.handleChange }
                  >
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Cartão de crédito">Cartão de crédito</option>
                    <option value="Cartão de débito">Cartão de débito</option>
                  </select>
                </label>

                <label htmlFor="categoria">
                  Categoria da compra:
                  <select
                    type="select"
                    name="categoria"
                    id="categoria"
                    data-testid="tag-input"
                    value={ categoria }
                    onChange={ this.handleChange }
                  >
                    <option value="Alimentação">Alimentação</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Saúde">Saúde</option>
                  </select>
                </label>
              </form>
            </>
          )}
      </main>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.func.isRequired,
  newActionGetApiDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  newActionGetApiDispatch: () => dispatch(fetchApi()) });

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
