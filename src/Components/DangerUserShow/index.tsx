import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "./style";

import Typography from "@material-ui/core/Typography";

interface Props extends WithStyles {
    name: string;
    sex: string;
    birthday: string;
    location: string;
    avatar: string;
    tendency: string;
}

class DangerUserShow extends React.PureComponent<Props> {
    render() {
        const { classes, name, sex, birthday, location, avatar, tendency } = this.props;
        return (
            <div className={classes["root"]}>
                <img src={avatar} />
                <Typography variant="body2" className={classes["title"]}>
                    用户
                </Typography>
                <Typography variant="body1">{name}</Typography>
                <Typography variant="body2" className={classes["title"]}>
                    性别
                </Typography>
                <Typography variant="body1">{sex}</Typography>
                <Typography variant="body2" className={classes["title"]}>
                    生日
                </Typography>
                <Typography variant="body1">{birthday}</Typography>
                <Typography variant="body2" className={classes["title"]}>
                    地点
                </Typography>
                <Typography variant="body1">{location}</Typography>
                <Typography variant="body2" className={classes["title"]}>
                    自杀倾向
                </Typography>
                <Typography variant="body1">{tendency}</Typography>
            </div>
        );
    }
}

export default withStyles(styles)(DangerUserShow);
