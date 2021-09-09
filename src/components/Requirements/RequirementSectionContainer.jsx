import {connect} from "react-redux";
import React from 'react';
import RequirementSection from "./RequirementSection";


const RequirementSectionContainer = React.memo((props) => {
    return (
        <RequirementSection { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(RequirementSectionContainer);
