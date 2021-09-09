import {
    Button,
    Chip,
    Container,
    IconButton,
    makeStyles,
    MenuItem,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import * as yup from "yup";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import {useHistory} from "react-router-dom";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles(theme => ({
    editQuestion: {
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
    editQuestionHeader: {
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
    },
    variants: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    variantsHeader: {
        display: 'flex',
        alignItems: 'center'
    },
    variant: {
        display: 'flex',
        alignItems: 'center'
    }
}));

//validation
const editQuestionValidationSchema = yup.object({
    content: yup
        .string(`Содержание вопроса`)
        .min(5, 'Минимальное число символов - 5')
        .max(100, 'Максимальное число символов - 100')
        .required('Необходимо ввести содержание вопроса'),
    questionType: yup
        .number(`Выберите тип вопроса`)
        .required('Необходимо выбрать тип вопроса')
})

const EditQuestion = ({question}) => {

    const history = useHistory();

    let [questionType, setQuestionType] = useState(null);

    useEffect(() => {
        setTriggers([...question.triggers]);
    }, [question])

    //formik
    const editQuestionForm = useFormik({
        initialValues: {
            content: question.content,
            questionType: question.questionType
        },
        onSubmit: async (values) => {
            editQuestionForm.resetForm();
            history.push('/questions');
        },
        validationSchema: editQuestionValidationSchema,
        enableReinitialize: true
    });

    const styles = useStyles();

    //cancel button
    const handleCancel = () => {
        history.push('/questions');
    }

    const [triggers, setTriggers] = useState([...question.triggers])


    // content: "Плохо"
    // createdAt: "2021-08-22T23:13:55.9469405"
    // id: "23f61101-31c7-4722-b301-1b314768b388"
    // status: 0
    // updatedAt:

    const handleAddVariant = () => {
        setTriggers([...triggers, { content: '' } ]);
    }

    const handleRemoveVariant = (index) => {
        const values  = [...triggers];
        values.splice(index, 1);
        setTriggers(values);
    }

    const handleVariantChange = (index, event) => {
        const values = [...triggers];
        values[index] = event.target.value;
        setTriggers(values);
    }


    return (
        <Container maxWidth={'md'} component={Paper} className={styles.editQuestion}>
            <form onSubmit={editQuestionForm.handleSubmit}>
                <div className={styles.formContent}>
                    <div className={styles.editQuestionHeader}>
                        <Typography variant={'h4'}>Новый вопрос</Typography>
                        <div className={styles.actionButtons}>
                            <Button className={styles.cancel} variant={'outlined'} color={'primary'} onClick={handleCancel}>Отмена</Button>
                            <Button className={styles.save} variant={'outlined'} color={'secondary'} type={'submit'}>Сохранить</Button>
                        </div>
                    </div>
                    <TextField multiline rows={2} className={styles.field} id={'content'} name={'content'} variant={'outlined'} value={editQuestionForm.values.content} onChange={editQuestionForm.handleChange} error={editQuestionForm.touched.content && Boolean(editQuestionForm.errors.content)} helperText={editQuestionForm.touched.content && editQuestionForm.errors.content} label={'Вопрос'}/>
                    <TextField className={styles.field} id={'questionType'} name={'questionType'} variant={'outlined'}  select  value={editQuestionForm.questionType} onChange={editQuestionForm.handleChange} error={editQuestionForm.touched.questionType && Boolean(editQuestionForm.errors.questionType)} helperText={editQuestionForm.touched.questionType && editQuestionForm.errors.questionType} label={'Тип вопроса'}>
                        <MenuItem value={null}>
                            <em>Не выбрано</em>
                        </MenuItem>
                        <MenuItem value={0}>Один вариант</MenuItem>
                        <MenuItem value={1}>Несколько вариантов</MenuItem>
                        <MenuItem value={2}>Свободное поле</MenuItem>
                    </TextField>
                    <div className={styles.variants}>
                        <div className={styles.variantsHeader}>
                            <Typography variant={'h5'} className={styles.header}>Варианты ответа:</Typography>
                            <Chip color={'primary'} label={triggers.length}/>
                        </div>
                        <Button onClick={handleAddVariant} variant={'outlined'}>Добавить</Button>
                    </div>
                    {triggers.map((trigger, index) =>
                        {
                            console.log(trigger);
                            return (
                                <div className={styles.variant}>
                                    <TextField  fullWidth key={index} label={'Вариант ответа'} onChange={event => handleVariantChange(index, event)} className={styles.field} variant={'outlined'} value={trigger.content}>{trigger.content}</TextField>
                                    <IconButton onClick={ () => handleRemoveVariant(index) }>
                                        <RemoveIcon/>
                                    </IconButton>
                                </div>
                            )
                        }
                    )}
                </div>
            </form>
        </Container>
    )
}


export default EditQuestion;
