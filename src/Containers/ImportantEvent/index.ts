import { connect } from "react-redux";
import { Dispatch } from "redux";
import ImportantEvent from "../../Views/Homepage/importantEvent";
import { StoreState } from "../../Reducers";
import { updateImportant } from "../../Actions/important";
import { IImportant } from "../../Typings";

const mapStateToProps = ({ data: { important } }: StoreState) => ({ important });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    dispatchChangeImportantGraph: (data: IImportant) => dispatch(updateImportant(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImportantEvent);
