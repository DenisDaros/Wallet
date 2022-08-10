// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_API, EXPENSES, REMOVE } from '../actions';

const EXPENSES_INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  editor: false,
  idToEdit: 0,
};

function wallet(state = EXPENSES_INITIAL_STATE, action) {
  switch (action.type) {
  case GET_API:
    return { ...state,
      currencies: action.currencies };
  case EXPENSES:
    return { ...state,
      expenses: [...state.expenses, action.expenses],
      total: (Number(state.total) + Number(action.valueAtual)).toFixed(2) };
  case REMOVE:
    return {
      ...state,
      expenses: state.expenses.filter((i) => i.id !== action.payload),
    };
  default:
    return state;
  }
}

export default wallet;
