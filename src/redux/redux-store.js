import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import appReducer from "./app-reducer";
import thunkMiddleWare from "redux-thunk";
import questionsReducer from "./questions-reducer";
import relationStagesReducer from "./relationStages-reducer";
import complianceRisksReducer from "./complianceRisks-reducer";
import complianceProcessesReducer from "./complianceProcesses-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    app: appReducer,
    questions: questionsReducer,
    relationStages: relationStagesReducer,
    complianceRisks: complianceRisksReducer,
    complianceProcesses: complianceProcessesReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;
