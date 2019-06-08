import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./TOPStyle";
import * as TYPINGS from "../../Typings";
import NewsItem from "./newsItem";

interface Props extends WithStyles {
    city: string;
    type: "change" | "hot";
    data: {
        change: Array<TYPINGS.ITop5Change>;
        hot: Array<TYPINGS.ITop5Hot>;
    };
}

class TopDetail extends React.PureComponent<Props> {
    render() {
        const { type, city } = this.props;
        const rawData = type === "change" ? this.props.data.change : this.props.data.hot;
        const data =
            city === "全国"
                ? rawData.sort(($1, $2) => Number.parseFloat($2.hot) - Number.parseFloat($1.hot))
                : rawData
                      .filter(item => item.region === city)
                      .sort(($1, $2) => Number.parseFloat($2.hot) - Number.parseFloat($1.hot));

        return (
            <>
                {data.map((item, key) => (
                    <NewsItem
                        key={key}
                        rank={key + 1}
                        title={item.title}
                        region={item.region}
                        hot={item.hot}
                        area={item.area}
                        href={item.href}
                    />
                ))}
            </>
        );
    }
}

export default withStyles(style)(TopDetail);
