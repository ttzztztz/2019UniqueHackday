import { combineReducers } from "redux";
import { CityStore, cityReducer } from "./city";

export interface StoreState {
    city: CityStore;
}
export const reducers = combineReducers({
    city: cityReducer
});
