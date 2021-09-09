import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

}));

const Progress = ({progressItems}) => {
    const styles = useStyles();
    return (
        <div className={styles.progress}>
            <Table>
                <TableHead>
                    <TableCell>Дата</TableCell>
                    <TableCell>Сообщение</TableCell>
                    <TableCell>Автор</TableCell>
                </TableHead>
                <TableBody>
                    { progressItems.map(x =>
                        <TableRow>
                            <TableCell>{x.date}</TableCell>
                            <TableCell>{x.message}</TableCell>
                            <TableCell>{x.author}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default Progress;
