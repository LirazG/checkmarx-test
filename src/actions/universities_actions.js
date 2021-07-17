import {
    SET_UNIVERSITIES,
    SET_UNIVERSITIES_DONE,
    SET_STARRED_UNIVERSITY,
    SET_UNIVERSITIES_LOADING,
} from './types';

export function setUniversities(payload) {
    return { type: SET_UNIVERSITIES, payload };
}

export function setUniversitiesDone(payload) {
    return { type: SET_UNIVERSITIES_DONE, payload };
}

export function setStarredUniversity(payload) {
    return { type: SET_STARRED_UNIVERSITY, payload };
}

export function setUniversityLoading(payload) {
    return { type: SET_UNIVERSITIES_LOADING, payload };
}