import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import Button from "@material-ui/core/Button";

interface Props extends WithStyles {
    content: string;
    href: string;
}

class FalseWeiboItem extends React.PureComponent<Props> {
    handleOnClick = () => {
        const { href } = this.props;
        window.open(href);
    };
    render() {
        const { classes, content } = this.props;
        return (
            <Button className={classes["main"]} variant="outlined" onClick={this.handleOnClick}>
                {content}
            </Button>
        );
    }
}

export default withStyles(styles)(FalseWeiboItem);