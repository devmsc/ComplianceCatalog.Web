import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    IconButton,
    Tab,
    Tabs,
    TextField,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import {Link} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
    request: {
        marginTop: theme.spacing(13),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dates: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    questionnaire: {
        marginTop: theme.spacing(2)
    },
    requirementOffer: {
        marginTop: theme.spacing(2)
    },
    businessClientResponse: {
        marginTop: theme.spacing(2)
    },
    businessClientResponseHeader: {
        display: 'flex',
        alignItems: 'center'
    },
    conclusion: {
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center'
    },
    conclusionContent: {
        display: 'flex',
        alignItems: 'center',
        width: '600px',
        '& > button': {
            width: '200px'
        }
    },
    tabsCard: {
        width: '100%',
        padding: theme.spacing(5)
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabsList: {
        display: 'flex',
    },
    tabPanel: {
        width: '100%'
    },
    field: {
        margin: '10px 0'
    },
    tabContent: {
        padding: theme.spacing(5)
    },
    tabContentActions: {
        marginTop: theme.spacing(2),
        display: "flex",
        justifyContent: 'flex-end'
    },
    tabContentActionButton: {
        margin: '0 10px'
    },
    predictions: {

    },
    eksLink: {

    },
    conclusionButton: {
        textDecoration: 'none',
        margin: '0 10px'
    },
    conclusionText: {
        fontSize: '14px',
        margin: '10px 0'
    },
    actionButtons: {
        display: "flex",
        justifyContent: 'flex-end',
        margin: '15px 0'
    },
    requirement: {

    },
    requirementConclusion: {
        display: 'flex',
        alignItems: 'center'
    },
    listBlock: {

    },
    list: {

    },
    removeIcon: {

    },
    emptyList: {
        margin: '20px 0',
        fontSize: '16px'
    },
    actionsButtons: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    save: {
        margin: '0 10px',

    },
    cancel: {
        margin: '0 10px'
    },
    listItems: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listField: {
        margin: '8px 0',
    },
}))


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    const styles = useStyles();
    return (
        <div className={styles.tabPanel}
            role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`}{...other}>
            {value === index && (
                <Box className={styles.tabsBlock}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const predictions = [
    {
        "conclusion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolor quia recusandae ullam vero. Commodi eaque libero minus provident reiciendis.",
        "eksLink": "SomeWhere",
        "disabled": "false"
    },
    {
        "conclusion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid commodi dicta, dolorem eligendi eos est eum nostrum officia porro quisquam similique, ullam. Ab, accusantium alias aliquid at beatae consectetur corporis culpa delectus deserunt dignissimos dolorum earum, et eveniet impedit laboriosam laborum libero magni molestias nulla, obcaecati quaerat repellendus similique.",
        "eksLink": "SomeWhere",
        "disabled": "false"
    },
    {
        "conclusion": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae cumque dignissimos ea eligendi, ex laboriosam, molestiae nostrum odit quibusdam sit, vel? Aliquam amet deserunt eos eveniet explicabo magnam maxime, perspiciatis quis similique unde vel vitae voluptatem! A accusantium animi architecto cumque, cupiditate distinctio dolorem ea earum enim est explicabo fuga fugiat illum, ipsam magni maiores natus nobis, nostrum odio perspiciatis placeat quaerat rerum sapiente tempora temporibus vitae voluptate! Nulla, velit?",
        "eksLink": "SomeWhere",
        "disabled": "false"
    }
]

const requirementOffer = {
    requirements: [
        {
            content: "First requirement"
        },
        {
            content: "Second requirement"
        }
    ]
}



const EditBusinessClientResponse = ({}) => {
    const [conclusionList, setConclusionList] = useState([
        {
            value: "First"
        },
        {
            value: "Second"
        },
    ])

    const handleCreateConclusion = () => {
        setConclusionList([...conclusionList, { title: '', value: '' }]);
    }
    const handleConclusionChange = (index, event) => {
        const values = [...conclusionList];
        values[index] = event.target.value;
        setConclusionList(values);
    }
    const handleRemoveConclusion = (index) => {
        const values  = [...conclusionList];
        values.splice(index, 1);
        setConclusionList(values);
    }

    const styles = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [tabContentField, setTabContentField] = useState(false);

    return (
        <Container className={styles.request} maxWidth={'lg'}>
            <Card className={styles.tabsCard}>
                <IconButton onClick={handleCreateConclusion}>
                    <AddIcon/>
                </IconButton>
                <div className={styles.requirement}>
                    {
                        conclusionList[0] ?
                            conclusionList.map((conclusion, index) => (
                                    <div className={styles.list} key={index}>
                                        <div className={styles.listItems}>
                                            <TextField multiline fullWidth className={styles.listField} name={'value'} onChange={event => handleConclusionChange(index, event)} value={conclusion.value} variant={'outlined'}/>
                                            <IconButton onClick={() => handleRemoveConclusion(index)} className={styles.removeIcon}>
                                                <RemoveIcon/>
                                            </IconButton>
                                        </div>
                                    </div>
                                )
                            )
                            :
                            <Typography className={styles.emptyList}>Список атрибутов пуст</Typography>
                    }
                </div>
            </Card>
        </Container>
    );
}

const EditConclusionForm = () => {

}

export default EditBusinessClientResponse;
