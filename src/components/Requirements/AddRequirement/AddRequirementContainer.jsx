import {connect} from "react-redux";
import React from 'react';
import {createRelationStage} from "../../../redux/relationStages-reducer";
import AddRequirement from "./AddRequirement";

const AddRequirementContainer = React.memo((props) => {
    return (
        <AddRequirement { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(mapStateToProps, {  } )(AddRequirementContainer);
