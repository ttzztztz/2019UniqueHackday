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
