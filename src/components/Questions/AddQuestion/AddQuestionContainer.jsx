import {connect} from "react-redux";
import React from 'react';
import AddQuestion from "./AddQuestion";
import {createQuestion} from "../../../redux/questions-reducer";

const AddQuestionContainer = React.memo((props) => {
    return (
        <AddQuestion { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(mapStateToProps, { createQuestion })(AddQuestionContainer);
