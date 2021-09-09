import {connect} from "react-redux";
import React, {useState} from 'react';
import EditRequirement from "./EditRequirement";

const EditRequirementContainer = React.memo((props) => {
    const [requirement, setRequirement] = useState(
        {
            title: 'Требование',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae dicta dolorem ea eaque eligendi minus molestias recusandae sit suscipit! Aperiam delectus officiis sapiente voluptas. Accusamus distinctio facere iste minus quidem tenetur vero, voluptas voluptatem. Ab aliquam architecto doloribus esse fugit itaque minima nam, nesciunt numquam porro rem unde ut.',
            requiredTriggerSet: [
                {
                    content: 'Как дела?',
                    triggers: [ 'Норм', 'Хорошо', 'Отлично' ]
                },
                {
                    content: 'Что делаешь?',
                    triggers: [ 'Ничего', 'Отдыхаю', 'Работаю' ]
                }
            ]
        }
    )
    return (

        <EditRequirement { ...props } setRequirement={setRequirement} requirement={requirement} />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(EditRequirementContainer);
