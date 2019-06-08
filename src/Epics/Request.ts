import { ofType } from "redux-observable";
import { mergeMap, startWith, switchMap } from "rxjs/operators";
import { of, from } from "rxjs";
import { Epic } from "./index";
import * as TYPE from "../Actions/epic";
import * as ACTIONTYPE from "../Actions/data";
import { AnyAction } from "redux";
import request from "../Models/request";

const DOMAIN = "https://www.yjwbenji.top/";

const changeTop5Hot: Epic = action$ =>
    action$.pipe(
        ofType(TYPE.REQUEST_TOP5HOT),
        switchMap(() => {
            return from(request(`${DOMAIN}provinces/hot`)).pipe(
                mergeMap(res => {
                    return of({
                        type: ACTIONTYPE.CHANGE_TOP5_HOT,
                        data: res
                    });
                })
            );
        })
    );

export default [changeTop5Hot];
