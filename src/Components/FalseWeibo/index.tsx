import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

interface Props extends WithStyles {}

class FalseWeibo extends React.PureComponent<Props> {
    render() {
        const { classes } = this.props;
        return <></>;
    }
}

export default withStyles(styles)(FalseWeibo);