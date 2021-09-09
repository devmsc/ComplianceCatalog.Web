import {useState} from "react";
import {
    Accordion, AccordionDetails,
    AccordionSummary, Box,
    Button,
    Card,
    CardActions,
    CardContent, Chip,
    Container, Divider, Fab,
    Paper, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Link} from "react-router-dom";
import {Add} from "@material-ui/icons";
import RequestInfo from "./RequestInfo";
import Comments from "./Comments";
import Progress from "./Progress";
import Questions from "./Questions";
import Result from "./Result";


const useStyles = makeStyles(theme => ({
    '@global': {
        '*::-webkit-scrollbar': {
            display: 'none'
        }
    },
    request: {
        marginTop: theme.spacing(13),
        minHeight: '700px',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    tabs: {
        height: '100%'
    },
    content: {
        height: '700px',
        overflow: 'scroll',
        position: 'relative',
        width: '100%'
    }
}));

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}{...other}>
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const questionnaire = [
    {
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ea odit pariatur reiciendis rem voluptates?",
        "triggers": [
            "Физическое лицо",
            "Юридическое лицо",
            "Индивидуальный предприниматель"
        ]
    },
    {
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsum libero vel.",
        "triggers": [
            "Да"
        ]
    },
    {
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem eligendi facilis illum laboriosam laborum non omnis qui reprehenderit suscipit.",
        "triggers": [
            "Новый",
            "Существующий"
        ]
    },
    {
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "triggers": [
            "Возможно",
            "Не знаю"
        ]
    },
    {
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quo saepe temporibus vitae voluptates?",
        "triggers": [
            "Заявка"
        ]
    },
    {
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ea odit pariatur reiciendis rem voluptates?",
        "triggers": [
            "Физическое лицо",
            "Юридическое лицо",
            "Индивидуальный предприниматель"
        ]
    },
    {
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsum libero vel.",
        "triggers": [
            "Да"
        ]
    },
    {
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem eligendi facilis illum laboriosam laborum non omnis qui reprehenderit suscipit.",
        "triggers": [
            "Новый",
            "Существующий"
        ]
    },
    {
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "triggers": [
            "Возможно",
            "Не знаю"
        ]
    },
    {
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quo saepe temporibus vitae voluptates?",
        "triggers": [
            "Заявка"
        ]
    }
]

const progressItems = [
    {
        "date": "15 September",
        "message": "Hello man",
        "author": "Alexey"
    },
    {
        "date": "20 May",
        "message": "How are you",
        "author": "Maxim"
    },
    {
        "date": "31 July",
        "message": "See you again",
        "author": "Ivan"
    }
]



const Request = ({role}) => {
    const styles = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [request, setRequest] = useState({ result: 'null' })
    const [status, setStatus] = useState('Новая заявка');


    return (
        <Container className={styles.request} maxWidth={'lg'}>
            <Paper elevation={0}>
                <Tabs className={styles.tabs} value={value} onChange={handleChange}  indicatorColor="primary" textColor="primary" centered>
                    <Tab label="Информация 5" />
                    <Tab label="Комментарии 5 " />
                    <Tab label="История 5" />
                    <Tab label="Опросник" />
                    { request.result && <Tab disabled={ role === 'client' && status !== 'Результат готов' } label="Результат" /> }
                </Tabs>
                <div className={styles.content}>
                    <TabPanel value={value} index={0}>
                        <RequestInfo role={role} status={status} setStatus={setStatus}/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Comments role={role}/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Progress role={role} progressItems={progressItems}/>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Questions status={status} role={role} questionnaire={questionnaire}/>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Result setStatus={setStatus} status={status} role={role}/>
                    </TabPanel>
                </div>
            </Paper>
        </Container>

    )
}

export default Request;
