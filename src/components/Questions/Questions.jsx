import {
    Button, Chip, CircularProgress,
    Container,
    Dialog,
    DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    questions: {
        marginTop: theme.spacing(13)
    },
    actionButtons: {
        width: '300px',
        '& > button': {
            margin: '0 5px'
        }
    },
    addButton: {
        textDecoration: 'none'
    },
    editButton: {
        textDecoration: 'none',
        marginRight: '15px'
    }
}));

const Questions = ({questions, getQuestion, getQuestions, deleteQuestion}) => {

    useEffect(() => {
        getQuestions();
    }, [])

    const styles = useStyles();
    if (questions[0] == null) {
        return <CircularProgress/>
    }

    const handleDelete = (id) => {
        deleteQuestion(id);
    }

    return (
        <Container className={styles.questions}>
            {
                    questions[0]
                ?
                    <Table component={Paper}>
                        <TableHead>
                            <TableCell>Вопрос</TableCell>
                            <TableCell>Дата создания</TableCell>
                            <TableCell>Дата обновления</TableCell>
                            <TableCell>Тип вопроса</TableCell>
                            <TableCell>Место</TableCell>
                            <TableCell align={'center'}>Действия</TableCell>
                        </TableHead>
                        <TableBody>
                            {questions.map(x =>
                                <TableRow key={x.id}>
                                    <TableCell>{x.content}</TableCell>
                                    <TableCell>
                                        <Chip variant={"outlined"} key={Date.parse(x.createdAt)} label={new Date(Date.parse(x.createdAt)).toLocaleString()}/>
                                    </TableCell>
                                    <TableCell>
                                        <Chip variant={"outlined"} key={Date.parse(x.updatedAt)} label={new Date(Date.parse(x.updatedAt)).toLocaleString()}/>
                                    </TableCell>
                                    <TableCell>
                                        {
                                            x.questionType === 0 ? 'Один вариант' :
                                                x.questionType === 1 ? 'Несколько вариантов' :
                                                    x.questionType === 2 ? 'Свободное поле' : 'NAN'
                                        }
                                    </TableCell>
                                    <TableCell>{x.number ? x.number : 'Не назначено'}</TableCell>
                                    <TableCell align={'center'} className={styles.actionButtons}>
                                        <Link className={styles.editButton} to={{ pathname: `questions/edit/${x.id}` }}>
                                            <Button variant={'outlined'}>Редактировать</Button>
                                        </Link>
                                        <Button onClick={ () => handleDelete(x.id) } variant={'outlined'} color={'primary'} >Удалить</Button>
                                    </TableCell>
                                </TableRow>
                            )}
                            <TableRow>
                                <TableCell align={'right'} colSpan={6}>
                                    <Link className={styles.addButton} to={{ pathname: `/questions/create` }}>
                                        <Button variant={'outlined'} color={'secondary'}>Добавить вопрос</Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                :
                    <CircularProgress/>
            }
        </Container>
    )
}

export default Questions;
