import {
    SET_USER_INFO,
} from '../actions/types';

const initialState = {
    userName: '',
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return { ...state, userName: action.payload }
        default:
            return state;
    }
}