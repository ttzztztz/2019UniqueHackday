import React from "react";
import styles from "./eventGraphStyle";
import { withStyles, WithStyles } from "@material-ui/core/styles";

interface Props extends WithStyles {}

class EventGraph extends React.PureComponent<Props> {
    render() {
        const { classes } = this.props;
        return <div className={classes["item-paper"]} />;
    }
}

export default withStyles(styles)(EventGraph);
