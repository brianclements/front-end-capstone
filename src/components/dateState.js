import { today, dateAsNum } from '../utils/dateHelpers.js';
import { fetchAPI, submitAPI } from '../utils/api.js';

const initialState = [
  "Please select a date"
];

const initializeTimes = (state, lookup) => {
  return fetchAPI(lookup.date);
};

const parseForm = (e) => {
  return submitAPI(e.target);
};

export { initializeTimes, initialState, parseForm };
