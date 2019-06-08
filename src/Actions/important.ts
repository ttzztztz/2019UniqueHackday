export const CHANGE_IMPORTANT = "CHANGE_IMPORTANT";
export type CHANGE_IMPORTANT = typeof CHANGE_IMPORTANT;
export interface IChangeImportantData {
    title: string;
    area: string;
    sensitivePercent: string;
    hotPercent: string;
    topPercent: string;
    intoTotal: number;
    hotHistoryData: Array<number>;
}
export interface IChangeImportant {
    type: CHANGE_IMPORTANT;
    data: IChangeImportantData;
}
export const changeImportant = function(data: IChangeImportantData): IChangeImportant {
    return {
        type: CHANGE_IMPORTANT,
        data: data
    };
};
