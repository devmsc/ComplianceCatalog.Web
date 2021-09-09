import {complianceRisksAPI, relationStagesAPI} from "../api/api";

const SET_COMPLIANCE_RISKS = 'SET_COMPLIANCE_RISKS'
const ADD_COMPLIANCE_RISK = 'ADD_COMPLIANCE_RISK'
const SET_COMPLIANCE_RISK = 'SET_COMPLIANCE_RISK'
const DELETE_COMPLIANCE_RISK = 'DELETE_COMPLIANCE_RISK'


let initialState = {
    complianceRisks: [],
    complianceRisk: null
}

const complianceRisksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPLIANCE_RISKS:
            return { ...state, complianceRisks: action.complianceRisks };
        case ADD_COMPLIANCE_RISK:
            return { ...state, complianceRisks: [action.complianceRisk, ...state.complianceRisks] }
        case SET_COMPLIANCE_RISK:
            return { ...state, complianceRisk: action.complianceRisk }
        case DELETE_COMPLIANCE_RISK:
            return { ...state, complianceRisks: state.complianceRisks.filter(x => x.id !== action.id) }
        default:
            return state;
    }
}

//action creators

export const setComplianceRisks = (complianceRisks) => ({type: SET_COMPLIANCE_RISKS, complianceRisks});
export const addComplianceRisk = (complianceRisk) => ({type: ADD_COMPLIANCE_RISK, complianceRisk});
export const setComplianceRisk = (complianceRisk) => ({type: SET_COMPLIANCE_RISK, complianceRisk});
export const removeComplianceRisk = (id) => ({type: DELETE_COMPLIANCE_RISK, id});

//thunk

export const getComplianceRisks = () => async (dispatch) => {
    let response = await complianceRisksAPI.getComplianceRisks();
    dispatch(setComplianceRisks(response));
}

export const createComplianceRisk = (relationStage) => async (dispatch) => {
    let response = await complianceRisksAPI.createComplianceRisk(relationStage);
    dispatch(addComplianceRisk(response));
}

export const getComplianceRisk = (id) => async (dispatch) => {
    let response = await complianceRisksAPI.getComplianceRisk(id);
    dispatch(setComplianceRisk(response));
}

export const deleteComplianceRisk = (id) => async (dispatch) => {
    let response = await complianceRisksAPI.deleteComplianceRisk(id);
    dispatch(removeComplianceRisk(response));
}

export default complianceRisksReducer;
