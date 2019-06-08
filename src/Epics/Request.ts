import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { of, from } from "rxjs";
import * as TYPE from "../Actions/epic";
import * as ACTIONTYPE from "../Actions/data";
import request from "../Models/request";
import { Epic } from "./index";

const DOMAIN = "https://www.yjwbenji.top/";

const changeTop5Hot: Epic = action$ =>
    action$.pipe(
        ofType(TYPE.REQUEST_TOP5HOT),
        mergeMap(() => {
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
