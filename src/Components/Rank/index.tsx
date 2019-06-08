import React from "react";
import styles from "./style";
import * as TYPINGS from "../../Typings";

import { withStyles, WithStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import TypeLabel from "../TypeLabel";

interface Props extends WithStyles {
    rank: Array<TYPINGS.IRank>;
    city: string;
}

class Rank extends React.PureComponent<Props> {
    render() {
        const { classes, rank, city } = this.props;
        const data =
            city === "全国"
                ? rank.sort(($1, $2) => $2.hot - $1.hot)
                : rank.filter(item => item.region === city).sort(($1, $2) => $2.hot - $1.hot);

        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes["table-head"]}>
                        <TableCell />
                        <TableCell align="center">名称</TableCell>
                        <TableCell align="center">热度</TableCell>
                        <TableCell align="center">类型</TableCell>
                        <TableCell align="center">地域</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, key) => (
                        <TableRow key={key} className={classes["table-item"]}>
                            <TableCell align="center">{(key + 1).toString()}</TableCell>
                            <TableCell align="center">
                                <a href={item.href} target="_blank">
                                    {item.title}
                                </a>
                            </TableCell>
                            <TableCell align="center">{item.hot.toFixed(2)}</TableCell>
                            <TableCell align="center">
                                <TypeLabel content={item.area} />
                            </TableCell>
                            <TableCell align="center">{item.region}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default withStyles(styles)(Rank);
