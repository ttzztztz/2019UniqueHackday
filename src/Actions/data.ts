export const CHANGE_CITY_DATA = "CHANGE_CITY_DATA";
export type CHANGE_CITY_DATA = typeof CHANGE_CITY_DATA;
export interface IChangeCityData {
    type: CHANGE_CITY_DATA;
    cityInfos: Array<any>;
}
export const changeCityData = function(cityInfos: Array<any>): IChangeCityData {
    return {
        type: CHANGE_CITY_DATA,
        cityInfos: cityInfos
    };
};

export const CHANGE_TOP5_HOT = "CHANGE_TOP5_HOT";
export type CHANGE_TOP5_HOT = typeof CHANGE_TOP5_HOT;
export interface IChangeTOP5Hot {
    type: CHANGE_TOP5_HOT;
    data: Array<any>;
}
export const changeTOP5Hot = function(data: Array<any>): IChangeTOP5Hot {
    return {
        type: CHANGE_TOP5_HOT,
        data: data
    };
};

export const CHANGE_TOP5_CHANGE = "CHANGE_TOP5_CHANGE";
export type CHANGE_TOP5_CHANGE = typeof CHANGE_TOP5_CHANGE;
export interface IChangeTOP5Change {
    type: CHANGE_TOP5_CHANGE;
    data: Array<any>;
}
export const changeTOP5Change = function(data: Array<any>): IChangeTOP5Change {
    return {
        type: CHANGE_TOP5_CHANGE,
        data: data
    };
};
