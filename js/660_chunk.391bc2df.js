"use strict";
(self["webpackChunkreact_cli"] = self["webpackChunkreact_cli"] || []).push([[660],{

/***/ 3946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_CallForPapers)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./src/pages/CallForPapers/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const CallForPapers = ({"researchDirectionWrap":"index_researchDirectionWrap_D1T6ZM","title":"index_title__CJeYK","content":"index_content_Lxrg7e","clear":"index_clear_LcOSLD","mainTitle":"index_mainTitle_oTM5DL","listTitle":"index_listTitle_nSFfkw","imgCenter":"index_imgCenter_L9rB8g","partTitle":"index_partTitle_Pj5OnF","mt20":"index_mt20_Jc5W4Y","mt40":"index_mt40_llBGju","mt60":"index_mt60_mv_xUq","mb60":"index_mb60_cnjCZd","even":"index_even_I6_9qs","odd":"index_odd_h4d_rP","table":"index_table_cX0A65","timeTable":"index_timeTable_P9J1Qp","footer":"index_footer_L_ZiDC","nameCol":"index_nameCol_MinHZ0","titleCol":"index_titleCol_QqypCw","qrcode":"index_qrcode_bxR4DN","reporterWapper":"index_reporterWapper_jGIBOI","reporterRow":"index_reporterRow_iiDf1s","card":"index_card_cuFs0j","box":"index_box_eqJf57","imgDiv":"index_imgDiv_etUHes","botDiv":"index_botDiv_om74Pd","name":"index_name_NMU9Fn","left":"index_left_ezePn8","desc":"index_desc_ZKjRvD","row1":"index_row1_oZrU6l","row2":"index_row2_G5qK7e","row3":"index_row3_fm5D6D","row4":"index_row4_KJQ6Di","row5":"index_row5_I6tZgN"});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__(1225);
// EXTERNAL MODULE: ./node_modules/antd/es/table/index.js + 227 modules
var table = __webpack_require__(8022);
// EXTERNAL MODULE: ./node_modules/antd/es/table/style/css.js + 17 modules
var css = __webpack_require__(340);
// EXTERNAL MODULE: ./node_modules/antd/es/image/index.js + 33 modules
var es_image = __webpack_require__(2742);
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
;// CONCATENATED MODULE: ./src/asset/qr.png
const qr_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURf///wAAAObm3nt7hMXFxVpSUhkZEEpKSqWlpXuEa+bv70JCOjE6OikhKSkxMVpznGNra/fv9wgIALVC3rVCnLUQ3rUQnDG9WjG9GXO9WnO9GbVrWrUQWrVrGbUQGXMZWpRC3pRCnJQQ3pQQnFK9WlK9GZRrWpQQWpRrGZQQGVIZWoyEjLW1rXNraylCEBBC5hAQ5hBCtRAQtRBCWhAQWrW9vQgQEOaczs6cnGtzOuZzzs5znGtzEN7W3tbW1hkhIeZC7+ZCreYQ7+YQreZra+YQa+ZrKeYQKeZCzuZCjOYQzuYQjOZrSuYQSuZrCOYQCIyUjHPv3nPvWmOc7zGc3jqUWjHvWjHv3jHvGTGcnDqUGTHvnHPvGXPvnKWc77WcWrVCWrWcGbVCGXMZjGNz7zFz3hCUWjHF3jFznBCUGTHFnKVz73PF3nPFnFLv3lLvWlLvGVLvnJScWpRCWpScGZRCGVIZjFLF3lLFnHNCEBBCjJzv5hAQjJzF5lIQEJyclHNC5jFC5jEQ5nMQ5pxzpTFCtTEQtXNCtXMQtTFCWjEQWkpCEFqMY1JC5lIQ5lJCtVIQteac7+aca+ZCa++cnOacKeZCKbXvUnOcnGuUOrXvGe/vjOZz7+9znGuUELXFUrXFGe/FjOacSuZCSuacCOZCCJTvUlKcnJTvGc7vjJTFUpTFGc7FjNbvUpTmvZTvjNbvGdbFUpTFjNbFGVpjWnNKe1JKe+/mvXNCMTFCjL3v5jEQjOa9vb3F5lIQMRC9axC9Kea95gg6EHMQEM7mvRC9ShC9CPfvUrXmvbXvjPfvGffFUrXFjPfFGXOczhCc7zpzaxDvaxDv7xDvKRCcrTpzKRDvrbWcznNzzhBz7xBzaxDF7xBzrRBzKRDFrbVzzikIMVKczhCczjpzShDvShDvzhDvCBCcjDpzCBDvjJSczlJzzhBzzhBzShDFzhBzjBBzCBDFjJRzzgg6MXMQMaVzjJy9vXNKUntznCkICP/W5ggQKQgAIf//5ggAAAAAAKM8W4sAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAS10lEQVR4Xu1bW5KjuhJs8zC0AAf0NjCf8IfZwuyI7xtnO95djx03U0o14uE+M/ecnxsxabcBIZVKqarSA/rtD/7gD34DZjRjtPvip7E3I+OyWYzRqDMPV5h5jC8qAS7rJjX48u4CU0xEtfnF34y76TS1Lh8x40aic4fcFpgKVBmfcRKKsQKybar/jZ0Aj2g6nZ7PExD82jNmxM0g/4zUXucOObKixMft7a1WMQnArwQsqeFv6gR4RJO9dYB33N2rsWaDKcAEiqHGBixZ6nyHuxPgYarTaci2KJCRUuKsiPtr775X1rRckpcEec+n07ntr7ErqXqfZZblyHAoPUOGHRu7JGBERhnFuxV7BFmZaKAlAIm7GiJ3eTmdCncWIBpOp1rnAtnIdL6AwtQbrZO7x5OuBKTuUlr3ro+f6jyqsXEKNHLfdLJxrAZtA3ipxuDuezXERu+uBhgtgUaWUnfBuGcjEht5XXf2W8fwvj0bQzvP+M7QmrjjipkBd6NVRPFsZF19xSVMhWz0Et7Vd+QbYU4v2AgMHXxSjbVtTO7qjeYFsAp3dqIlLrgqFWA7xEasJACWfXttG51yod1SY83GRg3W7c42aqhTCPaqbCPoWajxjW0sbLBbA9tQQ/ZqsId1GuC6hCHSKTbWatzQKS9sY2HjI2AjG6YPl3o6TwM/+Wgoc/g8VzcT8YNaTHb+PA/nAf3euMQRRkEBso0NG79iG54NNmYfYqFjziMiOO7LCTwxi2s2qP81Gwe2sVcjYAM3N/BqALa8g/IpZgFUg72Kw1//3DbyuaUxwCn5YYRI644pd1zWXQcPtB/cZfxHhTdcoSYD2/wNNpqdpzwZAD0bAEYvHxI1kBEQ5j2FAA00ZRxIFUo20EpslP/c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";
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
;// CONCATENATED MODULE: ./src/asset/notice3_1.jpg
const notice3_1_namespaceObject = __webpack_require__.p + "images/notice3_1.502316f0..jpg";
;// CONCATENATED MODULE: ./src/asset/qr.jpg
const src_asset_qr_namespaceObject = __webpack_require__.p + "images/qr.0fed63db..jpg";
// EXTERNAL MODULE: ./src/asset/map.jpg
var map = __webpack_require__(385);
;// CONCATENATED MODULE: ./src/pages/CallForPapers/index.tsx
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
































function CallForPapers_CallForPapers() {
    var zhColumns = [
        {
            title: '报告人',
            key: 'name',
            dataIndex: 'name',
            width: '40%',
            align: 'center',
            render: function (_, record) { return (react.createElement("div", { className: CallForPapers.nameCol, style: { wordWrap: 'break-word', wordBreak: 'break-word' } },
                react.createElement("div", null, record.name),
                react.createElement("div", null, record.university))); },
        },
        {
            title: '报告主题',
            dataIndex: 'title',
            align: 'center',
            className: CallForPapers.titleCol,
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
    var specialData = [
        {
            name: '黄立鹤 教授',
            university: '同济大学',
            title: '轻度认知障碍老年人的宏观结构叙事能力研究'
        },
        {
            name: '李俊仁 副教授',
            university: '台湾师范大学',
            title: '台湾学童阅读发展跟香港儿童阅读发展的差异'
        },
        {
            name: '李英浩 教授',
            university: '延边大学',
            title: '言语产出中声门特征与舌位的协同作用—来自汉语和朝鲜语的证据'
        },
        {
            name: '鲁曼 教授',
            university: '湖南大学',
            title: '语言中的此消彼长：土家语差比句标记个案研究'
        },
        {
            name: '罗自群 教授',
            university: '中央民族大学',
            title: '怒苏语e31的演化路径'
        },
        {
            name: '曲长亮 教授',
            university: '大连外国语大学',
            title: '英国-北欧学派语音演化思想再思考'
        },
        {
            name: '王如蜜 副主任言语治疗师',
            university: '中南大学湘雅二医院',
            title: '发展性语言障碍的早期识别'
        },
        {
            name: '王莹莹 教授',
            university: '湖南大学',
            title: '语气副词“实在”的量级语义学分析'
        },
        {
            name: '吴君如 副教授',
            university: '华东师范大学',
            title: 'Systematic Correspondence in Co-evolving Languages'
        },
        {
            name: '夏俐萍 研究员',
            university: '中国社会科学院语言研究所',
            title: '湘鄂赣“浊音走廊”的塞音格局'
        },
        {
            name: '张清芳 教授',
            university: '中国人民大学',
            title: '口语句子产生中语法编码老化的认知机制：眼动研究'
        },
        {
            name: '邹嘉彦 教授',
            university: '香港城市大学/香港科技大学',
            title: 'Portmanteau Words in Chinese and Covert Variations among MSC and Dialects'
        },
    ];
    var d13morningPlanColumns = [
        {
            title: '日期',
            key: 'date',
            className: CallForPapers.dateCol,
            dataIndex: 'date',
            width: '25%',
            align: 'center',
            render: function (text, record, index) {
                var previousRow = d13morningPlanData[index - 1];
                var nextRow = d13morningPlanData[index + 1];
                var rowSpan = 1;
                if (previousRow && previousRow.date === text) {
                    return {
                        children: text,
                        props: {
                            rowSpan: 0,
                        },
                    };
                }
                while (nextRow && nextRow.date === text) {
                    rowSpan++;
                    index++;
                    nextRow = d13morningPlanData[index + 1];
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
            title: '时间',
            dataIndex: 'time',
            className: CallForPapers.timeCol,
            key: 'time',
            width: '25%',
            align: 'center',
        },
        {
            title: '内容',
            dataIndex: 'content',
            className: CallForPapers.contentCol,
            key: 'content',
            width: '25%',
            align: 'center',
            render: function (text, record, index) {
                var previousRow = d13morningPlanData[index - 1];
                var nextRow = d13morningPlanData[index + 1];
                var rowSpan = 1;
                if (previousRow && previousRow.content === text) {
                    return {
                        children: text,
                        props: {
                            rowSpan: 0,
                        },
                    };
                }
                while (nextRow && nextRow.content === text) {
                    rowSpan++;
                    index++;
                    nextRow = d13morningPlanData[index + 1];
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
            title: '地点',
            dataIndex: 'position',
            className: CallForPapers.positionCol,
            key: 'position',
            width: '25%',
            align: 'center',
            render: function (text, record, index) {
                var previousRow = d13morningPlanData[index - 1];
                var nextRow = d13morningPlanData[index + 1];
                var rowSpan = 1;
                if (previousRow && previousRow.position === text) {
                    return {
                        children: text,
                        props: {
                            rowSpan: 0,
                        },
                    };
                }
                while (nextRow && nextRow.position === text) {
                    rowSpan++;
                    index++;
                    nextRow = d13morningPlanData[index + 1];
                }
                return {
                    children: text,
                    props: {
                        rowSpan: rowSpan,
                    },
                };
            },
        }
    ];
    var d13morningPlanData = [
        {
            date: '7月13日上午',
            time: '8:30-9:00',
            content: '开幕式、合影',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月13日上午',
            time: '9:00-9:30',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月13日上午',
            time: '9:30-10:00',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月13日上午',
            time: '10:00-10:30',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月13日上午',
            time: '10:30-11:00',
            content: '茶歇',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月13日上午',
            time: '11:00-11:30',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月13日上午',
            time: '11:30-12:00',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月13日上午',
            time: '12:00-12:30',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
    ];
    var d13afternoonPlanColumns = [
        {
            title: '午餐、午休',
            children: [
                {
                    title: '日期',
                    key: 'date',
                    className: CallForPapers.dateCol,
                    dataIndex: 'date',
                    width: '25%',
                    align: 'center',
                    render: function (text, record, index) {
                        var previousRow = d13afternoonPlanData[index - 1];
                        var nextRow = d13afternoonPlanData[index + 1];
                        var rowSpan = 1;
                        if (previousRow && previousRow.date === text) {
                            return {
                                children: text,
                                props: {
                                    rowSpan: 0,
                                },
                            };
                        }
                        while (nextRow && nextRow.date === text) {
                            rowSpan++;
                            index++;
                            nextRow = d13afternoonPlanData[index + 1];
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
                    title: '时间',
                    dataIndex: 'time',
                    className: CallForPapers.timeCol,
                    key: 'time',
                    width: '25%',
                    align: 'center',
                },
                {
                    title: '内容',
                    dataIndex: 'content',
                    className: CallForPapers.contentCol,
                    key: 'content',
                    width: '25%',
                    align: 'center',
                    render: function (text, record, index) {
                        var previousRow = d13afternoonPlanData[index - 1];
                        var nextRow = d13afternoonPlanData[index + 1];
                        var rowSpan = 1;
                        if (previousRow && previousRow.content === text) {
                            return {
                                children: text,
                                props: {
                                    rowSpan: 0,
                                },
                            };
                        }
                        while (nextRow && nextRow.content === text) {
                            rowSpan++;
                            index++;
                            nextRow = d13afternoonPlanData[index + 1];
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
                    title: '地点',
                    dataIndex: 'position',
                    className: CallForPapers.positionCol,
                    key: 'position',
                    width: '25%',
                    align: 'center',
                    render: function (text, record, index) {
                        var previousRow = d13afternoonPlanData[index - 1];
                        var nextRow = d13afternoonPlanData[index + 1];
                        var rowSpan = 1;
                        if (previousRow && previousRow.position === text) {
                            return {
                                children: text,
                                props: {
                                    rowSpan: 0,
                                },
                            };
                        }
                        while (nextRow && nextRow.position === text) {
                            rowSpan++;
                            index++;
                            nextRow = d13afternoonPlanData[index + 1];
                        }
                        return {
                            children: text,
                            props: {
                                rowSpan: rowSpan,
                            },
                        };
                    },
                }
            ],
        },
    ];
    var d13afternoonPlanData = [
        {
            date: '7月13日下午',
            time: '14:30-16:10',
            content: '特邀口头报告（201）一般口头报告（其他教室）海报展示',
            position: '湖南大学 复临舍'
        },
        {
            date: '7月13日下午',
            time: '16:10-16:30',
            content: '茶歇',
            position: '湖南大学 复临舍'
        },
        {
            date: '7月13日下午',
            time: '16:30-17:58',
            content: '特邀口头报告（201）一般口头报告（其他教室）海报展示',
            position: '湖南大学 复临舍'
        },
    ];
    var d14morningPlanColumns = [
        {
            title: '晚餐',
            children: [
                {
                    title: '日期',
                    key: 'date',
                    className: CallForPapers.dateCol,
                    dataIndex: 'date',
                    width: '25%',
                    align: 'center',
                    render: function (text, record, index) {
                        var previousRow = d14morningPlanData[index - 1];
                        var nextRow = d14morningPlanData[index + 1];
                        var rowSpan = 1;
                        if (previousRow && previousRow.date === text) {
                            return {
                                children: text,
                                props: {
                                    rowSpan: 0,
                                },
                            };
                        }
                        while (nextRow && nextRow.date === text) {
                            rowSpan++;
                            index++;
                            nextRow = d14morningPlanData[index + 1];
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
                    title: '时间',
                    dataIndex: 'time',
                    className: CallForPapers.timeCol,
                    key: 'time',
                    width: '25%',
                    align: 'center',
                },
                {
                    title: '内容',
                    dataIndex: 'content',
                    className: CallForPapers.contentCol,
                    key: 'content',
                    width: '25%',
                    align: 'center',
                    render: function (text, record, index) {
                        var previousRow = d14morningPlanData[index - 1];
                        var nextRow = d14morningPlanData[index + 1];
                        var rowSpan = 1;
                        if (previousRow && previousRow.content === text) {
                            return {
                                children: text,
                                props: {
                                    rowSpan: 0,
                                },
                            };
                        }
                        while (nextRow && nextRow.content === text) {
                            rowSpan++;
                            index++;
                            nextRow = d14morningPlanData[index + 1];
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
                    title: '地点',
                    dataIndex: 'position',
                    className: CallForPapers.positionCol,
                    key: 'position',
                    width: '25%',
                    align: 'center',
                    render: function (text, record, index) {
                        var previousRow = d14morningPlanData[index - 1];
                        var nextRow = d14morningPlanData[index + 1];
                        var rowSpan = 1;
                        if (previousRow && previousRow.position === text) {
                            return {
                                children: text,
                                props: {
                                    rowSpan: 0,
                                },
                            };
                        }
                        while (nextRow && nextRow.position === text) {
                            rowSpan++;
                            index++;
                            nextRow = d14morningPlanData[index + 1];
                        }
                        return {
                            children: text,
                            props: {
                                rowSpan: rowSpan,
                            },
                        };
                    },
                }
            ],
        },
    ];
    var d14morningPlanData = [
        {
            date: '7月14日上午',
            time: '8:30-9:00',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月14日上午',
            time: '9:00-9:30',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月14日上午',
            time: '9:30-10:00',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月14日上午',
            time: '10:00-10:30',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月14日上午',
            time: '10:30-11:00',
            content: '茶歇',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月14日上午',
            time: '11:00-11:30',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月14日上午',
            time: '11:30-12:00',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月14日上午',
            time: '12:00-12:30',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
    ];
    var d14afternoonPlanColumns = [
        {
            title: '午餐、午休',
            children: [
                {
                    title: '日期',
                    key: 'date',
                    className: CallForPapers.dateCol,
                    dataIndex: 'date',
                    width: '25%',
                    align: 'center',
                    render: function (text, record, index) {
                        var previousRow = d14afternoonPlanData[index - 1];
                        var nextRow = d14afternoonPlanData[index + 1];
                        var rowSpan = 1;
                        if (previousRow && previousRow.date === text) {
                            return {
                                children: text,
                                props: {
                                    rowSpan: 0,
                                },
                            };
                        }
                        while (nextRow && nextRow.date === text) {
                            rowSpan++;
                            index++;
                            nextRow = d14afternoonPlanData[index + 1];
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
                    title: '时间',
                    dataIndex: 'time',
                    className: CallForPapers.timeCol,
                    key: 'time',
                    width: '25%',
                    align: 'center',
                },
                {
                    title: '内容',
                    dataIndex: 'content',
                    className: CallForPapers.contentCol,
                    key: 'content',
                    width: '25%',
                    align: 'center',
                    render: function (text, record, index) {
                        var previousRow = d14afternoonPlanData[index - 1];
                        var nextRow = d14afternoonPlanData[index + 1];
                        var rowSpan = 1;
                        if (previousRow && previousRow.content === text) {
                            return {
                                children: text,
                                props: {
                                    rowSpan: 0,
                                },
                            };
                        }
                        while (nextRow && nextRow.content === text) {
                            rowSpan++;
                            index++;
                            nextRow = d14afternoonPlanData[index + 1];
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
                    title: '地点',
                    dataIndex: 'position',
                    className: CallForPapers.positionCol,
                    key: 'position',
                    width: '25%',
                    align: 'center',
                    render: function (text, record, index) {
                        var previousRow = d14afternoonPlanData[index - 1];
                        var nextRow = d14afternoonPlanData[index + 1];
                        var rowSpan = 1;
                        if (previousRow && previousRow.position === text) {
                            return {
                                children: text,
                                props: {
                                    rowSpan: 0,
                                },
                            };
                        }
                        while (nextRow && nextRow.position === text) {
                            rowSpan++;
                            index++;
                            nextRow = d14afternoonPlanData[index + 1];
                        }
                        return {
                            children: text,
                            props: {
                                rowSpan: rowSpan,
                            },
                        };
                    },
                }
            ],
        },
    ];
    var d14afternoonPlanData = [
        {
            date: '7月14日下午',
            time: '14:30-16:10',
            content: '特邀口头报告（201）一般口头报告（其他教室）',
            position: '湖南大学 复临舍'
        },
        {
            date: '7月14日下午',
            time: '16:10-16:30',
            content: '茶歇',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月14日下午',
            time: '16:30-17:00',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月14日下午',
            time: '17:00-17:30',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月14日下午',
            time: '17:30-18:00',
            content: '主旨报告',
            position: '湖南大学 逸夫楼'
        },
        {
            date: '7月14日下午',
            time: '18:00-18:15',
            content: '闭幕式',
            position: '湖南大学 逸夫楼'
        },
    ];
    var isSmallScreen = window.innerWidth < 1024;
    var desArr = isSmallScreen ? [] : [{
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
        }];
    var trafficColumns = __spreadArray(__spreadArray([], desArr), [
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
    ]);
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
    var getRowClassName = function (record, index) {
        return index % 2 === 0 ? CallForPapers.even : CallForPapers.odd;
    };
    return (react.createElement("div", { className: CallForPapers.researchDirectionWrap },
        react.createElement("div", { className: CallForPapers.title }, "Call for Papers - \u5F81\u7A3F"),
        react.createElement("div", { className: CallForPapers.content },
            react.createElement("p", { className: CallForPapers.mainTitle }, "\u7B2C\u5341\u4E94\u5C4A\u6F14\u5316\u8BED\u8A00\u5B66\u56FD\u9645\u7814\u8BA8\u4F1A"),
            react.createElement("p", { className: CallForPapers.mainTitle }, "The 15th International Conference in Evolutionary Linguistics"),
            react.createElement("p", { className: CallForPapers.mt60 }),
            react.createElement("p", { className: CallForPapers.mainTitle }, "(CIEL-15)\u4E09\u53F7\u901A\u77E5"),
            react.createElement("p", { className: CallForPapers.mainTitle }, "(CIEL-15)Notice No.3"),
            react.createElement("p", { className: CallForPapers.mb60 }),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u4E00\u3001\u4F1A\u8BAE\u4ECB\u7ECD"),
            react.createElement("p", { className: CallForPapers.mt20 }, "\u4EE5\u65B0\u6587\u79D1\u5021\u5BFC\u7684\u8DE8\u5B66\u79D1\u89C6\u91CE\uFF0C\u6F14\u5316\u8BED\u8A00\u5B66\u4E0E\u4EBA\u7C7B\u5B66\u3001\u8003\u53E4\u5B66\u3001\u751F\u7269\u5B66\u3001\u8BED\u8A00\u5B66\u3001\u795E\u7ECF\u79D1\u5B66\u3001\u5FC3\u7406\u5B66\u548C\u8BA1\u7B97\u673A\u79D1\u5B66\u7B49\u5B66\u79D1\u4EA4\u53C9\u5171\u878D\u3002\u6F14\u5316\u8BED\u8A00\u5B66\u56FD\u9645\u7814\u8BA8\u4F1A\uFF08International Conference in Evolutionary Linguistics, CIEL\uFF09\u662F\u7531\u56FD\u9645\u8457\u540D\u8BED\u8A00\u5B66\u5BB6\u738B\u58EB\u5143\u6559\u6388\u9996\u5021\u7684\uFF0C\u81F3\u4ECA\u5DF2\u7ECF\u5728\u6D77\u5185\u5916\u591A\u6240\u8457\u540D\u9AD8\u6821\u6210\u529F\u4E3E\u529E\u4E8614\u5C4A\uFF0C\u4EE5\u5F80\u5728\u5E7F\u5DDE\uFF082009\u5E74\uFF09\u3001\u5929\u6D25\uFF082010\u5E74\u30012015\u5E74\uFF09\u3001\u4E0A\u6D77\uFF082011\u5E74\u30012019\u5E74\uFF09\u3001\u5317\u4EAC\uFF082012\u5E74\uFF09\u3001\u53A6\u95E8\uFF082014\u5E74\uFF09\u3001\u7F8E\u56FD\u5370\u7B2C\u5B89\u7EB3\u5DDE\uFF082016\u5E74\uFF09\u3001\u6606\u660E\uFF082017\u5E74\uFF09\u3001\u5357\u4EAC\uFF082018\u5E74\uFF09\u3001\u5170\u5DDE\uFF082021\u5E74\uFF09\u3001\u6D4E\u5357\uFF082022\u5E74\uFF09\u548C\u9999\u6E2F\uFF082013\u5E74\u30012023\u5E74\uFF09\u5206\u522B\u6210\u529F\u4E3E\u529E\u3002\u6F14\u5316\u8BED\u8A00\u5B66\u56FD\u9645\u7814\u8BA8\u4F1A\u65E8\u5728\u5C55\u793A\u8BED\u8A00\u5B66\u7684\u65B0\u4EA4\u53C9\u89C6\u91CE\uFF0C\u5021\u5BFC\u65B0\u7684\u7814\u7A76\u624B\u6BB5\u65B9\u6CD5\uFF0C\u4E3A\u76F8\u5173\u9886\u57DF\u7684\u6D77\u5185\u5916\u5B66\u8005\u4EEC\u63D0\u4F9B\u8DE8\u5B66\u79D1\u56FD\u9645\u4EA4\u6D41\u5408\u4F5C\u673A\u4F1A\uFF0C\u5171\u540C\u63A8\u52A8\u6F14\u5316\u8BED\u8A00\u5B66\u7814\u7A76\u7684\u8FDB\u6B65\u3002"),
            react.createElement("p", null,
                "\u7B2C\u5341\u4E94\u5C4A\u6F14\u5316\u8BED\u8A00\u5B66\u56FD\u9645\u7814\u8BA8\u4F1A\uFF08CIEL-15\uFF09\u5C06\u4E8E2024\u5E747\u670812\u65E5\u81F314\u65E5\u5728\u6E56\u5357\u5927\u5B66\u4E3E\u884C\uFF0C\u7531\u6E56\u5357\u5927\u5B66\u5916\u56FD\u8BED\u5B66\u9662\u4E3B\u529E\uFF0C\u6DF1\u5733\u5E02\u795E\u7ECF\u79D1\u5B66\u7814\u7A76\u9662\u534F\u529E\u3002",
                react.createElement("b", null, "\u4F1A\u8BAE\u4E3B\u9898\uFF1A\u65B0\u6587\u79D1\u80CC\u666F\u4E0B\u8BED\u8A00\u6F14\u5316\u7684\u8DE8\u5B66\u79D1\u7814\u7A76\u3002"),
                "\u4ECA\u606D\u9080\u56FD\u5185\u5916\u4E13\u5BB6\u3001\u5B66\u8005\u3001\u6559\u5E08\u3001\u7814\u7A76\u751F\u62E8\u5197\u4E0E\u4F1A\uFF01"),
            react.createElement("p", { className: CallForPapers.imgCenter },
                react.createElement("img", { src: notice3_1_namespaceObject })),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u4E8C\u3001\u4F1A\u8BAE\u8BAE\u9898"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "\uFF081\uFF09\u6C49\u8BED\u53CA\u5176\u4ED6\u8BED\u8A00\u7684\u7956\u5148\uFF1B"),
                react.createElement("li", null, "\uFF082\uFF09\u5178\u578B\u548C\u975E\u5178\u578B\u4EBA\u7FA4\u7684\u8BED\u8A00\u53D1\u5C55;"),
                react.createElement("li", null, "\uFF083\uFF09\u8001\u9F84\u5316\u4E0E\u8BED\u8A00\u9000\u5316\uFF1B"),
                react.createElement("li", null, "\uFF084\uFF09\u97F3\u4E50\u4E0E\u8BED\u8A00\u6F14\u5316;"),
                react.createElement("li", null, "\uFF085\uFF09\u8BED\u8A00\u3001\u8BA4\u77E5\u4E0E\u5927\u8111\uFF1B"),
                react.createElement("li", null, "\uFF086\uFF09\u65B9\u8A00\u7684\u5F62\u6210\u4E0E\u6F14\u5316\uFF1B"),
                react.createElement("li", null, "\uFF087\uFF09\u8BED\u8A00\u7684\u5171\u65F6\u4E0E\u5386\u65F6\u7814\u7A76\uFF1B"),
                react.createElement("li", null, "\uFF088\uFF09\u5927\u578B\u8BED\u8A00\u6A21\u578B\u7684\u53D1\u5C55\u4E0E\u6F14\u5316\uFF1B"),
                react.createElement("li", null, "\uFF089\uFF09\u5176\u4ED6\u8BED\u8A00\u76F8\u5173\u7684\u8BAE\u9898\u3002")),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u4E09\u3001\u4F1A\u8BAE\u5F62\u5F0F"),
            react.createElement("p", { className: CallForPapers.mt20 }, "\u672C\u6B21\u56FD\u9645\u7814\u8BA8\u4F1A\u62DF\u8BBE\u7ACB\u4E09\u5927\u62A5\u544A\u5F62\u5F0F\uFF1A\u4E3B\u65E8\u62A5\u544A\u3001\u53E3\u5934\u62A5\u544A\u3001\u6D77\u62A5\u5C55\u793A\u3002\u7814\u8BA8\u4F1A\u5B66\u672F\u8BED\u8A00\u4E3A\u6C49\u8BED\u666E\u901A\u8BDD\u548C\u82F1\u8BED\u3002"),
            react.createElement("div", { className: CallForPapers.subTitle }, "1.\t\u5927\u4F1A\u4E3B\u65E8\u62A5\u544A\uFF08\u4EE5\u59D3\u6C0F\u5B57\u6BCD\u4E3A\u5E8F\uFF09"),
            react.createElement(table/* default */.A, { pagination: false, columns: zhColumns, className: CallForPapers.table, showHeader: false, rowClassName: getRowClassName, dataSource: zhData }),
            react.createElement("div", { className: CallForPapers.subTitle }, "2.\t\u7279\u9080\u53E3\u5934\u62A5\u544A"),
            react.createElement("p", { className: CallForPapers.mt20 }, "\u672C\u6B21\u4F1A\u8BAE\u8BBE\u7ACB\u7279\u9080\u53E3\u5934\u62A5\u544A\uFF0C\u5177\u4F53\u4FE1\u606F\u5982\u4E0B\uFF08\u6309\u7167\u59D3\u6C0F\u9996\u5B57\u6BCD\u6392\u5E8F\uFF09\uFF1A"),
            react.createElement(table/* default */.A, { pagination: false, columns: zhColumns, className: CallForPapers.table, showHeader: false, rowClassName: getRowClassName, dataSource: specialData }),
            react.createElement("p", { className: CallForPapers.subTitle }, "3.\t\u4E00\u822C\u53E3\u5934\u62A5\u544A\u3002"),
            react.createElement("p", { className: CallForPapers.mt20 }, "\u672C\u6B21\u4F1A\u8BAE\u8BBE\u7F6E10\u4E2A\u5206\u4F1A\u573A\uFF0C\u5165\u9009\u7684\u53E3\u5934\u6C47\u62A5\u5C06\u5728\u5404\u5206\u4F1A\u573A\u8FDB\u884C\u4EA4\u6D41\uFF0C\u6BCF\u4E2A\u62A5\u544A12\u5206\u949F\u3002"),
            react.createElement("p", { className: CallForPapers.subTitle }, "4.\t\u6D77\u62A5\u5C55\u793A\u3002"),
            react.createElement("p", { className: CallForPapers.mt20 }, "\u5927\u4F1A\u62DF\u8BBE\u7ACB\u4E13\u95E8\u7684\u8BBA\u6587\u6D77\u62A5\u5C55\u793A\u533A\u57DF\uFF0C\u65B9\u4FBF\u4E0E\u4F1A\u4EE3\u8868\u4E00\u5BF9\u4E00\u8BA8\u8BBA\u4EA4\u6D41\u3002"),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u56DB\u3001\u4F1A\u8BAE\u8BAE\u7A0B"),
            react.createElement("p", { className: CallForPapers.mt20 }, "7\u670812\u65E5\u5168\u5929\u7B7E\u5230\u6CE8\u518C\uFF0C7\u670813-14\u65E5\u5168\u5929\u8FDB\u884C\u4F1A\u8BAE\u62A5\u544A\u53CA\u6D77\u62A5\u5C55\u793A\u3002\u5177\u4F53\u8BAE\u7A0B\u5982\u4E0B\u8868\uFF1A"),
            react.createElement(table/* default */.A, { pagination: false, columns: d13morningPlanColumns, className: CallForPapers.timeTable, showHeader: true, dataSource: d13morningPlanData }),
            react.createElement(table/* default */.A, { pagination: false, columns: d13afternoonPlanColumns, className: CallForPapers.timeTable, showHeader: true, dataSource: d13afternoonPlanData }),
            react.createElement(table/* default */.A, { pagination: false, columns: d14morningPlanColumns, className: CallForPapers.timeTable, showHeader: true, dataSource: d14morningPlanData }),
            react.createElement(table/* default */.A, { pagination: false, columns: d14afternoonPlanColumns, className: CallForPapers.timeTable, showHeader: true, dataSource: d14afternoonPlanData, footer: function () { return react.createElement("div", { className: CallForPapers.footer }, "\u665A\u9910"); } }),
            react.createElement("p", { className: CallForPapers.mt40 }),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u4E94\u3001\u4F1A\u8BAE\u8BAE\u7A0B"),
            react.createElement("p", { className: CallForPapers.mt20 }, "(1) \u4F1A\u52A1\u8D39\uFF1A\u4EBA\u6C11\u5E01800\u5143\uFF0C\u5168\u65E5\u5236\u7814\u7A76\u751F\u51ED\u5B66\u751F\u8BC1500\u5143\uFF0C\u7B7E\u5230\u5F53\u65E5\u73B0\u573A\u7F34\u8D39\u5E76\u83B7\u53D6\u7535\u5B50\u53D1\u7968\u3002\u4F1A\u52A1\u8D39\u6DB5\u76D6\u53C2\u52A0\u4F1A\u8BAE\u671F\u95F4\u7684\u7528\u9910\u3001\u8336\u6B47\u4EE5\u53CA\u4F1A\u8BAE\u8D44\u6599\u8D39\u3002\u4F4F\u5BBF\u8D39\u548C\u4EA4\u901A\u8D39\u9700\u81EA\u7406\u3002"),
            react.createElement("p", null,
                "(2) \u672C\u6B21\u4F1A\u8BAE\u6536\u7A3F\u65E5\u671F\u76EE\u524D\u5DF2\u7ECF\u622A\u6B62\u3002\u4E3A\u6EE1\u8DB3\u5404\u4F4D\u5E08\u751F\u7684\u53C2\u4F1A\u9700\u6C42\uFF0C\u7ECF\u7EC4\u59D4\u4F1A\u5546\u8BAE\uFF0C\u7EE7\u7EED\u63A5\u53D7\u5927\u4F1A\u65C1\u542C\u540D\u989D\uFF0C\u65C1\u542C\u53C2\u4F1A\u8001\u5E08\u6216\u8005\u5B66\u751F\u9700\u7F34\u7EB3\u4F1A\u52A1\u8D39\uFF0C\u65E0\u9700\u63D0\u4EA4\u6458\u8981\uFF0C\u4E5F\u4E0D\u518D\u5B89\u6392\u4F1A\u8BAE\u62A5\u544A\u3002\u6709\u610F\u65C1\u542C\u8005\u8BF7\u4E8E6\u670825\u65E5\u524D\u586B\u5199\u62A5\u540D\u94FE\u63A5(",
                react.createElement("a", { href: "https://www.wjx.top/vm/wkc2hqL.aspx#" }, "https://www.wjx.top/vm/wkc2hqL.aspx#"),
                ")\u6216\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u5728\u7EBF\u62A5\u540D\uFF0C\u901A\u8FC7\u62A5\u540D\u5BA1\u6838\u540E\uFF0C\u4F1A\u52A1\u4E13\u5BB6\u7EC4\u5C06\u5728\u4E94\u4E2A\u5DE5\u4F5C\u65E5\u5185\u901A\u8FC7\u90AE\u7BB1\u53D1\u51FA\u6B63\u5F0F\u53C2\u4F1A\u901A\u77E5\u548C\u4F1A\u8BAE\u5177\u4F53\u5B89\u6392\u3002"),
            react.createElement("p", { className: CallForPapers.imgCenter },
                react.createElement("img", { src: src_asset_qr_namespaceObject })),
            react.createElement("p", null, "\uFF08\u6CE8\uFF1A\u7531\u4E8E\u65C1\u542C\u5E2D\u4F4D\u4E0E\u573A\u5730\u9650\u5236\uFF0C\u6821\u5916\u62A5\u540D\u4EBA\u6570\u9650\u5B9A\u4E3A60\u4EBA\uFF0C\u5148\u5230\u5148\u5F97\u3002\u5982\u672A\u80FD\u6EE1\u8DB3\u60A8\u7684\u62A5\u540D\u9700\u6C42\uFF0C\u656C\u8BF7\u8C05\u89E3\uFF01\uFF09"),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u516D\u3001\u4EA4\u901A\u53CA\u4F4F\u5BBF"),
            react.createElement("div", { className: CallForPapers.listTitle }, "\uFF081\uFF09\u4F1A\u8BAE\u5730\u70B9"),
            react.createElement("p", { className: CallForPapers.mt20 }, "\u4E3B\u65E8\u62A5\u544A\uFF1A\u6E56\u5357\u5927\u5B66\u9038\u592B\u697C \u4E3B\u62A5\u544A\u5385"),
            react.createElement("p", null, "\u53E3\u5934\u6C47\u62A5\uFF1A\u590D\u4E34\u820D201\u3001203\u3001204\u3001208\u3001209"),
            react.createElement("p", null, "\u6D77\u62A5\u5C55\u793A\uFF1A\u590D\u4E34\u820D\u5927\u5385"),
            react.createElement("p", { className: CallForPapers.imgCenter },
                react.createElement("img", { src: map })),
            react.createElement("p", { className: CallForPapers.imgCenter }, "\u6E56\u5357\u5927\u5B66\u6821\u56ED\u5730\u56FE"),
            react.createElement("div", { className: CallForPapers.listTitle }, "\uFF082\uFF09\u4EA4\u901A\u65B9\u5F0F"),
            react.createElement(table/* default */.A, { pagination: false, columns: trafficColumns, className: CallForPapers.table, showHeader: true, dataSource: trafficData }),
            react.createElement("div", { className: CallForPapers.listTitle }, "\uFF083\uFF09\u4F1A\u8BAE\u63A8\u8350\u9152\u5E97\uFF1A\u6E56\u5357\u5927\u5B66\u96C6\u8D24\u5BBE\u9986"),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u4E03\u3001\u4F1A\u8BAE\u7EC4\u7EC7"),
            react.createElement("div", { className: CallForPapers.listTitle }, "\uFF081\uFF09\u62A5\u540D\u8054\u7CFB\u8001\u5E08\uFF1A"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "\u6731\u8001\u5E08\uFF1A18291849054"),
                react.createElement("li", null, "\u5321\u8001\u5E08\uFF1A15274656369"),
                react.createElement("li", null, "\u59DC\u8001\u5E08\uFF1A18273128651")),
            react.createElement("div", { className: CallForPapers.listTitle }, "\uFF082\uFF09\u7814\u8BA8\u4F1A\u540D\u8A89\u4E3B\u5E2D\uFF1A\u738B\u58EB\u5143"),
            react.createElement("div", { className: CallForPapers.listTitle }, "\uFF083\uFF09\u4E3B\u5E2D\u56E2\uFF1A\u9648\u98DE\u3001\u5F6D\u521A\u3001\u8C2D\u529B\u6D77"),
            react.createElement("div", { className: CallForPapers.listTitle }, "\uFF084\uFF09\u4F1A\u8BAE\u90AE\u7BB1\uFF1Aciel15hnu@gmail.com"),
            react.createElement("div", { className: CallForPapers.listTitle }, "\uFF085\uFF09\u4F1A\u8BAE\u4E3B\u9875\uFF1Ahttp://www.ciel-15.com"),
            react.createElement("p", { className: CallForPapers.mt60 }),
            react.createElement("p", { className: CallForPapers.mainTitle }, "(CIEL-15)\u4E8C\u53F7\u901A\u77E5"),
            react.createElement("p", { className: CallForPapers.mainTitle }, "(CIEL-15)Notice No.2"),
            react.createElement("p", { className: CallForPapers.mb60 }),
            react.createElement("p", null, "\u4EE5\u65B0\u6587\u79D1\u5021\u5BFC\u7684\u8DE8\u5B66\u79D1\u89C6\u91CE\uFF0C\u6F14\u5316\u8BED\u8A00\u5B66\u4E0E\u4EBA\u7C7B\u5B66\u3001\u8003\u53E4\u5B66\u3001\u751F\u7269\u5B66\u3001\u8BED\u8A00\u5B66\u3001\u795E\u7ECF\u79D1\u5B66\u3001\u5FC3\u7406\u5B66\u548C\u8BA1\u7B97\u673A\u79D1\u5B66\u7B49\u5B66\u79D1\u4EA4\u53C9\u5171\u878D\u3002\u6F14\u5316\u8BED\u8A00\u5B66\u56FD\u9645\u7814\u8BA8\u4F1A\uFF08International Conference in Evolutionary Linguistics, CIEL\uFF09\u662F\u7531\u56FD\u9645\u8457\u540D\u8BED\u8A00\u5B66\u5BB6\u738B\u58EB\u5143\u6559\u6388\u9996\u5021\u7684\uFF0C\u81F3\u4ECA\u5DF2\u7ECF\u5728\u6D77\u5185\u5916\u591A\u6240\u8457\u540D\u9AD8\u6821\u6210\u529F\u4E3E\u529E\u4E8614\u5C4A\uFF0C\u4EE5\u5F80\u5728\u5E7F\u5DDE\uFF082009\u5E74\uFF09\u3001\u5929\u6D25\uFF082010\u5E74\u30012015\u5E74\uFF09\u3001\u4E0A\u6D77\uFF082011\u5E74\u30012019\u5E74\uFF09\u3001\u5317\u4EAC\uFF082012\u5E74\uFF09\u3001\u53A6\u95E8\uFF082014\u5E74\uFF09\u3001\u7F8E\u56FD\u5370\u7B2C\u5B89\u7EB3\u5DDE\uFF082016\u5E74\uFF09\u3001\u6606\u660E\uFF082017\u5E74\uFF09\u3001\u5357\u4EAC\uFF082018\u5E74\uFF09\u3001\u5170\u5DDE\uFF082021\u5E74\uFF09\u3001\u6D4E\u5357\uFF082022\u5E74\uFF09\u548C\u9999\u6E2F\uFF082013\u5E74\u30012023\u5E74\uFF09\u5206\u522B\u6210\u529F\u4E3E\u529E\u3002\u6F14\u5316\u8BED\u8A00\u5B66\u56FD\u9645\u7814\u8BA8\u4F1A\u65E8\u5728\u5C55\u793A\u8BED\u8A00\u5B66\u7684\u65B0\u4EA4\u53C9\u89C6\u91CE\uFF0C\u5021\u5BFC\u65B0\u7684\u7814\u7A76\u624B\u6BB5\u65B9\u6CD5\uFF0C\u4E3A\u76F8\u5173\u9886\u57DF\u7684\u6D77\u5185\u5916\u5B66\u8005\u4EEC\u63D0\u4F9B\u8DE8\u5B66\u79D1\u56FD\u9645\u4EA4\u6D41\u5408\u4F5C\u673A\u4F1A\uFF0C\u5171\u540C\u63A8\u52A8\u6F14\u5316\u8BED\u8A00\u5B66\u7814\u7A76\u7684\u8FDB\u6B65\u3002"),
            react.createElement("p", null, "From an interdisciplinary perspective, evolutionary linguistics interacts with anthropology, archeology, biology, linguistics, neuroscience, psychology, and computer science. Collaborative empirical research among these areas will make new contributions to evolutionary linguistics, both in breadth and depth. The International Conference in Evolutionary Linguistics (CIEL) was initiated by Professor WANG S-Y. William. Through CIEL, we wish to promote international interaction and boost interdisciplinary collaborations. Previous CIEL conferences in Guangzhou (2009), Tianjin (2010, 2015), Shanghai (2011, 2019), Beijing (2012), Xiamen (2014), Indiana USA (2016), Kunming (2017), Nanjing (2018), Lanzhou (2021), Jinan (2022), and Hong Kong (2013, 2023) were all held in the same spirit."),
            react.createElement("p", null, "\u7B2C\u5341\u4E94\u5C4A\u6F14\u5316\u8BED\u8A00\u5B66\u56FD\u9645\u7814\u8BA8\u4F1A\uFF08CIEL-15\uFF09\u5C06\u4E8E2024\u5E747\u670812\u65E5\u81F314\u65E5\u5728\u6E56\u5357\u5927\u5B66\u4E3E\u884C\uFF0C\u7531\u6E56\u5357\u5927\u5B66\u5916\u56FD\u8BED\u5B66\u9662\u4E3B\u529E\uFF0C\u6DF1\u5733\u5E02\u795E\u7ECF\u79D1\u5B66\u7814\u7A76\u9662\u534F\u529E\u3002\u5C4A\u65F6\u5C06\u9080\u8BF7\u56FD\u5185\u5916\u672C\u9886\u57DF\u7684\u8457\u540D\u5B66\u8005\u505A\u5927\u4F1A\u7684\u4E3B\u65E8\u62A5\u544A\u3002\u4ECA\u606D\u9080\u56FD\u5185\u5916\u4E13\u5BB6\u3001\u5B66\u8005\u3001\u6559\u5E08\u3001\u7814\u7A76\u751F\u62E8\u5197\u4E0E\u4F1A\uFF01\u73B0\u5C06\u4F1A\u8BAE\u65E5\u7A0B\u53CA\u6458\u8981\u63D0\u4EA4\u7B49\u76F8\u5173\u4E8B\u9879\u901A\u77E5\u5982\u4E0B\uFF1A"),
            react.createElement("p", null, "The 15th International Conference in Evolutionary Linguistics (CIEL-15) will be held during July 12-14, 2024 at Hunan University. CIEL-15 will be held by School of Foreign Languages, Hunan University, and co-organized by the Shenzhen Institute of Neuroscience. CIEL-15 will invite scholars of representative and influential figures in the relevant fields from both domestic and international areas to deliver keynote speeches. We cordially invite all scholars to attend! Please find below the conference schedule and details regarding the submission of abstracts and other related matters:"),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u4E00\u3001\u4F1A\u8BAE\u8BAE\u9898"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "\uFF081\uFF09\u6C49\u8BED\u53CA\u5176\u4ED6\u8BED\u8A00\u7684\u7956\u5148\uFF1B"),
                react.createElement("li", null, "\uFF082\uFF09\u5178\u578B\u548C\u975E\u5178\u578B\u4EBA\u7FA4\u7684\u8BED\u8A00\u53D1\u5C55;"),
                react.createElement("li", null, "\uFF083\uFF09\u8001\u9F84\u5316\u4E0E\u8BED\u8A00\u9000\u5316\uFF1B"),
                react.createElement("li", null, "\uFF084\uFF09\u97F3\u4E50\u4E0E\u8BED\u8A00\u6F14\u5316;"),
                react.createElement("li", null, "\uFF085\uFF09\u8BED\u8A00\u3001\u8BA4\u77E5\u4E0E\u5927\u8111\uFF1B"),
                react.createElement("li", null, "\uFF086\uFF09\u65B9\u8A00\u7684\u5F62\u6210\u4E0E\u6F14\u5316\uFF1B"),
                react.createElement("li", null, "\uFF087\uFF09\u8BED\u8A00\u7684\u5171\u65F6\u4E0E\u5386\u65F6\u7814\u7A76\uFF1B"),
                react.createElement("li", null, "\uFF088\uFF09\u5927\u578B\u8BED\u8A00\u6A21\u578B\u7684\u53D1\u5C55\u4E0E\u6F14\u5316\uFF1B"),
                react.createElement("li", null, "\uFF089\uFF09\u5176\u4ED6\u8BED\u8A00\u76F8\u5173\u7684\u8BAE\u9898\u3002")),
            react.createElement("div", { className: CallForPapers.listTitle }, "I.Conference Topics"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "1.\tThe proto-language of Chinese and other languages;"),
                react.createElement("li", null, "2.\tLanguage development in typical and atypical populations;"),
                react.createElement("li", null, "3.\tAgeing and language degradation;"),
                react.createElement("li", null, "4.\tThe (co)evolution of language and music;"),
                react.createElement("li", null, "5.\tLanguage, cognition, and the brain;"),
                react.createElement("li", null, "6.\tDialect formation and evolution;"),
                react.createElement("li", null, "7.\tDiachronic and synchronic study of language;"),
                react.createElement("li", null, "8.\tEvolution of large language model;"),
                react.createElement("li", null, "9.\tOther language-related research.")),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u4E8C\u3001\u4F1A\u8BAE\u5F62\u5F0F"),
            react.createElement("p", { className: CallForPapers.mt20 }, "\u672C\u6B21\u56FD\u9645\u7814\u8BA8\u4F1A\u62DF\u8BBE\u7ACB\u4E09\u5927\u62A5\u544A\u5F62\u5F0F\uFF1A\u4E3B\u65E8\u62A5\u544A\u3001\u53E3\u5934\u62A5\u544A\u3001\u6D77\u62A5\u5C55\u793A\u3002\u7814\u8BA8\u4F1A\u5B66\u672F\u8BED\u8A00\u4E3A\u6C49\u8BED\u666E\u901A\u8BDD\u548C\u82F1\u8BED\u3002"),
            react.createElement("div", { className: CallForPapers.subTitle }, "1.\t\u5927\u4F1A\u4E3B\u65E8\u62A5\u544A\uFF08\u4EE5\u59D3\u6C0F\u5B57\u6BCD\u4E3A\u5E8F\uFF09"),
            react.createElement("div", { className: CallForPapers.listTitle }, "II.\tConference Format"),
            react.createElement("p", { className: CallForPapers.mt20 }, "The conference will set up three types of presentations: keynote speeches, oral presentations, and poster sessions. The academic languages of the conference will be Mandarin Chinese and English."),
            react.createElement("div", { className: CallForPapers.subTitle }, "1.\tKeynote Speeches (in alphabetical order by last name)"),
            react.createElement(table/* default */.A, { pagination: false, columns: zhColumns, className: CallForPapers.table, showHeader: false, rowClassName: getRowClassName, dataSource: zhData }),
            react.createElement("p", { className: CallForPapers.subTitle }, "2.\t\u53E3\u5934\u62A5\u544A\u3002\u6BCF\u4F4D\u5165\u9009\u7684\u53D1\u8A00\u4EBA\u8FDB\u884C\u53E3\u5934\u6C47\u62A5\u4E0E\u4EA4\u6D41\u3002"),
            react.createElement("p", { className: CallForPapers.subTitle }, "2.\tOral Presentations. Each selected speaker will provide an oral presentation and engage in discussions."),
            react.createElement("p", { className: CallForPapers.subTitle }, "3.\t\u6D77\u62A5\u5C55\u793A\u3002\u5927\u4F1A\u62DF\u8BBE\u7ACB\u4E13\u95E8\u7684\u8BBA\u6587\u6D77\u62A5\u5C55\u793A\u533A\u57DF\uFF0C\u65B9\u4FBF\u4E0E\u4F1A\u4EE3\u8868\u4E00\u5BF9\u4E00\u8BA8\u8BBA\u4EA4\u6D41\u3002"),
            react.createElement("p", { className: CallForPapers.subTitle }, "3.\tPoster Sessions. The conference will set up a dedicated area for poster presentations to facilitate one-to-one discussions among participants."),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u4E09\u3001\u62A5\u540D\u6CE8\u518C"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "1.\t\u4F1A\u8BAE\u65E5\u7A0B\uFF1A7\u670812\u65E5\u5168\u5929\u7B7E\u5230\u6CE8\u518C\uFF0C7\u670813-14\u65E5\u5168\u5929\u8FDB\u884C\u4F1A\u8BAE\u62A5\u544A\u53CA\u6D77\u62A5\u5C55\u793A\u3002"),
                react.createElement("li", null, "2.\t\u4F1A\u8BAE\u5730\u70B9\uFF1A\u6E56\u5357\u5927\u5B66\u9038\u592B\u697C\u3001\u5916\u56FD\u8BED\u5B66\u9662\u62A5\u544A\u5385\u3002;"),
                react.createElement("li", null, "3.\t\u4F1A\u52A1\u8D39\uFF1A\u4EBA\u6C11\u5E01800\u5143\uFF0C\u5168\u65E5\u5236\u7814\u7A76\u751F\u51ED\u5B66\u751F\u8BC1500\u5143\uFF0C\u7B7E\u5230\u5F53\u65E5\u73B0\u573A\u7F34\u8D39\u5E76\u83B7\u53D6\u7535\u5B50\u53D1\u7968\u3002\u4F1A\u52A1\u8D39\u6DB5\u76D6\u53C2\u52A0\u4F1A\u8BAE\u671F\u95F4\u7684\u7528\u9910\u3001\u8336\u6B47\u4EE5\u53CA\u4F1A\u8BAE\u8D44\u6599\u8D39\u3002\u4F4F\u5BBF\u8D39\u548C\u4EA4\u901A\u8D39\u9700\u81EA\u7406\u3002")),
            react.createElement("div", { className: CallForPapers.listTitle }, "III.Registration"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "1.\tConference Schedule: Full-day registration on July 12th, followed by conference presentations and poster sessions throughout July 13th and 14th."),
                react.createElement("li", null, "2.\tConference Venue: Yifu Building and academic hall of School of Foreign Languages at Hunan University."),
                react.createElement("li", null, "3.\tRegistration Fee: RMB 800 for general attendees and RMB 500 for full-time graduate students upon presentation of a valid student ID. Fees are to be paid on-site at the time of registration, and an electronic receipt will be issued to participants. The fee includes meals, coffee breaks, and conference materials. Please note that accommodation and travel expenses are the responsibility of the participants.")),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u56DB\u3001\u8BBA\u6587\u5F81\u7A3F\u53CA\u6458\u8981\u63D0\u4EA4\u8981\u6C42"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "1.\t\u6BCF\u4F4D\u53C2\u4F1A\u4EE3\u8868\u5747\u9700\u63D0\u4EA4\u8BBA\u6587\u6458\u8981\u3002\u8BF7\u5728\u6458\u8981\u4E2D\u8BE6\u7EC6\u6807\u660E\u4F5C\u8005\u59D3\u540D\uFF08\u62A5\u544A\u4EBA\u7684\u540D\u5B57\u7528\u4E0B\u5212\u7EBF\u7A81\u51FA\u663E\u793A\uFF09\uFF0C\u5355\u4F4D\u540D\u79F0\u4EE5\u53CA\u7535\u5B50\u90AE\u7BB1\u7B49\u3002"),
                react.createElement("li", null,
                    react.createElement("p", null, "2.\t\u6295\u7A3F\u622A\u6B62\u65E5\u671F\uFF1A\u6709\u610F\u53C2\u4F1A\u4EE3\u8868\u8BF7\u57282024\u5E745\u670810\u65E5\u524D\u628A\u53C2\u4F1A\u8BE6\u7EC6\u4E2D\u6587\uFF08600-800\u5B57\uFF09\u6216\u82F1\u6587\u6458\u8981\uFF08400-600\u5B57\uFF09\u548C\u53C2\u4F1A\u56DE\u6267\uFF08\u89C1\u9644\u4EF61\u6216\u8005\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u4E0B\u8F7D\uFF0C\u53C2\u4F1A\u4EBA\u5458\u5747\u9700\u63D0\u4EA4\uFF09\u4EE5word\u683C\u5F0F\u53D1\u9001\u81F3\u6307\u5B9A\u90AE\u7BB1\uFF1Aciel15hnu@gmail.com\u3002\u6295\u7A3F\u90AE\u4EF6\u8BF7\u547D\u540D\u4E3A\u201CCIEL15-\u59D3\u540D-\u5355\u4F4D-\u8EAB\u4EFD\uFF08\u6559\u5E08\u6216\u8005\u5B66\u751F\uFF09\u201D\u3002\u5C4A\u65F6\u7EC4\u59D4\u4F1A\u5C06\u7EC4\u7EC7\u4E13\u5BB6\u5BF9\u6458\u8981\u8FDB\u884C\u8BC4\u5BA1\uFF0C\u5C06\u4E8E2024\u5E745\u670831\u65E5\u524D\u53D1\u51FA\u6B63\u5F0F\u9080\u8BF7\u51FD\u3002"),
                    react.createElement("p", { className: CallForPapers.imgCenter },
                        react.createElement(es_image/* default */.A, { width: 200, className: CallForPapers.qrcode, src: qr_namespaceObject }))),
                react.createElement("li", null, "3.\t\u6709\u5173\u6295\u7A3F\u548C\u53C2\u4F1A\u7684\u95EE\u9898\u8BF7\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6ciel15hnu@gmail.com\u95EE\u8BE2\u3002")),
            react.createElement("div", { className: CallForPapers.listTitle }, "IV.\tCall for Papers and Submission Requirements"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "1.\tAll conference participants are required to submit paper abstract. Please specify the author's name (with the presenter\u2019s name highlighted), affiliation, and email address in the abstract."),
                react.createElement("li", null,
                    react.createElement("p", null, "2.\tSubmission Deadline: Conference participants should submit their detailed abstracts in Chinese (600-800 words) or English (400-600 words) along with the registration receipt (See the attachment or scan the QR code below to download, required for all participants) in Word format to the designated email: ciel15hnu@gmail.com by May 10, 2024. Please format the email title as \u201CCIEL15-Name-Institution-Status (Teacher or Student)\u201D. The organizing committee will arrange for expert review of the abstracts and the official invitation letter will be issued before May 31, 2024."),
                    react.createElement("p", { className: CallForPapers.imgCenter },
                        react.createElement(es_image/* default */.A, { width: 200, className: CallForPapers.qrcode, src: qr_namespaceObject }))),
                react.createElement("li", null, "3.\tFor questions regarding conference issues, please contact us via email at ciel15hnu@gmail.com.")),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u4E94\u3001\u5927\u4F1A\u4E3B\u65E8\u62A5\u544A\u4E13\u5BB6\u7B80\u4ECB\uFF08\u4EE5\u59D3\u6C0F\u5B57\u6BCD\u4E3A\u5E8F\uFF09"),
            react.createElement("div", { className: CallForPapers.listTitle }, "V.\tKeynote Speakers' Biographies (in alphabetical order by last name)"),
            react.createElement("div", { className: CallForPapers.reporterWapper },
                react.createElement(row/* default */.A, { gutter: 16, className: CallForPapers.reporterRow + " " + CallForPapers.row1 },
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: db })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "David Bradley"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "Prof David Bradley has made a major contribution to historical linguistics of Sino-Tibetan languages, to documentation and sociolinguistic study of Sino-Tibetan languages, and to work on endangered languages. He has documented a number of Sino-Tibetan languages and worked with various communities to maintain and revitalise their languages, and trained and supported large numbers of scholars to do similar work around the world. He has contributed very substantially to linguistic theory, particularly concerning Sino-Tibetan historical linguistics and language endangerment, and taken many leadership roles in the discipline, notably as President of the UNESCO Comit\u00E9 International Permanent des Linguistes (CIPL) and editor of the journal Linguistics of the Tibeto-Burman Area. He has also published over 20 books and participated in various language atlases."))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: dhw })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u4E01\u7EA2\u536B"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u4E0A\u6D77\u4EA4\u901A\u5927\u5B66\u5916\u56FD\u8BED\u5B66\u9662\u957F\u8058\u6559\u6388\u3002\u83B7\u5FB7\u56FD\u8BED\u8A00\u5B66\u535A\u58EB\u4E0E\u5DE5\u5B66\u6559\u6388\u8D44\u683C\u3002\u56FD\u5BB6\u793E\u79D1\u91CD\u5927\u9879\u76EE\u201C\u7CBE\u795E\u969C\u788D\u4EBA\u7FA4\u8BED\u6599\u5E93\u5EFA\u8BBE\u53CA\u9762\u5411\u8111\u79D1\u5B66\u548C\u4EBA\u5DE5\u667A\u80FD\u7684\u8BED\u8A00\u7814\u7A76\u201D\u9996\u5E2D\u4E13\u5BB6\u3002\u4E8E\u5FB7\u56FD\u7535\u5B50\u4FE1\u606F\u5B66\u9662\u4ECE\u4E8B\u8BED\u97F3\u6280\u672F\u7814\u7A76\u5341\u4F59\u5E74\u95F4\uFF0C\u4E3B\u6301\u6216\u53C2\u4E0E\u5341\u591A\u9879\u5FB7\u56FD\u6216\u6B27\u76DF\u7EB5\u5411\u9879\u76EE\u53CA\u56FD\u9645\u8457\u540D\u516C\u53F8\u6A2A\u5411\u9879\u76EE\uFF0C\u5305\u62EC\u591A\u8BED\u79CD\u8BED\u97F3\u5408\u6210\u7CFB\u7EDF\u5EFA\u8BBE\u4E0E\u8BA1\u7B97\u673A\u8F85\u52A9\u8BED\u97F3\u5B66\u4E60\u7CFB\u7EDF\u7814\u53D1\u7B49\u3002\u56DE\u56FD\u540E\u4E3B\u8981\u4ECE\u4E8B\u4E8C\u8BED\u8BED\u97F3\u4E60\u5F97\u7814\u7A76\uFF0C\u8FD1\u5E74\u6765\u805A\u7126\u542C\u529B\u53CA\u7CBE\u795E\u969C\u788D\u4EBA\u7FA4\u8BED\u97F3\u97F5\u5F8B\u7684\u8BA4\u77E5\u795E\u7ECF\u79D1\u5B66\u63A2\u7A76\u3002\u5E76\u7EE7\u7EED\u4E0E\u56FD\u9645\u8457\u540D\u516C\u53F8\u5408\u4F5C\u7814\u53D1\u8BED\u97F3\u667A\u80FD\u53CA\u8A00\u8BED\u75C5\u7406\u65B9\u9762\u7684\u6280\u672F\u4EA7\u54C1\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: fsl })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u51AF\u80DC\u5229"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u5317\u4EAC\u8BED\u8A00\u5927\u5B66\u8BED\u8A00\u79D1\u5B66\u9662\u7AE0\u9EC4\u5B66\u672F\u7406\u8BBA\u7814\u7A76\u6240\u6240\u957F\u3001\u6559\u6388\u3001\u535A\u58EB\u751F\u5BFC\u5E08\uFF1B\u5317\u4EAC\u5E08\u8303\u5927\u5B66\u7279\u8058\u6559\u6388\u3001\u5929\u6D25\u5927\u5B66\u8BED\u8A00\u79D1\u5B66\u4E2D\u5FC3\u9996\u5E2D\u6559\u6388\u3001\u9999\u6E2F\u6811\u4EC1\u5927\u5B66\u4E2D\u6587\u7CFB\u5BA2\u5EA7\u6559\u6388\u3001\u9999\u6E2F\u4E2D\u6587\u5927\u5B66\u8363\u8A89\u9000\u4F11\u6559\u6388\u3002\u53D7\u4E1A\u4E8E\u5BBE\u5915\u6CD5\u5C3C\u4E9A\u5927\u5B66\u62C9\u6CE2\u592B\u6559\u6388\uFF0C\u4E13\u653B\u897F\u65B9\u8BED\u8A00\u5B66\uFF0C1995\u5E74\u83B7\u5F97\u7F8E\u56FD\u5BBE\u5915\u6CD5\u5C3C\u4E9A\u5927\u5B66\uFF08University of Pennsylvania\uFF09\u8BED\u8A00\u5B66\u7CFB\u535A\u58EB\u5B66\u4F4D\u3002\u73B0\u4EFB\u300A\u4E2D\u56FD\u8BED\u8A00\u5B66\u62A5\u300B\uFF08JCL\uFF0CSSCI\u7D22\u5F15\uFF09\u8054\u5E2D\u4E3B\u7F16\u548C\u300A\u97F5\u5F8B\u8BED\u6CD5\u7814\u7A76\u300B\u8054\u5E2D\u4E3B\u7F16\u3002\u66FE\u4EFB\u5317\u4EAC\u8BED\u8A00\u5927\u5B66\u957F\u6C5F\u5B66\u8005\u8BB2\u5EA7\u6559\u6388\uFF082005\u5E74\uFF09\u3001\u7F8E\u56FD\u582A\u8428\u65AF\u5927\u5B66\u4E1C\u4E9A\u7CFB\u526F\u6559\u6388\uFF0C\u54C8\u4F5B\u5927\u5B66\u4E1C\u4E9A\u7CFB\u6C49\u8BED\u5E94\u7528\u5B66\u79D1\u6559\u6388\u53CA\u4E2D\u6587\u90E8\u4E3B\u4EFB\u3002\u7814\u7A76\u65B9\u5411\u5305\u62EC\u4E7E\u5609\u201C\u7406\u5FC5\u201D\u4E0E\u7AE0\u9EC4\u5B66\u7406\u7814\u7A76\u3001\u8BAD\u8BC2\u5B66\u3001\u97F5\u5F8B\u8BED\u6CD5\u5B66\u3001\u8BED\u4F53\u8BED\u6CD5\u5B66\u3001\u6C49\u8BED\u5386\u65F6\u53E5\u6CD5\u5B66\u3001\u6C49\u8BED\u97F5\u5F8B\u6587\u5B66\u53F2\u53CA\u6C49\u8BED\u4E8C\u8BED\u6559\u5B66\u4E0E\u4E60\u5F97\u3002\u51FA\u7248\u4E2D\u6587\u5B66\u672F\u4E13\u845716\u90E8\uFF08\u5176\u4E2D4\u90E8\u88AB\u8BD1\u4E3A\u82F1\u6587\u3001\u97E9\u6587\u7B49\uFF09\u3001\u82F1\u6587\u5B66\u672F\u4E13\u84572\u90E8\uFF0C\u4E3B\u7F16\u5B66\u672F\u8457\u4F5C16\u90E8\uFF0C\u53D1\u8868\u4E2D\u82F1\u6587\u5B66\u672F\u8BBA\u6587200\u4F59\u7BC7\u3002")))))),
                react.createElement(row/* default */.A, { gutter: 16, className: CallForPapers.reporterRow + " " + CallForPapers.row2 },
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: grg })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u987E\u66F0\u56FD"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u83B7\u5F97\u82F1\u56FD\u5170\u5F00\u65AF\u7279\u5927\u5B66\u7855\u58EB\u3001\u535A\u58EB\u4EE5\u53CA\u8363\u8A89\u6587\u5B66\u535A\u58EB\u5B66\u4F4D\uFF0C\u73B0\u4EFB\u5317\u4EAC\u5916\u56FD\u8BED\u5927\u5B66\u4EBA\u5DE5\u667A\u80FD\u4E0E\u4EBA\u7C7B\u8BED\u8A00\u91CD\u70B9\u5B9E\u9A8C\u5BA4\u9996\u5E2D\u4E13\u5BB6\u3002\u517C\u4EFB\u4E2D\u56FD\u591A\u8BED\u8A00\u591A\u6A21\u6001\u8BED\u6599\u5E93\u66A8\u5927\u6570\u636E\u7814\u7A76\u4E2D\u5FC3\u4E3B\u4EFB\uFF0C\u8001\u5E74\u8BED\u8A00\u4E0E\u770B\u62A4\u7814\u7A76\u4E2D\u5FC3\u4E3B\u4EFB\uFF08\u540C\u6D4E\u5927\u5B66-\u793E\u79D1\u9662\u8BED\u8A00\u6240\u8054\u5408\uFF09\u3002\u4E3B\u8981\u7814\u7A76\u5174\u8DA3\u5305\u62EC\u8BED\u6599\u5E93\u8BED\u8A00\u5B66\u3001\u8BED\u7528\u5B66\u3001\u8BDD\u8BED\u5206\u6790\u3001\u82F1\u8BED\u6559\u80B2\u7B49\u3002\u4E3B\u8981\u8457\u4F5C\u6709Studies in Pragmatics and Discourse Analysis, Using the Computer in ELT: Practice and Theory, Chinese Painting\uFF0CChinese Writing, The Handbook of Pragmatics (\u4E3B\u7F16\u4E4B\u4E00)\uFF0CEncyclopedia of Language and Linguistics (15\u5377\u5957\uFF0C\u987E\u95EE\u3001\u4F5C\u8005)\uFF0CEncyclopedia of Chinese Language and Linguistics (5\u5377\u5957, \u526F\u4E3B\u7F16\uFF0C\u4F5C\u8005)\uFF0C\u300A\u8001\u5E74\u8BED\u8A00\u5B66\u4E0E\u591A\u6A21\u6001\u7814\u7A76\u300B\uFF08\u4E3B\u7F16\u3001\u4F5C\u8005\uFF09\u3002\u7F16\u5199\u82F1\u8BED\u6559\u675050\u4F59\u90E8\u3002\u66FE\u83B7\u4E94\u9879\u56FD\u5BB6\u7EA7\u9876\u5C16\u7814\u7A76\u5956\u3002\u56FD\u9645\u5B66\u672F\u517C\u804C\u6709\u82F1\u56FD\u8BFA\u5B9A\u6C49\u5927\u5B66\u7279\u8058\u6559\u6388\u3001\u5170\u5F00\u65AF\u7279\u5927\u5B66\u7279\u8058\u7814\u7A76\u5458,\u9999\u6E2F\u7406\u5DE5\u5927\u5B66\u6821\u5916\u5B66\u672F\u987E\u95EE\u3001\u6FB3\u5927\u5229\u4E9A\u897F\u6089\u5C3C\u5927\u5B66\u5916\u8058\u6559\u6388,\u5F7C\u5F97\u5927\u5E1D\u5F7C\u5F97\u5821\u7406\u5DE5\u5927\u5B66\u8BBF\u95EE\u8BB2\u4E60\u6559\u6388\u3001\u6FB3\u5927\u5229\u4E9A\u6089\u5C3C\u5927\u5B66\u6770\u51FA\u7814\u7A76\u5458\u7B49\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: hcs })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u8D3A\u5DDD\u751F"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u6E56\u5357\u5927\u5B66\u5916\u56FD\u8BED\u5B66\u9662\u6559\u6388\u3002\u7814\u7A76\u5174\u8DA3\u5305\u62EC\u53E5\u6CD5\u5B66\u3001\u8BED\u4E49\u5B66\u3001\u5386\u53F2\u8BED\u8A00\u5B66\u7B49\u3002\u5728English Language and Linguistics\u3001Journal of the Royal Asiatic Society\u3001Language and Linguistics\u3001Lingua\u3001Syntax \u3001Synthese \u3001Zeitschrift der Deutschen Morgenlandischen Gesellschaft \u3001\u300A\u5F53\u4EE3\u8BED\u8A00\u5B66\u300B\u3001\u300A\u6C11\u65CF\u8BED\u6587\u300B\u3001\u300A\u5916\u8BED\u6559\u5B66\u4E0E\u7814\u7A76\u300B\u3001\u300A\u73B0\u4EE3\u5916\u8BED\u300B\u3001\u300A\u8BED\u8A00\u6559\u5B66\u4E0E\u7814\u7A76\u300B\u3001\u300A\u4E2D\u592E\u6C11\u65CF\u5927\u5B66\u5B66\u62A5\u300B\u7B49\u56FD\u5185\u5916\u671F\u520A\u53D1\u8868\u7814\u7A76\u6027\u8BBA\u6587\uFF0C\u51FA\u7248\u4E13\u8457\u300A\u6570\u8BCD\u7684\u53E5\u6CD5\u8BED\u4E49\u754C\u9762\u7814\u7A76\u300B\uFF0C\u66FE\u83B7\u6559\u80B2\u90E8\u9AD8\u7B49\u5B66\u6821\u4EBA\u6587\u793E\u4F1A\u79D1\u5B66\u4F18\u79C0\u6210\u679C\u5956\u4E8C\u7B49\u5956\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: kjp })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u5B54\u6C5F\u5E73"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u5317\u4EAC\u5927\u5B66\u4E2D\u6587\u7CFB\u6559\u6388\uFF0C\u535A\u5BFC\uFF0C\u6559\u80B2\u90E8\u201C\u5317\u4EAC\u5927\u5B66\u8BED\u8A00\u5B66\u5B9E\u9A8C\u5BA4\u201D\u4E3B\u4EFB\uFF0C\u4E2D\u56FD\u8BED\u8A00\u5B66\u4F1A\u8BED\u97F3\u5B66\u5206\u4F1A\u4E3B\u4EFB\u3002\u66FE\u4E3B\u6301\u4E2D\u56FD\u793E\u4F1A\u79D1\u5B66\u57FA\u91D1\u91CD\u5927\u62DB\u6807\u9879\u76EE\u201C\u4E2D\u56FD\u6709\u58F0\u8BED\u8A00\u548C\u53E3\u4F20\u6587\u5316\u4FDD\u62A4\u4E0E\u4F20\u627F\u7684\u6570\u5B57\u5316\u65B9\u6CD5\u53CA\u5176\u7406\u8BBA\u7814\u7A76\u201D\uFF1B\u73B0\u4E3B\u6301\u4E2D\u56FD\u793E\u4F1A\u79D1\u5B66\u57FA\u91D1\u91CD\u5927\u62DB\u6807\u9879\u76EE\u201C\u4E2D\u534E\u6C11\u65CF\u8BED\u8A00\u6587\u5B57\u63A5\u89E6\u4EA4\u878D\u7814\u7A76\u201D\u3002\u4E3B\u8981\u7814\u7A76\u9886\u57DF\uFF1A\u4E2D\u534E\u6C11\u65CF\u8BED\u8A00\u6587\u5B57\u5171\u540C\u4F53\u7684\u5F62\u6210\u548C\u6784\u6210\uFF0C\u4E2D\u534E\u4F20\u7EDF\u6709\u58F0\u6587\u5316\u7684\u58F0\u5B66\u3001\u8BED\u97F3\u751F\u7406\u548C\u8BA4\u77E5\u7814\u7A76\uFF0C\u4E2D\u56FD\u5883\u5185\u8BED\u8A00\u7684\u8BED\u97F3\u5B66\u53CA\u55D3\u97F3\u53D1\u58F0\u7C7B\u578B\u7814\u7A76\u3001\u6C49\u8BED\u666E\u901A\u8BDD\u53D1\u97F3\u751F\u7406\u6A21\u578B\u7814\u7A76\u3001\u8BA4\u77E5\u97F3\u4F4D\u5B66\u7814\u7A76\u3001\u97F3\u4F4D\u8D1F\u62C5\u91CF\u53CA\u8BED\u97F3\u4FE1\u606F\u7814\u7A76\u7B49\u3002\u6709\u300A\u8BBA\u8BED\u8A00\u53D1\u58F0\u300B\u3001\u300ALaryngeal Dynamics and Physiological Model\u300B\u3001\u300A\u5B9E\u9A8C\u8BED\u97F3\u5B66\u57FA\u7840\u6559\u7A0B\u300B\u3001\u300A\u73B0\u4EE3\u6C49\u8BED\u97F3\u5178\u300B\uFF08\u5408\u8457\uFF09\u3001\u300A\u738B\u58EB\u5143\u5148\u751F\u53E3\u8FF0\u53F2\u300B\uFF08\u5408\u7F16\uFF09\u7B49\u8457\u4F5C\uFF0C\u62E5\u6709\u300A\u8BED\u97F3\u5B66\u57FA\u7840\u5206\u6790\u7CFB\u7EDF\u300B\u7B49\u5341\u591A\u9879\u8F6F\u4EF6\u7684\u8457\u4F5C\u6743\u3002")))))),
                react.createElement(row/* default */.A, { gutter: 16, className: CallForPapers.reporterRow + " " + CallForPapers.row3 },
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: pwy })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u6F58\u609F\u4E91"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u4E0A\u6D77\u5E08\u8303\u5927\u5B66\u6559\u6388\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\uFF0C\u4E0A\u6D77\u9AD8\u6821\u6BD4\u8F83\u8BED\u8A00\u5B66E-\u7814\u7A76\u9662\u9996\u5E2D\u7814\u7A76\u5458\uFF0C\u590D\u65E6\u5927\u5B66\u6770\u51FA\u8BBF\u95EE\u5B66\u8005\uFF0C\u590D\u65E6\u5927\u5B66\u4E1C\u4E9A\u8BED\u8A00\u6570\u636E\u7814\u7A76\u6240\u8D1F\u8D23\u4EBA\u3002\u66FE\u4EFB\u4E0A\u6D77\u793E\u8054\u526F\u4E3B\u5E2D\u3001\u4E0A\u6D77\u793E\u8054\u8BED\u8A00\u7814\u7A76\u4E2D\u5FC3\u4E3B\u4EFB\uFF1B\u201C21\u4E16\u7EAA\u4E2D\u56FD\u8BED\u8A00\u4E0E\u65B9\u8A00\u6570\u636E\u5E93\u201D\u6267\u884C\u7EC4\u7684\u5927\u9646\u53EC\u96C6\u4EBA\u3002\u4EFB\u300A\u8BED\u8A00\u7814\u7A76\u300B\u7F16\u59D4\uFF0C\u300A\u8BED\u8A00\u79D1\u5B66\u300B\u7F16\u59D4\uFF0C\u300A\u6C11\u65CF\u8BED\u6587\u300B\u7F16\u59D4\uFF0C\u300A\u4E2D\u56FD\u8BED\u6587\u300B\u7F16\u59D4\uFF0C\u300A\u4E1C\u65B9\u8BED\u8A00\u5B66\u300B\u4E3B\u7F16\u7B49\u3002\u4E3B\u6301\u591A\u9879\u56FD\u5BB6\u90E8\u9879\u76EE\u3002\u7814\u7A76\u65B9\u5411\u4E3A\u8BED\u8A00\u4EBA\u7C7B\u5B66\uFF0C\u8BA1\u7B97\u8BED\u8A00\u5B66\uFF0C\u8BED\u8A00\u6F14\u5316\uFF0C\u5386\u53F2\u8BED\u8A00\u5B66\uFF0C\u6C49\u8BED\u97F3\u97F5\u5B66\u3002\u7814\u7A76\u65B9\u5411\u7740\u91CD\u5173\u6CE8\u4E1C\u4E9A\u8BED\u8A00\u5386\u53F2\u3001\u6587\u5316\u4F20\u64AD\u548C\u4EBA\u7FA4\u8FC1\u79FB\uFF1B\u6C49\u8BED\u53F2\u4E0E\u4E1C\u4E9A\u8BED\u8A00\u5386\u53F2\u6BD4\u8F83\uFF08\u5C24\u5176\u662F\u4E0A\u53E4\u6C49\u8BED\u7684\u7814\u7A76\uFF09\uFF1B\u6C49\u8BED\u65B9\u8A00\u5B66\u4E0E\u5386\u53F2\u5C42\u6B21\u5206\u6790\u6CD5\uFF1B\u8BED\u8A00\u7CFB\u7EDF\u4E2D\u97F3\u7C7B\u7684\u81EA\u7EC4\u7EC7\u73B0\u8C61\uFF1B\u8BED\u6599\u5E93\u8BA1\u7B97\u673A\u5904\u7406\u7B49\u3002\u76EE\u524D\u4E3B\u8981\u5DE5\u4F5C\u662F\u8BED\u8A00\u6F14\u5316\u4E0E\u4E1C\u4E9A\u8BED\u8A00\u7684\u5173\u7CFB\u8BED\u7D20\u5206\u6790\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: sf })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u77F3\u950B"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u5357\u5F00\u5927\u5B66\u8BED\u8A00\u6240\u540D\u8A89\u6240\u957F\u3002\u300A\u5357\u5F00\u8BED\u8A00\u5B66\u520A\u300B\u548CExperimental Linguistics (\u300A\u5B9E\u9A8C\u8BED\u8A00\u5B66\u300B)\u540D\u8A89\u4E3B\u7F16, Journal of Chinese Linguistics(\u300A\u4E2D\u56FD\u8BED\u8A00\u5B66\u62A5\u300B)\u526F\u4E3B\u7F16\uFF0CLINGUA\u7F16\u59D4\u3002\u56FD\u9645\u4E2D\u56FD\u8BED\u8A00\u5B66\u4F1A\u4F1A\u957F\u3002\u6559\u80B2\u90E8\u56FD\u5BB6\u666E\u901A\u8BDD\u5BA1\u97F3\u59D4\u5458\u4F1A\u59D4\u5458\u3002\u4E16\u754C\u6C49\u8BED\u6559\u5B66\u5B66\u4F1A\u5B66\u672F\u6307\u5BFC\u59D4\u5458\u4F1A\u59D4\u5458\u3002\u7814\u7A76\u9886\u57DF\u4E3A\u5B9E\u9A8C\u8BED\u8A00\u5B66\u3001\u8BED\u8A00\u6F14\u5316\u3001\u8BED\u8A00\u63A5\u89E6\u4E0E\u8BED\u8A00\u4E60\u5F97\u3002\u8BBA\u8457\u6216\u7F16\u8457\u300A\u8BED\u97F3\u683C\u5C40\u300B\u300A\u8BED\u8C03\u683C\u5C40\u300B\u300A\u542C\u611F\u683C\u5C40\u300B\u300A\u97F5\u5F8B\u683C\u5C40\u300B\u300A\u79CB\u53F6\u96C6\u300B\u300A\u94F6\u9F84\u96C6\u300B\u7B4920\u4F59\u79CD\u3002\u51FA\u7248\u8BD1\u84575\u90E8\u3002\u5728\u56FD\u5185\u5916\u53D1\u8868\u8BBA\u6587260\u4F59\u7BC7\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: dhy })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u6234\u6D69\u4E00"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u53F0\u6E7E\u9E7F\u6E2F\u4EBA\u3002\u56FD\u7ACB\u53F0\u6E7E\u5927\u5B66\u5916\u56FD\u8BED\u6587\u5B66\u7CFB\u5B66\u58EB\uFF081964\uFF09\uFF0C\u7F8E\u56FD\u5370\u5730\u5B89\u90A3\u5927\u5B66\uFF08Indiana University\uFF09\u8BED\u8A00\u5B66\u535A\u58EB\uFF081970\uFF09\u3002\u5728\u7F8E\u56FD\u5357\u4F0A\u5229\u8BFA\u4F0A\u5927\u5B66\uFF08Southern Illinois University\uFF09\u53CA\u4FC4\u4EA5\u4FC4\u5DDE\u7ACB\u5927\u5B66\uFF08Ohio State University\uFF09\u4EFB\u6559\u957F\u8FBE25\u5E74\uFF081970-1995\uFF09\u30021995\u5E74\u53D7\u9080\u8FD4\u53F0\u521B\u8BBE\u56FD\u7ACB\u4E2D\u6B63\u5927\u5B66\u8BED\u8A00\u5B66\u7814\u7A76\u6240\u5E76\u62C5\u4EFB\u7B2C\u4E00\u4EFB\u53CA\u7B2C\u4E8C\u4EFB\u6240\u957F\uFF0C\u5386\u4EFB\u6587\u5B66\u9662\u9662\u957F\uFF081998-2002\uFF09\u3001\u526F\u6821\u957F\uFF082009\uFF09\u3002\u5176\u95F4\u66FE\u501F\u8C03\u56FD\u79D1\u4F1A\u62C5\u4EFB\u4EBA\u6587\u53CA\u793E\u4F1A\u79D1\u5B66\u53D1\u5C55\u5904\u5904\u957F\uFF082002-2005\uFF09\u30022004\u5E74\u83B7\u9009\u4E3A\u56FD\u9645\u4E2D\u56FD\u8BED\u8A00\u5B66\u4F1A\uFF08IACL\uFF09\u4F1A\u957F\uFF0C2010\u5E74\u83B7\u9881\u53F0\u6E7E\u8BED\u8A00\u5B66\u5B66\u4F1A\u300C\u7EC8\u8EAB\u6210\u5C31\u5956\u300D\uFF0C2020\u5E74\u83B7\u9009\u4E3A\u7F8E\u56FD\u5370\u7B2C\u5B89\u90A3\u5927\u5B66\uFF08\u5EFA\u6821200\u5E74\uFF09\u8BED\u8A00\u5B66\u7CFB\u6770\u51FA\u6821\u53CB\u3002")))))),
                react.createElement(row/* default */.A, { gutter: 16, className: CallForPapers.reporterRow + " " + CallForPapers.row4 },
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: zzl })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u66FE\u5FD7\u6717"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "Professor Ovid Tzeng is Academician of Academia Sinica in Taiwan, an outstanding researcher in Cognitive Neuroscience and Neurolinguistics and an experienced leader in academic institutions. He was the chancellor of University System of Taiwan, the Minister of Education, the Minister Without Portfolio, and the Minister of Council for Cultural Affairs. He serves as a member of the Board of Directors of Haskins Laboratories in the U.S. and an advisory board member of the ARC Centre of Excellence in Cognition and its Disorders in Australia. He has also been elected to be the academician of The World Academy of Sciences (TWAS) since 2010 and active member of The European Academy of Sciences and Arts since 2017. He had been the Chancellor of University System of Taiwan for several years, which was created by him and established to oversee and integrate the research and teaching developments of Taiwan\u2019s four top research universities. Prior to the Chancellorship, he was the Vice President of Academia Sinica for international affairs. He is currently an Executive member of the Committee on Human Rights of the NAS, NAE, and NAM, as well as a member of the UNESCO\u2019s Inclusive Literacy Learning for All Project."))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: wsy })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u738B\u58EB\u5143"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "1933\u5E74\u51FA\u751F\u4E8E\u4E0A\u6D77\u5E02\uFF0C\u7956\u7C4D\u5B89\u5FBD\u7701\u6000\u8FDC\u53BF\uFF0C\u8BED\u8A00\u5B66\u5BB6\uFF0C\u9999\u6E2F\u7406\u5DE5\u5927\u5B66\u8BED\u8A00\u53CA\u8BA4\u77E5\u79D1\u5B66\u8BB2\u5EA7\u6559\u6388\uFF0C\u53F0\u6E7E\u201C\u4E2D\u201D\u7814\u7A76\u9662\u9662\u58EB\u3002\u738B\u58EB\u5143\u4E8E1960\u5E74\u83B7\u5F97\u5BC6\u897F\u6839\u5927\u5B66\u535A\u58EB\u5B66\u4F4D\uFF0C\u5176\u540E\u5728IBM\u7814\u7A76\u4E2D\u5FC3\uFF08\u7EA6\u514B\u57CE\u9AD8\u5730\uFF09\u548C\u9EBB\u7701\u7406\u5DE5\u5B66\u9662\u7684\u7535\u5B50\u7814\u7A76\u5B9E\u9A8C\u5BA4\u8FDB\u884C\u81EA\u7136\u8BED\u8A00\u5904\u7406\u7684\u65E9\u671F\u7814\u7A76\uFF1B1963\u5E74\u20141965\u5E74\u4EFB\u4FC4\u4EA5\u4FC4\u5DDE\u7ACB\u5927\u5B66\u8BED\u8A00\u5B66\u7CFB\u53CA\u4E1C\u4E9A\u8BED\u6587\u5B66\u7CFB\u4E3B\u4EFB\uFF1B1966\u5E74\u20141994\u5E74\u4EFB\u52A0\u5229\u798F\u5C3C\u4E9A\u5927\u5B66\u4F2F\u514B\u5229\u5206\u6821\u8BED\u8A00\u5B66\u6559\u6388\uFF1B1995\u5E74\u20142004\u5E74\u4EFB\u9999\u6E2F\u57CE\u5E02\u5927\u5B66\u8BED\u8A00\u5DE5\u7A0B\u8BB2\u5EA7\u6559\u6388\uFF1B2004\u5E74\u20142015\u5E74\u4EFB\u9999\u6E2F\u4E2D\u6587\u5927\u5B66\u7535\u5B50\u5DE5\u7A0B\u5B66\u7CFB\u7814\u7A76\u6559\u6388\uFF1B2015\u5E74\u4EFB\u9999\u6E2F\u7406\u5DE5\u5927\u5B66\u8BED\u8A00\u53CA\u8BA4\u77E5\u79D1\u5B66\u8BB2\u5EA7\u6559\u6388\u3002\u738B\u58EB\u5143\u7684\u7814\u7A76\u8303\u7574\u5305\u62EC\u8BED\u97F3\u5B66\u53CA\u97F3\u97F5\u5B66\u3001\u81EA\u52A8\u8BED\u97F3\u8FA8\u8BC6\uFF0C\u4EE5\u53CA\u8BED\u8A00\u4E0E\u8BA4\u77E5\u80FD\u529B\u7684\u751F\u7269\u53CA\u6F14\u5316\u57FA\u7840\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: yym })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u6768\u4EA6\u9E23"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u6559\u80B2\u90E8\u201C\u957F\u6C5F\u5B66\u8005\u201D\u7279\u8058\u6559\u6388\uFF0C\u56FD\u5BB6\u201C\u4E07\u4EBA\u8BA1\u5212\u201D\u6559\u5B66\u540D\u5E08\uFF0C\u5168\u56FD\u9AD8\u6821\u9EC4\u5927\u5E74\u5F0F\u6559\u5E08\u56E2\u961F\u5E26\u5934\u4EBA\uFF0C\u4EAB\u53D7\u56FD\u52A1\u9662\u653F\u5E9C\u7279\u6B8A\u6D25\u8D34\u4E13\u5BB6\uFF0C\u6C5F\u82CF\u7701\u793E\u79D1\u540D\u5BB6\uFF0C\u6C5F\u82CF\u7701\u201C\u9996\u5E2D\u4E2D\u9752\u5E74\u79D1\u5B66\u5BB6\u201D\uFF08\u6C5F\u82CF\u7701\u201C333 \u5DE5\u7A0B\u201D\u7B2C\u4E00\u5C42\u6B21\uFF09\uFF0C\u6C5F\u82CF\u7701\u201C\u5341\u4F73\u7814\u7A76\u751F\u5BFC\u5E08\u56E2\u961F\u201D\u5E26\u5934\u4EBA\uFF0C\u535A\u58EB\u751F\u5BFC\u5E08\u3001\u535A\u58EB\u540E\u8054\u7CFB\u5BFC\u5E08\u3002\u73B0\u4E3A\u6C5F\u82CF\u5E08\u8303\u5927\u5B66\u6821\u5B66\u672F\u59D4\u5458\u4F1A\u4E3B\u4EFB\u59D4\u5458\uFF0C\u56FD\u5BB62011\u8BA1\u5212\u8BED\u8A00\u80FD\u529B\u90E8\u7701\u5171\u5EFA\u534F\u540C\u521B\u65B0\u4E2D\u5FC3\u4E3B\u4EFB\uFF0C\u8BED\u8A00\u79D1\u5B66\u4E0E\u827A\u672F\u56FD\u5BB6\u7EA7\u5B9E\u9A8C\u6559\u5B66\u793A\u8303\u4E2D\u5FC3\u4E3B\u4EFB\uFF0C\u56FD\u5BB6\u8BED\u59D4\u8BED\u8A00\u80FD\u529B\u9AD8\u7B49\u7814\u7A76\u9662\u9662\u957F\uFF0C\u300A\u8BED\u8A00\u79D1\u5B66\u300B\u4E3B\u7F16\u7B49\u3002\u66FE\u4EFB\u6C5F\u82CF\u5E08\u8303\u5927\u5B66\u526F\u6821\u957F\u3002\u4E3B\u8981\u5B66\u672F\u517C\u804C\u4E3A\u56FD\u5BB6\u54F2\u5B66\u793E\u4F1A\u79D1\u5B66\u57FA\u91D1\u548C\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u4F1A\u8BC4\u4E13\u5BB6\uFF0C\u79D1\u6280\u90E8\u79D1\u6280\u521B\u65B02030\u2014\u201C\u8111\u79D1\u5B66\u4E0E\u7C7B\u8111\u7814\u7A76\u201D\u91CD\u5927\u9879\u76EE\u8BC4\u5BA1\u4E13\u5BB6\uFF0C\u6559\u80B2\u90E8\u91CD\u70B9\u5B9E\u9A8C\u5BA4\uFF08\u4EA4\u53C9\u9886\u57DF\u7C7B\uFF09\u9A8C\u6536\u8003\u6838\u7EC4\u7EC4\u957F\u3001\u4E2D\u56FD\u8BED\u8A00\u5B66\u4F1A\u5E38\u52A1\u7406\u4E8B\u3001 \u4E2D\u56FD\u8BED\u6587\u73B0\u4EE3\u5316\u5B66\u4F1A\u526F\u4F1A\u957F\u7B49\u3002\u7814\u7A76\u5174\u8DA3\u4E3A\u795E\u7ECF\u8BED\u8A00\u5B66\u3001\u7406\u8BBA\u8BED\u8A00\u5B66\u7B49\uFF0C\u4E3B\u6301\u56FD\u5BB6\u793E\u79D1\u57FA\u91D1\u91CD\u5927\u59D4\u6258\u9879\u76EE\u3001\u91CD\u5927\u9879\u76EE3\u9879\uFF0C\u56FD\u5BB6973\u8BA1\u5212\u8BFE\u9898\u3001\u56FD\u5BB6\u793E\u79D1\u57FA\u91D1\u91CD\u70B9\u9879\u76EE\u3001\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u9879\u76EE\u7B49\u591A\u9879\u3002\u5148\u540E\u5728PNAS\u3001Brain\u3001Cognition\u3001\u300A\u4E2D\u56FD\u793E\u4F1A\u79D1\u5B66\u300B\u3001\u300A\u4E2D\u56FD\u79D1\u5B66\u300B\u3001\u300A\u4E2D\u56FD\u8BED\u6587\u300B\u7B49\u520A\u7269\u53D1\u8868\u8BBA\u6587\u4E24\u767E\u4F59\u7BC7\uFF0C\u51FA\u7248\u8457\u4F5C10\u4F59\u90E8\u3002\u66FE\u83B7\u56FD\u5BB6\u7EA7\u6559\u5B66\u6210\u679C\u5956\u4E00\u7B49\u5956\u3001\u6559\u80B2\u90E8\u9AD8\u7B49\u5B66\u6821\u4EBA\u6587\u793E\u4F1A\u79D1\u5B66\u4F18\u79C0\u6210\u679C\u5956\u4E00\u7B49\u5956\u7B49\u3002")))))),
                react.createElement(row/* default */.A, { gutter: 16, className: CallForPapers.reporterRow + " " + CallForPapers.row5 },
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: yjh })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u8881\u5BB6\u5B8F"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u4E2D\u56FD\u79D1\u5B66\u6280\u672F\u5927\u5B66\u4EBA\u6587\u4E0E\u793E\u4F1A\u79D1\u5B66\u5B66\u9662\u6559\u6388\u30022004\u5E74\u83B7\u5F97\u5EB7\u4E43\u5C14\u5927\u5B66\u8BED\u8A00\u5B66\u535A\u58EB\u5B66\u4F4D\u3002\u66FE\u4EFB\u804C\u4E8E\u5BBE\u5915\u6CD5\u5C3C\u4E9A\u5927\u5B66\u8BED\u8A00\u5B66\u7CFB\u548C\u8BED\u8A00\u8D44\u6E90\u8054\u76DF\u3001\u6D41\u5229\u8BF4\u7845\u8C37\u4EBA\u5DE5\u667A\u80FD\u5B9E\u9A8C\u5BA4\u3001\u767E\u5EA6\u7F8E\u56FD\u7814\u7A76\u9662\u3002\u4E3B\u8981\u7814\u7A76\u65B9\u5411\u5305\u62EC\u5927\u6570\u636E\u8BED\u97F3\u5B66\u3001\u8BED\u8A00\u5B66\u548C\u4EBA\u5DE5\u667A\u80FD\u7684\u878D\u5408\u3002\u66FE\u4E3B\u6301\u6216\u5408\u4F5C\u4E3B\u6301\u7F8E\u56FD\u56FD\u5BB6\u79D1\u5B66\u57FA\u91D1\u4F1A\u3001\u82F1\u56FD\u7ECF\u6D4E\u4E0E\u793E\u4F1A\u7814\u7A76\u7406\u4E8B\u4F1A\u3001\u9999\u6E2F\u7814\u7A76\u8D44\u52A9\u5C40\u7B49\u8D44\u52A9\u7684\u591A\u9879\u79D1\u7814\u9879\u76EE\u3002\u76EE\u524D\u7684\u7814\u7A76\u4E3B\u8981\u96C6\u4E2D\u5728\u57FA\u4E8E\u53E3\u8BED\u6570\u636E\u7684\u963F\u5C14\u8328\u6D77\u9ED8\u75C5\u65E9\u671F\u8BC6\u522B\u548C\u9884\u6D4B\u3001\u548C\u57FA\u4E8E\u6DF1\u5EA6\u5B66\u4E60\u7684\u8BED\u97F3\u5206\u6790\u65B9\u6CD5\uFF0C\u5728\u7814\u9879\u76EE\u5305\u62EC\u201C\u793E\u4F1A\u8BED\u8A00\u5B66\u3001\u75C5\u7406\u8BED\u8A00\u5B66\u548C\u4EBA\u5DE5\u667A\u80FD\u4E09\u91CD\u89C6\u89D2\u4E0B\u57FA\u4E8E\u8BED\u8A00\u53D8\u5316\u7684AD\u8BED\u8A00\u751F\u7269\u6807\u5FD7\u7269\u7814\u7A76\u201D\u548C\u201C\u751F\u7269\u8BED\u8A00\u5B66\u89C6\u89D2\u4E0B\u591A\u5B66\u79D1\u4EA4\u53C9\u6C49\u8BED\u58F0\u8C03\u7814\u7A76\u201D\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: zmh })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u5F20\u68A6\u7FF0"),
                                        "\u7814\u7A76\u5458"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u535A\u58EB\uFF0C\u590D\u65E6\u5927\u5B66\u73B0\u4EE3\u8BED\u8A00\u5B66\u7814\u7A76\u9662\u7814\u7A76\u5458\uFF0C\u751F\u7269\u5B66\u535A\u58EB\u751F\u5BFC\u5E08\uFF0C\u667A\u80FD\u590D\u6742\u4F53\u7CFB\u57FA\u7840\u7406\u8BBA\u4E0E\u5173\u952E\u6280\u672F\u5B9E\u9A8C\u5BA4\u526F\u4E3B\u4EFB\uFF1B\u590D\u65E6\u5927\u5B66\u751F\u547D\u79D1\u5B66\u5B66\u9662\u548C\u4EBA\u7C7B\u8868\u578B\u7EC4\u7814\u7A76\u9662PI\uFF08\u53CC\u8058\uFF09\u3002\u8363\u83B7\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u59D4\u4F18\u79C0\u9752\u5E74\u57FA\u91D1\uFF082021\u5E74\uFF09\uFF0C\u5165\u9009\u4E0A\u6D77\u5E02\u66D9\u5149\u5B66\u8005\uFF082020\u5E74\uFF09\uFF0C\u4E0A\u6D77\u5E02\u201C\u793E\u79D1\u65B0\u4EBA\u201D\uFF082019\u5E74\uFF09\u3002\u4E0A\u6D77\u5E02\u4EBA\u7C7B\u5B66\u5B66\u4F1A\u7406\u4E8B\u3001\u4E2D\u56FD\u6C11\u65CF\u8BED\u8A00\u5B66\u4F1A\u4F1A\u5458\u3002\u4E3B\u8981\u4ECE\u4E8B\u8BED\u8A00\u6F14\u5316\u3001\u8BED\u8A00-\u9057\u4F20-\u6587\u5316\u5171\u6F14\u5316\u673A\u5236\u7814\u7A76\u3002\u5148\u540E\u627F\u62C5\u591A\u4E2A\u56FD\u5BB6\u81EA\u7136\u79D1\u5B66\u57FA\u91D1\u3001\u56FD\u5BB6\u793E\u79D1\u91CD\u5927\u9879\u76EE\u5B50\u8BFE\u9898\u3001\u6B27\u76DF\u5148\u8FDB\u7814\u7A76\u7406\u4E8B\u4F1A\u201C\u5730\u5E73\u7EBF\u201D\u9879\u76EE\u5B50\u8BFE\u9898\u7B49\u9879\u76EE\uFF0C\u4E3A\u56FD\u5BB6\u793E\u79D1\u57FA\u91D1\u51B7\u95E8\u7EDD\u5B66\u7814\u7A76\u4E13\u9879\u5B66\u672F\u56E2\u961F\u6838\u5FC3\u6210\u5458\u3002\u4EE5\u7B2C\u4E00\u4F5C\u8005\u6216\u901A\u8BAF\u4F5C\u8005\u5728Nature\u3001Nature Communications\u3001Nature Human Behaviour\u3001PNAS\u3001National Science Review\u3001Proceedings B\u7B49\u56FD\u5185\u5916\u671F\u520A\u4E0A\u53D1\u8868\u8BBA\u6587\u4E09\u5341\u4F59\u7BC7\uFF0C\u7533\u8BF7\u4E86\u591A\u9879\u56FD\u5BB6\u4E13\u5229\uFF08\u83B7\u62795\u9879\uFF09\uFF0C\u8363\u83B7\u4E0A\u6D77\u5E02\u7B2C\u5341\u4E94\u5C4A\u54F2\u5B66\u793E\u4F1A\u79D1\u5B66\u4F18\u79C0\u6210\u679C\u5956\uFF08\u5B66\u79D1\u5B66\u672F\u4F18\u79C0\u6210\u679C\u8BBA\u6587\u7C7B\u4E8C\u7B49\u5956\uFF09\uFF0C\u4E0A\u6D77\u4F18\u79C0\u535A\u58EB\u8BBA\u6587\u3002"))))),
                    react.createElement(col/* default */.A, { span: 8 },
                        react.createElement(card/* default */.A, { bordered: false, className: CallForPapers.card },
                            react.createElement("div", { className: CallForPapers.box },
                                react.createElement("div", { className: CallForPapers.imgDiv },
                                    react.createElement("img", { src: zy })),
                                react.createElement("div", { className: CallForPapers.botDiv },
                                    react.createElement("div", { className: CallForPapers.name },
                                        react.createElement("span", { className: CallForPapers.left }, "\u5F20\u626C"),
                                        "\u6559\u6388"),
                                    react.createElement("div", { className: CallForPapers.desc }, "\u7F8E\u56FD\u660E\u5C3C\u82CF\u8FBE\u5927\u5B66\u8A00\u8BED\u2014\u8BED\u8A00\u2014\u542C\u529B\u79D1\u5B66\u7CFB\u6559\u6388\uFF0C\u7814\u7A76\u9886\u57DF\u5305\u62EC\uFF1A\u8A00\u8BED\u611F\u77E5\u4E0E\u4EA7\u51FA\uFF0C\u53D1\u5C55\u5FC3\u7406\u5B66\u4EE5\u53CA\u8A00\u8BED\u4EA4\u6D41\u7684\u795E\u7ECF\u57FA\u7840\u3002\u4ED6\u540C\u65F6\u62C5\u4EFB\u78C1\u5171\u632F\u7814\u7A76\u4E2D\u5FC3\u3001\u795E\u7ECF\u884C\u4E3A\u53D1\u5C55\u4E2D\u5FC3\u548C\u5E94\u7528\u4E0E\u8F6C\u5316\u611F\u89C9\u79D1\u5B66\u4E2D\u5FC3\u7684\u9996\u5E2D\u7814\u7A76\u5458\u3002\u4ED6\u76EE\u524D\u62C5\u4EFB\u671F\u520ADevelopmental Science\u526F\u4E3B\u7F16\u3001Brain Sciences\u90E8\u95E8\u4E3B\u7F16\uFF0C\u5E76\u5728\u591A\u4E2A\u5176\u4ED6\u671F\u520A\u7684\u7F16\u8F91\u59D4\u5458\u4F1A\u4EFB\u804C\u3002"))))))),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u516D\u3001\u4F1A\u8BAE\u7EC4\u7EC7"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "\uFF081\uFF09\u7814\u8BA8\u4F1A\u540D\u8A89\u4E3B\u5E2D\uFF1A\u738B\u58EB\u5143"),
                react.createElement("li", null, "\uFF082\uFF09\u4E3B\u5E2D\u56E2\uFF1A\u9648\u98DE\u3001\u5F6D\u521A\u3001\u8C2D\u529B\u6D77"),
                react.createElement("li", null, "\uFF083\uFF09\u7535\u5B50\u90AE\u7BB1\uFF1Aciel15hnu@gmail.com"),
                react.createElement("li", null, "\uFF084\uFF09\u4F1A\u8BAE\u4E3B\u9875\uFF1Ahttp://www.ciel-15.com")),
            react.createElement("div", { className: CallForPapers.listTitle }, "VI.\tConference Organization"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "1.\tHonorary Chair: WANG S-Y.William"),
                react.createElement("li", null, "2.\tOrganizing Committee: CHEN Fei, PENG Gang, TAN Lihai"),
                react.createElement("li", null, "3.\tEmail: ciel15hnu@gmail.com"),
                react.createElement("li", null, "4.\tConference Website: http://www.ciel-15.com")),
            react.createElement("p", null, "\u6709\u5173\u672C\u6B21\u4F1A\u8BAE\u7684\u6700\u65B0\u4FE1\u606F\u8FD8\u5C06\u5728\u6E56\u5357\u5927\u5B66\u5916\u56FD\u8BED\u5B66\u9662\u7F51\u7AD9(http://english.hnu.edu.cn/)\uFF0C\u7B2C\u5341\u4E94\u5C4A\u6F14\u5316\u8BED\u8A00\u5B66\u56FD\u9645\u7814\u8BA8\u4F1A\u7F51\u7AD9 (http://www.ciel-15.com)\uFF0C\u4EE5\u53CA\u3010\u8BED\u8A00\u8BA4\u77E5\u4E0E\u5065\u5EB7\u3011\u5FAE\u4FE1\u516C\u4F17\u53F7\u4E0A\u520A\u51FA\uFF0C\u656C\u8BF7\u5173\u6CE8\u3002"),
            react.createElement("p", null, "Information about this conference will also be available on the School of Foreign Languages at Hunan University website (http://english.hnu.edu.cn/), the 15th International Conference in Evolutionary Linguistics (CIEL-15) official website (http://www.ciel-15.com), and the WeChat public account\u3010\u8BED\u8A00\u8BA4\u77E5\u4E0E\u5065\u5EB7\u3011. Please stay updated by checking these platforms."),
            react.createElement("p", { className: CallForPapers.mt60 }),
            react.createElement("p", { className: CallForPapers.mainTitle }, "(CIEL-15)\u4E00\u53F7\u901A\u77E5"),
            react.createElement("p", { className: CallForPapers.mainTitle }, "(CIEL-15)Notice No.1"),
            react.createElement("p", { className: CallForPapers.mb60 }),
            react.createElement("p", null, "\u7B2C\u5341\u4E94\u5C4A\u6F14\u5316\u8BED\u8A00\u5B66\u56FD\u9645\u7814\u8BA8\u4F1A\uFF08CIEL-15\uFF09\u5C06\u4E8E2024\u5E747\u670812\u65E5\u81F314\u65E5\u5728\u6E56\u5357\u5927\u5B66\u4E3E\u884C\uFF0C\u7531\u6E56\u5357\u5927\u5B66\u5916\u56FD\u8BED\u5B66\u9662\u4E3B\u529E\uFF0C\u6DF1\u5733\u5E02\u795E\u7ECF\u79D1\u5B66\u7814\u7A76\u9662\u534F\u529E\u3002"),
            react.createElement("p", null, "The 15th International Conference in Evolutionary Linguistics (CIEL-15) will be held during July 12-14, 2024 at Hunan University. CIEL-15 will be held by School of Foreign Languages, Hunan University, and co-organized by the Shenzhen Institute of Neuroscience."),
            react.createElement("p", null, "\u4F1A\u8BAE\u5C06\u9080\u8BF7\u56FD\u5185\u5916\u76F8\u5173\u9886\u57DF\u6709\u4EE3\u8868\u6027\u548C\u5F71\u54CD\u529B\u7684\u5B66\u8005\u505A\u5927\u4F1A\u7684\u4E3B\u9898\u62A5\u544A\u3002\u4ECA\u606D\u9080\u5404\u4F4D\u5B66\u8005\u540C\u9053\u62D4\u5197\u53C2\u4F1A\uFF0C\u5E76\u656C\u8BF7\u4E8E2024\u5E745\u67081\u65E5\u524D\u5C06\u53C2\u4F1A\u8BBA\u6587\u9898\u76EE\u53CA\u6458\u8981\uFF08\u7EA6400\u2014800\u5B57\uFF09\u4EE5word\u683C\u5F0F\u53D1\u9001\u81F3ciel15hnu@gmail.com\u3002\u4F1A\u8BAE\u6B63\u5F0F\u9080\u8BF7\u51FD\u5C06\u4E8E2024\u5E745\u670831\u65E5\u524D\u53D1\u51FA\u3002\u7814\u8BA8\u4F1A\u5B66\u672F\u8BED\u8A00\u4E3A\u6C49\u8BED\u666E\u901A\u8BDD\u548C\u82F1\u8BED\u3002"),
            react.createElement("p", null, "CIEL-15 will invite scholars of representative and influential figures in the relevant fields from both domestic and international arenas to deliver keynote speeches. We cordially invite all scholars to attend, and kindly request that the titles and abstracts (approximately 400-800 words) of the papers to be presented at the conference be submitted in Word format to ciel15hnu@gmail.com by May 1, 2024. The official invitation letter will be issued before May 31, 2024. The working languages of CIEL-15 are Mandarin and English."),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u4F1A\u8BAE\u8BAE\u9898"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "\uFF081\uFF09\u6C49\u8BED\u53CA\u5176\u4ED6\u8BED\u8A00\u7684\u7956\u5148\uFF1B"),
                react.createElement("li", null, "\uFF082\uFF09\u5178\u578B\u548C\u975E\u5178\u578B\u4EBA\u7FA4\u7684\u8BED\u8A00\u53D1\u5C55;"),
                react.createElement("li", null, "\uFF083\uFF09\u8001\u9F84\u5316\u4E0E\u8BED\u8A00\u9000\u5316\uFF1B"),
                react.createElement("li", null, "\uFF084\uFF09\u97F3\u4E50\u4E0E\u8BED\u8A00\u6F14\u5316;"),
                react.createElement("li", null, "\uFF085\uFF09\u8BED\u8A00\u3001\u8BA4\u77E5\u4E0E\u5927\u8111\uFF1B"),
                react.createElement("li", null, "\uFF086\uFF09\u65B9\u8A00\u7684\u5F62\u6210\u4E0E\u6F14\u5316\uFF1B"),
                react.createElement("li", null, "\uFF087\uFF09\u8BED\u8A00\u7684\u5171\u65F6\u4E0E\u5386\u65F6\u7814\u7A76\uFF1B"),
                react.createElement("li", null, "\uFF088\uFF09\u5927\u578B\u8BED\u8A00\u6A21\u578B\u7684\u53D1\u5C55\u4E0E\u6F14\u5316\uFF1B"),
                react.createElement("li", null, "\uFF089\uFF09\u5176\u4ED6\u8BED\u8A00\u76F8\u5173\u7684\u8BAE\u9898\u3002")),
            react.createElement("div", { className: CallForPapers.listTitle }, "Conference topics may include the following:"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "1.\tThe proto-language of Chinese and other languages;"),
                react.createElement("li", null, "2.\tLanguage development in typical and atypical populations;"),
                react.createElement("li", null, "3.\tAgeing and language degradation;"),
                react.createElement("li", null, "4.\tThe (co)evolution of language and music;"),
                react.createElement("li", null, "5.\tLanguage, cognition, and the brain;"),
                react.createElement("li", null, "6.\tDialect formation and evolution;"),
                react.createElement("li", null, "7.\tDiachronic and synchronic study of language;"),
                react.createElement("li", null, "8.\tEvolution of large language model;"),
                react.createElement("li", null, "9.\tOther language-related research.")),
            react.createElement("div", { className: CallForPapers.listTitle }, "\u4F1A\u8BAE\u7EC4\u7EC7"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "\uFF081\uFF09\u7814\u8BA8\u4F1A\u540D\u8A89\u4E3B\u5E2D\uFF1A\u738B\u58EB\u5143"),
                react.createElement("li", null, "\uFF082\uFF09\u4E3B\u5E2D\u56E2\uFF1A\u9648\u98DE\u3001\u5F6D\u521A\u3001\u8C2D\u529B\u6D77"),
                react.createElement("li", null, "\uFF083\uFF09\u7535\u5B50\u90AE\u7BB1\uFF1Aciel15hnu@gmail.com"),
                react.createElement("li", null, "\uFF084\uFF09\u4F1A\u8BAE\u4E3B\u9875\uFF1Ahttp://www.ciel-15.com")),
            react.createElement("div", { className: CallForPapers.listTitle }, "Conference Organization:"),
            react.createElement("ul", { className: CallForPapers.mt20 },
                react.createElement("li", null, "1.\tHonorary Chair: WANG S-Y.William"),
                react.createElement("li", null, "2.\tOrganizing Committee: CHEN Fei, PENG Gang, TAN Lihai"),
                react.createElement("li", null, "3.\tEmail: ciel15hnu@gmail.com"),
                react.createElement("li", null, "4.\tConference Website: http://www.ciel-15.com")))));
}
var mapStateToProps = function (_a) {
    var common = _a.common;
    return ({ common: common });
};
/* harmony default export */ const pages_CallForPapers = ((0,es/* connect */.Ng)(mapStateToProps)(CallForPapers_CallForPapers));


/***/ }),

/***/ 385:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/map.c36d6c8f..jpg";

/***/ })

}]);