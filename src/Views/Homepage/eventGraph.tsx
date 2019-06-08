import React from "react";
import styles from "./eventGraphStyle";

import { withStyles, WithStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TypeLabel from "../../Components/TypeLabel";
import StaticDisplay from "../../Components/StaticDisplay";
import { Chart } from "chart.js";

interface Props extends WithStyles {
    title: string;
    area: string;
    sensitivePercent: string;
    hotPercent: string;
    topPercent: string;
    intoTotal: number;
    hotHistoryData: Array<number>;
}

class EventGraph extends React.PureComponent<Props> {
    render() {
        const { classes, title, area, sensitivePercent, hotPercent, topPercent, intoTotal } = this.props;
        return (
            <div className={classes["item-paper"]} id="graph-container">
                <div className={classes["item-front"]}>
                    <TypeLabel content={area} />
                    <Typography variant="h6" className={classes["item-title"]}>
                        {title}
                    </Typography>
                </div>

                <Divider className={classes["divider"]} />
                <Typography variant="h6" className={classes["item-title-sub"]}>
                    24小时数据概括
                </Typography>
                <div>
                    <StaticDisplay
                        color="black"
                        title="信息总量"
                        data={intoTotal.toString()}
                        className={classes["item-card"]}
                    />
                    <StaticDisplay
                        color="#FD504D"
                        title="敏感信息占比"
                        data={sensitivePercent}
                        className={classes["item-card"]}
                    />
                    <StaticDisplay
                        color="#FD504D"
                        title="热度比值"
                        data={hotPercent}
                        className={classes["item-card"]}
                    />
                    <StaticDisplay color="black" title="峰值热度" data={topPercent} className={classes["item-card"]} />
                </div>
                <Divider className={classes["divider"]} />
                <Typography variant="h6" className={classes["item-title-sub"]}>
                    热度走势
                </Typography>
                <canvas id="hot-walk" />
            </div>
        );
    }
    componentDidMount() {
        this.renderGraph();
    }
    componentDidUpdate() {
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
        const parent = document.getElementById("graph-container");
        parent.removeChild(document.getElementById("hot-walk"));
        const newElem = document.createElement("canvas");
        newElem.id = "hot-walk";
        parent.appendChild(newElem);

        const chartOptions = {
            type: "line",
            data: {
                labels: this.renderDate(),
                datasets: [
                    {
                        label: "热度",
                        data: this.props.hotHistoryData,
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
                                labelString: "时间"
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "热度"
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
