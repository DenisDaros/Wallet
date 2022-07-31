export const NEW_ACTION_USER = 'NEW_ACTION_USER';
export const NEW_ACTION_EXPENSES = 'NEW_ACTION_EXPENSES';

export const newActionUser = (email) => ({
  type: 'NEW_ACTION_USER',
  email });

export const newActionExpenses = (state) => ({
  type: 'NEW_ACTION_EXPENSES',
  state });
