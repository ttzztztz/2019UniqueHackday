import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
    circle: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        background: "#FFD300",
        display: "inline-block"
    },
    "circle-container": {
        textAlign: "center"
    },
    "item-hot": {
        color: "red"
    },
    "hot-container": {
        marginTop: "6px"
    },
    "item-icon": {
        width: "14px",
        height: "14px"
    },
    "item-paper": {
        height: "72px",
        padding: "12px",
        margin: "9px auto"
    }
});

export default styles;
