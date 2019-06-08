import React from "react";
import classnames from "classnames";
import { RouteComponentProps } from "react-router";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import User from "@material-ui/icons/PermIdentity";
import Button from "@material-ui/core/Button";

import Logo from "./logo.png";
import styles from "./style";

interface Props extends WithStyles {}

class Bar extends React.PureComponent<Props & RouteComponentProps> {
    handleClickHotSpot = () => {
        this.props.history.push({
            pathname: "/homepage"
        });
    };
    handleClickSelfKill = () => {
        this.props.history.push({
            pathname: "/selfkill"
        });
    };
    handleClickWrongSayings = () => {
        this.props.history.push({
            pathname: "/wrongsayings"
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" className={classes["bar-platte"]}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classnames(classes["head"], classes["head-1"])}>
                        <img src={Logo} />
                    </Typography>
                    <Typography variant="h6" color="inherit" className={classnames(classes["head"], classes["head-2"])}>
                        <Button onClick={this.handleClickHotSpot}>热点监测</Button>
                        <Button onClick={this.handleClickSelfKill}>自杀风险预警</Button>
                        <Button onClick={this.handleClickWrongSayings}>谣言监控</Button>
                        <IconButton aria-haspopup="true" color="inherit">
                            <User />
                        </IconButton>
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Bar);
