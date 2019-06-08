import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import Sinomap from "sinomap";
import china from "sinomap/resources/china.json";
import ChoroplethLayer from "sinomap/dist/layers/choropleth";

interface Props extends WithStyles {}

class ChinaMap extends React.PureComponent<Props> {
    render() {
        return <div id="chinaMap" />;
    }
    componentDidMount() {
        const choropleth = new ChoroplethLayer({
            color: "#1d479c",
            level: 1,
            data: [{ name: "北京", value: 1989 }, { name: "江苏", value: 1999 }],
            // 光标移入区域时触发
            // `name` 为 GeoJSON 中区域名
            // `cp` 为 GeoJSON 中区域 capital 坐标
            // `value` 为 Layer 的 data 数据
            onAreaEnter({ name, cp, value }) {
                // 该函数中 this 指向 Layer 实例而非地图实例
            },
            // 光标移出区域时触发
            onAreaLeave({ name, cp, value }) {}
        });

        new Sinomap({ el: "#chinaMap", geoJSON: china, layers: [choropleth] });
    }
}

export default withStyles(styles)(ChinaMap);
