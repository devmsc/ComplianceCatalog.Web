import {AppBar, Avatar, Button, Drawer, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {useState} from "react";
import MenuIcon from '@material-ui/icons/Menu'
import MenuContainer from "../Menu/MenuContainer";
import { deepOrange, deepPurple } from '@material-ui/core/colors';

//styles
const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        flexGrow: 1
    },
    user: {
        flexGrow: 1
    },
    avatar: {
        color: 'black',
        backgroundColor: 'white',
    },
    buttons: {
        marginRight: '20px',
        '& > button': {
            margin: '0 10px'
        }
    }
}));

const Header = ({user, role, becomeClient, becomeExpert, becomeManager}) => {
    const styles = useStyles();

    //Drawer state hook
    let [open, setOpen] = useState(false);

    //menu icon onClick handlers
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleBecomeClient = () => {
        becomeClient();
    }
    const handleBecomeExpert = () => {
        becomeExpert();
    }
    const handleBecomeManager = () => {
        becomeManager();
    }

    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton color={'inherit'} className={styles.menuButton} onClick={handleOpen}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={styles.title}>
                        Каталог комплаенс-требований
                    </Typography>
                    <div className={styles.user}>
                        { user ? <Typography>{user} - {role}</Typography> : <Typography>Не авторизован</Typography>}
                    </div>
                    <div className={styles.buttons}>
                        <Button onClick={handleBecomeClient} variant={'contained'}>Инициатор</Button>
                        <Button onClick={handleBecomeManager} variant={'contained'}>Менеджер</Button>
                        <Button onClick={handleBecomeExpert} variant={'contained'}>Эксперт</Button>
                    </div>
                    <Avatar className={styles.avatar}>DM</Avatar>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={handleClose}>
                <MenuContainer/>
            </Drawer>
        </>
    )
}


export default Header;
