import {Button, Chip, Container, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect} from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    complianceProcesses: {
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

const ComplianceRisks = ({complianceProcesses, getComplianceProcesses}) => {

    useEffect(() => {
        getComplianceProcesses();
    }, [])

    const styles = useStyles();
    return (
        <Container className={styles.complianceProcesses}>
            <Table component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell>Комплаенс-процедура</TableCell>
                        <TableCell>Дата создания</TableCell>
                        <TableCell>Дата обновления</TableCell>
                        <TableCell align={'center'}>Действия</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {complianceProcesses.map(x =>
                        <TableRow>
                            <TableCell className={styles.content}>{x.content}</TableCell>
                            <TableCell>
                                <Chip variant={"outlined"} key={Date.parse(x.createdAt)} label={new Date(Date.parse(x.createdAt)).toLocaleString()}/>
                            </TableCell>
                            <TableCell>
                                <Chip variant={"outlined"} key={Date.parse(x.updatedAt)} label={new Date(Date.parse(x.updatedAt)).toLocaleString()}/>
                            </TableCell>
                            <TableCell align={'center'} className={styles.actionButtons}>
                                <Button variant={'outlined'}>Редактировать</Button>
                                <Button variant={'outlined'}>Удалить</Button>
                            </TableCell>
                        </TableRow>
                    )}
                    <TableRow>
                        <TableCell align={'right'} colSpan={4}>
                            <Link className={styles.addButton} to={{ pathname: `/complianceProcesses/create` }}>
                                <Button variant={'outlined'} color={'secondary'}>Добавить комплаенс-процедуру</Button>
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Container>
    )
}

export default ComplianceRisks;
