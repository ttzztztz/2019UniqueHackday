import { connect } from "react-redux";
import { Dispatch } from "redux";
import { withRouter } from "react-router";
import Bar from "../../Components/Bar";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Bar)
);
