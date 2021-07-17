import {
    SET_UNIVERSITIES_DONE,
    SET_UNIVERSITIES_LOADING,
} from '../actions/types';

const initialState = {
    universities: [],
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_UNIVERSITIES_DONE:
            return { ...state, universities: action.payload }
        case SET_UNIVERSITIES_LOADING:
            return { ...state, loading: action.payload }
        default:
            return state;
    }
}