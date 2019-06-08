import * as TYPINGS from "../Typings";

export const CHANGE_IMPORTANT = "CHANGE_IMPORTANT";
export type CHANGE_IMPORTANT = typeof CHANGE_IMPORTANT;
export interface IChangeImportant {
    type: CHANGE_IMPORTANT;
    data: TYPINGS.IImportant;
}
export const changeImportant = function(data: TYPINGS.IImportant): IChangeImportant {
    return {
        type: CHANGE_IMPORTANT,
        data: data
    };
};
