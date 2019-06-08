import { combineReducers } from "redux";
import { CityStore, cityReducer } from "./city";
import { DataStore, dataReducer } from "./data";
import { ImportantStore, importantReducer } from "./important";

export interface StoreState {
    city: CityStore;
    data: DataStore;
    important: ImportantStore;
}
export const reducer = combineReducers({
    city: cityReducer,
    data: dataReducer,
    important: importantReducer
});
