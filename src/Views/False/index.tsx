import React from "react";
import styles from "./style";

import { withStyles, WithStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import FalseNews from "../../Components/FalseNews";
import FalseWeibo from "../../Components/FalseWeibo";

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
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    centered
                    variant="fullWidth"
                    className={classes["tab"]}
                >
                    <Tab label="虚假新闻" />
                    <Tab label="微博谣言鉴定" />
                </Tabs>
                <div className={classes["false-container"]}>
                    {value === 0 && <FalseNews />}
                    {value === 1 && <FalseWeibo />}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SelfKill);
