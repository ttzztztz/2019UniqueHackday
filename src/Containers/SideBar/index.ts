import { connect } from "react-redux";
import { Dispatch } from "redux";
import SideBar from "../../Components/SideBar";
import { StoreState } from "../../Reducers";

const mapStateToProps = ({ city: { name } }: StoreState) => ({
    city: name
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);
