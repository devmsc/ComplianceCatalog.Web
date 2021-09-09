import {Chip, Divider, IconButton, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
    questions: {
        display: 'flex',
        flexDirection: 'column',

    },
    questionBlock: {
        margin: '10px 0'
    },
    questionContent: {

    },
    questionChip: {
        padding: '0 8px',
        borderRadius: '6px',
        margin: '0 10px',
    },
    questionChips: {
        margin: '5px 0',
        marginBottom: '15px',
        width: '100%'
    },
    questionsInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}))

const Questions = ({questionnaire, status}) => {
    const styles = useStyles();
    return (
        <div className={styles.questions}>
            { (status === 'Новая заявка' || status === 'Отправлено на доработку') &&
                <div className={styles.questionsInfo}>
                    <Typography>Дата создания: 15 сентября, 14:32</Typography>
                    <Typography>Дата обновления: 20 сентября, 15:58</Typography>
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                </div>
            }
            {questionnaire.map((x, index) =>
                <div className={styles.questionBlock}>
                    <div className={styles.questionContent}>
                        <Typography className={styles.questionContent}>{index + 1}. {x.content}</Typography>
                    </div>
                    <div className={styles.questionChips}>
                        {x.triggers.map(c =>
                            <Chip className={styles.questionChip } label={c} color={'primary'}/>
                        )}
                    </div>
                    <Divider/>
                </div>
            )}
        </div>
    )
}

export default Questions;
