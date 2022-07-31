// Esse reducer será responsável por tratar as informações da pessoa usuária

const USER_INITIAL_STATE = {
  email: '',
};

function user(state = USER_INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_ACTION_USER':
    return { ...state,
      email: action.email };
  default:
    return state;
  }
}

export default user;
