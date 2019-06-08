import { connect } from "react-redux";
import { Dispatch } from "redux";
import ImportantEvent from "../../Views/Homepage/importantEvent";
import { StoreState } from "../../Reducers";

const mapStateToProps = ({ data: { important } }: StoreState) => ({ important });

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImportantEvent);
