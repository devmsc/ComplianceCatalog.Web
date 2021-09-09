import {connect} from "react-redux";
import React from 'react';
import ComplianceProcesses from "./ComplianceProcesses";
import {getComplianceProcesses} from "../../redux/complianceProcesses-reducer";

const ComplianceProcessesContainer = React.memo((props) => {
    return (
        <ComplianceProcesses { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        complianceProcesses: state.complianceProcesses.complianceProcesses
    };
}


export default connect(mapStateToProps, { getComplianceProcesses })(ComplianceProcessesContainer);
