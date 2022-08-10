import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('cobertura de testes', () => {
  it('testando se existe inputs', () => {
  renderWithRouterAndRedux(<App />)

    const email = screen.getByRole('textbox');
    expect(email).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
  });
  it('Testando o Login e a entrada na carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />)
    expect(history.location.pathname).toEqual('/');

    const email = screen.getByTestId("email-input");
    userEvent.type(email, 'denis.daros@gmail.com');

    const senha = screen.getByTestId('password-input');
    userEvent.type(senha, '1234567');

    const button = screen.getByRole('button', { name: /entrar/i });
    userEvent.click(button);

    const path = history.location.pathname;
    expect(path).toEqual('/carteira');
  });
  it('Testando <wallet />', () => {
    renderWithRouterAndRedux(<Wallet />);

    const email = screen.getByTestId('email-field');
    expect(email).toBeInTheDocument();

    const expenses = screen.getByTestId('total-field');
    expect(totalExpenses).toBeInTheDocument();

    const currency = screen.getByTestId('header-currency-field');
    expect(currency).toBeInTheDocument();
  });
});
