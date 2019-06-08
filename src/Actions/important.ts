import * as TYPINGS from "../Typings";

export const UPDATE_IMPORTANT = "UPDATE_IMPORTANT";
export type UPDATE_IMPORTANT = typeof UPDATE_IMPORTANT;
export interface IUpdateImportant {
    type: UPDATE_IMPORTANT;
    data: TYPINGS.IImportant;
}
export const updateImportant = function(data: TYPINGS.IImportant): IUpdateImportant {
    return {
        type: UPDATE_IMPORTANT,
        data: data
    };
};
