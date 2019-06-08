import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./detailStyle";

interface Props extends WithStyles {
    city: string;
}

class DetailView extends React.PureComponent<Props> {
    render() {
        return <></>;
    }
}

export default withStyles(style)(DetailView);
