import {Button, Chip, IconButton, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import {useState} from "react";

const useStyles = makeStyles(theme => ({
    requestInfo: {

    },
    status: {
        padding: '0 8px',
        borderRadius: '6px',
        fontSize: '16px'
    },
    requestHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 15px',
        height: '100%',
        alignItems: 'center'
    },
    requestTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    team: {
        padding: '10px 15px',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 20,
        bottom: 40
    },
    actionButton: {
        margin: '0 10px'
    },
    project: {
        padding: '0 15px',
    },
    header: {
        marginTop: theme.spacing(1.5),
        marginBottom: theme.spacing(1),
        fontSize: '26px'
    }
}))

const RequestInfo = ({role, status, setStatus}) => {
    const styles = useStyles();
    const handleSendToManager = () => {
        alert('Создана карточка в Confluence и отправлено уведомление на почту')
        setStatus('Анализ');
    }
    const handleSendToExpert = () => {
        alert('Уведомление экспертам о необходимости обработать заявку и сформировать требования')
        setStatus('Формирование требований');
    }
    const handleBackToClient = () => {
        alert('Уведомление на почту о том, что заявку нужно доработать')
        setStatus('Отправлено на доработку')
    }

    return (
        <div className={styles.requestInfo}>
            <div className={styles.requestHeader}>
                <div className={styles.requestTitle}>
                    <Typography variant={'h4'}>
                        Название заявки
                    </Typography>
                    {
                            role === 'client' && (status === 'Новая заявка' || status === 'Отправлено на доработку')
                        &&
                            <IconButton size={'medium'}><EditIcon/></IconButton>
                    }
                </div>
                <Chip color={'primary'} label={status} className={styles.status}/>
            </div>
            <div className={styles.team}>
                <Typography>Ответственное лицо: <em>Кто-то</em></Typography>
                <Typography>Управление: <em>Такое-то</em></Typography>
                <Typography>Отдел: <em>Такой-то</em></Typography>
            </div>
            <div className={styles.project}>
                <Typography className={styles.header}>Описание проекта</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consectetur consequuntur culpa, cupiditate, debitis deserunt dolorum esse exercitationem expedita fugiat laborum magnam molestiae neque officiis optio quas quod, repellendus reprehenderit repudiandae tempora ut vitae voluptatem! Architecto doloribus eos exercitationem iste provident quisquam quo sapiente vero. Accusamus aliquid animi aperiam autem, deserunt doloremque earum eos excepturi illum labore libero minus odit quis ratione reiciendis similique, sit sunt ullam voluptas voluptatibus. Adipisci asperiores at deserunt dolores eos eveniet impedit ipsa magni mollitia optio placeat possimus, quae quas quibusdam sapiente, suscipit, ut voluptatibus. Alias animi autem blanditiis deleniti eligendi est labore quam. Adipisci architecto, consequatur corporis doloremque ea earum eum, eveniet exercitationem hic maiores molestias nam necessitatibus porro, qui quia quis quos.</Typography>
            </div>
            <div className={styles.project}>
                <Typography className={styles.header}>Планируемые сроки реализации</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, saepe!</Typography>
            </div>
            {
                role === 'manager' && status === 'Анализ'
            &&
                <div className={styles.buttons}>
                    <Button onClick={handleBackToClient} className={styles.actionButton} size={'large'} variant={'outlined'} color={'primary'}>Вернуть на доработку</Button>
                    <Button onClick={handleSendToExpert} className={styles.actionButton} size={'large'} variant={'outlined'} color={'secondary'}>Принять</Button>
                </div>
            }
            {
                role === 'client' && (status === 'Новая заявка' || status === 'Отправлено на доработку')
            &&
                <div className={styles.buttons}>
                    <Button className={styles.actionButton} size={'large'} variant={'outlined'} color={'primary'}>Удалить заявку</Button>
                    <Button className={styles.actionButton} onClick={handleSendToManager} size={'large'} variant={'outlined'} color={'secondary'}>Отправить на обработку</Button>
                </div>
            }
        </div>
    )
}

export default RequestInfo;
