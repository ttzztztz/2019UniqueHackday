import * as actions from "../Actions/city";

export interface CityStore {
    name: string;
}

type Action = actions.IChangeCity;

const initState: CityStore = {
    name: "全国"
};

export const cityReducer = function(state = initState, action: Action): CityStore {
    switch (action.type) {
        case actions.CHANGE_CITY:
            const { name } = action;
            return { ...state, name: name };
    }
    return state;
};
