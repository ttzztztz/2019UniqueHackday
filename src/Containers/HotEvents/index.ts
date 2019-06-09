import { connect } from "react-redux";
import { Dispatch } from "redux";
import HotEvents from "../../Views/Homepage/hotEvent";
import { StoreState } from "../../Reducers";

const mapStateToProps = ({ city: { cityLoad } }: StoreState) => ({ finishCityLoad: cityLoad });

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotEvents);
