import * as actions from "../Actions/city";

export interface CityStore {
    name: string;
    cityLoad: boolean;
}

type Action = actions.IChangeCity | actions.IChangeCityLoadStatus;

const initState: CityStore = {
    name: "全国",
    cityLoad: false
};

export const cityReducer = function(state = initState, action: Action): CityStore {
    switch (action.type) {
        case actions.CHANGE_CITY:
            return { ...state, name: action.name };
        case actions.CHANGE_CITY_LOAD_STATUS:
            return { ...state, cityLoad: action.data };
    }
    return state;
};
