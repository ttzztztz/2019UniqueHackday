import { combineReducers } from "redux";
import { CityStore, cityReducer } from "./city";
import { DataStore, dataReducer } from "./data";

export interface StoreState {
    city: CityStore;
    data: DataStore;
}
export const reducers = combineReducers({
    city: cityReducer,
    data: dataReducer
});
