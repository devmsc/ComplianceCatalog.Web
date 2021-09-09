import {
    Button,
    Checkbox,
    Container, FormControl, FormControlLabel,
    MenuItem, Paper, Radio, RadioGroup,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    questionnaireContainer: {
        marginTop: theme.spacing(13),
    },
    questionnaire: {
        padding: theme.spacing(4)
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    answers: {
        margin: '10px 0'
    },
    answersHeader: {
        margin: '10px 0'
    },
    answersContent: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column'
    }
}));


const data =
    [
        {
            content: 'Тип процесса',
            type: '1',
            triggers: [
                'Процесс связан с предоставлением продукта/услуги Банка',
                'Процесс связан с обслуживанием в рамках действующих продуктов  (поручения к счетам, управление картами, УКД, подключение кэшбэка)',
                'Процесс связан с новой технологией верификации клиента (пример: Face ID, Голосовая биометрия)',
                'Процесс связан с подключением нового источника получения сведений о клиенте (пример: Партнеры, гос. источники, процесс "Смена ДУЛ в АМ")',
                'Процесс связан с подключением нового источника передачи сведений о клиенте (пример: Партнеры)',
            ],
            answer: null
        },
        {
            content: 'Продукт/услуга новая для Банка?',
            type: '1',
            triggers: ['Новый', 'Действующий'],
            answer: null
        },
        {
            content: 'Тип субъекта',
            type: '1',
            triggers: ['Физическое лицо', 'Юридическое лицо', 'Индивидуальный предприниматель'],
            answer: null
        },
        {
            content: 'Статус в банке',
            type: '1',
            triggers: ['Действующий клиент', 'Потенциальный клиент', 'Агент', 'Представитель клиента'],
            answer: null
        },
        {
            content: 'Тип идентификации',
            type: '1',
            triggers: ['Нет идентификации', 'УпИ', 'Полная'],
            answer: null
        },
        {
            content: 'Канал оформления',
            type: '1',
            triggers: ['Отделение', 'УКД', 'Партнер', 'Загрузка данных'],
            answer: null
        },
        {
            content: 'Наличие договора с партнером',
            type: '0',
            triggers: ['Да', 'Нет'],
            answer: null
        },
        {
            content: 'Создаваемый/изменяемый этап обслуживания (выбрать все)',
            type: '1',
            triggers: ['Заявка', 'Предоставление', 'Обслуживание', 'Блокирование', 'Расторжение'],
            answer: null
        },
        {
            content: 'Проект связан с изменением лимитов?',
            type: '0',
            triggers: ['Да', 'Нет'],
            answer: null
        }
    ];


const RequestQuestionnaire = () => {
    const history = useHistory();

    const [questions, setQuestions] = useState(data);

    const styles = useStyles();

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleUpdate = (question, index) => {
        const values = [...questions];
        values[index] = question;
        setQuestions(values);
    }

    if (activeStep === questions.length) {
        alert('Пользователя перебрасывает на страницу заявки')
        history.push('/request')
        setActiveStep(0);
    }

    return (
        <Container className={styles.questionnaireContainer}>
            <Paper className={styles.questionnaire} elevation={0}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {questions.map((question, index) => (
                        <Step key={question.content}>
                            <StepLabel>

                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === questions.length ? <Typography>Hello</Typography> : (
                        <div>
                            <QuestionForm index={activeStep} questions={questions} setQuestions={setQuestions}/>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={styles.backButton}>
                                    Назад
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === questions.length - 1 ? 'Завершить заполнение опросника' : 'Следующий вопрос'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </Paper>
        </Container>
    )
}

const QuestionForm = ({index, questions, setQuestions}) => {
    const styles = useStyles();
    const handleChange = (event) => {
        const values = [...questions];
        values[index][event.target.name] = event.target.value;
        setQuestions(values);
        console.log(questions);
    };
    return (
        <div className={styles.answers}>
            <Typography className={styles.answersHeader} variant={'h4'}>{questions[index].content}</Typography>
            <div className={styles.answersContent}>
                {
                    questions[index].type === '1'
                        ?
                        questions[index].triggers.map(x => <FormControlLabel control={<Checkbox color={'primary'}/>} label={x}/>)
                        :
                        <RadioGroup>
                            {questions[index].triggers.map(x =>
                                <FormControlLabel value={x} control={<Radio color={'primary'}/>} label={x} />
                            )}
                        </RadioGroup>
                }
            </div>
        </div>
    )

}



export default RequestQuestionnaire;
