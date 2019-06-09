import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

interface Props extends WithStyles {
    content: string;
    verified: boolean;
}

class LieItem extends React.PureComponent<Props> {
    state = {
        expand: false
    };
    handleOnClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    };
    render() {
        const { classes, content, verified } = this.props;
        return (
            <Button
                className={classes["main"]}
                variant="outlined"
                onClick={this.handleOnClick}
                style={{ height: this.state.expand ? "240px" : "120px" }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={1} className={classes["img-container"]}>
                        {verified ? (
                            <DoneIcon className={classes["ok-icon"]} />
                        ) : (
                            <ClearIcon className={classes["no-icon"]} />
                        )}
                    </Grid>
                    <Grid item xs={11} className={classes["img-container"]}>
                        {content}
                    </Grid>
                </Grid>
            </Button>
        );
    }
}

export default withStyles(styles)(LieItem);
