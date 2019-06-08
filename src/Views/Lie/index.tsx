import React from "react";
import styles from "./style";

import { withStyles, WithStyles } from "@material-ui/core/styles";

interface Props extends WithStyles {}

class SelfKill extends React.PureComponent<Props> {
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

        return <div className={classes["main"]} />;
    }
}

export default withStyles(styles)(SelfKill);
