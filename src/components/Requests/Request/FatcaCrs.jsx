import {useState} from "react";
import {Button, Chip, Fab, IconButton, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    field: {
        margin: '10px 0',
        width: '100%'
    },
    fatcaCrs: {
        paddingLeft: theme.spacing(4)
    },
    chip: {
        borderRadius: '6px',
        marginRight: '10px'
    },
    requirement: {
        display: 'flex'
    }
}));

const FatcaCrs = ({setStatus}) => {
    const styles = useStyles();
    const [requirements, setRequirements] = useState([
        {
            requirementId: 'R-1.2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eveniet iusto maiores mollitia officiis optio, perspiciatis recusandae soluta. Autem dolorum eaque error hic, illum iste iusto magnam minus officiis, perspiciatis porro possimus qui repellendus sunt veritatis vero voluptatibus. Accusantium adipisci aperiam consequuntur dolore eius eum hic illo illum libero nemo obcaecati pariatur placeat quo repudiandae soluta, ullam unde ut. Tempore?',
        }
    ])
    // <TextField name={'value'} disabled={x.disabled} onChange={event => handleItemChange(index, event)} multiline fullWidth className={styles.field} variant={'outlined'} value={`${index + 1}. ${x.value}`}/>

    return (
        <div className={styles.fatcaCrs}>
            {requirements.map(x =>
                <div className={styles.requirement}>
                    <Chip className={styles.chip} label={x.requirementId} color={'primary'}/>
                    <Typography variant={"body2"}>{x.content}</Typography>
                </div>
            )}
        </div>
    )
};

export default FatcaCrs;
