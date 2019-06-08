import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./detailStyle";

import { Chart } from "chart.js";
import StaticDisplay from "../StaticDisplay";
import Grid from "@material-ui/core/Grid";

interface Props extends WithStyles {
    city: string;
    statics: {
        basic: Array<any>;
        percent: Array<any>;
    };
}

class DetailView extends React.Component<Props> {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes["item-paper"]}>
                <h3 className={classes["item-data-title"]}>基础数据</h3>
                <Grid container>
                    <Grid item xs={4}>
                        <StaticDisplay data="20件" title="事件数" color="black" />
                    </Grid>
                    <Grid item xs={4}>
                        <StaticDisplay data="25件" title="热度上升" color="#c43c2c" />
                    </Grid>
                    <Grid item xs={4}>
                        <StaticDisplay data="12件" title="热度下降" color="#45B485" />
                    </Grid>
                </Grid>
                <h3 className={classes["item-data-title"]}>类型占比</h3>
                <canvas id="charts" />
            </div>
        );
    }
    componentDidMount() {
        const ctx = document.getElementById("charts");
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["经济", "民生"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19],
                        backgroundColor: ["#02a9ed", "#0a54cf"]
                    }
                ]
            }
        });
    }
}

export default withStyles(style)(DetailView);
