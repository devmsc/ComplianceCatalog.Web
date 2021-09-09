import {Button, Container, Paper, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";
import {useState} from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    createRequestContainer: {
        marginTop: theme.spacing(13),
    },
    createRequest: {
        padding: theme.spacing(3)
    },
    field: {
        margin: '10px 0px',
    },
    header: {
        marginBottom: '10px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    actionButtons: {
        margin: '15px 0',
        display: 'flex',
        justifyContent: 'flex-end',
        '& > button': {
            marginLeft: '12px'
        },
        '& > a': {
            marginLeft: '12px'
        }
    },
    addButton: {
        textDecoration: 'none'
    }
}));



const CreateRequest = () => {

    const history = useHistory();

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const styles = useStyles();

    const handleAccept = () => {
        alert('Пользователя перебрасывает на страницу опросника');
        history.push('/request/questionnaire');
    }

    return (
        <Container className={styles.createRequestContainer}>
            <Paper className={styles.createRequest} elevation={0}>
                <div className={styles.header}>
                    <Typography variant={'h5'}>Новая заявка</Typography>
                </div>
                <div className={styles.form}>
                    <TextField className={styles.field} variant={'outlined'} label={'Название'}/>
                    <TextField className={styles.field} select variant={'outlined'} label={'Ответственное лицо'}/>
                    <TextField className={styles.field} select variant={'outlined'} label={'Управление'}/>
                    <TextField className={styles.field} select variant={'outlined'} label={'Отдел'}/>
                    <TextField className={styles.field} multiline rows={4} variant={'outlined'} label={'Описание проекта'}/>
                    <TextField className={styles.field} variant={'outlined'} type={'file'}/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker disableToolbar inputVariant="outlined" format="MM/dd/yyyy" margin="normal" id="date-picker-outlined" label="Планируемые сроки реализации" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{'aria-label': 'change date',}}/>
                    </MuiPickersUtilsProvider>
                </div>
                <div className={styles.actionButtons}>
                    <Button size={'large'} color={'primary'} variant={'outlined'}>Отмена</Button>
                    <Button size={'large'} color={'secondary'} variant={'contained'} onClick={handleAccept}>Подтвердить</Button>
                </div>
            </Paper>
        </Container>
    )
};

export default CreateRequest;
