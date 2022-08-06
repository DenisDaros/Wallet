export const NEW_ACTION_USER = 'NEW_ACTION_USER';
export const NEW_ACTION_EXPENSES = 'NEW_ACTION_EXPENSES';
export const NEW_ACTION_GET_API = 'NEW_ACTION_GET_API';

export const newActionUser = (email) => ({
  type: NEW_ACTION_USER,
  email });

export const newActionExpenses = (state) => ({
  type: NEW_ACTION_EXPENSES,
  state });

export const newActionGetApi = (currencies) => ({
  type: NEW_ACTION_GET_API,
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
