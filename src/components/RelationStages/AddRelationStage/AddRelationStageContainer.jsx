import {connect} from "react-redux";
import React from 'react';
import {createRelationStage} from "../../../redux/relationStages-reducer";
import AddRelationStage from "./AddRelationStage";

const AddRelationStageContainer = React.memo((props) => {
    return (
        <AddRelationStage { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(mapStateToProps, { createRelationStage })(AddRelationStageContainer);
