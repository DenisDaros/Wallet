import React from 'react';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  // componentDidMount() {
  //   // const { expenses } = this.props;
  //   // console.log(expenses);
  //   this.valueHeader();
  // }

  // valueHeader = () => {
  //   console.log('teste');
  //   const { expenses } = this.props;
  //   let saldoTotal = 0.00;
  //   expenses.forEach((i) => {
  //     const valorTotal = Number(i.despesa)
  //       .toFixed(2) * Number(i.exchangeRates[i.currency].ask)
  //       .toFixed(2);
  //     saldoTotal += valorTotal;
  //     this.setState({ valor: saldoTotal.toFixed(2) });
  //     console.log(saldoTotal);
  //   });
  // }

  render() {
    // const { emailState } = this.props;
    // console.log(expenses);
    return (
      <main>
        <Header />
        <WalletForm />
      </main>
    );
  }
}

export default Wallet;
