import React from "react";
import styles from "./hotEventsStyle";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import HotIcon from "@material-ui/icons/Whatshot";
import LocationOnIcon from "@material-ui/icons/LocationOn";

interface Props extends WithStyles {
    title: string;
    hot: number;
    region: string;
    date: string;
}
class HotEvents extends React.PureComponent<Props> {
    render() {
        const { classes, title, hot, region, date } = this.props;
        return (
            <Paper className={classes["item-paper"]}>
                <Grid container>
                    <Grid item xs={1}>
                        <div className={classes["circle"]} />
                    </Grid>
                    <Grid item xs={8}>
                        {title}
                    </Grid>
                    <Grid item xs={3} className={classes["item-hot"]}>
                        <HotIcon className={classes["item-icon"]} />
                        {hot}
                    </Grid>
                </Grid>
                <Grid container className={classes["hot-container"]}>
                    <Grid item xs={3}>
                        <LocationOnIcon className={classes["item-icon"]} />
                        {region}
                    </Grid>
                    <Grid item xs={3}>
                        {date}
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(HotEvents);
