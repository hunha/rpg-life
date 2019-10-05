import { FETCH_STATS } from './actionTypes';

const initialState = {
  stats: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATS:
      return {
        ...state,
        stats: action.payload
      };
    default:
      return state;
  }
}
