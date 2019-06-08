import { connect } from "react-redux";
import { Dispatch } from "redux";
import Rank from "../../Components/Rank";
import { StoreState } from "../../Reducers";

const mapStateToProps = ({ city: { name }, data: { rank } }: StoreState) => ({
    city: name,
    rank: rank
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rank);
