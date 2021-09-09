import {makeStyles} from "@material-ui/core/styles";
import {Button, Chip, Container, Divider, IconButton, Paper, Snackbar, TextField, Typography} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import { useHistory } from 'react-router-dom';
import * as yup from "yup";
import {Alert} from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles(theme => ({
    editRequirement: {
        marginTop: theme.spacing(13),
        padding: theme.spacing(3),
    },
    requirementHeader: {
        marginBottom: '10px'
    },
    requirementName: {
        display: 'flex',
        flexDirection: 'column',
    },
    actionButtons: {
        display: 'flex',
        marginLeft: theme.spacing(3),
        justifyContent: 'space-between',
        '& > button': {
            marginLeft: '10px'
        }
    },
    description: {
        margin: '15px 0'
    },
    descriptionHeader: {
        margin: '10px 0'
    },
    triggers: {
        flexDirection: 'column',
        margin: '10px 0'
    },
    triggerHeader: {
        margin: '10px 0'
    },
    triggerMatchBlock: {
        margin: '10px 0',
        display: 'flex',
        flexDirection: 'column'
    },
    triggerMatchHeader: {
        '& > p': {
            fontSize: '18px'
        }
    },
    chip: {
        borderRadius: '6px',
        margin: '0 8px'
    },
    matchingQuestion: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0'
    },
    editRequirementName: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px'
    }
}))

const editRequirementValidationSchema = yup.object({
    title: yup
        .string(`Название требования`)
        .min(5, 'Минимальное число символов - 5')
        .max(100, 'Максимальное число символов - 100')
        .required('Необходимо ввести название'),
    description: yup
        .string(`Описание требования`)
        .required('Необходимо ввести название'),
})

const EditRequirement = ({requirement, setRequirement}) => {
    const styles = useStyles();
    const history = useHistory();
    const [requiredTriggerSet, setRequiredTriggerSet] = useState(requirement.requiredTriggerSet);
    const [editRequirement, setEditRequirement] = useState(false);
    const editRequirementForm = useFormik({
        initialValues: {
            title: requirement.title,
            description: requirement.description
        },
        validationSchema: editRequirementValidationSchema,
        onSubmit: async (values) => {
            setRequirement({ title: values.title, description: values.description })
            handleSuccess();
            handleAccept();
        },
        enableReinitialize: true
    });

    const handleEdit = () => {
        setEditRequirement(true);
    }
    const handleAccept = () => {
        setEditRequirement(false);
    }
    const handleCancel = () => {
        editRequirementForm.resetForm();
        setEditRequirement(false);
    }

    const [success, setSuccess] = useState(false);

    const handleSuccess = () => {
        setSuccess(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSuccess(false);
    };

    return (
        <Container component={Paper} className={styles.editRequirement}>
            <form onSubmit={editRequirementForm.handleSubmit}>
                <div className={styles.requirementHeader}>
                    {
                        editRequirement
                            ?
                            <div className={styles.requirementName}>
                                <div className={styles.editRequirementName}>
                                    <Typography variant={'h4'}>Требование</Typography>
                                    <div className={styles.actionButtons}>
                                        <Button variant={'outlined'} color={'primary'} onClick={ handleCancel }>Отменить</Button>
                                        <Button variant={'contained'} color={'secondary'} type={'submit'}>Сохранить изменения</Button>
                                    </div>
                                </div>
                                <TextField fullWidth className={styles.field} id={'title'} name={'title'} variant={'outlined'} value={editRequirementForm.values.title} onChange={editRequirementForm.handleChange} error={editRequirementForm.touched.title && Boolean(editRequirementForm.errors.title)} helperText={editRequirementForm.touched.title && editRequirementForm.errors.title} label={'Название'}/>
                            </div>
                            :
                            <div className={styles.requirementName}>
                                <div className={styles.editRequirementName}>
                                    <Typography variant={'h4'}>Требование</Typography>
                                    <Button variant={'outlined'} onClick={ handleEdit } color={'primary'}>Редактировать</Button>
                                </div>
                                <Typography>{editRequirementForm.values.title}</Typography>
                            </div>
                    }
                    <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                        <Alert variant={'filled'} onClose={handleClose} severity="success">
                            Требование обновлено!
                        </Alert>
                    </Snackbar>
                </div>
                <Divider/>
                <div className={styles.description}>
                    <div className={styles.descriptionHeader}>
                        <Typography variant={'h4'}>
                            Описание
                        </Typography>
                    </div>
                    {
                            editRequirement
                        ?
                            <TextField fullWidth rows={5} multiline className={styles.field} id={'description'} name={'description'} variant={'outlined'} value={editRequirementForm.values.description} onChange={editRequirementForm.handleChange} error={editRequirementForm.touched.description && Boolean(editRequirementForm.errors.description)} helperText={editRequirementForm.touched.description && editRequirementForm.errors.description} label={'Описание'}/>
                        :
                            <Typography variant={'body1'}>{editRequirementForm.values.description}</Typography>
                    }
                </div>
                <Divider/>
                <div className={styles.triggers}>
                    <div className={styles.triggerHeader}>
                        <Typography variant={'h4'}>Триггеры</Typography>
                    </div>
                    <div className={styles.triggerMatchBlock}>
                        <div className={styles.triggerMatchHeader}>
                            <Typography>Полное совпадение</Typography>
                        </div>
                        <div className={styles.triggerMatchContent}>
                            {
                                requiredTriggerSet.map(x =>
                                    <div className={styles.matchingQuestion}>
                                        <Typography>{x.content}</Typography>
                                        {
                                            editRequirement
                                                ?
                                                <>
                                                    {x.triggers.map(y => <Chip onDelete={ () => alert(`Удален чип ${y}`) } className={styles.chip} color={'primary'} label={y}/>)}
                                                    <IconButton color={'secondary'}>
                                                        <AddIcon/>
                                                    </IconButton>
                                                    <IconButton className={styles.deleteQuestion}>
                                                        <RemoveIcon/>
                                                    </IconButton>
                                                </>
                                                :
                                                x.triggers.map(y => <Chip className={styles.chip} color={'primary'} label={y}/>)
                                        }
                                    </div>
                                )}
                        </div>
                    </div>
                    <div className={styles.triggerMatchBlock}>
                        <div className={styles.triggerMatchHeader}>
                            <Typography>Частичное совпадение</Typography>
                        </div>
                        <div className={styles.triggerMatchContent}>
                            {
                                requiredTriggerSet.map(x =>
                                    <div className={styles.matchingQuestion}>
                                        <Typography>{x.content}</Typography>
                                        {
                                            editRequirement
                                                ?
                                                <>
                                                    {x.triggers.map(y => <Chip onDelete={ () => alert(`Удален чип ${y}`) } className={styles.chip} color={'primary'} label={y}/>)}
                                                    <IconButton color={'secondary'}>
                                                        <AddIcon/>
                                                    </IconButton>
                                                    <IconButton className={styles.deleteQuestion}>
                                                        <RemoveIcon/>
                                                    </IconButton>
                                                </>
                                                :
                                                x.triggers.map(y => <Chip className={styles.chip} color={'primary'} label={y}/>)
                                        }
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </form>
        </Container>
    )
}

export default EditRequirement;
