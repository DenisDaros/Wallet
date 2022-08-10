import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
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
                <td>Editar/Excluir</td>
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
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
