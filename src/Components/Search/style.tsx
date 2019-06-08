import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "60%",
        margin: "0 auto",
        borderRadius: "24px"
    },
    input: {
        marginLeft: 8,
        flex: 1
    },
    iconButton: {
        padding: 10,
        background: "#fd504d",
        color: "white",
        "&:hover": {
            background: "#fd504d99",
            color: "white"
        }
    },
    "search-container": {
        margin: "24px auto 60px auto"
    },
    "search-title": {
        margin: "0 auto 12px auto",
        textAlign: "center"
    }
});

export default styles;
