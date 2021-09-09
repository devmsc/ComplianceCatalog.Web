import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
    CardContent,
    Container,
    Typography
} from "@material-ui/core";
import {useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const grid = 16;

const useStyles = makeStyles(theme => ({
    questionnaire: {
        marginTop: theme.spacing(13),
        minHeight: '700px'
    },
    question: {
        marginBottom: `${grid}px`
    }
}));


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const Questionnaire = ({questions}) => {
    const styles = useStyles();
    const [state, setState] = useState({ questions: questions });

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        if (result.destination.index === result.source.index) {
            return;
        }
        const questions = reorder(
            state.questions,
            result.source.index,
            result.destination.index
        );
        console.log(result.source.index)
        console.log(result.destination.index)
        setState({questions});
    }

    return (
        <Container maxWidth={'md'} className={styles.questionnaire}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="list">
                    {provided => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {state.questions.map((question, index) => (
                                <Question question={question} index={index} key={question.id}/>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </Container>
    )
};


const Question = ({ question, index }) => {
    const styles = useStyles();
    return (
        <Draggable draggableId={question.id} index={index}>
            {provided => (
                <Accordion className={styles.question} ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{question.content}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{question.createdAt}</Typography>
                        <Typography>{question.updatedAt}</Typography>
                        <Typography>{question.questionType}</Typography>
                        <Typography>{question.triggersCount}</Typography>
                    </AccordionDetails>
                </Accordion>
            )}
        </Draggable>
    );
}



export default Questionnaire;
