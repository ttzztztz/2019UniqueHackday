## /china

-   GET

-   Response

-

```json
{
    "data": {
        "code": "0000",
        "message": "处理正常！",
        "list": [
            {
                "city": "",
                "createTime": "2019-06-08T09:27:26.000+0000", //热点创建时间
                "differenceDay": "",
                "emotion": "",
                "incidentSeq": 0,
                "incidentTitle": "2019年高考结束", //热点标题
                "keyword": "(2019)+(高考)+(结束)", //关键词
                "keyword1": "", //关键词
                "keyword2": "",
                "keyword3": "",
                "keyword4": "",
                "labels": "100308",
                "lineData": null,
                "longTitle": "高考结束啦！看考点外家长老师鲜花掌声迎接考生h", //热点长标题
                "origin": "新京报",
                "originalUrl": String, //新闻的原始出处
                "province": "全国",
                "rank": 5, //排名
                "rankDifference": -5, // 排名变化
                "rankLast": 0
            }
        ]
    }
}
```

## /provinces/change

-   GET

-   Response

-   每个省份变化最大的前五

    ```json
    {
        "data": [
            //每个省份包含的信息
            {
                "code": "0000",
                "message": "处理正常！",
                "totalCount": 10,
                "list": [
                    {
                        "city": "",
                        "createTime": "2019-06-08T08:45:37.000+0000", //创建时间
                        "differenceDay": "",
                        "emotion": "",
                        "incidentSeq": 0,
                        "incidentTitle": "澳门大学获国际龙舟赛冠军", //热点标题
                        "keyword": "(澳门大学|澳大)+(龙舟赛)+(冠军|夺冠)",
                        "keyword1": "",
                        "keyword2": "",
                        "keyword3": "",
                        "keyword4": "",
                        "labels": "100202,100301,101401",
                        "lineData": null,
                        "longTitle": "國際龍舟賽九江女隊八連霸",
                        "origin": "澳门日报", //源出处
                        "originalUrl": "http://www.macaodaily.com/html/2019-06/08/content_1358663.htm", //原始出处源头
                        "province": "澳门", // 省份
                        "rank": 379,
                        "rankDifference": -379,
                        "rankLast": 0
                    }
                ]
            }
        ]
    }
    ```

## /provinces/top

-   GET

-   Response

-   每个省份前五热榜,具体和上一个请求一样

    ```json
    {
        "data": [
            {
                "code": "0000",
                "message": "处理正常！",
                "totalCount": 10,
                "list": [
                    {
                        "city": "",
                        "createTime": "2019-06-08T08:43:22.000+0000",
                        "differenceDay": "",
                        "emotion": "",
                        "incidentSeq": 0,
                        "incidentTitle": "港珠澳大桥口岸客流破千万",
                        "keyword": "(港珠澳大桥)+(口岸)+(千万)+(客流|旅客)",
                        "keyword1": "",
                        "keyword2": "",
                        "keyword3": "",
                        "keyword4": "",
                        "labels": "100503,101401",
                        "lineData": null,
                        "longTitle": "港珠澳大桥珠海口岸客流破千万",
                        "origin": "文汇网",
                        "originalUrl": "http://www.hkcna.hk/content/2019/0607/767363.shtml",
                        "province": "澳门",
                        "rank": 1526,
                        "rankDifference": -1526,
                        "rankLast": 0
                    }
                ]
            }
        ]
    }
    ```

## typeprop

-   GET

-   Response

-   每个省的饼状图数据，数组的顺序和 province 排名返回的顺序一致

    ```json
    {
        "data": [
            {
                "code": "0000",
                "data": {
                    "体育": 2,
                    "政务": 4,
                    "教育": 2,
                    "文娱": 2,
                    "民生": 2,
                    "法治": 1,
                    "经济": 1,
                    "身边事": 10
                },
                "message": "处理正常！"
            }
        ]
    }
    ```

### rank

-   GET
-   Response
-   每个省的数据总览，排序和/provinces/top or /provinces/change 顺序相对应

```json
{
    "data": [
        {
            "code": "0000",
            "data": {
                "hotAsc": 4, //热度上升事件数
                "hotAvg": 0.128405424444, //24小时平均热度值
                "hotCount": 9, //总数
                "hotDesc": 3, //热度下降事件数
                "hotDifferenceAvg": 0.098331555556 //24小时平均变化热度值
            },
            "message": "处理正常！"
        }
    ]
}
```
