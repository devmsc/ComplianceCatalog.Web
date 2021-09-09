//styles
import {Container, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(16),
        textAlign: 'center'
    }
}));

const Main = () => {
    const styles = useStyles();
    return (
        <Container className={styles.main}>
            <Typography variant={'h4'}>
                Main Content
            </Typography>
        </Container>
    )
}

export default Main;
