import { combineReducers } from "redux";
import userInfoReducer from './user_info_reducer';
import universitiesReducer from './universities_reducer';

export const rootReducer = combineReducers({
    userInfoReducer,
    universitiesReducer,
});
