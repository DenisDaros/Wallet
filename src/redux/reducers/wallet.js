// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const EXPENSES_INITIAL_STATE = {
  state: '',
};

function wallet(state = EXPENSES_INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_ACTION_EXPENSES':
    return { state: action.state };
  default:
    return state;
  }
}

export default wallet;
