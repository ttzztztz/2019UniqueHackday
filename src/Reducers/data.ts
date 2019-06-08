import * as actions from "../Actions/data";

export interface DataStore {
    cityInfo: Array<{
        name: string;
        value: number;
        description: string;
    }>;
    top5Hot: Array<{
        rank: number;
        title: string;
        region: string;
        hot: number;
        area: string;
        href: string;
    }>;
    top5Change: Array<{
        rank: number;
        title: string;
        region: string;
        hot: number;
        area: string;
        href: string;
    }>;
    rank: Array<{
        rank: number;
        title: string;
        region: string;
        hot: number;
        area: string;
        href: string;
    }>;
    statics: {
        basic: Array<{
            name: string;
            events: number;
            up: number;
            down: number;
        }>;
        percent: Array<{ name: string; data: Array<number> }>;
    };
}

type Action =
    | actions.IChangeCityData
    | actions.IChangeTOP5Change
    | actions.IChangeTOP5Hot
    | actions.IChangeRank
    | actions.IChangeBasicStatic
    | actions.IChangePercent;

const initState: DataStore = {
    cityInfo: [
        { name: "北京", value: 1989, description: "北京高考" },
        { name: "江苏", value: 1999, description: "江苏作文" }
    ],
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
    ],
    rank: [
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
    ],
    statics: {
        basic: [
            {
                name: "全国",
                events: 12,
                up: 30,
                down: 7
            },
            {
                name: "上海",
                events: 9,
                up: 2,
                down: 3
            }
        ],
        percent: [
            {
                name: "江苏",
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
            },
            {
                name: "河北",
                data: [99, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
            }
        ]
    }
};

export const dataReducer = function(state = initState, action: Action): DataStore {
    switch (action.type) {
        case actions.CHANGE_CITY_DATA:
            return { ...state, cityInfo: action.cityInfos };
        case actions.CHANGE_TOP5_HOT:
            return { ...state, top5Hot: action.data };
        case actions.CHANGE_TOP5_CHANGE:
            return { ...state, top5Change: action.data };
        case actions.CHANGE_BASIC_STATIC:
            return {
                ...state,
                statics: {
                    basic: [...state.statics.basic],
                    percent: action.data
                }
            };
        case actions.CHANGE_PERCENT:
            return {
                ...state,
                statics: {
                    basic: action.data,
                    percent: [...state.statics.percent]
                }
            };
        case actions.CHANGE_RANK:
            return { ...state, rank: action.data };
    }
    return state;
};
