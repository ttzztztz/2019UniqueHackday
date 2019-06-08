import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { of, from } from "rxjs";
import request from "../Models/request";
import { Epic } from "./index";

import * as TYPE from "../Actions/epic";
import * as TYPINGS from "../Typings";
import * as ACTIONTYPE from "../Actions/data";

const DOMAIN = "https://www.yjwbenji.top/";

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
                    const dataRaw: Array<TYPINGS.ITop5Hot> = (resArr as any[]).map(item => ({
                        rank: item.rank,
                        title: item.incidentTitle,
                        region: item.province,
                        hot: item.rank,
                        area: "",
                        href: item.originalUrl
                    }));

                    const data = dataRaw.length > 5 ? dataRaw.slice(0, 5) : dataRaw;

                    return of({
                        type: ACTIONTYPE.CHANGE_TOP5_HOT,
                        data: data
                    } as ACTIONTYPE.IChangeTOP5Hot);
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

                    const dataRaw: Array<TYPINGS.ITop5Change> = (resArr as any[]).map(item => ({
                        rank: item.rank,
                        title: item.incidentTitle,
                        region: item.province,
                        hot: item.rank,
                        area: "",
                        href: item.originalUrl
                    }));

                    const data = dataRaw.length > 5 ? dataRaw.slice(0, 5) : dataRaw;

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

                    return of({
                        type: ACTIONTYPE.CHANGE_CITY_DATA,
                        cityInfos: data
                    } as ACTIONTYPE.IChangeCityData);
                })
            );
        })
    );

// const rankChange: Epic = action$ =>
//     action$.pipe(
//         ofType(TYPE.REQUEST_CHANGE_RANK),
//         mergeMap(() => {
//             return from(request(`${DOMAIN}rank`)).pipe(
//                 mergeMap(res => {
//                     const data = res;
//                     return of({
//                         type: ACTIONTYPE.CHANGE_RANK,
//                         data: data
//                     } as ACTIONTYPE.IChangeRank);
//                 })
//             );
//         })
//     );

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

export default [beginEpics, changeTop5Hot, changeTop5Change, cityInfoChange];
