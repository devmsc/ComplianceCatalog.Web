import {
    Button, Chip,
    Container,
    FormControl, IconButton, InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import {useState} from "react";
import * as yup from "yup";
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
    addQuestion: {
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
    addQuestionHeader: {
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
const addQuestionValidationSchema = yup.object({
    content: yup
        .string(`Содержание вопроса`)
        .min(5, 'Минимальное число символов - 5')
        .max(100, 'Максимальное число символов - 100')
        .required('Необходимо ввести содержание вопроса'),
    questionType: yup
        .number(`Выберите тип вопроса`)
        .required('Необходимо выбрать тип вопроса')
})

const AddQuestion = ({createQuestion}) => {
    const history = useHistory();
    let [questionType, setQuestionType] = useState(null);

    //formik
    const addQuestionForm = useFormik({
        initialValues: {
            content: '',
            questionType: questionType
        },
        onSubmit: async (values) => {
            await createQuestion(
                {
                    content: values.content,
                    questionType: values.questionType,
                    triggers: [...triggers]
                }
            );
            addQuestionForm.resetForm();
            history.push('/questions');
        },
        validationSchema: addQuestionValidationSchema,
        enableReinitialize: true
    });
    // {
    //     "content": "string",
    //     "questionType": 0,
    //     "triggers": [
    //     "string"
    // ],
    //     "number": 0
    // }
    const styles = useStyles();

    //cancel button
    const handleCancel = () => {
        history.push('/questions');
    }

    const [triggers, setTriggers] = useState([

    ])

    const handleAddVariant = () => {
        setTriggers([...triggers, '' ]);
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
        <Container maxWidth={'md'} component={Paper} className={styles.addQuestion}>
            <form onSubmit={addQuestionForm.handleSubmit}>
                <div className={styles.formContent}>
                    <div className={styles.addQuestionHeader}>
                        <Typography variant={'h4'}>Новый вопрос</Typography>
                        <div className={styles.actionButtons}>
                            <Button className={styles.cancel} variant={'outlined'} color={'primary'} onClick={handleCancel}>Отмена</Button>
                            <Button className={styles.save} variant={'outlined'} color={'secondary'} type={'submit'}>Сохранить</Button>
                        </div>
                    </div>
                    <TextField multiline rows={2} className={styles.field} id={'content'} name={'content'} variant={'outlined'} value={addQuestionForm.values.content} onChange={addQuestionForm.handleChange} error={addQuestionForm.touched.content && Boolean(addQuestionForm.errors.content)} helperText={addQuestionForm.touched.content && addQuestionForm.errors.content} label={'Вопрос'}/>
                    <TextField className={styles.field} id={'questionType'} name={'questionType'} variant={'outlined'}  select  value={addQuestionForm.questionType} onChange={addQuestionForm.handleChange} error={addQuestionForm.touched.questionType && Boolean(addQuestionForm.errors.questionType)} helperText={addQuestionForm.touched.questionType && addQuestionForm.errors.questionType} label={'Тип вопроса'}>
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
                    {triggers.map((content, index) =>
                        <div className={styles.variant}>
                            <TextField  fullWidth key={index} label={'Вариант ответа'} onChange={event => handleVariantChange(index, event)} className={styles.field} variant={'outlined'} value={content}>{content}</TextField>
                            <IconButton onClick={ () => handleRemoveVariant(index) }>
                                <RemoveIcon/>
                            </IconButton>
                        </div>
                    )}
                </div>
            </form>
        </Container>
    )
}

export default AddQuestion;
