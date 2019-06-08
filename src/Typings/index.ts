export interface ICityInfo {
    name: string;
    value: number;
    description: string;
}

export interface ITop5Hot {
    rank: number;
    title: string;
    region: string;
    hot: number;
    area: string;
    href: string;
}

export interface ITop5Change {
    rank: number;
    title: string;
    region: string;
    hot: number;
    area: string;
    href: string;
}

export interface IRank {
    rank: number;
    title: string;
    region: string;
    hot: number;
    area: string;
    href: string;
}

export interface IStatics {
    basic: Array<IStaticsBasic>;
    percent: Array<IStaticsPercent>;
}

export interface IStaticsBasic {
    name: string;
    events: number;
    up: number;
    down: number;
}

export interface IStaticsPercent {
    name: string;
    data: Array<number>;
}

export interface IImportant {
    title: string;
    area: string;
    sensitivePercent: string;
    hotPercent: string;
    topPercent: string;
    intoTotal: number;
    hotHistoryData: Array<number>;
    region: string;
    date: string;
}
