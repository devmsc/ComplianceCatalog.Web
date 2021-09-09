import {connect} from "react-redux";
import React from 'react';
import RelationStages from "./RelationStages";
import {getRelationStages} from "../../redux/relationStages-reducer";

const RelationStagesContainer = React.memo((props) => {
    return (
        <RelationStages { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        relationStages: state.relationStages.relationStages
    };
}


export default connect(mapStateToProps, { getRelationStages })(RelationStagesContainer);
