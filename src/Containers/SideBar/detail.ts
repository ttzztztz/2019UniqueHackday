import { connect } from "react-redux";
import { Dispatch } from "redux";
import DetailView from "../../Components/SideBar/detail";
import { StoreState } from "../../Reducers";

const mapStateToProps = ({ data: { statics } }: StoreState) => ({
    statics: statics
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailView);
