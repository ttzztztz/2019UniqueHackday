import { connect } from "react-redux";
import { Dispatch } from "redux";
import Homepage from "../../Views/Homepage";
import { BEGIN_DISPATCH } from "../../Actions/epic";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    beginDispatch: () => dispatch({ type: BEGIN_DISPATCH })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage);
