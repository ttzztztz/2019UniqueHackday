import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface Props extends WithStyles {
    date: string;
    author: string;
    description: string;
    avatar: string;
}

class BlogItem extends React.PureComponent<Props> {
    render() {
        const { classes, date, author, description, avatar } = this.props;
        return (
            <Paper className={classes["main"]}>
                <Grid container spacing={3}>
                    <Grid item xs={2} className={classes["img-container"]}>
                        <img src={avatar} />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="body2">{date}</Typography>
                        <Typography variant="h5">{author}</Typography>
                        <Typography variant="h6">{description}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(BlogItem);
