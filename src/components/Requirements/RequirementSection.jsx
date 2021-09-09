import {Button, Chip, Container, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    requirementSection: {
        marginTop: theme.spacing(13)
    },
    actionButtons: {
        width: '300px',
        '& > button': {
            margin: '0 10px'
        }
    },
    chip: {
        borderRadius: '6px'
    }
}));

const requirements = [
    {
        number: 'R-1.1',
        title: 'Требование...',
        status: 'Актуальное'
    },
    {
        number: 'R-1.2',
        title: 'Требование...',
        status: 'Требует правок'
    },
    {
        number: 'R-1.3',
        title: 'Требование...',
        status: 'Актуальное'
    },

]

const RequirementSection = () => {
    const history = useHistory();

    const handleRedirectToEdit = () => {
        alert('Пользователя перебрасывает на страницу редактирования требования');
        history.push('/editRequirement');
    }

    const styles = useStyles();

    return (
        <Container className={styles.requirementSection}>
            <Table component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell>Уникальный номер</TableCell>
                        <TableCell>Название</TableCell>
                       <TableCell align={'center'}>Действия</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {requirements.map(x =>
                        <TableRow key={x}>
                            <TableCell><Chip className={styles.chip} color={'primary'} label={x.number}/></TableCell>
                            <TableCell>{x.title}</TableCell>
                            <TableCell className={styles.actionButtons}>
                                <Button variant={'outlined'}>Удалить</Button>
                                <Button onClick={handleRedirectToEdit} variant={'contained'} color={'primary'}>Редактировать</Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Container>
    )
}

export default RequirementSection;
