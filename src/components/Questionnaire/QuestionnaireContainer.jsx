import {connect} from "react-redux";
import React from 'react';
import Questionnaire from "./Questionnaire";

const QuestionnaireContainer = React.memo((props) => {

    // const custom: Quote = {
    //     id: `id-${k}`,
    //     content: `Quote ${k}`
    // };
    const questions = [
        {
            id: '1',
            content: 'first',
            number: 3,
            createdAt: '15 12',
            updatedAt: '16 40',
            questionType: '2',
            triggersCount: '5'
        },
        {
            id: '2',
            content: 'second',
            number: 3,
            createdAt: '12 12',
            updatedAt: '13 41',
            questionType: '1',
            triggersCount: '2'
        },
        {
            id: '3',
            content: 'third',
            number: 3,
            createdAt: '14 14',
            updatedAt: '18 18',
            questionType: '0',
            triggersCount: '3'
        },
        {
            id: '4',
            content: 'fourth',
            number: 3,
            createdAt: '17 48',
            updatedAt: '19 35',
            questionType: '1',
            triggersCount: '6'
        },
        {
            id: '5',
            content: 'fifth',
            number: 3,
            createdAt: '17 48',
            updatedAt: '19 35',
            questionType: '1',
            triggersCount: '6'
        },
        {
            id: '6',
            content: 'sixth',
            number: 3,
            createdAt: '17 48',
            updatedAt: '19 35',
            questionType: '1',
            triggersCount: '6'
        },
        {
            id: '7',
            content: 'seventh',
            number: 3,
            createdAt: '17 48',
            updatedAt: '19 35',
            questionType: '1',
            triggersCount: '6'
        },
        {
            id: '8',
            content: 'eighth',
            number: 3,
            createdAt: '17 48',
            updatedAt: '19 35',
            questionType: '1',
            triggersCount: '6'
        },
        {
            id: '9',
            content: 'ninth',
            number: 3,
            createdAt: '17 48',
            updatedAt: '19 35',
            questionType: '1',
            triggersCount: '6'
        },
        {
            id: '10',
            content: 'tenth',
            number: 3,
            createdAt: '17 48',
            updatedAt: '19 35',
            questionType: '1',
            triggersCount: '6'
        }
    ]

    return (
        <Questionnaire questions={questions} />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(mapStateToProps, {  })(QuestionnaireContainer);
