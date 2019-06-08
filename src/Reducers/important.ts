import * as actions from "../Actions/important";

export interface ImportantStore {
    title: string;
    area: string;
    sensitivePercent: string;
    hotPercent: string;
    topPercent: string;
    intoTotal: number;
    hotHistoryData: Array<number>;
}

type Action = actions.IUpdateImportant;

const initState: ImportantStore = {
    title: "洪志远",
    area: "计算机科学",
    sensitivePercent: "12%",
    hotPercent: "25%",
    topPercent: "8%",
    intoTotal: 222,
    hotHistoryData: [1, 7, 4, 2, 6, 5]
};

export const importantReducer = function(state = initState, action: Action): ImportantStore {
    switch (action.type) {
        case actions.UPDATE_IMPORTANT:
            const { data } = action;
            return { ...state, ...data };
    }
    return state;
};
