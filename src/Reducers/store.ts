import { createStore, applyMiddleware, Store } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { StoreState } from "./index";
import { epics } from "../Epics";

const epicMiddleware = createEpicMiddleware();

const store: Store<StoreState> = createStore(applyMiddleware(epicMiddleware));

epicMiddleware.run(epics);

export default store;
