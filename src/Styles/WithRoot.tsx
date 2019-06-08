import React from "react";

import red from "@material-ui/core/colors/red";
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: red
    }
});

function withRoot<T>(Component: React.ComponentType<T>) {
    return (props: T) => (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...props} />
        </MuiThemeProvider>
    );
}
export default withRoot;
