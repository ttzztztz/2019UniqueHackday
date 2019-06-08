import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./TOPStyle";

import NewsItem from "./newsItem";

interface Props extends WithStyles {
    city: string;
    type: "change" | "hot";
}

class TopDetail extends React.PureComponent<Props> {
    render() {
        const data = [
            {
                rank: 1,
                title: "洪志远学长",
                region: "湖北",
                hot: 1.22,
                area: "计算机科学",
                href: "https://www.hzytql.top"
            },
            {
                rank: 2,
                title: "洪志远学长",
                region: "湖北",
                hot: 2.22,
                area: "计算机科学",
                href: "https://www.hzytql.top"
            },
            {
                rank: 3,
                title: "洪志远学长",
                region: "湖北",
                hot: 3.22,
                area: "计算机科学",
                href: "https://www.hzytql.top"
            }
        ];

        const { classes } = this.props;
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
