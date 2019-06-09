export const CHANGE_CITY = "CHANGE_CITY";
export type CHANGE_CITY = typeof CHANGE_CITY;
export interface IChangeCity {
    type: CHANGE_CITY;
    name: string;
}
export const changeCity = function(cityName: string): IChangeCity {
    return {
        type: CHANGE_CITY,
        name: cityName
    };
};

export const CHANGE_CITY_LOAD_STATUS = "CHANGE_CITY_LOAD_STATUS";
export type CHANGE_CITY_LOAD_STATUS = typeof CHANGE_CITY_LOAD_STATUS;
export interface IChangeCityLoadStatus {
    type: CHANGE_CITY_LOAD_STATUS;
    data: boolean;
}
export const changeCityLoadStatus = function(status: boolean): IChangeCityLoadStatus {
    return {
        type: CHANGE_CITY_LOAD_STATUS,
        data: status
    };
};
