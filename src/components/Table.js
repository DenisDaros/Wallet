import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newActionDeleteExpenses } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <>
        <div>
          <h1>Table</h1>
        </div>
        <table>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
          <tbody>
            { expenses.map((i) => (
              <tr key={ i.id }>
                <td>{ i.description }</td>
                <td>{ i.tag }</td>
                <td>{ i.method }</td>
                <td>{ Number(i.value).toFixed(2) }</td>
                <td>{ i.exchangeRates[i.currency].name }</td>
                <td>{ Number(i.exchangeRates[i.currency].ask).toFixed(2) }</td>
                <td>
                  { (Number(i.exchangeRates[i.currency]
                    .ask) * Number(i.value)).toFixed(2) }

                </td>
                <td>REAL</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => removeExpense(i.id) }
                  >
                    Excluir
                  </button>
                  <button
                    data-testid="edit-btn"
                    type="button"
                  >
                    Editar
                  </button>

                </td>
              </tr>
            )) }
          </tbody>
        </table>
      </>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string),
  removeExpense: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (state) => dispatch(newActionDeleteExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
