import { authAPI } from "../api/api";

const SET_USER = 'SET_USER'
const SET_CLIENT = 'SET_CLIENT';
const SET_MANAGER = 'SET_MANAGER';
const SET_EXPERT = 'SET_EXPERT';

let initialState = {
    user: 'WINDOWS_LOGIN',
    role: 'client'
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user };
        case SET_CLIENT:
            return { ...state, role: 'client' };
        case SET_MANAGER:
            return { ...state, role: 'manager' };
        case SET_EXPERT:
            return { ...state, role: 'expert' };
        default:
            return state;
    }
}

export const setUser = (user) => ({type: SET_USER, user});

export const setClient = () => ({type: SET_CLIENT})
export const setManager = () => ({type: SET_MANAGER})
export const setExpert = () => ({type: SET_EXPERT})

export const authorize = () => async (dispatch) => {
    let response = await authAPI.me();
    dispatch(setUser(response));
}

export const becomeClient = () => async (dispatch) => {
    dispatch(setClient());
}

export const becomeExpert = () => async (dispatch) => {
    dispatch(setExpert());
}

export const becomeManager = () => async (dispatch) => {
    dispatch(setManager());
}

export default authReducer;
