import logo from '../../alfa.svg'
//menu component

//styles
import {Chip, Divider, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    menu: {
        width: '300px'
    },
    list: {
        padding: '20px'
    },
    logo: {
        width: '100px',
        height: '100px',
        margin: '0 auto',
        marginTop: '20px'
    },
    image: {
        maxHeight: '100%',
        maxWidth: '100%',
        verticalAlign: 'middle'
    },
    without: {
        textDecoration: 'none',
        color: 'inherit'
    },
    chip: {
        borderRadius: '6px'
    }

}));

const Menu = ({role}) => {
    let styles = useStyles();

    return (
        <>
            <img src={logo} className={styles.logo}/>
            <div className={styles.menu}>
                <List className={styles.list}>
                    <NavLink to={'/'} className={styles.without}>
                        <ListItem button key={'Главная страница'}>
                            <ListItemText primary={'Главная страница'}/>
                        </ListItem>
                    </NavLink>
                    <NavLink to={'/requests'} className={styles.without}>
                        <ListItem button key={'Заявки'}>
                            <ListItemText primary={'Заявки'}/>
                            { role !== 'client' && <Chip className={styles.chip} color={'primary'} label={'5'}/> }
                        </ListItem>
                    </NavLink>
                    {/*<NavLink to={'/request'} className={styles.without}>*/}
                    {/*    <ListItem button key={'Заявка'}>*/}
                    {/*        <ListItemText primary={'Заявка'}/>*/}
                    {/*    </ListItem>*/}
                    {/*</NavLink>*/}
                    <NavLink to={'/request/create'} className={styles.without}>
                        <ListItem button key={'Новая заявка'}>
                            <ListItemText primary={'Новая заявка'}/>
                        </ListItem>
                    </NavLink>
                    {/*<NavLink to={'/request/questionnaire'} className={styles.without}>*/}
                    {/*    <ListItem button key={'Опросник'}>*/}
                    {/*        <ListItemText primary={'Опросник'}/>*/}
                    {/*    </ListItem>*/}
                    {/*</NavLink>*/}
                </List>
                <Divider/>
                <List className={styles.list}>
                    <NavLink to={'/'} className={styles.without}>
                        <ListItem button key={'О каталоге'}>
                            <ListItemText primary={'О каталоге'}/>
                        </ListItem>
                    </NavLink>
                    <NavLink to={'/'} className={styles.without}>
                        <ListItem button key={'Статистика'}>
                            <ListItemText primary={'Статистика'}/>
                        </ListItem>
                    </NavLink>
                    <NavLink to={'/'} className={styles.without}>
                        <ListItem button key={'Контакты'}>
                            <ListItemText primary={'Контакты'}/>
                        </ListItem>
                    </NavLink>
                </List>
                <Divider/>
                {
                        role !== 'client'
                    &&
                        <List className={styles.list}>
                            {/*<NavLink to={'/complianceRisks'} className={styles.without}>*/}
                            {/*    <ListItem button key={'Комплаенс-риски'}>*/}
                            {/*        <ListItemText primary={'Комплаенс-риски'}/>*/}
                            {/*    </ListItem>*/}
                            {/*</NavLink>*/}
                            {/*<NavLink to={'/complianceProcesses'} className={styles.without}>*/}
                            {/*    <ListItem button key={'Комплаенс-процедуры'}>*/}
                            {/*        <ListItemText primary={'Комплаенс-процедуры'}/>*/}
                            {/*    </ListItem>*/}
                            {/*</NavLink>*/}
                            {/*<NavLink to={'/relationStages'} className={styles.without}>*/}
                            {/*    <ListItem button key={'Этапы взаимоотношений с клиентом'}>*/}
                            {/*        <ListItemText primary={'Этапы взаимоотношений с клиентом'}/>*/}
                            {/*    </ListItem>*/}
                            {/*</NavLink>*/}
                            {/*<NavLink to={'/requirements'} className={styles.without}>*/}
                            {/*    <ListItem button key={'Управление требованиями'}>*/}
                            {/*        <ListItemText primary={'Управление требованиями'}/>*/}
                            {/*    </ListItem>*/}
                            {/*</NavLink>*/}
                            <NavLink to={'/questions'} className={styles.without}>
                                <ListItem button key={'Управление вопросами'}>
                                    <ListItemText primary={'Управление вопросами'}/>
                                </ListItem>
                            </NavLink>
                            <NavLink to={'/questionnaire'} className={styles.without}>
                                <ListItem button key={'Управление опросником'}>
                                    <ListItemText primary={'Управление опросником'}/>
                                </ListItem>
                            </NavLink>
                            <NavLink to={'/manageRequirements'} className={styles.without}>
                                <ListItem button key={'Управление требованиями'}>
                                    <ListItemText primary={'Управление требованиями'}/>
                                </ListItem>
                            </NavLink>
                        </List>
                }
            </div>
        </>
    )
}

export default Menu;
