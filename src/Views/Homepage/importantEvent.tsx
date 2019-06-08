import React from "react";
import styles from "./importantEventStyle";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";

import EventItem from "./eventItem";
import EventGraph from "../../Containers/EventGraph";
import { IImportant } from "../../Typings";

interface Props extends WithStyles {
    important: Array<IImportant>;
}

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
                <Grid container spacing={3}>
                    <Grid item xs={4} className={classes["bar-container"]}>
                        <AppBar position="static" className={classes["bar"]}>
                            <Tabs value={value} onChange={this.handleChange} centered variant="fullWidth">
                                <Tab label="时间降序" />
                                <Tab label="热度均值降序" />
                            </Tabs>
                        </AppBar>
                        <>
                            <EventItem title="洪志远" hot={180} region="湖北" date="2019/06/09" />
                        </>
                    </Grid>
                    <Grid item xs={8}>
                        <EventGraph />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles(styles)(ImportantEvents);
