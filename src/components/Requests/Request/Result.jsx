import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, Chip, Divider, IconButton, Tab, Tabs, TextField, Typography} from "@material-ui/core";
import {useState} from "react";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
    field: {
        margin: '10px 0',
        width: '100%',
    },
    requirementInput: {
        fontSize: '14px'
    },
    result: {

    },
    chip: {
        borderRadius: '6px',
        marginRight: '10px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    requirement: {
        display: 'flex',
        margin: '20px 0'
    },
    requirementWrapper: {
        margin: '10px 0'
    },
    type: {
        margin: '10px 0'
    },
    typeHeader: {
        marginBottom: '5px',
    },
    requirements: {

    },
    requirementContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    requirementContentBlock: {
        display: 'flex',
        flexDirection: 'column'
    },
    requirementContentBlockText: {
        marginBottom: '10px'
    },
    expertComment: {
        margin: '10px 0'
    },
    actionButtons: {
        '& > button': {
            marginLeft: '8px'
        },
        display: 'flex',
        justifyContent: 'flex-end'
    }


}));

const data = [
    {
        requirementId: 'R-1.2',
        content: 'Предусмотреть СБОР  ПОДТВЕРЖДАЮЩИХ ДОКУМЕНТОВ/СВЕДЕНИЙ согласно Правил ПОД/ФТ/ФРОМУ:\n' +
            'Сбор документов/сведений о КЛИЕНТЕ ФЛ. Набор запрашиваемых данных см. по ссылке.\n' +
            'Предусмотреть РАЗМЕЩЕНИЕ/ХРАНЕНИЕ ПОЛУЧЕННЫХ ДОКУМЕНТОВ/СВЕДЕНИЙ:\n' +
            '\n' +
            '1. в досье клиента: оригиналы/должным образом заверенные копии на бумаге;\n' +
            '2. в ЭА: эл.документы с ЭП клиента, скан копии с оригинала (заверенные сотрудником),  сохранение логов по обращению в ЕСИА/СМЭВ/ЕБС и др. источники/Отчет по форме Приказа 1272 от 31.10.2018 и др. доп.информация\n' +
            '4. Организовать хранение и контроль за получением документов на бумажном носителе. Определение порядка и назначение отв. подразделений/лиц.\n' +
            '! - Хранение документов/сведений (электронные и бумажные формы) не менее 5 лет с момента прекращения  отношений с клиентом. \n' +
            '\n' +
            'Набор запрашиваемых данных см. по ссылке\n' +
            '\n' +
            'Обеспечить сохранение в ЕКС сведений …. В поля …. В соответствии с Инструкцией ЕКС. \n' +
            '\n' +
            'Обеспечить хранение логов получения сведений из гос. источников в объеме ...\n' +
            '\n' +
            'Обеспечить формирование и хранение в ЭАД Отчета по форме Приказа 1272 от 31.10.2018. Набор запрашиваемых данных см. по ссылке"\n',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio dolores eaque eius eos et facilis fuga illum, ipsa necessitatibus nihil nulla porro quaerat rerum sint tempora ullam voluptates voluptatibus.',
        type: 'FATCA/CRS'
    },
    {
        requirementId: 'R-1.3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eveniet iusto maiores mollitia officiis optio, perspiciatis recusandae soluta. Autem dolorum eaque error hic, illum iste iusto magnam minus officiis, perspiciatis porro possimus qui repellendus sunt veritatis vero voluptatibus. Accusantium adipisci aperiam consequuntur dolore eius eum hic illo illum libero nemo obcaecati pariatur placeat quo repudiandae soluta, ullam unde ut. Tempore?',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio dolores eaque eius eos et facilis fuga illum, ipsa necessitatibus nihil nulla porro quaerat rerum sint tempora ullam voluptates voluptatibus.',
        type: 'FATCA/CRS'
    },
    // {
    //     requirementId: 'R-2.2',
    //     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eveniet iusto maiores mollitia officiis optio, perspiciatis recusandae soluta. Autem dolorum eaque error hic, illum iste iusto magnam minus officiis, perspiciatis porro possimus qui repellendus sunt veritatis vero voluptatibus. Accusantium adipisci aperiam consequuntur dolore eius eum hic illo illum libero nemo obcaecati pariatur placeat quo repudiandae soluta, ullam unde ut. Tempore?',
    //     comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio dolores eaque eius eos et facilis fuga illum, ipsa necessitatibus nihil nulla porro quaerat rerum sint tempora ullam voluptates voluptatibus.',
    //     type: 'Идентификация'
    // },
    // {
    //     requirementId: 'R-3.2',
    //     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eveniet iusto maiores mollitia officiis optio, perspiciatis recusandae soluta. Autem dolorum eaque error hic, illum iste iusto magnam minus officiis, perspiciatis porro possimus qui repellendus sunt veritatis vero voluptatibus. Accusantium adipisci aperiam consequuntur dolore eius eum hic illo illum libero nemo obcaecati pariatur placeat quo repudiandae soluta, ullam unde ut. Tempore?',
    //     comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio dolores eaque eius eos et facilis fuga illum, ipsa necessitatibus nihil nulla porro quaerat rerum sint tempora ullam voluptates voluptatibus.',
    //     type: 'Персональные данные'
    // }
]

const Result = ({}) => {
    const styles = useStyles();
    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    const [requirements, setRequirements] = useState(data);
    const types = requirements.map(x => x.type).filter(onlyUnique);
    return (
        <div className={styles.result}>
            {
                types.map(x =>
                    <div className={styles.type}>
                        <Typography className={styles.typeHeader}>{x}</Typography>
                        <div className={styles.requirements}>
                            {requirements.filter(y => y.type === x).map((r, index) =>
                                <div className={styles.requirementWrapper}>
                                    <div className={styles.requirement}>
                                        <Chip className={styles.chip} label={r.requirementId} color={'primary'}/>
                                        <div className={styles.requirementContent}>
                                            <div className={styles.requirementContentBlock}>
                                                <div className={styles.requirementContentBlockText}>
                                                    <Typography variant={"body2"}>
                                                        {r.content.split("\n").map(function(item, idx) {
                                                            return (
                                                                <span key={idx}>
                                                                    {item}
                                                                    <br/>
                                                                </span>
                                                            )
                                                        })}
                                                    </Typography>
                                                </div>
                                                <Divider/>
                                                <div className={styles.expertComment}>
                                                    <Typography variant={'subtitle2'}>Комментарий эксперта:</Typography>
                                                    <Typography variant={'body2'}>{r.comment}</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
};


export default Result;
