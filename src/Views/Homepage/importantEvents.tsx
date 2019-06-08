import React from "react";
import styles from "./importantEventsStyle";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";

interface Props extends WithStyles {}
class ImportantEvents extends React.PureComponent<Props> {
    state = {
        value: 0
    };
    handleChange = (_: React.ChangeEvent, newValue: number) => {
        this.setState({
            value: newValue
        });
    };
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item xs={4} className={classes["bar-container"]}>
                        <AppBar position="static" className={classes["bar"]}>
                            <Tabs value={value} onChange={this.handleChange} centered variant="fullWidth">
                                <Tab label="时间降序" />
                                <Tab label="热度均值降序" />
                            </Tabs>
                        </AppBar>
                    </Grid>
                    <Grid item xs={8} />
                </Grid>
            </>
        );
    }
}

export default withStyles(styles)(ImportantEvents);
