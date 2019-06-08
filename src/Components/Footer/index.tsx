import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

interface Props extends WithStyles {}

class Footer extends React.PureComponent<Props> {
    render() {
        const { classes } = this.props;
        return (
            <footer className={classes["footer"]}>
                <div>华中科技大学创客空间</div>
                <div className={classes["footer-nav"]}>关于我们 | 联系我们 | 帮助中心</div>
            </footer>
        );
    }
}

export default withStyles(styles)(Footer);
