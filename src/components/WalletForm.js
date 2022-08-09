import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchApi, fetchApiExpenses } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getApiDispatch } = this.props;
    getApiDispatch();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  actionButton = () => {
    const { submitExpensesApi } = this.props;
    const { value, description, currency, method, tag, id } = this.state;
    const expenses = { value, description, currency, method, tag, id };
    submitExpensesApi(expenses);
    this.setState({ id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro' });
  }

  render() {
    const { value, description, currency, method, tag, id } = this.state;
    const { currencies } = this.props;
    return (
      <main>
        { !currencies
          ? <h1>Carregando...</h1>
          : (
            <>
              <div>
                <h1>WalletForm</h1>
              </div>
              <form>
                <label htmlFor="despesa">
                  Despesa:
                  <input
                    type="number"
                    name="value"
                    id={ id }
                    placeholder="Valor"
                    data-testid="value-input"
                    value={ value }
                    onChange={ this.handleChange }
                  />
                </label>

                <label htmlFor="descrição">
                  Descrição da despesa:
                  <input
                    type="text"
                    name="description"
                    id="descrição"
                    placeholder="Descrição"
                    data-testid="description-input"
                    value={ description }
                    onChange={ this.handleChange }
                  />
                </label>

                <label htmlFor="moeda">
                  Moeda:
                  <select
                    type="select"
                    name="currency"
                    data-testid="currency-input"
                    id="moeda"
                    value={ currency }
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
                    name="method"
                    id="pagamento"
                    data-testid="method-input"
                    value={ method }
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
                    name="tag"
                    id="categoria"
                    data-testid="tag-input"
                    value={ tag }
                    onChange={ this.handleChange }
                  >
                    <option value="Alimentação">Alimentação</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Saúde">Saúde</option>
                  </select>
                </label>
                <button
                  type="button"
                  name="addBtn"
                  onClick={ () => { this.actionButton(); } }
                >
                  Adicionar Despesa
                </button>
              </form>
            </>
          )}
      </main>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getApiDispatch: PropTypes.func.isRequired,
  submitExpensesApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getApiDispatch: () => dispatch(fetchApi()),
  submitExpensesApi: (expenses) => dispatch(fetchApiExpenses(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
