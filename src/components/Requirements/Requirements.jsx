import {Button, Container, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {XGrid} from "@material-ui/x-grid";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    requirements: {
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
    }
}));

const data = [
    {
        relationStage: 'ОБСЛУЖИВАНИЕ КЛИЕНТА: вторичная продажа',
        complianceRisk: 'Идентификация',
        complianceProcess: 'Оценка сведений',
        conclusion: <Button variant={'outlined'}>Просмотр</Button>,
        triggers: <Button variant={'outlined'}>Триггеры</Button>,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        relationStage: 'ОБСЛУЖИВАНИЕ КЛИЕНТА: вторичная продажа',
        complianceRisk: 'Идентификация',
        complianceProcess: 'Оценка сведений',
        conclusion: <Button variant={'outlined'}>Просмотр</Button>,
        triggers: <Button variant={'outlined'}>Триггеры</Button>,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        relationStage: 'ОБСЛУЖИВАНИЕ КЛИЕНТА: вторичная продажа',
        complianceRisk: 'Идентификация',
        complianceProcess: 'Оценка сведений',
        conclusion: <Button variant={'outlined'}>Просмотр</Button>,
        triggers: <Button variant={'outlined'}>Просмотр</Button>,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
]

const columns = [
    'Этап взаимоотношений с клиентом',
    'Комплаенс-риск',
    'Комплаенс-процедура',
    'Заключение',
    'Триггеры',
    'Дата создания',
    'Дата обновления',
    'Действия'
]

const Requirements = () => {
    const styles = useStyles();
    return (
        <Container className={styles.requirements}>
            <Table component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell>Этап взаимоотношений с клиентом</TableCell>
                        <TableCell>Комплаенс-риск</TableCell>
                        <TableCell>Комплаенс-процедура</TableCell>
                        <TableCell>Заключение</TableCell>
                        <TableCell>Триггеры</TableCell>
                        <TableCell>Дата создания</TableCell>
                        <TableCell>Дата обновления</TableCell>
                        <TableCell align={'center'}>Действия</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(x =>
                        <TableRow>
                            <TableCell>{x.relationStage}</TableCell>
                            <TableCell>{x.complianceRisk}</TableCell>
                            <TableCell>{x.complianceProcess}</TableCell>
                            <TableCell>{x.conclusion}</TableCell>
                            <TableCell>{x.triggers}</TableCell>
                            <TableCell>{x.createdAt}</TableCell>
                            <TableCell>{x.updatedAt}</TableCell>
                            <TableCell align={'center'} className={styles.actionButtons}>
                                <Button variant={'outlined'}>Редактировать</Button>
                                <Button variant={'outlined'}>Удалить</Button>
                            </TableCell>
                        </TableRow>
                    )}
                    <TableRow>
                        <TableCell align={'right'} colSpan={9}>
                            <Link className={styles.addButton} to={{ pathname: `/requirements/create` }}>
                                <Button variant={'outlined'} color={'secondary'}>Добавить требование</Button>
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Container>
    )
}

export default Requirements;
