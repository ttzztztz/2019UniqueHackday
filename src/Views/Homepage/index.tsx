import React from "react";
import styles from "./style";

import { withStyles, WithStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import SearchBox from "../../Components/Search";
import HotEvents from "./hotEvent";
import ImportantEvent from "../../Containers/ImportantEvent";

interface Props extends WithStyles {}

class HomePage extends React.PureComponent<Props> {
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
                <SearchBox />
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    centered
                    variant="fullWidth"
                    className={classes["tab"]}
                >
                    <Tab label="热门事件" />
                    <Tab label="重大事件" />
                </Tabs>
                {value === 0 && <HotEvents />}
                {value === 1 && <ImportantEvent />}
            </div>
        );
    }
}

export default withStyles(styles)(HomePage);
