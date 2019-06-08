import { connect } from "react-redux";
import { Dispatch } from "redux";
import ChinaMap from "../../Components/ChinaMap";
import { StoreState } from "../../Reducers";

const mapStateToProps = ({ data: { cityInfo: cityInfoArr } }: StoreState) => ({
    cityInfo: cityInfoArr
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChinaMap);
