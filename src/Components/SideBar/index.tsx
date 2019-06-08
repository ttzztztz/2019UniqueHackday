import React from "react";
import styles from "./style";

import { Chart } from "chart.js";
import TopView from "./TOP";
import DetailView from "./detail";

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
        const { city } = this.props;
        return (
            <>
                <Tabs value={value} onChange={this.handleChange} centered variant="fullWidth">
                    <Tab label="数据概况" />
                    <Tab label="热点事件Top5" />
                    <Tab label="变化最大Top5" />
                </Tabs>
                {value === 0 && <DetailView city={city} />}
                {value === 1 && <TopView type="hot" city={city} />}
                {value === 2 && <TopView type="change" city={city} />}
            </>
        );
    }
    componentDidMount() {
        // const ctx = document.getElementById("charts");
        // new Chart(ctx, {
        //     type: "pie",
        //     data: {
        //         labels: ["经济", "民生"],
        //         datasets: [
        //             {
        //                 label: "# of Votes",
        //                 data: [12, 19],
        //                 backgroundColor: ["#02a9ed", "#0a54cf"]
        //             }
        //         ]
        //     }
        // });
    }
}

export default withStyles(styles)(SideBar);
