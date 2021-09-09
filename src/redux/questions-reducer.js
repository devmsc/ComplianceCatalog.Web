import {questionsAPI} from "../api/api";

const SET_QUESTIONS = 'SET_QUESTIONS'
const ADD_QUESTION = 'ADD_QUESTION'
const SET_QUESTION = 'SET_QUESTION'
const DELETE_QUESTION = 'DELETE_QUESTION'


let initialState = {
    questions: [],
    question: null
}

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return { ...state, questions: action.questions };
        case ADD_QUESTION:
            return { ...state, questions: [action.question, ...state.questions] }
        case SET_QUESTION:
            return { ...state, question: action.question }
        case DELETE_QUESTION:
            return { ...state, questions: state.questions.filter(x => x.id !== action.id) }
        default:
            return state;
    }
}

//action creators

export const setQuestions = (questions) => ({type: SET_QUESTIONS, questions});
export const addQuestion = (question) => ({type: ADD_QUESTION, question});
export const setQuestion = (question) => ({type: SET_QUESTION, question});
export const removeQuestion = (id) => ({type: DELETE_QUESTION, id});

//thunk

export const getQuestions = () => async (dispatch) => {
    let response = await questionsAPI.getQuestions();
    dispatch(setQuestions(response));
}

export const createQuestion = (question) => async (dispatch) => {
    let response = await questionsAPI.createQuestion(question);
    dispatch(addQuestion(response));
}

export const getQuestion = (id) => async (dispatch) => {
    let response = await questionsAPI.getQuestion(id);
    dispatch(setQuestion(response));
}

export const deleteQuestion = (id) => async (dispatch) => {
    let response = await questionsAPI.deleteQuestion(id);
    dispatch(removeQuestion(response));
}

export default questionsReducer;
