import React from "react";
import styles from "./style";

import { withStyles, WithStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AvatarImg from "./avatar.png";

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
        const { value } = this.state;

        return (
            <div className={classes["main"]}>
                <div className={classes["avatar-container"]}>
                    <img src={AvatarImg} />
                </div>
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    centered
                    variant="fullWidth"
                    className={classes["tab"]}
                >
                    <Tab label="实时博文" />
                    <Tab label="用户监测" />
                </Tabs>
            </div>
        );
    }
}

export default withStyles(styles)(SelfKill);
