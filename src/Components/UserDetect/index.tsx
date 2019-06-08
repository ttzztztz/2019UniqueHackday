import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import DangerUserShow from "../../Components/DangerUserShow";

interface Props extends WithStyles {}

class UserDetect extends React.PureComponent<Props> {
    state = {
        selected: 0
    };

    handleOnClick = (key: number) => () => {
        this.setState({
            selected: key
        });
    };

    render() {
        const { classes } = this.props;
        const { selected } = this.state;
        return (
            <>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <div className={classes.toolbar} />
                        <Divider />
                        <List>
                            {["重度关注对象", "中度关注对象", "轻度关注对象"].map((item, key) => (
                                <ListItem
                                    button
                                    key={key}
                                    selected={selected === key}
                                    onClick={this.handleOnClick(key)}
                                >
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                    </Grid>
                    <Grid item xs={9}>
                        <div className={classes.content}>
                            <DangerUserShow name="洪志远" sex="男" birthday="1998/07/01" location="武汉" />
                            <DangerUserShow name="洪志远" sex="男" birthday="1998/07/01" location="武汉" />
                            <DangerUserShow name="洪志远" sex="男" birthday="1998/07/01" location="武汉" />
                            <DangerUserShow name="洪志远" sex="男" birthday="1998/07/01" location="武汉" />
                        </div>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles(styles)(UserDetect);
