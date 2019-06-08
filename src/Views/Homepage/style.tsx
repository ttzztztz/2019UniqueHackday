import { createStyles } from "@material-ui/core/styles";

const styles = createStyles({
    main: {
        margin: "48px auto"
    },
    "@media screen and (min-width: 800px)": {
        main: {
            maxWidth: "75%"
        }
    },
    "@media screen and (max-width: 800px)": {
        main: {
            maxWidth: "95%"
        }
    },
    tab: {
        marginBottom: "56px"
    }
});

export default styles;
