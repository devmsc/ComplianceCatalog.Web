import './App.css';
import {Backdrop, CircularProgress, createTheme, ThemeProvider} from "@material-ui/core";
import {Switch as RouteSwitch, HashRouter, Route} from 'react-router-dom';
import {connect, Provider} from "react-redux";
import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import store from "./redux/redux-store";
import {handleError, initializeApp} from "./redux/app-reducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {withSuspense} from "./HOC/withSuspense";
import AddRelationStageContainer from "./components/RelationStages/AddRelationStage/AddRelationStageContainer";
import ComplianceRisksContainer from "./components/ComplianceRisks/ComplianceRisksContainer";
import ComplianceProcessesContainer from "./components/ComplianceProcesses/ComplianceProcessesContainer";
import RelationStagesContainer from "./components/RelationStages/RelationStagesContainer";
import RequirementsContainer from "./components/Requirements/RequirementsContainer";
import QuestionsContainer from "./components/Questions/QuestionsContainer";
import AddQuestionContainer from "./components/Questions/AddQuestion/AddQuestionContainer";
import EditQuestionContainer from "./components/Questions/EditQuestion/EditQuestionContainer";
import QuestionnaireContainer from "./components/Questionnaire/QuestionnaireContainer";
import AddComplianceRiskContainer from "./components/ComplianceRisks/AddComplianceRisk/AddComplianceRiskContainer";
import AddComplianceProcessContainer
    from "./components/ComplianceProcesses/AddComplianceProcess/AddComplianceProcessContainer";
import AddRequirementContainer from "./components/Requirements/AddRequirement/AddRequirementContainer";
import RequestContainer from "./components/Requests/Request/RequestContainer";
import EditBusinessClientResponseContainer from "./components/Requests/Request/EditBusinessClientResponseContainer";
import CreateRequestContainer from "./components/Requests/CreateRequest/CreateRequestContainer";
import RequestQuestionnaireContainer from "./components/Requests/Questionnaire/RequestQuestionnaireContainer";
import RequestsContainer from "./components/Requests/Request/RequestsContainer";
import ManageRequirementsContainer from "./components/Requirements/ManageRequirementsContainer";
import RequirementSectionContainer from "./components/Requirements/RequirementSectionContainer";
import EditRequirementContainer from "./components/Requirements/EditRequirementContainer";
import NewRequestContainer from "./components/Requests/NewRequest/NewRequestContainer";


const theme = createTheme({
    transitions: {
        create: () => 'none'
    },
    palette: {
        secondary: {
            light: '#718792',
            main: '#4caf50',
            dark: '#1c313a',
            contrastText: '#fff',
        }
    }
});


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 5,
        color: '#fff'
    }
}));




const App = React.memo(({initializeApp, initialized}) => {
    let styles = useStyles();

    useEffect(() => {
        initializeApp();
    }, []);

    if (!initialized) {
        return (
            <Backdrop className={styles.backdrop} open={!initialized}>
                <CircularProgress color={'inherit'}/>
            </Backdrop>
        )
    }

    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <HeaderContainer/>
                <RouteSwitch>
                    <Route path={'/requests'} render={withSuspense(RequestsContainer)}/>
                    <Route path={'/newRequest'} render={withSuspense(NewRequestContainer)}/>
                    <Route path={'/editRequirement'} render={withSuspense(EditRequirementContainer)}/>
                    <Route path={'/request/create'} render={withSuspense(CreateRequestContainer)}/>
                    <Route path={'/requirementSection'} render={withSuspense(RequirementSectionContainer)}/>
                    <Route path={'/manageRequirements'} render={withSuspense(ManageRequirementsContainer)}/>
                    <Route path={'/request/questionnaire'} render={withSuspense(RequestQuestionnaireContainer)}/>
                    <Route path={'/request'} render={withSuspense(RequestContainer)}/>
                    <Route path={'/editBusinessResponse'} render={withSuspense(EditBusinessClientResponseContainer)}/>
                    <Route exact path={'/complianceRisks/create'} render={withSuspense(AddComplianceRiskContainer)}/>
                    <Route path={'/complianceRisks'} render={withSuspense(ComplianceRisksContainer)}/>
                    <Route exact path={'/relationStages/create'} render={withSuspense(AddRelationStageContainer)}/>
                    <Route path={'/relationStages'} render={withSuspense(RelationStagesContainer)}/>
                    <Route exact path={'/complianceProcesses/create'} render={withSuspense(AddComplianceProcessContainer)}/>
                    <Route path={'/complianceProcesses'} render={withSuspense(ComplianceProcessesContainer)}/>
                    <Route exact path={'/questions/create'} render={withSuspense(AddQuestionContainer)}/>
                    <Route exact path={'/questions/edit/:id'} render={withSuspense(EditQuestionContainer)}/>
                    <Route path={'/questions'} render={withSuspense(QuestionsContainer)}/>
                    <Route exact path={'/requirements/create'} render={withSuspense(AddRequirementContainer)}/>
                    <Route path={'/requirements'} render={withSuspense(RequirementsContainer)}/>
                    <Route path={'/questionnaire'} render={withSuspense(QuestionnaireContainer)}/>
                </RouteSwitch>
            </ThemeProvider>
        </HashRouter>
    )
})


const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        globalError: state.app.globalError
    }
}


let AppContainer = connect(mapStateToProps, { initializeApp, handleError })(App);



let Application = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
}

export default Application;
