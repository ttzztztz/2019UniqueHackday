import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import FalseItem from "../FalseItem";

interface Props extends WithStyles {}

class FalseNews extends React.PureComponent<Props> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes["main"]}>
                <FalseItem content="洪志远" href="https://github.com/farawaaay" />
            </div>
        );
    }
}

export default withStyles(styles)(FalseNews);
