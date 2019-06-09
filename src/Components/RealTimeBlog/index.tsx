import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import BlogItem from "../BlogItem";

interface Props extends WithStyles {}

class RealTimeBlog extends React.PureComponent<Props> {
    render() {
        const { classes } = this.props;
        return (
            <>
                <BlogItem date="2019/06/09" author="洪志远" description="我今天遇到了一件不可思议的事呢……" />
            </>
        );
    }
}

export default withStyles(styles)(RealTimeBlog);
