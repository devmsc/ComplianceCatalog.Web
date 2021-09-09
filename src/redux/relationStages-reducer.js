import {relationStagesAPI} from "../api/api";

const SET_RELATIONS_STAGES = 'SET_RELATION_STAGES'
const ADD_RELATION_STAGE = 'ADD_RELATION_STAGE'
const SET_RELATION_STAGE = 'SET_RELATION_STAGE'
const DELETE_RELATION_STAGE = 'DELETE_RELATION_STAGE'


let initialState = {
    relationStages: [],
    relationStage: null
}

const relationStagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RELATIONS_STAGES:
            return { ...state, relationStages: action.relationStages };
        case ADD_RELATION_STAGE:
            return { ...state, relationStages: [action.relationStage, ...state.relationStages] }
        case SET_RELATION_STAGE:
            return { ...state, relationStage: action.relationStage }
        case DELETE_RELATION_STAGE:
            return { ...state, relationStages: state.relationStages.filter(x => x.id !== action.id) }
        default:
            return state;
    }
}

//action creators

export const setRelationStages = (relationStages) => ({type: SET_RELATIONS_STAGES, relationStages});
export const addRelationStage = (relationStage) => ({type: ADD_RELATION_STAGE, relationStage});
export const setRelationStage = (relationStage) => ({type: SET_RELATION_STAGE, relationStage});
export const removeRelationStage = (id) => ({type: DELETE_RELATION_STAGE, id});

//thunk

export const getRelationStages = () => async (dispatch) => {
    let response = await relationStagesAPI.getRelationStages();
    dispatch(setRelationStages(response));
}

export const createRelationStage = (relationStage) => async (dispatch) => {
    let response = await relationStagesAPI.createRelationStage(relationStage);
    dispatch(addRelationStage(response));
}

export const getRelationStage = (id) => async (dispatch) => {
    let response = await relationStagesAPI.getRelationStage(id);
    dispatch(setRelationStage(response));
}

export const deleteRelationStage = (id) => async (dispatch) => {
    let response = await relationStagesAPI.deleteRelationStage(id);
    dispatch(removeRelationStage(response));
}

export default relationStagesReducer;
