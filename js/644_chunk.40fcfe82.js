"use strict";
(self["webpackChunkreact_cli"] = self["webpackChunkreact_cli"] || []).push([[644],{

/***/ 2341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Transportation)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./src/pages/Transportation/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const Transportation = ({"researchDirectionWrap":"index_researchDirectionWrap__ZuA2w","title":"index_title_pIbmIc","content":"index_content_ZqUVgE","clear":"index_clear_ar1B8s","mainTitle":"index_mainTitle_jhwCew","listTitle":"index_listTitle_u4MCS5","imgCenter":"index_imgCenter_1taPWQ","partTitle":"index_partTitle_jC2VrN","mt20":"index_mt20_EouXS8","mt40":"index_mt40_J5r1xP","mt60":"index_mt60_lNKK6Y","mb60":"index_mb60_ue9GMp","even":"index_even_h_bT4C","odd":"index_odd_nWEBsT","table":"index_table_PSJtnl","timeTable":"index_timeTable_goNdZx","footer":"index_footer_MyWdN9","nameCol":"index_nameCol__ZPh6n","titleCol":"index_titleCol_AJsXKo","qrcode":"index_qrcode_pmsXbC","reporterWapper":"index_reporterWapper_ZFXskT","reporterRow":"index_reporterRow_S295O4","card":"index_card_d4ftqP","box":"index_box_KL78jM","imgDiv":"index_imgDiv_AcJs_F","botDiv":"index_botDiv_ZduTbg","name":"index_name_wRGHd3","left":"index_left_OYYZGf","desc":"index_desc_PkJZ5g","row1":"index_row1_JKEUMW","row2":"index_row2_uFZuek","row3":"index_row3_BvtbK4","row4":"index_row4_ndQe_C","row5":"index_row5_DAHnok"});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(1225);
// EXTERNAL MODULE: ./src/asset/map.jpg
var map = __webpack_require__(385);
;// CONCATENATED MODULE: ./src/asset/enMap.jpg
const enMap_namespaceObject = __webpack_require__.p + "images/enMap.931c3af3..jpg";
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 227 modules
var table = __webpack_require__(8022);
// EXTERNAL MODULE: ./node_modules/antd/es/table/style/css.js + 17 modules
var css = __webpack_require__(340);
// EXTERNAL MODULE: ./node_modules/antd/es/image/style/css.js + 1 modules
var style_css = __webpack_require__(958);
// EXTERNAL MODULE: ./node_modules/antd/es/row/style/css.js
var row_style_css = __webpack_require__(8809);
// EXTERNAL MODULE: ./node_modules/antd/es/card/style/css.js + 5 modules
var card_style_css = __webpack_require__(2601);
// EXTERNAL MODULE: ./node_modules/antd/es/col/style/css.js
var col_style_css = __webpack_require__(9635);
;// CONCATENATED MODULE: ./src/pages/Transportation/index.tsx















function Transportation_Transportation() {
    var trafficColumns = [
        {
            title: '终点',
            key: 'des',
            dataIndex: 'des',
            width: '25%',
            align: 'center',
            render: function (text, record, index) {
                var previousRow = trafficData[index - 1];
                var nextRow = trafficData[index + 1];
                var rowSpan = 1;
                if (previousRow && previousRow.des === text) {
                    return {
                        children: text,
                        props: {
                            rowSpan: 0,
                        },
                    };
                }
                while (nextRow && nextRow.des === text) {
                    rowSpan++;
                    index++;
                    nextRow = trafficData[index + 1];
                }
                return {
                    children: text,
                    props: {
                        rowSpan: rowSpan,
                    },
                };
            },
        },
        {
            title: '起点',
            dataIndex: 'start',
            key: 'start',
            width: '25%',
            align: 'center',
            render: function (text, record, index) {
                var previousRow = trafficData[index - 1];
                var nextRow = trafficData[index + 1];
                var rowSpan = 1;
                if (previousRow && previousRow.start === text) {
                    return {
                        children: text,
                        props: {
                            rowSpan: 0,
                        },
                    };
                }
                while (nextRow && nextRow.start === text) {
                    rowSpan++;
                    index++;
                    nextRow = trafficData[index + 1];
                }
                return {
                    children: text,
                    props: {
                        rowSpan: rowSpan,
                    },
                };
            },
        },
        {
            title: '交通工具',
            dataIndex: 'way',
            key: 'way',
            width: '25%',
            align: 'center',
        },
        {
            title: '路线及时长',
            dataIndex: 'time',
            key: 'time',
            width: '25%',
            align: 'center',
            render: function (text) { return react.createElement("span", { dangerouslySetInnerHTML: { __html: text } }); },
        }
    ];
    var trafficData = [
        {
            des: '湖南大学南校区',
            start: '长沙黄花机场',
            way: '出租车',
            time: '预计花费 95-110 元</br>约 1.25 小时'
        },
        {
            des: '湖南大学南校区',
            start: '长沙黄花机场',
            way: '地铁',
            time: '6号线黄花机场站 - 6号线六沟垅站換乘 - 4号线湖南大学站</br>约 1.25 小时'
        },
        {
            des: '湖南大学南校区',
            start: '长沙黄花机场',
            way: '磁浮快线',
            time: '磁浮快线机场站 - 磁浮快线高铁站换乘 - 4号线湖南大学站</br>约 1.25 小时'
        },
        {
            des: '湖南大学南校区',
            start: '长沙高铁南站',
            way: '出租车',
            time: '预计花费 45-60 元，时长</br>约 50 分钟'
        },
        {
            des: '湖南大学南校区',
            start: '长沙高铁南站',
            way: '地铁',
            time: '4号线长沙火车南站 - 4号线湖南大学站</br>约 40 分钟'
        },
        {
            des: '湖南大学南校区',
            start: '长沙火车站',
            way: '出租车',
            time: '预计花费 20-30 元，时长</br>约 30分钟'
        },
        {
            des: '湖南大学南校区',
            start: '长沙火车站',
            way: '地铁',
            time: '2号线长沙火车站 - 2号线溁湾镇站换乘 - 4号线湖南大学站时长</br>约 30 分钟'
        },
        {
            des: '湖南大学南校区',
            start: '长沙火车站',
            way: '公交车',
            time: '立珊专线:长沙火车站一湖南大学地铁站</br>约 30 分钟'
        },
    ];
    var enTrafficColumns = [
        {
            title: 'To',
            key: 'des',
            dataIndex: 'des',
            width: '25%',
            align: 'center',
            render: function (text, record, index) {
                var previousRow = enTrafficData[index - 1];
                var nextRow = enTrafficData[index + 1];
                var rowSpan = 1;
                if (previousRow && previousRow.des === text) {
                    return {
                        children: text,
                        props: {
                            rowSpan: 0,
                        },
                    };
                }
                while (nextRow && nextRow.des === text) {
                    rowSpan++;
                    index++;
                    nextRow = enTrafficData[index + 1];
                }
                return {
                    children: text,
                    props: {
                        rowSpan: rowSpan,
                    },
                };
            },
        },
        {
            title: 'From',
            dataIndex: 'start',
            key: 'start',
            width: '25%',
            align: 'center',
            render: function (text, record, index) {
                var previousRow = enTrafficData[index - 1];
                var nextRow = enTrafficData[index + 1];
                var rowSpan = 1;
                if (previousRow && previousRow.start === text) {
                    return {
                        children: text,
                        props: {
                            rowSpan: 0,
                        },
                    };
                }
                while (nextRow && nextRow.start === text) {
                    rowSpan++;
                    index++;
                    nextRow = enTrafficData[index + 1];
                }
                return {
                    children: text,
                    props: {
                        rowSpan: rowSpan,
                    },
                };
            },
        },
        {
            title: 'Transport',
            dataIndex: 'way',
            key: 'way',
            width: '25%',
            align: 'center',
        },
        {
            title: 'Route & Spend',
            dataIndex: 'time',
            key: 'time',
            width: '25%',
            align: 'center',
            render: function (text) { return react.createElement("span", { dangerouslySetInnerHTML: { __html: text } }); },
        }
    ];
    var enTrafficData = [
        {
            des: 'Hunan University',
            start: 'Changsha Huanghua International Airport',
            way: 'Taxi',
            time: '￥95-110 </br>1.25 hours'
        },
        {
            des: 'Hunan University',
            start: 'Changsha Huanghua International Airport',
            way: 'Metro',
            time: 'Huanghua Airport T1 & T2 (Line 6) → Liugoulong (Line 6) → Hunan University (Line 4) </br>1.25 hours'
        },
        {
            des: 'Hunan University',
            start: 'Changshanan Railway Station',
            way: 'Taxi',
            time: '￥45-60 </br>50 minutes'
        },
        {
            des: 'Hunan University',
            start: 'Changshanan Railway Station',
            way: 'Metro',
            time: 'South Railway Station (Line 4) → Hunan University (Line 4) </br>40 minutes'
        },
        {
            des: 'Hunan University',
            start: 'Changsha Railway Station',
            way: 'Taxi',
            time: '￥20-30 </br>30 minutes'
        },
        {
            des: 'Hunan University',
            start: 'Changsha Railway Station',
            way: 'Metro',
            time: 'Railway Station (Line 2) → Yingwanzhen (Line 2) → Hunan University (Line 4) </br>30 minutes'
        },
        {
            des: 'Hunan University',
            start: 'Changsha Railway Station',
            way: 'Bus',
            time: 'Lishan Special Line: Changsha Railway Station </br>30 minutes'
        },
    ];
    return (react.createElement("div", { className: Transportation.researchDirectionWrap },
        react.createElement("div", { className: Transportation.title }, "Transportation - \u4EA4\u901A"),
        react.createElement("div", { className: Transportation.content },
            react.createElement("div", { className: Transportation.listTitle }, "\uFF081\uFF09\u4F1A\u8BAE\u5730\u70B9"),
            react.createElement("p", { className: Transportation.mt20 }, "\u4E3B\u65E8\u62A5\u544A\uFF1A\u6E56\u5357\u5927\u5B66\u9038\u592B\u697C \u4E3B\u62A5\u544A\u5385"),
            react.createElement("p", null, "\u53E3\u5934\u6C47\u62A5\uFF1A\u590D\u4E34\u820D201\u3001203\u3001204\u3001208\u3001209"),
            react.createElement("p", null, "\u6D77\u62A5\u5C55\u793A\uFF1A\u590D\u4E34\u820D\u5927\u5385"),
            react.createElement("p", { className: Transportation.imgCenter },
                react.createElement("img", { src: map })),
            react.createElement("p", { className: Transportation.imgCenter }, "\u6E56\u5357\u5927\u5B66\u6821\u56ED\u5730\u56FE"),
            react.createElement("div", { className: Transportation.listTitle }, "\uFF082\uFF09\u4EA4\u901A\u65B9\u5F0F"),
            react.createElement(table/* default */.A, { pagination: false, columns: trafficColumns, className: Transportation.table, showHeader: true, dataSource: trafficData }),
            react.createElement("div", { className: Transportation.listTitle }, "\uFF081\uFF09Conference Places"),
            react.createElement("p", { className: Transportation.mt20 }, "Keynote Speech: Yifu Building"),
            react.createElement("p", null, "Oral Presentation: Room 201, 203, 204, 208, 209 at Fulinshe Teaching Building"),
            react.createElement("p", null, "Post: Fulinshe Teaching Building"),
            react.createElement("p", { className: Transportation.imgCenter },
                react.createElement("img", { src: enMap_namespaceObject })),
            react.createElement("p", { className: Transportation.imgCenter }, "Routine Map at Hunan University"),
            react.createElement("div", { className: Transportation.listTitle }, "\uFF082\uFF09Transportation"),
            react.createElement(table/* default */.A, { pagination: false, columns: enTrafficColumns, className: Transportation.table, showHeader: true, dataSource: enTrafficData }))));
}
var mapStateToProps = function (_a) {
    var common = _a.common;
    return ({ common: common });
};
/* harmony default export */ const pages_Transportation = ((0,es/* connect */.Ng)(mapStateToProps)(Transportation_Transportation));


/***/ }),

/***/ 5303:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=";

/***/ }),

/***/ 385:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/map.c36d6c8f..jpg";

/***/ })

}]);