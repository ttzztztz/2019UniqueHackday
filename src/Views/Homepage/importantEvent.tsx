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
    dispatchChangeImportantGraph: (data: IImportant) => void;
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
    handleClick = (item: IImportant) => (_event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.props.dispatchChangeImportantGraph(item);
    };
    render() {
        const { classes, important } = this.props;
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
                        {important.map((item, key) => (
                            <EventItem
                                key={key}
                                title={item.title}
                                hot={item.intoTotal}
                                region={item.region}
                                date={item.date}
                                onClick={this.handleClick(item)}
                            />
                        ))}
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
