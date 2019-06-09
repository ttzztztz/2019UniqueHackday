import { connect } from "react-redux";
import { Dispatch } from "redux";
import TOP from "../../Components/SideBar/TOP";
import { StoreState } from "../../Reducers";

const mapStateToProps = ({ data: { top5Change, top5Hot }, city: { name: cityName } }: StoreState) => ({
    data: {
        change: top5Change,
        hot: top5Hot
    },
    city: cityName
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TOP);
