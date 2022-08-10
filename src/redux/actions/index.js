export const USER = 'USER';
export const EXPENSES = 'EXPENSES';
export const GET_API = 'GET_API';
export const REMOVE = 'REMOVE';

export const newActionUser = (email) => ({
  type: USER,
  email });

export const newActionExpenses = (expenses) => ({
  type: EXPENSES,
  expenses,
  valueAtual: Number(expenses
    .exchangeRates[expenses.currency].ask) * Number(expenses.value),
});

export const newActionGetApi = (currencies) => ({
  type: GET_API,
  currencies });

export const fetchApi = () => async (dispatch) => {
  const api = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(api);
    const data = await response.json();
    const array = Object.keys(data);
    const getFilter = array.filter((i) => i !== 'USDT');
    dispatch(newActionGetApi(getFilter));
  } catch (error) {
    return error;
  }
};

export const fetchApiExpenses = (expenses) => async (dispatch) => {
  const api = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(api);
    const data = await response.json();
    dispatch(newActionExpenses({ ...expenses, exchangeRates: data }));
  } catch (error) {
    return console.log(error);
  }
};

export const newActionDeleteExpenses = (payload) => ({
  type: REMOVE,
  payload,
});
