import {tableAPI} from "../api/api";

const SET_BIG_DATABASE = 'SET_BIG_DATABASE';
const SET_SMALL_DATABASE = 'SET_SMALL_DATABASE';
const ADD_USER_TO_DATABASE = 'ADD_USER_TO_DATABASE';
const SHOW_FORM = 'SHOW_FORM';
const TOGGLE_FETCHER = 'TOGGLE_FETCHER';
export const DATA_SAVE_SUCCESS = 'DATA_SAVE_SUCCESS';

let initialState = {
    userData: [],
    totalUserCount: 1000,
    totalPageSize: 50,
    currentPage: 1,
    isDataLoaded: false,
    isFormActive: false,
    isFetching: false
};

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BIG_DATABASE:
            return {
                ...state,
                userData: action.data,
                isDataLoaded: true

            };
        case SET_SMALL_DATABASE:
            return {
                ...state,
                userData: action.data,
                isDataLoaded: true

            };
        case ADD_USER_TO_DATABASE:
            return {
                ...state,
                userData: [action.user, ...state.userData,]
            };
        case SHOW_FORM:
            return {
                ...state,
                isFormActive: action.isFormActive
            };
        case TOGGLE_FETCHER:
            return {
                ...state,
                isFetching: action.isFetching
            };

        default:
            return state
    }
};

export default tableReducer


export const showForm = (isFormActive) => ({type: SHOW_FORM, isFormActive});
export const setSmallData = (data) => ({type: SET_SMALL_DATABASE, data});
export const setBigData = (data) => ({type: SET_BIG_DATABASE, data});
export const toggleFetcher = (isFetching) => ({type: TOGGLE_FETCHER, isFetching});
export const addUserToDataBase = (user) => ({type: ADD_USER_TO_DATABASE, user});
export const dataAddedSuccessful = () => ({type: DATA_SAVE_SUCCESS});

//thunk

export const getSmallData = () => {
    return (dispatch) => {
        dispatch(toggleFetcher(true));
        tableAPI.getSmallData()
            .then(data => {
                dispatch(setSmallData(data.data));
                dispatch(toggleFetcher(false));
            })
    }
};
export const getBigData = () => {
    return (dispatch) => {
        dispatch(toggleFetcher(true));
        tableAPI.getBigData()
            .then(data => {
                dispatch(setBigData(data.data));
                dispatch(toggleFetcher(false));
            })
    }
};