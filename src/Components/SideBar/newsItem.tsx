import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./newsItemStyle";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import HotIcon from "@material-ui/icons/Whatshot";
import LocationOnIcon from "@material-ui/icons/LocationOn";

interface Props extends WithStyles {
    rank: number;
    title: string;
    region: string;
    hot: number;
    area: string;
    href: string;
}

class NewsItem extends React.PureComponent<Props> {
    render() {
        const { classes, rank, title, region, hot, area, href } = this.props;
        return (
            <Paper className={classes["item-paper"]}>
                <Grid container>
                    <Grid item xs={1}>
                        {rank}
                    </Grid>
                    <Grid item xs={8}>
                        <a href={href} target="_blank">
                            {title}
                        </a>
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
                        {area}
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(style)(NewsItem);
