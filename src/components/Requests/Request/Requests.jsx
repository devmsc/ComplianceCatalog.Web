import {Button, Chip, Container, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    requests: {
        marginTop: theme.spacing(13),
    },
    status: {
        padding: '0 3px',
        borderRadius: '6px'
    },
    actionsButtons: {
        width: '250px'
    }
}));

const requests = [
    {
        title: 'Проект...',
        author: 'Алексеев Алексей',
        deadline: '15 сентября',
        status: 'Новая заявка'
    },
    {
        title: 'Проект...',
        author: 'Петров Петр',
        deadline: '24 октября',
        status: 'Анализ'
    },
    {
        title: 'Проект...',
        author: 'Семёнов Семён',
        deadline: '24 октября',
        status: 'Результат готов'
    }
]

const Requests = () => {
    const styles = useStyles();
    return (
        <Container className={styles.requests} component={Paper}>
            <Table>
                <TableHead>
                    <TableCell>Заявка</TableCell>
                    <TableCell>Инициатор</TableCell>
                    <TableCell>Сроки</TableCell>
                    <TableCell align={'center'}>Статус</TableCell>
                    <TableCell align={'center'}>Действия</TableCell>
                </TableHead>
                <TableBody>
                    {requests.map(x =>
                        <TableRow>
                            <TableCell>{x.title}</TableCell>
                            <TableCell>{x.author}</TableCell>
                            <TableCell>{x.deadline}</TableCell>
                            <TableCell align={'center'}>
                                <Chip color={'primary'} label={x.status} className={styles.status}/>
                            </TableCell>
                            <TableCell className={styles.actionButtons} align={'center'}>
                                <Button variant={'outlined'}>Редактировать</Button>
                                <Button variant={'outlined'}>Удалить</Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Requests;
