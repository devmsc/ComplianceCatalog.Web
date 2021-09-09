import {Button, Fab, Typography} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    comments: {
        position: 'relative',
        minHeight: '600px',
        bottom: 0,
        right: 0
    },
    addComment: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    addButton: {
        display: 'flex',
        padding: '6px 16px'
    },
    addText: {
        padding: '2px 0 0 3px'
    }
}))

const Comments = () => {
    const styles = useStyles();
    return (
        <div className={styles.comments}>
            <Button className={styles.addButton}>
                <AddIcon fontSize={'small'}/>
                <span className={styles.addText}>Добавить</span>
            </Button>
        </div>
    )
}

export default Comments;
