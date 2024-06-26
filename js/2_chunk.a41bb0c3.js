"use strict";
(self["webpackChunkreact_cli"] = self["webpackChunkreact_cli"] || []).push([[2],{

/***/ 3002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Speakers)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./src/pages/Speakers/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const Speakers = ({"researchDirectionWrap":"index_researchDirectionWrap_euGo9V","title":"index_title__QWbGv","content":"index_content_HLuxyj","clear":"index_clear_rCywSj","mainTitle":"index_mainTitle_pkNWSv","listTitle":"index_listTitle_OFODnc","partTitle":"index_partTitle_RhwHPC","mt40":"index_mt40_twYnYG","even":"index_even_BKRzsK","odd":"index_odd_Yoffun","table":"index_table_zk2qRa","nameCol":"index_nameCol_aAaQHV","titleCol":"index_titleCol_zlavMN","qrcode":"index_qrcode_TsQ9z9","reporterWapper":"index_reporterWapper_bJKzqP","reporterRow":"index_reporterRow_CEGX9n","card":"index_card_p2hz2P","box":"index_box_LralJz","imgDiv":"index_imgDiv_wo137I","botDiv":"index_botDiv_dGIW4Z","name":"index_name_H0O0H_","left":"index_left_GuFbsq","desc":"index_desc_yaqYlQ","row1":"index_row1_ywQLwB","row2":"index_row2_cbOTwa","row3":"index_row3_tlXLG8","row4":"index_row4_AFY8qn","row5":"index_row5_JZ7Wju","imgCenter":"index_imgCenter_iVrt3q"});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(1225);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 227 modules
var table = __webpack_require__(8022);
// EXTERNAL MODULE: ./node_modules/antd/es/table/style/css.js + 17 modules
var css = __webpack_require__(340);
// EXTERNAL MODULE: ./node_modules/antd/es/image/style/css.js + 1 modules
var style_css = __webpack_require__(958);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js + 1 modules
var row = __webpack_require__(7384);
// EXTERNAL MODULE: ./node_modules/antd/es/row/style/css.js
var row_style_css = __webpack_require__(8809);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 39 modules
var card = __webpack_require__(36);
// EXTERNAL MODULE: ./node_modules/antd/es/card/style/css.js + 5 modules
var card_style_css = __webpack_require__(2601);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js + 1 modules
var col = __webpack_require__(2953);
// EXTERNAL MODULE: ./node_modules/antd/es/col/style/css.js
var col_style_css = __webpack_require__(9635);
// EXTERNAL MODULE: ./src/asset/reporter/db.jpg
var db = __webpack_require__(9119);
// EXTERNAL MODULE: ./src/asset/reporter/dhw.jpg
var dhw = __webpack_require__(3626);
// EXTERNAL MODULE: ./src/asset/reporter/dhy.jpg
var dhy = __webpack_require__(404);
// EXTERNAL MODULE: ./src/asset/reporter/fsl.jpg
var fsl = __webpack_require__(5730);
// EXTERNAL MODULE: ./src/asset/reporter/grg.jpg
var grg = __webpack_require__(5039);
// EXTERNAL MODULE: ./src/asset/reporter/hcs.jpg
var hcs = __webpack_require__(4707);
// EXTERNAL MODULE: ./src/asset/reporter/kjp.jpg
var kjp = __webpack_require__(5843);
// EXTERNAL MODULE: ./src/asset/reporter/pwy.jpg
var pwy = __webpack_require__(2165);
// EXTERNAL MODULE: ./src/asset/reporter/sf.jpg
var sf = __webpack_require__(2454);
// EXTERNAL MODULE: ./src/asset/reporter/wsy.jpg
var wsy = __webpack_require__(5102);
// EXTERNAL MODULE: ./src/asset/reporter/yjh.jpg
var yjh = __webpack_require__(1677);
// EXTERNAL MODULE: ./src/asset/reporter/yym.jpg
var yym = __webpack_require__(4246);
// EXTERNAL MODULE: ./src/asset/reporter/zmh.jpg
var zmh = __webpack_require__(8244);
// EXTERNAL MODULE: ./src/asset/reporter/zy.jpg
var zy = __webpack_require__(6722);
// EXTERNAL MODULE: ./src/asset/reporter/zzl.jpg
var zzl = __webpack_require__(6229);
;// CONCATENATED MODULE: ./src/pages/Speakers/index.tsx




























function Speakers_Speakers() {
    var zhColumns = [
        {
            title: '报告人',
            key: 'name',
            dataIndex: 'name',
            width: '40%',
            align: 'center',
            render: function (_, record) { return (react.createElement("div", { className: Speakers.nameCol, style: { wordWrap: 'break-word', wordBreak: 'break-word' } },
                react.createElement("div", null, record.name),
                react.createElement("div", null, record.university))); },
        },
        {
            title: '报告主题',
            dataIndex: 'title',
            align: 'center',
            className: Speakers.titleCol,
            key: 'title',
        }
    ];
    var zhData = [
        {
            name: 'David Bradley 教授',
            university: '拉筹伯大学',
            title: 'History of the Mian-Yi Languages'
        },
        {
            name: '丁红卫 教授',
            university: '上海交通大学',
            title: '言语语言作为精神障碍生物社会标志物的探索研究'
        },
        {
            name: '冯胜利 教授',
            university: '北京语言大学',
            title: '高频致俗：语体语法的语距机制——兼谈词汇扩散的条件与新语法学派的缺漏'
        },
        {
            name: '顾曰国 教授',
            university: '北京外国语大学',
            title: 'Towards an Understanding of Language as Lived and Cross-Species Intelligence — An Umwelt-Innenwelt-Lebenswelt Model'
        },
        {
            name: '贺川生 教授',
            university: '湖南大学',
            title: '从古代预期式数词系统看南岛语内部谱系关系'
        },
        {
            name: '孔江平 教授',
            university: '北京大学',
            title: '中华民族通用语言文字的形成和结构层次'
        },
        {
            name: '潘悟云 教授',
            university: '上海师范大学',
            title: '语言演化和演化语素'
        },
        {
            name: '石锋 教授',
            university: '南开大学',
            title: '拉波夫之问: 音在变，还是词在变？'
        },
        {
            name: '戴浩一 教授',
            university: '台湾中正大学',
            title: 'Cognitive Reserve and Aging: Contents, Measurement, and Clinical Application'
        },
        {
            name: '曾志朗 教授',
            university: '台湾“中央研究院”',
            title: 'A Probabilistic-Functionalistic Framework for Infants’ Cognitive Learning: From the Perspective of the Predictive brain and Language Development'
        },
        {
            name: '王士元 教授',
            university: '香港理工大学',
            title: 'Whither sapiens?'
        },
        {
            name: '杨亦鸣 教授',
            university: '江苏师范大学',
            title: 'ChatGPT距人类语言有多远——生成式语言大模型与人类语言生成的比较'
        },
        {
            name: '袁家宏 教授',
            university: '中国科学技术大学',
            title: '年老的语言特征和自动识别'
        },
        {
            name: '张梦翰 研究员',
            university: '复旦大学',
            title: '语言演化的交叉学科视角和建模'
        },
        {
            name: '张扬 教授',
            university: '明尼苏达大学',
            title: 'Unraveling Atypical Auditory and Speech Processing in Chinese Children with Autism Spectrum Disorder: A Multi-faceted Collaborative Approach'
        }
    ];
    var getRowClassName = function (record, index) {
        return index % 2 === 0 ? Speakers.even : Speakers.odd;
    };
    return (react.createElement("div", { className: Speakers.researchDirectionWrap },
        react.createElement("div", { className: Speakers.title }, "Speakers - \u4E3B\u9898\u62A5\u544A"),
        react.createElement("div", { className: Speakers.content },
            react.createElement(table/* default */.A, { pagination: false, columns: zhColumns, className: Speakers.table, showHeader: false, rowClassName: getRowClassName, dataSource: zhData }),
            react.createElement("div", { className: Speakers.reporterWapper },
                react.createElement(row/* default */.A, { gutter: 16, className: Speakers.reporterRow + " " + Speakers.row1 },
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: db })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "David Bradley"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "Prof David Bradley has made a major contribution to historical linguistics of Sino-Tibetan languages, to documentation and sociolinguistic study of Sino-Tibetan languages, and to work on endangered languages. He has documented a number of Sino-Tibetan languages and worked with various communities to maintain and revitalise their languages, and trained and supported large numbers of scholars to do similar work around the world. He has contributed very substantially to linguistic theory, particularly concerning Sino-Tibetan historical linguistics and language endangerment, and taken many leadership roles in the discipline, notably as President of the UNESCO Comit\u00E9 International Permanent des Linguistes (CIPL) and editor of the journal Linguistics of the Tibeto-Burman Area. He has also published over 20 books and participated in various language atlases."))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: dhw })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u4E01\u7EA2\u536B"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "\u4E0A\u6D77\u4EA4\u901A\u5927\u5B66\u5916\u56FD\u8BED\u5B66\u9662\u957F\u8058\u6559\u6388\u3002\u83B7\u5FB7\u56FD\u8BED\u8A00\u5B66\u535A\u58EB\u4E0E\u5DE5\u5B66\u6559\u6388\u8D44\u683C\u3002\u56FD\u5BB6\u793E\u79D1\u91CD\u5927\u9879\u76EE\u201C\u7CBE\u795E\u969C\u788D\u4EBA\u7FA4\u8BED\u6599\u5E93\u5EFA\u8BBE\u53CA\u9762\u5411\u8111\u79D1\u5B66\u548C\u4EBA\u5DE5\u667A\u80FD\u7684\u8BED\u8A00\u7814\u7A76\u201D\u9996\u5E2D\u4E13\u5BB6\u3002\u4E8E\u5FB7\u56FD\u7535\u5B50\u4FE1\u606F\u5B66\u9662\u4ECE\u4E8B\u8BED\u97F3\u6280\u672F\u7814\u7A76\u5341\u4F59\u5E74\u95F4\uFF0C\u4E3B\u6301\u6216\u53C2\u4E0E\u5341\u591A\u9879\u5FB7\u56FD\u6216\u6B27\u76DF\u7EB5\u5411\u9879\u76EE\u53CA\u56FD\u9645\u8457\u540D\u516C\u53F8\u6A2A\u5411\u9879\u76EE\uFF0C\u5305\u62EC\u591A\u8BED\u79CD\u8BED\u97F3\u5408\u6210\u7CFB\u7EDF\u5EFA\u8BBE\u4E0E\u8BA1\u7B97\u673A\u8F85\u52A9\u8BED\u97F3\u5B66\u4E60\u7CFB\u7EDF\u7814\u53D1\u7B49\u3002\u56DE\u56FD\u540E\u4E3B\u8981\u4ECE\u4E8B\u4E8C\u8BED\u8BED\u97F3\u4E60\u5F97\u7814\u7A76\uFF0C\u8FD1\u5E74\u6765\u805A\u7126\u542C\u529B\u53CA\u7CBE\u795E\u969C\u788D\u4EBA\u7FA4\u8BED\u97F3\u97F5\u5F8B\u7684\u8BA4\u77E5\u795E\u7ECF\u79D1\u5B66\u63A2\u7A76\u3002\u5E76\u7EE7\u7EED\u4E0E\u56FD\u9645\u8457\u540D\u516C\u53F8\u5408\u4F5C\u7814\u53D1\u8BED\u97F3\u667A\u80FD\u53CA\u8A00\u8BED\u75C5\u7406\u65B9\u9762\u7684\u6280\u672F\u4EA7\u54C1\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: fsl })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u51AF\u80DC\u5229"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "\u5317\u4EAC\u8BED\u8A00\u5927\u5B66\u8BED\u8A00\u79D1\u5B66\u9662\u7AE0\u9EC4\u5B66\u672F\u7406\u8BBA\u7814\u7A76\u6240\u6240\u957F\u3001\u6559\u6388\u3001\u535A\u58EB\u751F\u5BFC\u5E08\uFF1B\u5317\u4EAC\u5E08\u8303\u5927\u5B66\u7279\u8058\u6559\u6388\u3001\u5929\u6D25\u5927\u5B66\u8BED\u8A00\u79D1\u5B66\u4E2D\u5FC3\u9996\u5E2D\u6559\u6388\u3001\u9999\u6E2F\u6811\u4EC1\u5927\u5B66\u4E2D\u6587\u7CFB\u5BA2\u5EA7\u6559\u6388\u3001\u9999\u6E2F\u4E2D\u6587\u5927\u5B66\u8363\u8A89\u9000\u4F11\u6559\u6388\u3002\u53D7\u4E1A\u4E8E\u5BBE\u5915\u6CD5\u5C3C\u4E9A\u5927\u5B66\u62C9\u6CE2\u592B\u6559\u6388\uFF0C\u4E13\u653B\u897F\u65B9\u8BED\u8A00\u5B66\uFF0C1995\u5E74\u83B7\u5F97\u7F8E\u56FD\u5BBE\u5915\u6CD5\u5C3C\u4E9A\u5927\u5B66\uFF08University of Pennsylvania\uFF09\u8BED\u8A00\u5B66\u7CFB\u535A\u58EB\u5B66\u4F4D\u3002\u73B0\u4EFB\u300A\u4E2D\u56FD\u8BED\u8A00\u5B66\u62A5\u300B\uFF08JCL\uFF0CSSCI\u7D22\u5F15\uFF09\u8054\u5E2D\u4E3B\u7F16\u548C\u300A\u97F5\u5F8B\u8BED\u6CD5\u7814\u7A76\u300B\u8054\u5E2D\u4E3B\u7F16\u3002\u66FE\u4EFB\u5317\u4EAC\u8BED\u8A00\u5927\u5B66\u957F\u6C5F\u5B66\u8005\u8BB2\u5EA7\u6559\u6388\uFF082005\u5E74\uFF09\u3001\u7F8E\u56FD\u582A\u8428\u65AF\u5927\u5B66\u4E1C\u4E9A\u7CFB\u526F\u6559\u6388\uFF0C\u54C8\u4F5B\u5927\u5B66\u4E1C\u4E9A\u7CFB\u6C49\u8BED\u5E94\u7528\u5B66\u79D1\u6559\u6388\u53CA\u4E2D\u6587\u90E8\u4E3B\u4EFB\u3002\u7814\u7A76\u65B9\u5411\u5305\u62EC\u4E7E\u5609\u201C\u7406\u5FC5\u201D\u4E0E\u7AE0\u9EC4\u5B66\u7406\u7814\u7A76\u3001\u8BAD\u8BC2\u5B66\u3001\u97F5\u5F8B\u8BED\u6CD5\u5B66\u3001\u8BED\u4F53\u8BED\u6CD5\u5B66\u3001\u6C49\u8BED\u5386\u65F6\u53E5\u6CD5\u5B66\u3001\u6C49\u8BED\u97F5\u5F8B\u6587\u5B66\u53F2\u53CA\u6C49\u8BED\u4E8C\u8BED\u6559\u5B66\u4E0E\u4E60\u5F97\u3002\u51FA\u7248\u4E2D\u6587\u5B66\u672F\u4E13\u845716\u90E8\uFF08\u5176\u4E2D4\u90E8\u88AB\u8BD1\u4E3A\u82F1\u6587\u3001\u97E9\u6587\u7B49\uFF09\u3001\u82F1\u6587\u5B66\u672F\u4E13\u84572\u90E8\uFF0C\u4E3B\u7F16\u5B66\u672F\u8457\u4F5C16\u90E8\uFF0C\u53D1\u8868\u4E2D\u82F1\u6587\u5B66\u672F\u8BBA\u6587200\u4F59\u7BC7\u3002")))))),
                react.createElement(row/* default */.A, { gutter: 16, className: Speakers.reporterRow + " " + Speakers.row2 },
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: grg })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u987E\u66F0\u56FD"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "\u83B7\u5F97\u82F1\u56FD\u5170\u5F00\u65AF\u7279\u5927\u5B66\u7855\u58EB\u3001\u535A\u58EB\u4EE5\u53CA\u8363\u8A89\u6587\u5B66\u535A\u58EB\u5B66\u4F4D\uFF0C\u73B0\u4EFB\u5317\u4EAC\u5916\u56FD\u8BED\u5927\u5B66\u4EBA\u5DE5\u667A\u80FD\u4E0E\u4EBA\u7C7B\u8BED\u8A00\u91CD\u70B9\u5B9E\u9A8C\u5BA4\u9996\u5E2D\u4E13\u5BB6\u3002\u517C\u4EFB\u4E2D\u56FD\u591A\u8BED\u8A00\u591A\u6A21\u6001\u8BED\u6599\u5E93\u66A8\u5927\u6570\u636E\u7814\u7A76\u4E2D\u5FC3\u4E3B\u4EFB\uFF0C\u8001\u5E74\u8BED\u8A00\u4E0E\u770B\u62A4\u7814\u7A76\u4E2D\u5FC3\u4E3B\u4EFB\uFF08\u540C\u6D4E\u5927\u5B66-\u793E\u79D1\u9662\u8BED\u8A00\u6240\u8054\u5408\uFF09\u3002\u4E3B\u8981\u7814\u7A76\u5174\u8DA3\u5305\u62EC\u8BED\u6599\u5E93\u8BED\u8A00\u5B66\u3001\u8BED\u7528\u5B66\u3001\u8BDD\u8BED\u5206\u6790\u3001\u82F1\u8BED\u6559\u80B2\u7B49\u3002\u4E3B\u8981\u8457\u4F5C\u6709Studies in Pragmatics and Discourse Analysis, Using the Computer in ELT: Practice and Theory, Chinese Painting\uFF0CChinese Writing, The Handbook of Pragmatics (\u4E3B\u7F16\u4E4B\u4E00)\uFF0CEncyclopedia of Language and Linguistics (15\u5377\u5957\uFF0C\u987E\u95EE\u3001\u4F5C\u8005)\uFF0CEncyclopedia of Chinese Language and Linguistics (5\u5377\u5957, \u526F\u4E3B\u7F16\uFF0C\u4F5C\u8005)\uFF0C\u300A\u8001\u5E74\u8BED\u8A00\u5B66\u4E0E\u591A\u6A21\u6001\u7814\u7A76\u300B\uFF08\u4E3B\u7F16\u3001\u4F5C\u8005\uFF09\u3002\u7F16\u5199\u82F1\u8BED\u6559\u675050\u4F59\u90E8\u3002\u66FE\u83B7\u4E94\u9879\u56FD\u5BB6\u7EA7\u9876\u5C16\u7814\u7A76\u5956\u3002\u56FD\u9645\u5B66\u672F\u517C\u804C\u6709\u82F1\u56FD\u8BFA\u5B9A\u6C49\u5927\u5B66\u7279\u8058\u6559\u6388\u3001\u5170\u5F00\u65AF\u7279\u5927\u5B66\u7279\u8058\u7814\u7A76\u5458,\u9999\u6E2F\u7406\u5DE5\u5927\u5B66\u6821\u5916\u5B66\u672F\u987E\u95EE\u3001\u6FB3\u5927\u5229\u4E9A\u897F\u6089\u5C3C\u5927\u5B66\u5916\u8058\u6559\u6388,\u5F7C\u5F97\u5927\u5E1D\u5F7C\u5F97\u5821\u7406\u5DE5\u5927\u5B66\u8BBF\u95EE\u8BB2\u4E60\u6559\u6388\u3001\u6FB3\u5927\u5229\u4E9A\u6089\u5C3C\u5927\u5B66\u6770\u51FA\u7814\u7A76\u5458\u7B49\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: hcs })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u8D3A\u5DDD\u751F"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "\u6E56\u5357\u5927\u5B66\u5916\u56FD\u8BED\u5B66\u9662\u6559\u6388\u3002\u7814\u7A76\u5174\u8DA3\u5305\u62EC\u53E5\u6CD5\u5B66\u3001\u8BED\u4E49\u5B66\u3001\u5386\u53F2\u8BED\u8A00\u5B66\u7B49\u3002\u5728English Language and Linguistics\u3001Journal of the Royal Asiatic Society\u3001Language and Linguistics\u3001Lingua\u3001Syntax \u3001Synthese \u3001Zeitschrift der Deutschen Morgenlandischen Gesellschaft \u3001\u300A\u5F53\u4EE3\u8BED\u8A00\u5B66\u300B\u3001\u300A\u6C11\u65CF\u8BED\u6587\u300B\u3001\u300A\u5916\u8BED\u6559\u5B66\u4E0E\u7814\u7A76\u300B\u3001\u300A\u73B0\u4EE3\u5916\u8BED\u300B\u3001\u300A\u8BED\u8A00\u6559\u5B66\u4E0E\u7814\u7A76\u300B\u3001\u300A\u4E2D\u592E\u6C11\u65CF\u5927\u5B66\u5B66\u62A5\u300B\u7B49\u56FD\u5185\u5916\u671F\u520A\u53D1\u8868\u7814\u7A76\u6027\u8BBA\u6587\uFF0C\u51FA\u7248\u4E13\u8457\u300A\u6570\u8BCD\u7684\u53E5\u6CD5\u8BED\u4E49\u754C\u9762\u7814\u7A76\u300B\uFF0C\u66FE\u83B7\u6559\u80B2\u90E8\u9AD8\u7B49\u5B66\u6821\u4EBA\u6587\u793E\u4F1A\u79D1\u5B66\u4F18\u79C0\u6210\u679C\u5956\u4E8C\u7B49\u5956\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: kjp })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u5B54\u6C5F\u5E73"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "\u5317\u4EAC\u5927\u5B66\u4E2D\u6587\u7CFB\u6559\u6388\uFF0C\u535A\u5BFC\uFF0C\u6559\u80B2\u90E8\u201C\u5317\u4EAC\u5927\u5B66\u8BED\u8A00\u5B66\u5B9E\u9A8C\u5BA4\u201D\u4E3B\u4EFB\uFF0C\u4E2D\u56FD\u8BED\u8A00\u5B66\u4F1A\u8BED\u97F3\u5B66\u5206\u4F1A\u4E3B\u4EFB\u3002\u66FE\u4E3B\u6301\u4E2D\u56FD\u793E\u4F1A\u79D1\u5B66\u57FA\u91D1\u91CD\u5927\u62DB\u6807\u9879\u76EE\u201C\u4E2D\u56FD\u6709\u58F0\u8BED\u8A00\u548C\u53E3\u4F20\u6587\u5316\u4FDD\u62A4\u4E0E\u4F20\u627F\u7684\u6570\u5B57\u5316\u65B9\u6CD5\u53CA\u5176\u7406\u8BBA\u7814\u7A76\u201D\uFF1B\u73B0\u4E3B\u6301\u4E2D\u56FD\u793E\u4F1A\u79D1\u5B66\u57FA\u91D1\u91CD\u5927\u62DB\u6807\u9879\u76EE\u201C\u4E2D\u534E\u6C11\u65CF\u8BED\u8A00\u6587\u5B57\u63A5\u89E6\u4EA4\u878D\u7814\u7A76\u201D\u3002\u4E3B\u8981\u7814\u7A76\u9886\u57DF\uFF1A\u4E2D\u534E\u6C11\u65CF\u8BED\u8A00\u6587\u5B57\u5171\u540C\u4F53\u7684\u5F62\u6210\u548C\u6784\u6210\uFF0C\u4E2D\u534E\u4F20\u7EDF\u6709\u58F0\u6587\u5316\u7684\u58F0\u5B66\u3001\u8BED\u97F3\u751F\u7406\u548C\u8BA4\u77E5\u7814\u7A76\uFF0C\u4E2D\u56FD\u5883\u5185\u8BED\u8A00\u7684\u8BED\u97F3\u5B66\u53CA\u55D3\u97F3\u53D1\u58F0\u7C7B\u578B\u7814\u7A76\u3001\u6C49\u8BED\u666E\u901A\u8BDD\u53D1\u97F3\u751F\u7406\u6A21\u578B\u7814\u7A76\u3001\u8BA4\u77E5\u97F3\u4F4D\u5B66\u7814\u7A76\u3001\u97F3\u4F4D\u8D1F\u62C5\u91CF\u53CA\u8BED\u97F3\u4FE1\u606F\u7814\u7A76\u7B49\u3002\u6709\u300A\u8BBA\u8BED\u8A00\u53D1\u58F0\u300B\u3001\u300ALaryngeal Dynamics and Physiological Model\u300B\u3001\u300A\u5B9E\u9A8C\u8BED\u97F3\u5B66\u57FA\u7840\u6559\u7A0B\u300B\u3001\u300A\u73B0\u4EE3\u6C49\u8BED\u97F3\u5178\u300B\uFF08\u5408\u8457\uFF09\u3001\u300A\u738B\u58EB\u5143\u5148\u751F\u53E3\u8FF0\u53F2\u300B\uFF08\u5408\u7F16\uFF09\u7B49\u8457\u4F5C\uFF0C\u62E5\u6709\u300A\u8BED\u97F3\u5B66\u57FA\u7840\u5206\u6790\u7CFB\u7EDF\u300B\u7B49\u5341\u591A\u9879\u8F6F\u4EF6\u7684\u8457\u4F5C\u6743\u3002")))))),
                react.createElement(row/* default */.A, { gutter: 16, className: Speakers.reporterRow + " " + Speakers.row3 },
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: pwy })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u6F58\u609F\u4E91"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "\u4E0A\u6D77\u5E08\u8303\u5927\u5B66\u6559\u6388\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\uFF0C\u4E0A\u6D77\u9AD8\u6821\u6BD4\u8F83\u8BED\u8A00\u5B66E-\u7814\u7A76\u9662\u9996\u5E2D\u7814\u7A76\u5458\uFF0C\u590D\u65E6\u5927\u5B66\u6770\u51FA\u8BBF\u95EE\u5B66\u8005\uFF0C\u590D\u65E6\u5927\u5B66\u4E1C\u4E9A\u8BED\u8A00\u6570\u636E\u7814\u7A76\u6240\u8D1F\u8D23\u4EBA\u3002\u66FE\u4EFB\u4E0A\u6D77\u793E\u8054\u526F\u4E3B\u5E2D\u3001\u4E0A\u6D77\u793E\u8054\u8BED\u8A00\u7814\u7A76\u4E2D\u5FC3\u4E3B\u4EFB\uFF1B\u201C21\u4E16\u7EAA\u4E2D\u56FD\u8BED\u8A00\u4E0E\u65B9\u8A00\u6570\u636E\u5E93\u201D\u6267\u884C\u7EC4\u7684\u5927\u9646\u53EC\u96C6\u4EBA\u3002\u4EFB\u300A\u8BED\u8A00\u7814\u7A76\u300B\u7F16\u59D4\uFF0C\u300A\u8BED\u8A00\u79D1\u5B66\u300B\u7F16\u59D4\uFF0C\u300A\u6C11\u65CF\u8BED\u6587\u300B\u7F16\u59D4\uFF0C\u300A\u4E2D\u56FD\u8BED\u6587\u300B\u7F16\u59D4\uFF0C\u300A\u4E1C\u65B9\u8BED\u8A00\u5B66\u300B\u4E3B\u7F16\u7B49\u3002\u4E3B\u6301\u591A\u9879\u56FD\u5BB6\u90E8\u9879\u76EE\u3002\u7814\u7A76\u65B9\u5411\u4E3A\u8BED\u8A00\u4EBA\u7C7B\u5B66\uFF0C\u8BA1\u7B97\u8BED\u8A00\u5B66\uFF0C\u8BED\u8A00\u6F14\u5316\uFF0C\u5386\u53F2\u8BED\u8A00\u5B66\uFF0C\u6C49\u8BED\u97F3\u97F5\u5B66\u3002\u7814\u7A76\u65B9\u5411\u7740\u91CD\u5173\u6CE8\u4E1C\u4E9A\u8BED\u8A00\u5386\u53F2\u3001\u6587\u5316\u4F20\u64AD\u548C\u4EBA\u7FA4\u8FC1\u79FB\uFF1B\u6C49\u8BED\u53F2\u4E0E\u4E1C\u4E9A\u8BED\u8A00\u5386\u53F2\u6BD4\u8F83\uFF08\u5C24\u5176\u662F\u4E0A\u53E4\u6C49\u8BED\u7684\u7814\u7A76\uFF09\uFF1B\u6C49\u8BED\u65B9\u8A00\u5B66\u4E0E\u5386\u53F2\u5C42\u6B21\u5206\u6790\u6CD5\uFF1B\u8BED\u8A00\u7CFB\u7EDF\u4E2D\u97F3\u7C7B\u7684\u81EA\u7EC4\u7EC7\u73B0\u8C61\uFF1B\u8BED\u6599\u5E93\u8BA1\u7B97\u673A\u5904\u7406\u7B49\u3002\u76EE\u524D\u4E3B\u8981\u5DE5\u4F5C\u662F\u8BED\u8A00\u6F14\u5316\u4E0E\u4E1C\u4E9A\u8BED\u8A00\u7684\u5173\u7CFB\u8BED\u7D20\u5206\u6790\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: sf })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u77F3\u950B"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "\u5357\u5F00\u5927\u5B66\u8BED\u8A00\u6240\u540D\u8A89\u6240\u957F\u3002\u300A\u5357\u5F00\u8BED\u8A00\u5B66\u520A\u300B\u548CExperimental Linguistics (\u300A\u5B9E\u9A8C\u8BED\u8A00\u5B66\u300B)\u540D\u8A89\u4E3B\u7F16, Journal of Chinese Linguistics(\u300A\u4E2D\u56FD\u8BED\u8A00\u5B66\u62A5\u300B)\u526F\u4E3B\u7F16\uFF0CLINGUA\u7F16\u59D4\u3002\u56FD\u9645\u4E2D\u56FD\u8BED\u8A00\u5B66\u4F1A\u4F1A\u957F\u3002\u6559\u80B2\u90E8\u56FD\u5BB6\u666E\u901A\u8BDD\u5BA1\u97F3\u59D4\u5458\u4F1A\u59D4\u5458\u3002\u4E16\u754C\u6C49\u8BED\u6559\u5B66\u5B66\u4F1A\u5B66\u672F\u6307\u5BFC\u59D4\u5458\u4F1A\u59D4\u5458\u3002\u7814\u7A76\u9886\u57DF\u4E3A\u5B9E\u9A8C\u8BED\u8A00\u5B66\u3001\u8BED\u8A00\u6F14\u5316\u3001\u8BED\u8A00\u63A5\u89E6\u4E0E\u8BED\u8A00\u4E60\u5F97\u3002\u8BBA\u8457\u6216\u7F16\u8457\u300A\u8BED\u97F3\u683C\u5C40\u300B\u300A\u8BED\u8C03\u683C\u5C40\u300B\u300A\u542C\u611F\u683C\u5C40\u300B\u300A\u97F5\u5F8B\u683C\u5C40\u300B\u300A\u79CB\u53F6\u96C6\u300B\u300A\u94F6\u9F84\u96C6\u300B\u7B4920\u4F59\u79CD\u3002\u51FA\u7248\u8BD1\u84575\u90E8\u3002\u5728\u56FD\u5185\u5916\u53D1\u8868\u8BBA\u6587260\u4F59\u7BC7\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: dhy })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u6234\u6D69\u4E00"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "\u53F0\u6E7E\u9E7F\u6E2F\u4EBA\u3002\u56FD\u7ACB\u53F0\u6E7E\u5927\u5B66\u5916\u56FD\u8BED\u6587\u5B66\u7CFB\u5B66\u58EB\uFF081964\uFF09\uFF0C\u7F8E\u56FD\u5370\u5730\u5B89\u90A3\u5927\u5B66\uFF08Indiana University\uFF09\u8BED\u8A00\u5B66\u535A\u58EB\uFF081970\uFF09\u3002\u5728\u7F8E\u56FD\u5357\u4F0A\u5229\u8BFA\u4F0A\u5927\u5B66\uFF08Southern Illinois University\uFF09\u53CA\u4FC4\u4EA5\u4FC4\u5DDE\u7ACB\u5927\u5B66\uFF08Ohio State University\uFF09\u4EFB\u6559\u957F\u8FBE25\u5E74\uFF081970-1995\uFF09\u30021995\u5E74\u53D7\u9080\u8FD4\u53F0\u521B\u8BBE\u56FD\u7ACB\u4E2D\u6B63\u5927\u5B66\u8BED\u8A00\u5B66\u7814\u7A76\u6240\u5E76\u62C5\u4EFB\u7B2C\u4E00\u4EFB\u53CA\u7B2C\u4E8C\u4EFB\u6240\u957F\uFF0C\u5386\u4EFB\u6587\u5B66\u9662\u9662\u957F\uFF081998-2002\uFF09\u3001\u526F\u6821\u957F\uFF082009\uFF09\u3002\u5176\u95F4\u66FE\u501F\u8C03\u56FD\u79D1\u4F1A\u62C5\u4EFB\u4EBA\u6587\u53CA\u793E\u4F1A\u79D1\u5B66\u53D1\u5C55\u5904\u5904\u957F\uFF082002-2005\uFF09\u30022004\u5E74\u83B7\u9009\u4E3A\u56FD\u9645\u4E2D\u56FD\u8BED\u8A00\u5B66\u4F1A\uFF08IACL\uFF09\u4F1A\u957F\uFF0C2010\u5E74\u83B7\u9881\u53F0\u6E7E\u8BED\u8A00\u5B66\u5B66\u4F1A\u300C\u7EC8\u8EAB\u6210\u5C31\u5956\u300D\uFF0C2020\u5E74\u83B7\u9009\u4E3A\u7F8E\u56FD\u5370\u7B2C\u5B89\u90A3\u5927\u5B66\uFF08\u5EFA\u6821200\u5E74\uFF09\u8BED\u8A00\u5B66\u7CFB\u6770\u51FA\u6821\u53CB\u3002")))))),
                react.createElement(row/* default */.A, { gutter: 16, className: Speakers.reporterRow + " " + Speakers.row4 },
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: zzl })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u66FE\u5FD7\u6717"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "Professor Ovid Tzeng is Academician of Academia Sinica in Taiwan, an outstanding researcher in Cognitive Neuroscience and Neurolinguistics and an experienced leader in academic institutions. He was the chancellor of University System of Taiwan, the Minister of Education, the Minister Without Portfolio, and the Minister of Council for Cultural Affairs. He serves as a member of the Board of Directors of Haskins Laboratories in the U.S. and an advisory board member of the ARC Centre of Excellence in Cognition and its Disorders in Australia. He has also been elected to be the academician of The World Academy of Sciences (TWAS) since 2010 and active member of The European Academy of Sciences and Arts since 2017. He had been the Chancellor of University System of Taiwan for several years, which was created by him and established to oversee and integrate the research and teaching developments of Taiwan\u2019s four top research universities. Prior to the Chancellorship, he was the Vice President of Academia Sinica for international affairs. He is currently an Executive member of the Committee on Human Rights of the NAS, NAE, and NAM, as well as a member of the UNESCO\u2019s Inclusive Literacy Learning for All Project."))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: wsy })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u738B\u58EB\u5143"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "1933\u5E74\u51FA\u751F\u4E8E\u4E0A\u6D77\u5E02\uFF0C\u7956\u7C4D\u5B89\u5FBD\u7701\u6000\u8FDC\u53BF\uFF0C\u8BED\u8A00\u5B66\u5BB6\uFF0C\u9999\u6E2F\u7406\u5DE5\u5927\u5B66\u8BED\u8A00\u53CA\u8BA4\u77E5\u79D1\u5B66\u8BB2\u5EA7\u6559\u6388\uFF0C\u53F0\u6E7E\u201C\u4E2D\u201D\u7814\u7A76\u9662\u9662\u58EB\u3002\u738B\u58EB\u5143\u4E8E1960\u5E74\u83B7\u5F97\u5BC6\u897F\u6839\u5927\u5B66\u535A\u58EB\u5B66\u4F4D\uFF0C\u5176\u540E\u5728IBM\u7814\u7A76\u4E2D\u5FC3\uFF08\u7EA6\u514B\u57CE\u9AD8\u5730\uFF09\u548C\u9EBB\u7701\u7406\u5DE5\u5B66\u9662\u7684\u7535\u5B50\u7814\u7A76\u5B9E\u9A8C\u5BA4\u8FDB\u884C\u81EA\u7136\u8BED\u8A00\u5904\u7406\u7684\u65E9\u671F\u7814\u7A76\uFF1B1963\u5E74\u20141965\u5E74\u4EFB\u4FC4\u4EA5\u4FC4\u5DDE\u7ACB\u5927\u5B66\u8BED\u8A00\u5B66\u7CFB\u53CA\u4E1C\u4E9A\u8BED\u6587\u5B66\u7CFB\u4E3B\u4EFB\uFF1B1966\u5E74\u20141994\u5E74\u4EFB\u52A0\u5229\u798F\u5C3C\u4E9A\u5927\u5B66\u4F2F\u514B\u5229\u5206\u6821\u8BED\u8A00\u5B66\u6559\u6388\uFF1B1995\u5E74\u20142004\u5E74\u4EFB\u9999\u6E2F\u57CE\u5E02\u5927\u5B66\u8BED\u8A00\u5DE5\u7A0B\u8BB2\u5EA7\u6559\u6388\uFF1B2004\u5E74\u20142015\u5E74\u4EFB\u9999\u6E2F\u4E2D\u6587\u5927\u5B66\u7535\u5B50\u5DE5\u7A0B\u5B66\u7CFB\u7814\u7A76\u6559\u6388\uFF1B2015\u5E74\u4EFB\u9999\u6E2F\u7406\u5DE5\u5927\u5B66\u8BED\u8A00\u53CA\u8BA4\u77E5\u79D1\u5B66\u8BB2\u5EA7\u6559\u6388\u3002\u738B\u58EB\u5143\u7684\u7814\u7A76\u8303\u7574\u5305\u62EC\u8BED\u97F3\u5B66\u53CA\u97F3\u97F5\u5B66\u3001\u81EA\u52A8\u8BED\u97F3\u8FA8\u8BC6\uFF0C\u4EE5\u53CA\u8BED\u8A00\u4E0E\u8BA4\u77E5\u80FD\u529B\u7684\u751F\u7269\u53CA\u6F14\u5316\u57FA\u7840\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: yym })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u6768\u4EA6\u9E23"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "\u6559\u80B2\u90E8\u201C\u957F\u6C5F\u5B66\u8005\u201D\u7279\u8058\u6559\u6388\uFF0C\u56FD\u5BB6\u201C\u4E07\u4EBA\u8BA1\u5212\u201D\u6559\u5B66\u540D\u5E08\uFF0C\u5168\u56FD\u9AD8\u6821\u9EC4\u5927\u5E74\u5F0F\u6559\u5E08\u56E2\u961F\u5E26\u5934\u4EBA\uFF0C\u4EAB\u53D7\u56FD\u52A1\u9662\u653F\u5E9C\u7279\u6B8A\u6D25\u8D34\u4E13\u5BB6\uFF0C\u6C5F\u82CF\u7701\u793E\u79D1\u540D\u5BB6\uFF0C\u6C5F\u82CF\u7701\u201C\u9996\u5E2D\u4E2D\u9752\u5E74\u79D1\u5B66\u5BB6\u201D\uFF08\u6C5F\u82CF\u7701\u201C333 \u5DE5\u7A0B\u201D\u7B2C\u4E00\u5C42\u6B21\uFF09\uFF0C\u6C5F\u82CF\u7701\u201C\u5341\u4F73\u7814\u7A76\u751F\u5BFC\u5E08\u56E2\u961F\u201D\u5E26\u5934\u4EBA\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u3001\u535A\u58EB\u540E\u8054\u7CFB\u5BFC\u5E08\u3002\u73B0\u4E3A\u6C5F\u82CF\u5E08\u8303\u5927\u5B66\u6821\u5B66\u672F\u59D4\u5458\u4F1A\u4E3B\u4EFB\u59D4\u5458\uFF0C\u56FD\u5BB62011\u8BA1\u5212\u8BED\u8A00\u80FD\u529B\u90E8\u7701\u5171\u5EFA\u534F\u540C\u521B\u65B0\u4E2D\u5FC3\u4E3B\u4EFB\uFF0C\u8BED\u8A00\u79D1\u5B66\u4E0E\u827A\u672F\u56FD\u5BB6\u7EA7\u5B9E\u9A8C\u6559\u5B66\u793A\u8303\u4E2D\u5FC3\u4E3B\u4EFB\uFF0C\u56FD\u5BB6\u8BED\u59D4\u8BED\u8A00\u80FD\u529B\u9AD8\u7B49\u7814\u7A76\u9662\u9662\u957F\uFF0C\u300A\u8BED\u8A00\u79D1\u5B66\u300B\u4E3B\u7F16\u7B49\u3002\u66FE\u4EFB\u6C5F\u82CF\u5E08\u8303\u5927\u5B66\u526F\u6821\u957F\u3002\u4E3B\u8981\u5B66\u672F\u517C\u804C\u4E3A\u56FD\u5BB6\u54F2\u5B66\u793E\u4F1A\u79D1\u5B66\u57FA\u91D1\u548C\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u4F1A\u8BC4\u4E13\u5BB6\uFF0C\u79D1\u6280\u90E8\u79D1\u6280\u521B\u65B02030\u2014\u201C\u8111\u79D1\u5B66\u4E0E\u7C7B\u8111\u7814\u7A76\u201D\u91CD\u5927\u9879\u76EE\u8BC4\u5BA1\u4E13\u5BB6\uFF0C\u6559\u80B2\u90E8\u91CD\u70B9\u5B9E\u9A8C\u5BA4\uFF08\u4EA4\u53C9\u9886\u57DF\u7C7B\uFF09\u9A8C\u6536\u8003\u6838\u7EC4\u7EC4\u957F\u3001\u4E2D\u56FD\u8BED\u8A00\u5B66\u4F1A\u5E38\u52A1\u7406\u4E8B\u3001 \u4E2D\u56FD\u8BED\u6587\u73B0\u4EE3\u5316\u5B66\u4F1A\u526F\u4F1A\u957F\u7B49\u3002\u7814\u7A76\u5174\u8DA3\u4E3A\u795E\u7ECF\u8BED\u8A00\u5B66\u3001\u7406\u8BBA\u8BED\u8A00\u5B66\u7B49\uFF0C\u4E3B\u6301\u56FD\u5BB6\u793E\u79D1\u57FA\u91D1\u91CD\u5927\u59D4\u6258\u9879\u76EE\u3001\u91CD\u5927\u9879\u76EE3\u9879\uFF0C\u56FD\u5BB6973\u8BA1\u5212\u8BFE\u9898\u3001\u56FD\u5BB6\u793E\u79D1\u57FA\u91D1\u91CD\u70B9\u9879\u76EE\u3001\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u9879\u76EE\u7B49\u591A\u9879\u3002\u5148\u540E\u5728PNAS\u3001Brain\u3001Cognition\u3001\u300A\u4E2D\u56FD\u793E\u4F1A\u79D1\u5B66\u300B\u3001\u300A\u4E2D\u56FD\u79D1\u5B66\u300B\u3001\u300A\u4E2D\u56FD\u8BED\u6587\u300B\u7B49\u520A\u7269\u53D1\u8868\u8BBA\u6587\u4E24\u767E\u4F59\u7BC7\uFF0C\u51FA\u7248\u8457\u4F5C10\u4F59\u90E8\u3002\u66FE\u83B7\u56FD\u5BB6\u7EA7\u6559\u5B66\u6210\u679C\u5956\u4E00\u7B49\u5956\u3001\u6559\u80B2\u90E8\u9AD8\u7B49\u5B66\u6821\u4EBA\u6587\u793E\u4F1A\u79D1\u5B66\u4F18\u79C0\u6210\u679C\u5956\u4E00\u7B49\u5956\u7B49\u3002")))))),
                react.createElement(row/* default */.A, { gutter: 16, className: Speakers.reporterRow + " " + Speakers.row5 },
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: yjh })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u8881\u5BB6\u5B8F"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "\u4E2D\u56FD\u79D1\u5B66\u6280\u672F\u5927\u5B66\u4EBA\u6587\u4E0E\u793E\u4F1A\u79D1\u5B66\u5B66\u9662\u6559\u6388\u30022004\u5E74\u83B7\u5F97\u5EB7\u4E43\u5C14\u5927\u5B66\u8BED\u8A00\u5B66\u535A\u58EB\u5B66\u4F4D\u3002\u66FE\u4EFB\u804C\u4E8E\u5BBE\u5915\u6CD5\u5C3C\u4E9A\u5927\u5B66\u8BED\u8A00\u5B66\u7CFB\u548C\u8BED\u8A00\u8D44\u6E90\u8054\u76DF\u3001\u6D41\u5229\u8BF4\u7845\u8C37\u4EBA\u5DE5\u667A\u80FD\u5B9E\u9A8C\u5BA4\u3001\u767E\u5EA6\u7F8E\u56FD\u7814\u7A76\u9662\u3002\u4E3B\u8981\u7814\u7A76\u65B9\u5411\u5305\u62EC\u5927\u6570\u636E\u8BED\u97F3\u5B66\u3001\u8BED\u8A00\u5B66\u548C\u4EBA\u5DE5\u667A\u80FD\u7684\u878D\u5408\u3002\u66FE\u4E3B\u6301\u6216\u5408\u4F5C\u4E3B\u6301\u7F8E\u56FD\u56FD\u5BB6\u79D1\u5B66\u57FA\u91D1\u4F1A\u3001\u82F1\u56FD\u7ECF\u6D4E\u4E0E\u793E\u4F1A\u7814\u7A76\u7406\u4E8B\u4F1A\u3001\u9999\u6E2F\u7814\u7A76\u8D44\u52A9\u5C40\u7B49\u8D44\u52A9\u7684\u591A\u9879\u79D1\u7814\u9879\u76EE\u3002\u76EE\u524D\u7684\u7814\u7A76\u4E3B\u8981\u96C6\u4E2D\u5728\u57FA\u4E8E\u53E3\u8BED\u6570\u636E\u7684\u963F\u5C14\u8328\u6D77\u9ED8\u75C5\u65E9\u671F\u8BC6\u522B\u548C\u9884\u6D4B\u3001\u548C\u57FA\u4E8E\u6DF1\u5EA6\u5B66\u4E60\u7684\u8BED\u97F3\u5206\u6790\u65B9\u6CD5\uFF0C\u5728\u7814\u9879\u76EE\u5305\u62EC\u201C\u793E\u4F1A\u8BED\u8A00\u5B66\u3001\u75C5\u7406\u8BED\u8A00\u5B66\u548C\u4EBA\u5DE5\u667A\u80FD\u4E09\u91CD\u89C6\u89D2\u4E0B\u57FA\u4E8E\u8BED\u8A00\u53D8\u5316\u7684AD\u8BED\u8A00\u751F\u7269\u6807\u5FD7\u7269\u7814\u7A76\u201D\u548C\u201C\u751F\u7269\u8BED\u8A00\u5B66\u89C6\u89D2\u4E0B\u591A\u5B66\u79D1\u4EA4\u53C9\u6C49\u8BED\u58F0\u8C03\u7814\u7A76\u201D\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: zmh })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u5F20\u68A6\u7FF0"),
                                        "\u7814\u7A76\u5458"),
                                    react.createElement("div", { className: Speakers.desc }, "\u535A\u58EB\uFF0C\u590D\u65E6\u5927\u5B66\u73B0\u4EE3\u8BED\u8A00\u5B66\u7814\u7A76\u9662\u7814\u7A76\u5458\uFF0C\u751F\u7269\u5B66\u535A\u58EB\u751F\u5BFC\u5E08\uFF0C\u667A\u80FD\u590D\u6742\u4F53\u7CFB\u57FA\u7840\u7406\u8BBA\u4E0E\u5173\u952E\u6280\u672F\u5B9E\u9A8C\u5BA4\u526F\u4E3B\u4EFB\uFF1B\u590D\u65E6\u5927\u5B66\u751F\u547D\u79D1\u5B66\u5B66\u9662\u548C\u4EBA\u7C7B\u8868\u578B\u7EC4\u7814\u7A76\u9662PI\uFF08\u53CC\u8058\uFF09\u3002\u8363\u83B7\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u59D4\u4F18\u79C0\u9752\u5E74\u57FA\u91D1\uFF082021\u5E74\uFF09\uFF0C\u5165\u9009\u4E0A\u6D77\u5E02\u66D9\u5149\u5B66\u8005\uFF082020\u5E74\uFF09\uFF0C\u4E0A\u6D77\u5E02\u201C\u793E\u79D1\u65B0\u4EBA\u201D\uFF082019\u5E74\uFF09\u3002\u4E0A\u6D77\u5E02\u4EBA\u7C7B\u5B66\u5B66\u4F1A\u7406\u4E8B\u3001\u4E2D\u56FD\u6C11\u65CF\u8BED\u8A00\u5B66\u4F1A\u4F1A\u5458\u3002\u4E3B\u8981\u4ECE\u4E8B\u8BED\u8A00\u6F14\u5316\u3001\u8BED\u8A00-\u9057\u4F20-\u6587\u5316\u5171\u6F14\u5316\u673A\u5236\u7814\u7A76\u3002\u5148\u540E\u627F\u62C5\u591A\u4E2A\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u3001\u56FD\u5BB6\u793E\u79D1\u91CD\u5927\u9879\u76EE\u5B50\u8BFE\u9898\u3001\u6B27\u76DF\u5148\u8FDB\u7814\u7A76\u7406\u4E8B\u4F1A\u201C\u5730\u5E73\u7EBF\u201D\u9879\u76EE\u5B50\u8BFE\u9898\u7B49\u9879\u76EE\uFF0C\u4E3A\u56FD\u5BB6\u793E\u79D1\u57FA\u91D1\u51B7\u95E8\u7EDD\u5B66\u7814\u7A76\u4E13\u9879\u5B66\u672F\u56E2\u961F\u6838\u5FC3\u6210\u5458\u3002\u4EE5\u7B2C\u4E00\u4F5C\u8005\u6216\u901A\u8BAF\u4F5C\u8005\u5728Nature\u3001Nature Communications\u3001Nature Human Behaviour\u3001PNAS\u3001National Science Review\u3001Proceedings B\u7B49\u56FD\u5185\u5916\u671F\u520A\u4E0A\u53D1\u8868\u8BBA\u6587\u4E09\u5341\u4F59\u7BC7\uFF0C\u7533\u8BF7\u4E86\u591A\u9879\u56FD\u5BB6\u4E13\u5229\uFF08\u83B7\u62795\u9879\uFF09\uFF0C\u8363\u83B7\u4E0A\u6D77\u5E02\u7B2C\u5341\u4E94\u5C4A\u54F2\u5B66\u793E\u4F1A\u79D1\u5B66\u4F18\u79C0\u6210\u679C\u5956\uFF08\u5B66\u79D1\u5B66\u672F\u4F18\u79C0\u6210\u679C\u8BBA\u6587\u7C7B\u4E8C\u7B49\u5956\uFF09\uFF0C\u4E0A\u6D77\u4F18\u79C0\u535A\u58EB\u8BBA\u6587\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: Speakers.card },
                            react.createElement("div", { className: Speakers.box },
                                react.createElement("div", { className: Speakers.imgDiv },
                                    react.createElement("img", { src: zy })),
                                react.createElement("div", { className: Speakers.botDiv },
                                    react.createElement("div", { className: Speakers.name },
                                        react.createElement("span", { className: Speakers.left }, "\u5F20\u626C"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: Speakers.desc }, "\u7F8E\u56FD\u660E\u5C3C\u82CF\u8FBE\u5927\u5B66\u8A00\u8BED\u2014\u8BED\u8A00\u2014\u542C\u529B\u79D1\u5B66\u7CFB\u6559\u6388\uFF0C\u7814\u7A76\u9886\u57DF\u5305\u62EC\uFF1A\u8A00\u8BED\u611F\u77E5\u4E0E\u4EA7\u51FA\uFF0C\u53D1\u5C55\u5FC3\u7406\u5B66\u4EE5\u53CA\u8A00\u8BED\u4EA4\u6D41\u7684\u795E\u7ECF\u57FA\u7840\u3002\u4ED6\u540C\u65F6\u62C5\u4EFB\u78C1\u5171\u632F\u7814\u7A76\u4E2D\u5FC3\u3001\u795E\u7ECF\u884C\u4E3A\u53D1\u5C55\u4E2D\u5FC3\u548C\u5E94\u7528\u4E0E\u8F6C\u5316\u611F\u89C9\u79D1\u5B66\u4E2D\u5FC3\u7684\u9996\u5E2D\u7814\u7A76\u5458\u3002\u4ED6\u76EE\u524D\u62C5\u4EFB\u671F\u520ADevelopmental Science\u526F\u4E3B\u7F16\u3001Brain Sciences\u90E8\u95E8\u4E3B\u7F16\uFF0C\u5E76\u5728\u591A\u4E2A\u5176\u4ED6\u671F\u520A\u7684\u7F16\u8F91\u59D4\u5458\u4F1A\u4EFB\u804C\u3002"))))))))));
}
var mapStateToProps = function (_a) {
    var common = _a.common;
    return ({ common: common });
};
/* harmony default export */ const pages_Speakers = ((0,es/* connect */.Ng)(mapStateToProps)(Speakers_Speakers));


/***/ })

}]);