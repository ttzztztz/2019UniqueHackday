import { connect } from "react-redux";
import { Dispatch } from "redux";
import Rank from "../../Components/Rank";
import { StoreState } from "../../Reducers";
import { IRank } from "../../Typings";

const mapStateToProps = ({ city: { name }, data: { top5Change, top5Hot } }: StoreState) => ({
    city: name,
    rank: [...top5Change, ...top5Hot] as Array<IRank>
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rank);
