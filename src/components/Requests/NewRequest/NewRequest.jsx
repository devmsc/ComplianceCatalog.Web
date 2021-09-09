import {makeStyles} from "@material-ui/core/styles";
import {Button, Container, Divider, Paper, Typography} from "@material-ui/core";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import {useState} from "react";

const useStyles = makeStyles(theme => ({
    newRequestContainer: {
        marginTop: theme.spacing(13),
    },
    newRequest: {
        padding: theme.spacing(5),
        borderRadius: '10px'
    }
}))



const NewRequest = () => {
    const styles = useStyles();
    return (
        <Container className={styles.newRequestContainer}>
            <Paper className={styles.newRequest} elevation={0}>

            </Paper>
        </Container>
    )
}

export default NewRequest;
