import {connect} from "react-redux";
import React from 'react';
import {createComplianceRisk} from "../../../redux/complianceRisks-reducer";
import AddComplianceProcess from "./AddComplianceProcess";
import {createComplianceProcess} from "../../../redux/complianceProcesses-reducer";

const AddComplianceProcessContainer = React.memo((props) => {
    return (
        <AddComplianceProcess { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(mapStateToProps, { createComplianceProcess })(AddComplianceProcessContainer);
