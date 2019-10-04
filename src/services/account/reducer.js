import { FETCH_CURRENT_ACCOUNT } from './actionTypes';

const initialState = {
  account: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_ACCOUNT:
      return {
        ...state,
        account: action.payload
      };
    default:
      return state;
  }
}
