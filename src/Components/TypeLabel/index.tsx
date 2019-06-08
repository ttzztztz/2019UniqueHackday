import React from "react";
import styles from "./style";
import { withStyles, WithStyles } from "@material-ui/core/styles";

interface Props extends WithStyles {
    content: string;
}

class TypeLabel extends React.PureComponent<Props> {
    render() {
        const { classes, content } = this.props;
        return <div className={classes["root"]}>{content}</div>;
    }
}

export default withStyles(styles)(TypeLabel);
