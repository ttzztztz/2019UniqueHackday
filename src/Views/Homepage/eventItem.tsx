import React from "react";
import styles from "./eventItemStyle";
import { withStyles, WithStyles } from "@material-ui/core/styles";

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
            <div className={classes["item-paper"]}>
                <Grid container>
                    <Grid item xs={1} className={classes["circle-container"]}>
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
                    <Grid item xs={1} className={classes["circle-container"]}>
                        <LocationOnIcon className={classes["item-icon"]} />
                    </Grid>
                    <Grid item xs={2}>
                        {region}
                    </Grid>
                    <Grid item xs={3}>
                        {date}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(HotEvents);
