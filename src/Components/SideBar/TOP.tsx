import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./TOPStyle";

import NewsItem from "./newsItem";

interface Props extends WithStyles {
    city: string;
    type: "change" | "hot";
    data: {
        change: Array<any>;
        hot: Array<any>;
    };
}

class TopDetail extends React.PureComponent<Props> {
    render() {
        const { type, city } = this.props;
        const rawData = type === "change" ? this.props.data.change : this.props.data.hot;
        const data = city === "全国" ? rawData : rawData.filter(item => item.region === city);

        return (
            <>
                {data.map((item, key) => (
                    <NewsItem
                        key={key}
                        rank={item.rank}
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
