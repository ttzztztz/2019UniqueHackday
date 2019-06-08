import React from "react";
import styles from "./style";

import TopView from "../../Containers/SideBar/TOP";
import DetailView from "../../Containers/SideBar/detail";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles, WithStyles } from "@material-ui/core/styles";

interface Props extends WithStyles {
    city: string;
}

class SideBar extends React.PureComponent<Props> {
    state = {
        value: 0
    };
    handleChange = (_: React.ChangeEvent, newValue: number) => {
        this.setState({
            value: newValue
        });
    };
    render() {
        const { value } = this.state;
        const { city, classes } = this.props;
        return (
            <>
                <Tabs value={value} onChange={this.handleChange} centered variant="fullWidth">
                    <Tab label="数据概况" />
                    <Tab label="热点事件Top5" />
                    <Tab label="变化最大Top5" />
                </Tabs>
                <div className={classes["news-item-container"]}>
                    {value === 0 && <DetailView city={city} />}
                    {value === 1 && <TopView type="hot" city={city} />}
                    {value === 2 && <TopView type="change" city={city} />}
                </div>
            </>
        );
    }
}

export default withStyles(styles)(SideBar);
