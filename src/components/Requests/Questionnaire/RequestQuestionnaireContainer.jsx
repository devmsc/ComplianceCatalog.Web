import {connect} from "react-redux";
import React from 'react';
import RequestQuestionnaire from "./RequestQuestionnaire";


const RequestQuestionnaireContainer = React.memo((props) => {
    return (
        <RequestQuestionnaire { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(RequestQuestionnaireContainer);
