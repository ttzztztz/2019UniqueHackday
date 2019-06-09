import * as actions from "../Actions/data";
import * as TYPINGS from "../Typings";

export interface DataStore {
    cityInfo: Array<TYPINGS.ICityInfo>;
    top5Hot: Array<TYPINGS.ITop5Hot>;
    top5Change: Array<TYPINGS.ITop5Change>;
    rank: Array<TYPINGS.IRank>;
    statics: TYPINGS.IStatics;
    important: Array<TYPINGS.IImportant>;
    provinceReflection: {
        [k: string]: string;
    };
}

type Action =
    | actions.IChangeCityData
    | actions.IChangeTOP5Change
    | actions.IChangeTOP5Hot
    | actions.IChangeRank
    | actions.IChangeBasicStatic
    | actions.IChangePercent
    | actions.IChangeImportant
    | actions.IChangeProvinceReflection;

const initState: DataStore = {
    cityInfo: [
        { name: "北京", value: 1989, description: "北京高考" },
        { name: "江苏", value: 1999, description: "江苏作文" }
    ],
    top5Hot: [],
    top5Change: [],
    rank: [],
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
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
                name: "河北",
                data: [99, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        ]
    },
    important: [
        {
            title: "10余省份高考放榜时间表出炉",
            area: "高考",
            sensitivePercent: "12%",
            hotPercent: "25%",
            topPercent: "8%",
            intoTotal: 222,
            hotHistoryData: [1, 4, 9, 12, 11, 7],
            region: "全国",
            date: "2019/06/09"
        },
        {
            title: "中国移动/联通/电信首批5G城市名单",
            area: "通信",
            sensitivePercent: "2%",
            hotPercent: "7%",
            topPercent: "44%",
            intoTotal: 211,
            hotHistoryData: [1, 9, 8, 12, 13, 15],
            region: "江苏",
            date: "2019/06/09"
        }
    ],
    provinceReflection: {}
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
                    basic: action.data,
                    percent: [...state.statics.percent]
                }
            };
        case actions.CHANGE_PERCENT:
            return {
                ...state,
                statics: {
                    basic: [...state.statics.basic],
                    percent: action.data
                }
            };
        case actions.CHANGE_RANK:
            return { ...state, rank: action.data };
        case actions.CHANGE_IMPORTANT:
            return { ...state, important: [...action.data] };
        case actions.CHANGE_PROVINCE_REFLECTION:
            return { ...state, provinceReflection: { ...action.data } };
    }
    return state;
};
