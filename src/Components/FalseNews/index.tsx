import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import FalseItem from "../FalseItem";

interface Props extends WithStyles {}

class FalseNews extends React.PureComponent<Props> {
    state = {
        page: 0,
        content: []
    };
    render() {
        const { classes } = this.props;
        const { content } = this.state;
        return (
            <div className={classes["main"]}>
                {content.map((item, key) => (
                    <FalseItem key={key} content={item.content} fontSize="14" />
                ))}
            </div>
        );
    }
    async componentDidMount() {
        await this.fetchInfo();
    }
    async fetchInfo() {
        const { page } = this.state;
        const DOMAIN = "https://www.yjwbenji.top/";
        const response = await fetch(`${DOMAIN}news/baby?page=${page}`);
        const json = await response.json();
        this.setState({
            content: json.news.map(item => ({
                content: item
            }))
        });
    }
}

export default withStyles(styles)(FalseNews);
