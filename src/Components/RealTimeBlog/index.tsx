import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

interface Props extends WithStyles {}

class RealTimeBlog extends React.PureComponent<Props> {
    render() {
        const { classes } = this.props;
        return <div />;
    }
}

export default withStyles(styles)(RealTimeBlog);
