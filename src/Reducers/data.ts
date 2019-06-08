import * as actions from "../Actions/data";

export interface DataStore {
    cityInfo: Array<any>;
    top5Hot: Array<any>;
    top5Change: Array<any>;
}

type Action = actions.IChangeCityData | actions.IChangeTOP5Change | actions.IChangeTOP5Hot;

const initState: DataStore = {
    cityInfo: [{ name: "北京", value: 1989 }, { name: "江苏", value: 1999 }],
    top5Hot: [
        {
            rank: 1,
            title: "洪志远学姐",
            region: "湖北",
            hot: 1.22,
            area: "计算机科学",
            href: "https://www.hzytql.top"
        },
        {
            rank: 2,
            title: "洪志远学姐",
            region: "湖北",
            hot: 2.22,
            area: "计算机科学",
            href: "https://www.hzytql.top"
        },
        {
            rank: 3,
            title: "洪志远学姐",
            region: "湖北",
            hot: 3.22,
            area: "计算机科学",
            href: "https://www.hzytql.top"
        }
    ],
    top5Change: [
        {
            rank: 1,
            title: "洪志远学姐",
            region: "湖北",
            hot: 1.22,
            area: "计算机科学",
            href: "https://www.hzytql.top"
        },
        {
            rank: 2,
            title: "洪志远学长",
            region: "湖北",
            hot: 2.22,
            area: "计算机科学",
            href: "https://www.hzytql.top"
        },
        {
            rank: 3,
            title: "洪志远学长",
            region: "湖北",
            hot: 3.22,
            area: "计算机科学",
            href: "https://www.hzytql.top"
        }
    ]
};

export const dataReducer = function(state = initState, action: Action): DataStore {
    switch (action.type) {
        case actions.CHANGE_CITY_DATA:
            const { cityInfos } = action;
            return { ...state, cityInfo: cityInfos };
        case actions.CHANGE_TOP5_HOT:
            return { ...state, top5Hot: action.data };
        case actions.CHANGE_TOP5_CHANGE:
            return { ...state, top5Change: action.data };
    }
    return state;
};
