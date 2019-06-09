import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import Button from "@material-ui/core/Button";

interface Props extends WithStyles {
    content: string;
    fontSize: string;
}

class FalseWeiboItem extends React.PureComponent<Props> {
    state = {
        expand: false
    };
    handleOnClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    };

    renderText = (content: string) => {
        const { expand } = this.state;
        if (expand) {
            return content;
        } else {
            return content.length >= 160 ? content.substr(0, 160) + "..." : content;
        }
    };

    render() {
        const { classes, content, fontSize } = this.props;
        return (
            <Button
                className={classes["main"]}
                variant="outlined"
                style={{ fontSize: fontSize + "px", height: this.state.expand ? "auto" : "120px" }}
                onClick={this.handleOnClick}
            >
                {this.renderText(content)}
            </Button>
        );
    }
}

export default withStyles(styles)(FalseWeiboItem);
