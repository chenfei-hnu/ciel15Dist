"use strict";
(self["webpackChunkreact_cli"] = self["webpackChunkreact_cli"] || []).push([[622],{

/***/ 622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Home)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/mockjs/dist/mock.js
var mock = __webpack_require__(1315);
var mock_default = /*#__PURE__*/__webpack_require__.n(mock);
;// CONCATENATED MODULE: ./mock/homeApi.ts

var getHomeData = {
    data: "mockData"
};
/* harmony default export */ const homeApi = (mock_default().mock('/api/get_homeData', 'get', getHomeData));

;// CONCATENATED MODULE: ./src/pages/Home/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const Home = ({"homeWrap":"index_homeWrap_S5nKqd","top":"index_top_YI9sno","title":"index_title_eiE3Px","date":"index_date_cFZnKN","position":"index_position_NvCjbN","clear":"index_clear_b61Kca"});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(1225);
;// CONCATENATED MODULE: ./src/pages/Home/index.tsx




function Home_Home() {
    (0,react.useEffect)(function () {
    }, []);
    var _a = (0,react.useState)([]), news = _a[0], setNews = _a[1];
    return (react.createElement("div", { className: Home.homeWrap },
        react.createElement("div", { className: Home.top },
            react.createElement("div", { className: Home.title },
                react.createElement("p", null, "The 15th International Conference in Evolutionary Linguistics"),
                react.createElement("p", null, "\u7B2C15\u5C4A\u6F14\u5316\u8BED\u8A00\u5B66\u56FD\u9645\u7814\u8BA8\u4F1A")),
            react.createElement("div", { className: Home.date },
                react.createElement("p", null, "Dates: July 12-14, 2024"),
                react.createElement("p", null, "\u65F6\u95F4\uFF1A2024\u5E747\u670812\u65E5-14\u65E5")),
            react.createElement("div", { className: Home.position },
                react.createElement("p", null, "Venue\uFF1AHunan University"),
                react.createElement("p", null, "\u5730\u70B9\uFF1A\u6E56\u5357\u5927\u5B66")))));
}
var mapStateToProps = function (_a) {
    var common = _a.common;
    return ({ common: common });
};
/* harmony default export */ const pages_Home = ((0,es/* connect */.Ng)(mapStateToProps)(Home_Home));


/***/ })

}]);