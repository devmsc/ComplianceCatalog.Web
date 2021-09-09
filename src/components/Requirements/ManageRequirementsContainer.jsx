import {connect} from "react-redux";
import React from 'react';
import ManageRequirements from "./ManageRequirements";


const ManageRequirementsContainer = React.memo((props) => {
    return (
        <ManageRequirements { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(ManageRequirementsContainer);
