import {connect} from "react-redux";
import React, {useEffect} from 'react';
import EditQuestion from "./EditQuestion";
import {CircularProgress} from "@material-ui/core";
import {getQuestion} from "../../../redux/questions-reducer";
import {useParams} from "react-router-dom";

const EditQuestionContainer = React.memo((props) => {
    const { id } = useParams();
    useEffect( () => {
        props.getQuestion(id);
    }, [id]);
    return (
        props.question ? <EditQuestion { ...props } /> : <CircularProgress/>
    )
})

const mapStateToProps = (state) => {
    return {
        question: state.questions.question
    };
}

export default connect(mapStateToProps, { getQuestion })(EditQuestionContainer);
