import {connect} from "react-redux";
import React from 'react';
import ComplianceRisks from "./ComplianceRisks";
import {getComplianceRisks} from "../../redux/complianceRisks-reducer";

const ComplianceRisksContainer = React.memo((props) => {
    return (
        <ComplianceRisks { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        complianceRisks: state.complianceRisks.complianceRisks
    };
}


export default connect(mapStateToProps, { getComplianceRisks })(ComplianceRisksContainer);
