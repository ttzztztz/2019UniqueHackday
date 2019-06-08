import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

interface Props extends WithStyles {}

class SearchBox extends React.PureComponent<Props> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes["search-container"]}>
                <h2 className={classes["search-title"]}>网络传播热度指数</h2>
                <Paper className={classes.root}>
                    <InputBase className={classes.input} placeholder="请输入人名、地名、机构、公司或事件关键词" />
                    <IconButton className={classes.iconButton} aria-label="搜索">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(SearchBox);
