

import {
    SET_UNIVERSITIES,
    SET_STARRED_UNIVERSITY
} from "../actions/types";

import { setUniversitiesDone, setUniversityLoading } from '../actions/universities_actions';

import { call, put, takeEvery, select } from "redux-saga/effects";

import { apiGet } from '../functions/api';

import { NUMBER_OF_ITEMS_TO_SHOW_IN_TABLE, STARRED_UNI } from '../config/generalConfigs';


export const getUniState = (state) => state.universitiesReducer.universities;

export function* setUniversitiesSaga(action) {
    try {
        yield put(setUniversityLoading(true));
        const res = yield call(apiGet, action.payload);
        const randomUnisArray = [];
        const starredUni = localStorage.getItem(STARRED_UNI);
        if (starredUni && !action.payload) {
            randomUnisArray.push(JSON.parse(starredUni));
        }
        const numberOfUnisToFetch = starredUni ? NUMBER_OF_ITEMS_TO_SHOW_IN_TABLE - 1 : NUMBER_OF_ITEMS_TO_SHOW_IN_TABLE;
        const valueToIterate = Math.min(numberOfUnisToFetch, res.length);
        for (let i = 0; i < valueToIterate; i++) {
            const randomNumber = Math.floor(Math.random() * res.length);
            randomUnisArray.push({ ...res[randomNumber], Starred: false });
            res.splice(randomNumber, 1);
        }
        yield put(setUniversityLoading(false));
        yield put(setUniversitiesDone(randomUnisArray));
    } catch {
        yield put(setUniversityLoading(false));
        console.log('ERROR');
    }
}

export function* setStarredUniversitiesSaga(action) {
    try {
        const unis = yield select(getUniState);
        let selectedUni;
        let newUnisState = [];

        if (!!unis[action.payload].Starred) {
            newUnisState = unis.map(uni => { return { ...uni, Starred: false } });
            localStorage.removeItem(STARRED_UNI);
        } else {
            selectedUni = { ...unis[action.payload], Starred: true };
            localStorage.setItem(STARRED_UNI, JSON.stringify(selectedUni));
            newUnisState = unis.filter((uni, index) => index !== action.payload);
            newUnisState = newUnisState.map(uni => { return { ...uni, Starred: false } });
            newUnisState.unshift(selectedUni);
        }

        yield put(setUniversitiesDone(newUnisState));
    } catch {
        console.log('ERROR');
    }
}

export function* watchUniversitiesMiddleware() {
    yield takeEvery(SET_UNIVERSITIES, setUniversitiesSaga);
    yield takeEvery(SET_STARRED_UNIVERSITY, setStarredUniversitiesSaga);
}