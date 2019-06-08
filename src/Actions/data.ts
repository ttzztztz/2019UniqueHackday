import * as TYPINGS from "../Typings";

export const CHANGE_CITY_DATA = "CHANGE_CITY_DATA";
export type CHANGE_CITY_DATA = typeof CHANGE_CITY_DATA;
export interface IChangeCityData {
    type: CHANGE_CITY_DATA;
    cityInfos: Array<TYPINGS.ICityInfo>;
}
export const changeCityData = function(cityInfos: Array<TYPINGS.ICityInfo>): IChangeCityData {
    return {
        type: CHANGE_CITY_DATA,
        cityInfos: cityInfos
    };
};

export const CHANGE_TOP5_HOT = "CHANGE_TOP5_HOT";
export type CHANGE_TOP5_HOT = typeof CHANGE_TOP5_HOT;
export interface IChangeTOP5Hot {
    type: CHANGE_TOP5_HOT;
    data: Array<TYPINGS.ITop5Hot>;
}
export const changeTOP5Hot = function(data: Array<TYPINGS.ITop5Hot>): IChangeTOP5Hot {
    return {
        type: CHANGE_TOP5_HOT,
        data: data
    };
};

export const CHANGE_TOP5_CHANGE = "CHANGE_TOP5_CHANGE";
export type CHANGE_TOP5_CHANGE = typeof CHANGE_TOP5_CHANGE;
export interface IChangeTOP5Change {
    type: CHANGE_TOP5_CHANGE;
    data: Array<TYPINGS.ITop5Change>;
}
export const changeTOP5Change = function(data: Array<TYPINGS.ITop5Change>): IChangeTOP5Change {
    return {
        type: CHANGE_TOP5_CHANGE,
        data: data
    };
};

export const CHANGE_BASIC_STATIC = "CHANGE_BASIC_STATIC";
export type CHANGE_BASIC_STATIC = typeof CHANGE_BASIC_STATIC;
export interface IChangeBasicStatic {
    type: CHANGE_BASIC_STATIC;
    data: Array<TYPINGS.IStaticsBasic>;
}
export const changeBasicStatic = function(data: Array<TYPINGS.IStaticsBasic>): IChangeBasicStatic {
    return {
        type: CHANGE_BASIC_STATIC,
        data: data
    };
};

export const CHANGE_PERCENT = "CHANGE_PERCENT";
export type CHANGE_PERCENT = typeof CHANGE_PERCENT;
export interface IChangePercent {
    type: CHANGE_PERCENT;
    data: Array<TYPINGS.IStaticsPercent>;
}
export const changePercent = function(data: Array<TYPINGS.IStaticsPercent>): IChangePercent {
    return {
        type: CHANGE_PERCENT,
        data: data
    };
};

export const CHANGE_RANK = "CHANGE_RANK";
export type CHANGE_RANK = typeof CHANGE_RANK;
export interface IChangeRank {
    type: CHANGE_RANK;
    data: Array<TYPINGS.IRank>;
}
export const changeRank = function(data: Array<TYPINGS.IRank>): IChangeRank {
    return {
        type: CHANGE_RANK,
        data: data
    };
};

export const CHANGE_IMPORTANT = "CHANGE_IMPORTANT";
export type CHANGE_IMPORTANT = typeof CHANGE_IMPORTANT;
export interface IChangeImportant {
    type: CHANGE_IMPORTANT;
    data: Array<TYPINGS.IImportant>;
}
export const changeImportant = function(data: Array<TYPINGS.IImportant>): IChangeImportant {
    return {
        type: CHANGE_IMPORTANT,
        data: data
    };
};
