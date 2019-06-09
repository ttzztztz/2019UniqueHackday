import { connect } from "react-redux";
import { Dispatch } from "redux";
import ChinaMap from "../../Components/ChinaMap";
import { StoreState } from "../../Reducers";

import { changeCity } from "../../Actions/city";

const mapStateToProps = ({ data: { cityInfo: cityInfoArr, top5Hot } }: StoreState) => ({
    cityInfo: cityInfoArr,
    top5Hot
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeCity: (cityName: string) => dispatch(changeCity(cityName))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChinaMap);
