import React from "react";
import styles from "./style";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ChinaMap from "../../Containers/ChinaMap";
import SearchBox from "../../Components/Search";
import Sidebar from "../../Containers/SideBar";
import Rank from "../../Containers/Rank";
import Footer from "../../Components/Footer";

interface Props extends WithStyles {}

class HomePage extends React.PureComponent<Props> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes["main"]}>
                <SearchBox />
                <Grid container spacing={3} className={classes["first-grid"]}>
                    <Grid item xs={7}>
                        <ChinaMap />
                    </Grid>
                    <Grid item xs={5} className="hide-mobile">
                        <Sidebar />
                    </Grid>
                </Grid>
                <Rank />
                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(HomePage);
