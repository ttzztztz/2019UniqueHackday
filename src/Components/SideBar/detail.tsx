import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./detailStyle";
import * as TYPINGS from "../../Typings";
import { Chart } from "chart.js";
import StaticDisplay from "../StaticDisplay";
import Grid from "@material-ui/core/Grid";

interface Props extends WithStyles {
    city: string;
    statics: TYPINGS.IStatics;
}

class DetailView extends React.Component<Props> {
    render() {
        const { classes, city } = this.props;
        const [obj] = this.props.statics.basic.filter(item => item.name === city);
        const basicStatics = obj
            ? obj
            : {
                  events: 0,
                  up: 0,
                  down: 0
              };

        return (
            <div className={classes["item-paper"]} id="data-analysis">
                <h3 className={classes["item-data-title"]}>基础数据</h3>
                <Grid container>
                    <Grid item xs={4}>
                        <StaticDisplay data={basicStatics.events + "件"} title="事件数" color="black" />
                    </Grid>
                    <Grid item xs={4}>
                        <StaticDisplay data={basicStatics.up + "件"} title="热度上升↑" color="#FDC84D" />
                    </Grid>
                    <Grid item xs={4}>
                        <StaticDisplay data={basicStatics.down + "件"} title="热度下降↓" color="#7AA2FF" />
                    </Grid>
                </Grid>
                <h3 className={classes["item-data-title"]}>类型占比</h3>
                <canvas id="charts" />
            </div>
        );
    }

    componentDidUpdate() {
        this.renderAnalysis();
    }
    componentDidMount() {
        this.renderAnalysis();
    }

    renderAnalysis = () => {
        const { city } = this.props;
        const [obj] = this.props.statics.percent.filter(item => item.name === city);
        const basicPercent = obj ? (obj.data as Array<number>) : [1, 1, 1, 1, 1, 1, 1, 1, 1];

        const parent = document.getElementById("data-analysis");
        parent.removeChild(document.getElementById("charts"));
        const newElem = document.createElement("canvas");
        newElem.id = "charts";
        parent.appendChild(newElem);

        const chartOptions = {
            type: "pie",
            data: {
                labels: ["民生", "文娱", "评论", "法治", "政务", "经济", "身边事", "教育", "体育", "医疗", "交通"],
                datasets: [
                    {
                        data: basicPercent,
                        backgroundColor: [
                            "#FFD300",
                            "#4BFFE1",
                            "#5B45CB",
                            "#54C7FC",
                            "#FF4D4D",
                            "#3AC31E",
                            "#DB993D",
                            "#DB79D9",
                            "#D2DB3C",
                            "#22B5C3",
                            "#FF1F7B"
                        ]
                    }
                ],
                legend: {
                    display: false
                }
            }
        };
        new Chart(newElem, chartOptions);
    };
}

export default withStyles(style)(DetailView);
