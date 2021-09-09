import {
    Button,
    Container,
    makeStyles,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const useStyles = makeStyles(theme => ({
    addComplianceProcess: {
        marginTop: theme.spacing(13),
        marginBottom: theme.spacing(13),
        padding: theme.spacing(4),
        minHeight: '700px'
    },
    formContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    field: {
        margin: theme.spacing(1)
    },
    header: {
        margin: theme.spacing(1)
    },
    addComplianceProcessHeader: {
        marginBottom: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between'
    },
    actionButtons: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    save: {
        margin: '0 10px',
    },
    cancel: {
        margin: '0 10px'
    }
}));

//validation
const addComplianceProcessValidationSchema = yup.object({
    content: yup
        .string(`Содержание этапа взаимоотношения с клиентом`)
        .min(5, 'Минимальное число символов - 5')
        .max(100, 'Максимальное число символов - 100')
        .required('Необходимо ввести содержание этапа взаимоотношения с клиентом'),
})

const AddComplianceProcess = ({createComplianceProcess}) => {
    const history = useHistory();

    //formik
    const addComplianceProcessForm = useFormik({
        initialValues: {
            content: ''
        },
        onSubmit: async (values) => {
            await createComplianceProcess({content: values.content});
            addComplianceProcessForm.resetForm();
            history.push('/complianceProcesses');
        },
        validationSchema: addComplianceProcessValidationSchema,
        enableReinitialize: true
    });

    const styles = useStyles();

    //cancel button
    const handleCancel = () => {
        history.push('/complianceProcesses');
    }

    return (
        <Container maxWidth={'md'} component={Paper} className={styles.addComplianceProcess}>
            <form onSubmit={addComplianceProcessForm.handleSubmit}>
                <div className={styles.formContent}>
                    <div className={styles.addComplianceProcessHeader}>
                        <Typography variant={'h4'}>Новый вопрос</Typography>
                        <div className={styles.actionButtons}>
                            <Button className={styles.cancel} variant={'outlined'} color={'primary'} onClick={handleCancel}>Отмена</Button>
                            <Button className={styles.save} variant={'outlined'} color={'secondary'} type={'submit'}>Сохранить</Button>
                        </div>
                    </div>
                    <TextField className={styles.field} id={'content'} name={'content'} variant={'outlined'} value={addComplianceProcessForm.values.content} onChange={addComplianceProcessForm.handleChange} error={addComplianceProcessForm.touched.content && Boolean(addComplianceProcessForm.errors.content)} helperText={addComplianceProcessForm.touched.content && addComplianceProcessForm.errors.content} label={'Комплаенс-процедура'}/>
                </div>
            </form>
        </Container>
    )
}

export default AddComplianceProcess;
