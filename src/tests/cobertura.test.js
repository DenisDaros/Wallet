import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
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
    renderWithRouterAndRedux(<App />);

    ;
    const email = screen.getByTestId("email-input");
    userEvent.type(email, 'denisv.daros@gmail.com');

    const senha = screen.getByTestId('password-input');
    userEvent.type(senha, '1234567');

    const button = screen.getByRole('button', { name: /entrar/i });
    userEvent.click(button);

    const Title = screen.getByText('TrybeWallet');
    expect(Title).toBeInTheDocument();
  });
  
});
