import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import style from "./TOPStyle";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

interface Props extends WithStyles {
    city: string;
    type: "change" | "hot";
}

class TopDetail extends React.PureComponent<Props> {
    render() {
        const { classes } = this.props;
        return (
            <Table className={classes.table}>
                <TableBody>
                    <TableRow key={1}>
                        <TableCell component="th" scope="row">
                            洪志远
                        </TableCell>
                        <TableCell align="right">科学人物</TableCell>
                        <TableCell align="right">湖北</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default withStyles(style)(TopDetail);
