import {connect} from "react-redux";
import React from 'react';
import AddComplianceRisk from "./AddComplianceRisk";
import {createComplianceRisk} from "../../../redux/complianceRisks-reducer";

const AddComplianceRiskContainer = React.memo((props) => {
    return (
        <AddComplianceRisk { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(mapStateToProps, { createComplianceRisk })(AddComplianceRiskContainer);
