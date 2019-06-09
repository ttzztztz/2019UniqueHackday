import React from "react";
import styles from "./hotEventStyle";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ChinaMap from "../../Containers/ChinaMap";
import Sidebar from "../../Containers/SideBar";
import Rank from "../../Containers/Rank";

interface Props extends WithStyles {
    finishCityLoad: boolean;
}

class HotEvents extends React.PureComponent<Props> {
    render() {
        const { classes, finishCityLoad } = this.props;
        return (
            <>
                <Grid container spacing={3} className={classes["first-grid"]}>
                    <Grid item xs={7}>
                        {finishCityLoad && <ChinaMap />}
                    </Grid>
                    <Grid item xs={5} className="hide-mobile">
                        <Sidebar />
                    </Grid>
                </Grid>
                <Rank />
            </>
        );
    }
}

export default withStyles(styles)(HotEvents);
