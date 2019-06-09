import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { of, from } from "rxjs";
import request from "../Models/request";
import { Epic } from "./index";

import * as TYPE from "../Actions/epic";
import * as TYPINGS from "../Typings";
import * as ACTIONTYPE from "../Actions/data";
import * as ACTIONCITYTYPE from "../Actions/city";

const DOMAIN = "https://www.yjwbenji.top/";

const changeStaticsPercent: Epic = action$ =>
    action$.pipe(
        ofType(ACTIONTYPE.CHANGE_PROVINCE_REFLECTION),
        mergeMap((action: ACTIONTYPE.IChangeProvinceReflection) => {
            return from(request(`${DOMAIN}typeprop`)).pipe(
                mergeMap(res => {
                    const arr: Array<any> = res.data;
                    const data = arr.reduce((p, item, key) => {
                        if (item.data) {
                            p.push({
                                name: action.data[key],
                                data: Object.values(item.data)
                            });
                        }

                        return p;
                    }, []);

                    return of({
                        type: ACTIONTYPE.CHANGE_PERCENT,
                        data: data
                    });
                })
            );
        })
    );

const changeStaticsAnalysis: Epic = action$ =>
    action$.pipe(
        ofType(ACTIONTYPE.CHANGE_PROVINCE_REFLECTION),
        mergeMap((action: ACTIONTYPE.IChangeProvinceReflection) => {
            return from(request(`${DOMAIN}rank`)).pipe(
                mergeMap(res => {
                    const arr: Array<any> = res.data;
                    const totalStatics = {
                        events: 0,
                        up: 0,
                        down: 0
                    };
                    const data = arr.reduce((p, item, key) => {
                        if (item.data) {
                            p.push({
                                name: action.data[key],
                                events: item.data.hotCount + item.data.hotDesc + item.data.hotAsc,
                                up: item.data.hotCount,
                                down: item.data.hotDesc
                            });
                            totalStatics.events += item.data.hotCount + item.data.hotDesc + item.data.hotAsc;
                            totalStatics.up += item.data.hotCount;
                            totalStatics.down += item.data.hotDesc;
                        }

                        return p;
                    }, []);

                    data.push({
                        name: "全国",
                        ...totalStatics
                    });

                    return of({
                        type: ACTIONTYPE.CHANGE_BASIC_STATIC,
                        data: data
                    });
                })
            );
        })
    );

const changeTop5Hot: Epic = action$ =>
    action$.pipe(
        ofType(TYPE.REQUEST_TOP5HOT),
        mergeMap(() => {
            return from(request(`${DOMAIN}provinces/top`)).pipe(
                mergeMap(res => {
                    const resArr = (res.data as any[]).reduce((p, v) => {
                        if (v.list) {
                            p = [...p, ...v.list];
                        }
                        return p;
                    }, []);
                    const data: Array<TYPINGS.ITop5Hot> = (resArr as any[]).map(item => ({
                        rank: item.rank,
                        title: item.incidentTitle,
                        region: item.province,
                        hot: ((Math.random() * 10000) % 100).toFixed(2),
                        area: "",
                        href: item.originalUrl
                    }));
                    // .sort(($1, $2) => Number.parseInt($1.hot as string) - Number.parseInt($2.hot as string));

                    const provinceReflection = (res.data as any[]).reduce((p, v, k) => {
                        if (v.list) {
                            return {
                                ...p,
                                [k]: v.list[0].province
                            };
                        }
                        return p;
                    }, {}) as { [k: string]: string };

                    return of(
                        {
                            type: ACTIONTYPE.CHANGE_TOP5_HOT,
                            data: data
                        } as ACTIONTYPE.IChangeTOP5Hot,
                        {
                            type: ACTIONTYPE.CHANGE_PROVINCE_REFLECTION,
                            data: provinceReflection
                        } as ACTIONTYPE.IChangeProvinceReflection
                    );
                })
            );
        })
    );

const changeTop5Change: Epic = action$ =>
    action$.pipe(
        ofType(TYPE.REQUEST_TOP5CHANGE),
        mergeMap(() => {
            return from(request(`${DOMAIN}provinces/change`)).pipe(
                mergeMap(res => {
                    const resArr = (res.data as any[]).reduce((p, v) => {
                        if (v.list) {
                            p = [...p, ...v.list];
                        }
                        return p;
                    }, []);

                    const data: Array<TYPINGS.ITop5Change> = (resArr as any[]).map(item => ({
                        rank: item.rank,
                        title: item.incidentTitle,
                        region: item.province,
                        hot: ((Math.random() * 10000) % 100).toFixed(2),
                        area: "",
                        href: item.originalUrl
                    }));
                    // .sort(($1, $2) => Number.parseInt($1.hot) - Number.parseInt($2.hot));

                    return of({
                        type: ACTIONTYPE.CHANGE_TOP5_CHANGE,
                        data: data
                    } as ACTIONTYPE.IChangeTOP5Change);
                })
            );
        })
    );

const cityInfoChange: Epic = action$ =>
    action$.pipe(
        ofType(TYPE.REQUEST_CITYDATA),
        mergeMap(() => {
            return from(request(`${DOMAIN}china`)).pipe(
                mergeMap(res => {
                    const resArr = (res.data.list as any[]).reduce((p, v) => {
                        p = [...p, v];
                        return p;
                    }, []);

                    const data: Array<TYPINGS.ICityInfo> = (resArr as any[]).map(item => ({
                        name: item.province,
                        value: 1,
                        description: item.incidentTitle
                    }));

                    return of(
                        {
                            type: ACTIONTYPE.CHANGE_CITY_DATA,
                            cityInfos: data
                        } as ACTIONTYPE.IChangeCityData,
                        {
                            type: ACTIONCITYTYPE.CHANGE_CITY_LOAD_STATUS,
                            data: true
                        }
                    );
                })
            );
        })
    );

const beginEpics: Epic = action$ =>
    action$.pipe(
        ofType(TYPE.BEGIN_DISPATCH),
        mergeMap(() =>
            of(
                {
                    type: TYPE.REQUEST_TOP5CHANGE
                },
                {
                    type: TYPE.REQUEST_TOP5HOT
                },
                {
                    type: TYPE.REQUEST_CITYDATA
                },
                {
                    type: TYPE.REQUEST_CHANGE_RANK
                }
            )
        )
    );

export default [
    beginEpics,
    changeTop5Hot,
    changeTop5Change,
    cityInfoChange,
    changeStaticsAnalysis,
    changeStaticsPercent
];
