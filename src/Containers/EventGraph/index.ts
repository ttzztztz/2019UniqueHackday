import { connect } from "react-redux";
import { Dispatch } from "redux";
import EventGraph from "../../Views/Homepage/eventGraph";
import { StoreState } from "../../Reducers";

const mapStateToProps = ({ important }: StoreState) => ({ ...important });

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventGraph);
