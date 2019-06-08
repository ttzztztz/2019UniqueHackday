import React from "react";
import ChinaMap from "../../Components/ChinaMap";
import styles from "./style";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

interface Props extends WithStyles {}

class HomePage extends React.Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes["main"]}>
                <Grid container spacing={1} className={classes["first-grid"]}>
                    <Grid item xs={6}>
                        <ChinaMap />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>hzytql</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(HomePage);
