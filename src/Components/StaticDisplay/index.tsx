import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./style";
import classnames from "classnames";

import Divider from "@material-ui/core/Divider";

interface Props extends WithStyles {
    data: string;
    title: string;
    color: string;
    className?: string;
}

class StaticDisplay extends React.PureComponent<Props> {
    render() {
        const { data, title, classes, color, className } = this.props;
        return (
            <div className={className ? classnames(classes["static-display"], className) : classes["static-display"]}>
                <h2 className={classes["static-display-title"]} style={{ color: color }}>
                    {data}
                </h2>
                <Divider className={classes["static-display-divider"]} />
                <span style={{ color: color }}>{title}</span>
            </div>
        );
    }
}

export default withStyles(style)(StaticDisplay);
