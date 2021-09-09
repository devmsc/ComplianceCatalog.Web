import {makeStyles} from "@material-ui/core/styles";
import {Button, Chip, Container, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    manageRequirements: {
        marginTop: theme.spacing(13)
    },
    status: {
        borderRadius: '6px',
        width: '160px'
    },
    statusColumn: {
        width: '200px'
    },
    nameColumn: {

    },
    type: {
        borderRadius: '6px',
        width: '50px'
    },
    requirementPage: {
        width: '220px'
    }
}))

const requirements = [
    {
        name: 'FATCA/CRS',
        type: 'R-1',
        status: 'Актуальна'
    },
    {
        name: 'Идентификация',
        type: 'R-2',
        status: 'Ожидает изменений'
    },
    {
        name: 'ПОД/ФТ/ФРОМУ',
        type: 'R-3',
        status: 'Актуальна'
    },
    {
        name: 'ПДн',
        type: 'R-4',
        status: 'Недействительна'
    }
]

const ManageRequirements = () => {
    const history = useHistory();
    const handleRedirectToRequirementPage = () => {
        alert('Пользователя перебрасывает на страницу определенного раздела требований');
        history.push('/requirementSection');
    }
    const styles = useStyles();
    return (
        <Container component={Paper} className={styles.manageRequirements}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Тип</TableCell>
                        <TableCell>Название</TableCell>
                        <TableCell className={styles.requirementPage} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {requirements.map(x =>
                        <TableRow key={x}>
                            <TableCell><Chip className={styles.type} color={'primary'} label={x.type}/></TableCell>
                            <TableCell>{x.name}</TableCell>
                            <TableCell align={'right'}>
                                <Button onClick={handleRedirectToRequirementPage} variant={'outlined'} color={'primary'}>Страница раздела</Button>
                            </TableCell>
                        </TableRow>
                    )}
                    <TableRow>
                        <TableCell colSpan={3} align={'right'}>
                            <Button variant={'contained'} color={'secondary'}>Добавить раздел</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Container>
    )
}

export default ManageRequirements;
