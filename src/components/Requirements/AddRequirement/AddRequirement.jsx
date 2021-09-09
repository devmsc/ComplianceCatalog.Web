import {
    Button, CircularProgress,
    Container,
    makeStyles, MenuItem,
    Paper, Select,
    TextField,
    Typography
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {Autocomplete} from "@material-ui/lab";
import {useEffect, useState} from "react";
import React from 'react';

const useStyles = makeStyles(theme => ({
    addRequirement: {
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
    addRequirementHeader: {
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
const addRequirementValidationSchema = yup.object({
    content: yup
        .string(`Содержание этапа взаимоотношения с клиентом`)
        .min(5, 'Минимальное число символов - 5')
        .max(100, 'Максимальное число символов - 100')
        .required('Необходимо ввести содержание этапа взаимоотношения с клиентом'),
})

const AddRequirement = ({}) => {
    const history = useHistory();

    //formik
    const addRequirementForm = useFormik({
        initialValues: {
            relationStage: null,
            complianceRisk: null,
            complianceProcess: null,
            triggers: null,
            conclusion: null,
            codes: null
        },
        onSubmit: async (values) => {

            addRequirementForm.resetForm();
            history.push('/requirements');
        },
        validationSchema: addRequirementValidationSchema,
        enableReinitialize: true
    });

    const styles = useStyles();

    //cancel button
    const handleCancel = () => {
        history.push('/relationStages');
    }

    const triggers = [
        { id: '123', value: 'trigger1' },
        { id: '234', value: 'trigger2' },
        { id: '345', value: 'trigger3' },
        { id: '456', value: 'trigger4' },
    ]

    const complianceRisks = [
        { id: '123', value: 'risk1' },
        { id: '234', value: 'risk2' },
        { id: '345', value: 'risk3' },
        { id: '456', value: 'risk4' },
    ]

    const relationStages = [
        { id: '123', value: 'relationStage1' },
        { id: '234', value: 'relationStage2' },
        { id: '345', value: 'relationStage3' },
        { id: '456', value: 'relationStage4' },
    ]

    const complianceProcesses = [
        { id: '123', value: 'complianceProcess1' },
        { id: '234', value: 'complianceProcess2' },
        { id: '345', value: 'complianceProcess3' },
        { id: '456', value: 'complianceProcess4' },
    ]


    return (
        <Container maxWidth={'md'} component={Paper} className={styles.addRequirement}>
            <form onSubmit={addRequirementForm.handleSubmit}>
                <div className={styles.formContent}>
                    <div className={styles.addRequirementHeader}>
                        <Typography variant={'h4'}>Новое требование</Typography>
                        <div className={styles.actionButtons}>
                            <Button className={styles.cancel} variant={'outlined'} color={'primary'} onClick={handleCancel}>Отмена</Button>
                            <Button className={styles.save} variant={'outlined'} color={'secondary'} type={'submit'}>Сохранить</Button>
                        </div>
                    </div>
                    <TextField className={styles.field} id={'relationStage'} name={'relationStage'} variant={'outlined'}  select  value={addRequirementForm.relationStage} onChange={addRequirementForm.handleChange} error={addRequirementForm.touched.relationStage && Boolean(addRequirementForm.errors.relationStage)} helperText={addRequirementForm.touched.relationStage && addRequirementForm.errors.relationStage} label={'Этап взаимоотношений с клиентом'}>
                        <MenuItem value={null}>
                            <em>Не выбрано</em>
                        </MenuItem>
                        {relationStages.map(x => <MenuItem value={x.id}>{x.value}</MenuItem>)}
                    </TextField>
                    <TextField className={styles.field} id={'complianceRisk'} name={'complianceRisk'} variant={'outlined'}  select  value={addRequirementForm.complianceRisk} onChange={addRequirementForm.handleChange} error={addRequirementForm.touched.complianceRisk && Boolean(addRequirementForm.errors.complianceRisk)} helperText={addRequirementForm.touched.complianceRisk && addRequirementForm.errors.complianceRisk} label={'Комплаенс-риск'}>
                        <MenuItem value={null}>
                            <em>Не выбрано</em>
                        </MenuItem>
                        {complianceRisks.map(x => <MenuItem value={x.id}>{x.value}</MenuItem>)}
                    </TextField>
                    <TextField className={styles.field} id={'complianceProcess'} name={'complianceProcess'} variant={'outlined'}  select  value={addRequirementForm.complianceProcess} onChange={addRequirementForm.handleChange} error={addRequirementForm.touched.complianceProcess && Boolean(addRequirementForm.errors.complianceProcess)} helperText={addRequirementForm.touched.complianceProcess && addRequirementForm.errors.complianceProcess} label={'Комплаенс-процедура'}>
                        <MenuItem value={null}>
                            <em>Не выбрано</em>
                        </MenuItem>
                        {complianceProcesses.map(x => <MenuItem value={x.id}>{x.value}</MenuItem>)}
                    </TextField>
                    <TextField className={styles.field} id={'triggers'} name={'triggers'} variant={'outlined'}  select  value={addRequirementForm.triggers} onChange={addRequirementForm.handleChange} error={addRequirementForm.touched.triggers && Boolean(addRequirementForm.errors.triggers)} helperText={addRequirementForm.touched.triggers && addRequirementForm.errors.triggers} label={'Триггеры'}>
                        <MenuItem value={null}>
                            <em>Не выбрано</em>
                        </MenuItem>
                        {triggers.map(x => <MenuItem value={x.id}>{x.value}</MenuItem>)}
                    </TextField>
                    <TextField multiline rows={10} className={styles.field} id={'conclusion'} name={'conclusion'} value={addRequirementForm.conclusion} onChange={addRequirementForm.handleChange} error={addRequirementForm.touched.conclusion && Boolean(addRequirementForm.errors.conclusion)} helperText={addRequirementForm.touched.conclusion && addRequirementForm.errors.conclusion}  variant={'outlined'}  label={'Заключение'}/>
                    <TextField multiline rows={10} className={styles.field} id={'codes'} name={'codes'} value={addRequirementForm.codes} onChange={addRequirementForm.handleChange} error={addRequirementForm.touched.codes && Boolean(addRequirementForm.errors.codes)} helperText={addRequirementForm.touched.codes && addRequirementForm.errors.codes}  variant={'outlined'}  label={'Коды проверок'}/>
                </div>
            </form>
        </Container>
    )
}

const AsyncTriggerSearchForm = ({triggers, getTriggers}) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    useEffect(async () => {
        await getTriggers();
        let active = true;
        if (!loading) return undefined;

        setOptions(Object.keys(triggers).map((key) => triggers[key]));

        return () => {active = false}
    }, [loading]);

    useEffect(() => {if (!open) {setOptions([]);}}, [open]);

    return (
        <Autocomplete id="asynchronous-demo" open={open} onOpen={() => {setOpen(true)}}
                      onClose={() => {setOpen(false)}}
                      getOptionSelected={(option, value) => option.title === value.title}
                      getOptionLabel={(option) => option.title}
                      options={options} loading={loading}
                      renderInput={(params) => (
                          <TextField{...params} label="Триггер" variant="outlined" InputProps={{
                              ...params.InputProps, endAdornment: (
                                  <React.Fragment>
                                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                      {params.InputProps.endAdornment}
                                  </React.Fragment>
                              ),
                          }}
                          />
                      )}
        />
    );
}

export default AddRequirement;
