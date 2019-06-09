import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";
import * as TYPINGS from "../../Typings";

import Sinomap from "sinomap";
import china from "sinomap/resources/china.json";
import ChoroplethLayer from "sinomap/dist/layers/choropleth";

interface Props extends WithStyles {
    cityInfo: Array<TYPINGS.ICityInfo>;
    changeCity: (cityName: string) => void;
}

class ChinaMap extends React.PureComponent<Props> {
    state = {
        showLayer: false,
        mouseInto: true,
        layerName: "北京",
        layerX: 0,
        layerY: 0
    };

    handleMouseOut = () => {
        this.setState({
            showLayer: false
        });
    };

    handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        this.setState({
            showLayer: true,
            layerX: event.clientX + 15,
            layerY: event.clientY + 15
        });

    handleMouseDown = () => {
        if (this.state.showLayer && this.state.mouseInto) {
            this.props.changeCity(this.state.layerName);
        } else {
            this.props.changeCity("全国");
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <>
                <div
                    id="chinaMap"
                    onMouseOut={this.handleMouseOut}
                    onMouseMove={this.handleMouseMove}
                    onMouseDown={this.handleMouseDown}
                />
                <div
                    id="mouse-layer"
                    className={classes["map-layer"]}
                    style={{
                        display: this.state.showLayer && this.state.mouseInto ? "block" : "none",
                        left: this.state.layerX,
                        top: this.state.layerY
                    }}
                >
                    <div>{this.state.layerName}</div>
                    <div>{this.renderCityInfo(this.state.layerName)}</div>
                </div>
            </>
        );
    }

    renderCityInfo = (cityName: string) => {
        const [obj] = this.props.cityInfo.filter(item => item.name === cityName);

        if (obj) {
            return obj["description"];
        } else {
            return "";
        }
    };

    renderMap = () => {
        const { cityInfo } = this.props;
        const that = this;

        const choropleth = new ChoroplethLayer({
            color: "#fd504d",
            responsive: true,
            level: 1,
            data: cityInfo,
            // 光标移入区域时触发
            // `name` 为 GeoJSON 中区域名
            // `cp` 为 GeoJSON 中区域 capital 坐标
            // `value` 为 Layer 的 data 数据
            onAreaEnter({ name, cp, value }) {
                that.setState({
                    mouseInto: true,
                    layerName: name
                });
            },
            // 光标移出区域时触发
            onAreaLeave({ name, cp, value }) {
                that.setState({
                    mouseInto: false
                });
            }
        });

        new Sinomap({ el: "#chinaMap", geoJSON: china, layers: [choropleth] });
    };
    componentDidMount() {
        this.renderMap();
    }
}

export default withStyles(styles)(ChinaMap);
