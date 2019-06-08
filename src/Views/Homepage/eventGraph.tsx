import React from "react";
import styles from "./eventGraphStyle";

import { withStyles, WithStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TypeLabel from "../../Components/TypeLabel";
import StaticDisplay from "../../Components/StaticDisplay";
import { Chart } from "chart.js";

interface Props extends WithStyles {}

class EventGraph extends React.PureComponent<Props> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes["item-paper"]}>
                <div className={classes["item-front"]}>
                    <TypeLabel content="计算机科学" />
                    <Typography variant="h6" className={classes["item-title"]}>
                        洪志远提出“洪志远树”，可以在O(1)时间插入、删除、查找
                    </Typography>
                </div>

                <Divider className={classes["divider"]} />
                <Typography variant="h6" className={classes["item-title-sub"]}>
                    24小时数据概括
                </Typography>
                <div>
                    <StaticDisplay color="black" title="信息总量" data="2133" className={classes["item-card"]} />
                    <StaticDisplay
                        color="#FD504D"
                        title="敏感信息/占比"
                        data="31/1.58%"
                        className={classes["item-card"]}
                    />
                    <StaticDisplay color="#FD504D" title="热度比值" data="8.75" className={classes["item-card"]} />
                    <StaticDisplay color="black" title="峰值热度" data="35.01" className={classes["item-card"]} />
                </div>
                <Divider className={classes["divider"]} />
                <Typography variant="h6" className={classes["item-title-sub"]}>
                    热度走势
                </Typography>
                <canvas id="hotWalk" />
            </div>
        );
    }
    componentDidMount() {
        this.renderGraph();
    }
    renderDate = () => {
        const now = new Date();
        const resultArr = [now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate()];

        for (let i = 0; i < 5; i++) {
            const date = new Date(now.getTime() - 24 * 60 * 60 * 1000 * (i + 1));
            resultArr.unshift(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate());
        }

        return resultArr;
    };
    renderGraph = () => {
        const newElem = document.getElementById("hotWalk");
        const chartOptions = {
            type: "line",
            data: {
                labels: this.renderDate(),
                datasets: [
                    {
                        label: "走势",
                        data: [1, 3, 7, 2, 5, 6],
                        backgroundColor: "#FFD300",
                        borderColor: "#FFD300",
                        fill: false
                    }
                ]
            },
            options: {
                hover: {
                    mode: "nearest",
                    intersect: true
                },
                responsive: true,
                tooltips: {
                    mode: "index",
                    intersect: false
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Month"
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Value"
                            }
                        }
                    ]
                }
            }
        };
        new Chart(newElem, chartOptions);
    };
}

export default withStyles(styles)(EventGraph);
