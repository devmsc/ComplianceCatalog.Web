import {complianceProcessesAPI, complianceRisksAPI, relationStagesAPI} from "../api/api";

const SET_COMPLIANCE_PROCESSES = 'SET_COMPLIANCE_PROCESSES'
const ADD_COMPLIANCE_PROCESS = 'ADD_COMPLIANCE_PROCESS'
const SET_COMPLIANCE_PROCESS = 'SET_COMPLIANCE_PROCESS'
const DELETE_COMPLIANCE_PROCESS = 'DELETE_COMPLIANCE_PROCESS'


let initialState = {
    complianceProcesses: [],
    complianceProcess: null
}

const complianceProcessesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPLIANCE_PROCESSES:
            return { ...state, complianceProcesses: action.complianceProcesses };
        case ADD_COMPLIANCE_PROCESS:
            return { ...state, complianceProcesses: [action.complianceProcess, ...state.complianceProcesses] }
        case SET_COMPLIANCE_PROCESS:
            return { ...state, complianceProcess: action.complianceProcess }
        case DELETE_COMPLIANCE_PROCESS:
            return { ...state, complianceProcesses: state.complianceProcesses.filter(x => x.id !== action.id) }
        default:
            return state;
    }
}

//action creators

export const setComplianceProcesses = (complianceProcesses) => ({type: SET_COMPLIANCE_PROCESSES, complianceProcesses});
export const addComplianceProcess = (complianceProcess) => ({type: ADD_COMPLIANCE_PROCESS, complianceProcess});
export const setComplianceProcess = (complianceProcess) => ({type: SET_COMPLIANCE_PROCESS, complianceProcess});
export const removeComplianceProcess = (id) => ({type: DELETE_COMPLIANCE_PROCESS, id});

//thunk

export const getComplianceProcesses = () => async (dispatch) => {
    let response = await complianceProcessesAPI.getComplianceProcesses();
    dispatch(setComplianceProcesses(response));
}

export const createComplianceProcess = (complianceProcess) => async (dispatch) => {
    let response = await complianceProcessesAPI.createComplianceProcess(complianceProcess);
    dispatch(addComplianceProcess(response));
}

export const getComplianceProcess = (id) => async (dispatch) => {
    let response = await complianceProcessesAPI.getComplianceProcess(id);
    dispatch(setComplianceProcess(response));
}

export const deleteComplianceProcess = (id) => async (dispatch) => {
    let response = await complianceProcessesAPI.deleteComplianceProcess(id);
    dispatch(removeComplianceProcess(response));
}

export default complianceProcessesReducer;
