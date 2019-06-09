import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import LieItem from "../LieItem";

interface Props extends WithStyles {}

interface IFakeItem {
    content: string;
    verified: boolean;
}

interface State {
    page: number;
    content: Array<IFakeItem>;
}

class FalseWeibo extends React.PureComponent<Props, State> {
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
                    <LieItem content={item.content} verified={item.verified} key={key} />
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
        const response = await fetch(`${DOMAIN}blog?page=${page}`);
        const json = await response.json();
        this.setState({
            content: json.blog.map(item => ({
                content: item.text,
                verified: item.user.verified
            }))
        });
    }
}

export default withStyles(styles)(FalseWeibo);
