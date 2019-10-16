import { FETCH_EXB_BAR } from './actionTypes';

const initialState = {
    expBars: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_EXB_BAR:
            return {
                ...state,
                expBars: action.payload
            };
        default:
            return state;
    }
}
