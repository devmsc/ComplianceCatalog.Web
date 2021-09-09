import {connect} from "react-redux";
import React from 'react';
import Questions from "./Questions";
import {deleteQuestion, getQuestion, getQuestions} from "../../redux/questions-reducer";

const QuestionsContainer = React.memo((props) => {
    return (
        <Questions { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        questions: state.questions.questions
    };
}


export default connect(mapStateToProps, { getQuestion, getQuestions, deleteQuestion })(QuestionsContainer);
