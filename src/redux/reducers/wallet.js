// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { NEW_ACTION_GET_API, NEW_ACTION_EXPENSES } from '../actions';

const EXPENSES_INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function wallet(state = EXPENSES_INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_ACTION_GET_API:
    return { ...state,
      currencies: action.currencies };
  case NEW_ACTION_EXPENSES:
    return { ...state,
      expenses: [...state.expenses, action.expenses] };
  default:
    return state;
  }
}

export default wallet;
