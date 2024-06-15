"use strict";
(self["webpackChunkreact_cli"] = self["webpackChunkreact_cli"] || []).push([[889],{

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ card)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(9853);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(2279);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(8224);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2284);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Element.js




var Element = function Element(props) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    size = props.size,
    shape = props.shape;
  var sizeCls = classnames_default()((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-lg"), size === 'large'), "".concat(prefixCls, "-sm"), size === 'small'));
  var shapeCls = classnames_default()((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-circle"), shape === 'circle'), "".concat(prefixCls, "-square"), shape === 'square'), "".concat(prefixCls, "-round"), shape === 'round'));
  var sizeStyle = react.useMemo(function () {
    return typeof size === 'number' ? {
      width: size,
      height: size,
      lineHeight: "".concat(size, "px")
    } : {};
  }, [size]);
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(prefixCls, sizeCls, shapeCls, className),
    style: (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, sizeStyle), style)
  });
};
/* harmony default export */ const skeleton_Element = (Element);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Avatar.js







var SkeletonAvatar = function SkeletonAvatar(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    active = props.active,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'circle' : _props$shape,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var otherProps = (0,omit/* default */.A)(props, ['prefixCls', 'className']);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-active"), active), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.A)({
    prefixCls: "".concat(prefixCls, "-avatar"),
    shape: shape,
    size: size
  }, otherProps)));
};
/* harmony default export */ const Avatar = (SkeletonAvatar);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Button.js







var SkeletonButton = function SkeletonButton(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    active = props.active,
    _props$block = props.block,
    block = _props$block === void 0 ? false : _props$block,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var otherProps = (0,omit/* default */.A)(props, ['prefixCls']);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-active"), active), "".concat(prefixCls, "-block"), block), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.A)({
    prefixCls: "".concat(prefixCls, "-button"),
    size: size
  }, otherProps)));
};
/* harmony default export */ const Button = (SkeletonButton);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(9379);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DotChartOutlined.js
// This icon file is generated automatically.
var DotChartOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "dot-chart", "theme": "outlined" };
/* harmony default export */ const asn_DotChartOutlined = (DotChartOutlined);

// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 5 modules
var AntdIcon = __webpack_require__(6210);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/DotChartOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var DotChartOutlined_DotChartOutlined = function DotChartOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_DotChartOutlined
  }));
};
DotChartOutlined_DotChartOutlined.displayName = 'DotChartOutlined';
/* harmony default export */ const icons_DotChartOutlined = (/*#__PURE__*/react.forwardRef(DotChartOutlined_DotChartOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Node.js





var SkeletonNode = function SkeletonNode(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    active = props.active,
    children = props.children;
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-active"), active), className);
  var content = children !== null && children !== void 0 ? children : /*#__PURE__*/react.createElement(icons_DotChartOutlined, null);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-image"), className),
    style: style
  }, content));
};
/* harmony default export */ const Node = (SkeletonNode);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Image.js




var path = 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z';
var SkeletonImage = function SkeletonImage(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    active = props.active;
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-active"), active), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-image"), className),
    style: style
  }, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: "".concat(prefixCls, "-image-svg")
  }, /*#__PURE__*/react.createElement("path", {
    d: path,
    className: "".concat(prefixCls, "-image-path")
  }))));
};
/* harmony default export */ const Image = (SkeletonImage);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Input.js







var SkeletonInput = function SkeletonInput(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    active = props.active,
    block = props.block,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var otherProps = (0,omit/* default */.A)(props, ['prefixCls']);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-active"), active), "".concat(prefixCls, "-block"), block), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.A)({
    prefixCls: "".concat(prefixCls, "-input"),
    size: size
  }, otherProps)));
};
/* harmony default export */ const Input = (SkeletonInput);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(436);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Paragraph.js



var Paragraph = function Paragraph(props) {
  var getWidth = function getWidth(index) {
    var width = props.width,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 2 : _props$rows;
    if (Array.isArray(width)) {
      return width[index];
    }
    // last paragraph
    if (rows - 1 === index) {
      return width;
    }
    return undefined;
  };
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    rows = props.rows;
  var rowList = (0,toConsumableArray/* default */.A)(Array(rows)).map(function (_, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react.createElement("li", {
        key: index,
        style: {
          width: getWidth(index)
        }
      })
    );
  });
  return /*#__PURE__*/react.createElement("ul", {
    className: classnames_default()(prefixCls, className),
    style: style
  }, rowList);
};
/* harmony default export */ const skeleton_Paragraph = (Paragraph);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Title.js

/* eslint-disable jsx-a11y/heading-has-content */


var Title = function Title(_ref) {
  var prefixCls = _ref.prefixCls,
    className = _ref.className,
    width = _ref.width,
    style = _ref.style;
  return /*#__PURE__*/react.createElement("h3", {
    className: classnames_default()(prefixCls, className),
    style: (0,esm_extends/* default */.A)({
      width: width
    }, style)
  });
};
/* harmony default export */ const skeleton_Title = (Title);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Skeleton.js














function getComponentProps(prop) {
  if (prop && (0,esm_typeof/* default */.A)(prop) === 'object') {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }
  return {
    size: 'large',
    shape: 'circle'
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {};
  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }
  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
var Skeleton = function Skeleton(props) {
  var customizePrefixCls = props.prefixCls,
    loading = props.loading,
    className = props.className,
    style = props.style,
    children = props.children,
    _props$avatar = props.avatar,
    avatar = _props$avatar === void 0 ? false : _props$avatar,
    _props$title = props.title,
    title = _props$title === void 0 ? true : _props$title,
    _props$paragraph = props.paragraph,
    paragraph = _props$paragraph === void 0 ? true : _props$paragraph,
    active = props.active,
    round = props.round;
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  if (loading || !('loading' in props)) {
    var hasAvatar = !!avatar;
    var hasTitle = !!title;
    var hasParagraph = !!paragraph;
    // Avatar
    var avatarNode;
    if (hasAvatar) {
      var avatarProps = (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({
        prefixCls: "".concat(prefixCls, "-avatar")
      }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
      // We direct use SkeletonElement as avatar in skeleton internal.
      avatarNode = /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.A)({}, avatarProps)));
    }
    var contentNode;
    if (hasTitle || hasParagraph) {
      // Title
      var $title;
      if (hasTitle) {
        var titleProps = (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({
          prefixCls: "".concat(prefixCls, "-title")
        }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
        $title = /*#__PURE__*/react.createElement(skeleton_Title, (0,esm_extends/* default */.A)({}, titleProps));
      }
      // Paragraph
      var paragraphNode;
      if (hasParagraph) {
        var paragraphProps = (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({
          prefixCls: "".concat(prefixCls, "-paragraph")
        }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
        paragraphNode = /*#__PURE__*/react.createElement(skeleton_Paragraph, (0,esm_extends/* default */.A)({}, paragraphProps));
      }
      contentNode = /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, $title, paragraphNode);
    }
    var cls = classnames_default()(prefixCls, (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-with-avatar"), hasAvatar), "".concat(prefixCls, "-active"), active), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-round"), round), className);
    return /*#__PURE__*/react.createElement("div", {
      className: cls,
      style: style
    }, avatarNode, contentNode);
  }
  return typeof children !== 'undefined' ? children : null;
};
Skeleton.Button = Button;
Skeleton.Avatar = Avatar;
Skeleton.Input = Input;
Skeleton.Image = Image;
Skeleton.Node = Node;
/* harmony default export */ const skeleton_Skeleton = (Skeleton);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/index.js

/* harmony default export */ const skeleton = (skeleton_Skeleton);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(6182);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(4351);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js
// This icon file is generated automatically.
var PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
/* harmony default export */ const asn_PlusOutlined = (PlusOutlined);

;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/PlusOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var PlusOutlined_PlusOutlined = function PlusOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_PlusOutlined
  }));
};
PlusOutlined_PlusOutlined.displayName = 'PlusOutlined';
/* harmony default export */ const icons_PlusOutlined = (/*#__PURE__*/react.forwardRef(PlusOutlined_PlusOutlined));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(8430);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(2533);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(7557);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabContext.js

/* harmony default export */ const TabContext = (/*#__PURE__*/(0,react.createContext)(null));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/TabPane.js


var TabPane = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var prefixCls = _ref.prefixCls,
    className = _ref.className,
    style = _ref.style,
    id = _ref.id,
    active = _ref.active,
    tabKey = _ref.tabKey,
    children = _ref.children;
  return /*#__PURE__*/react.createElement("div", {
    id: id && "".concat(id, "-panel-").concat(tabKey),
    role: "tabpanel",
    tabIndex: active ? 0 : -1,
    "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
    "aria-hidden": !active,
    style: style,
    className: classnames_default()(prefixCls, active && "".concat(prefixCls, "-active"), className),
    ref: ref
  }, children);
});
if (false) {}
/* harmony default export */ const TabPanelList_TabPane = (TabPane);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/index.js




var _excluded = ["key", "forceRender", "style", "className"];





function TabPanelList(_ref) {
  var id = _ref.id,
    activeKey = _ref.activeKey,
    animated = _ref.animated,
    tabPosition = _ref.tabPosition,
    destroyInactiveTabPane = _ref.destroyInactiveTabPane;
  var _React$useContext = react.useContext(TabContext),
    prefixCls = _React$useContext.prefixCls,
    tabs = _React$useContext.tabs;
  var tabPaneAnimated = animated.tabPane;
  var tabPanePrefixCls = "".concat(prefixCls, "-tabpane");
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content-holder"))
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated))
  }, tabs.map(function (_ref2) {
    var key = _ref2.key,
      forceRender = _ref2.forceRender,
      paneStyle = _ref2.style,
      paneClassName = _ref2.className,
      restTabProps = (0,objectWithoutProperties/* default */.A)(_ref2, _excluded);
    var active = key === activeKey;
    return /*#__PURE__*/react.createElement(es/* default */.Ay, (0,esm_extends/* default */.A)({
      key: key,
      visible: active,
      forceRender: forceRender,
      removeOnLeave: !!destroyInactiveTabPane,
      leavedClassName: "".concat(tabPanePrefixCls, "-hidden")
    }, animated.tabPaneMotion), function (_ref3, ref) {
      var motionStyle = _ref3.style,
        motionClassName = _ref3.className;
      return /*#__PURE__*/react.createElement(TabPanelList_TabPane, (0,esm_extends/* default */.A)({}, restTabProps, {
        prefixCls: tabPanePrefixCls,
        id: id,
        tabKey: key,
        animated: tabPaneAnimated,
        active: active,
        style: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, paneStyle), motionStyle),
        className: classnames_default()(paneClassName, motionClassName),
        ref: ref
      }));
    });
  })));
}
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var rc_resize_observer_es = __webpack_require__(6076);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(6956);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5371);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(8719);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useOffsets.js


var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return (0,react.useMemo)(function () {
    var _tabs$;
    var map = new Map();
    var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
    var rightOffset = lastOffset.left + lastOffset.width;
    for (var i = 0; i < tabs.length; i += 1) {
      var key = tabs[i].key;
      var data = tabSizes.get(key);

      // Reuse last one when not exist yet
      if (!data) {
        var _tabs;
        data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
      }
      var entity = map.get(key) || (0,objectSpread2/* default */.A)({}, data);

      // Right
      entity.right = rightOffset - entity.left - entity.width;

      // Update entity
      map.set(key, entity);
    }
    return map;
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), tabSizes, holderScrollWidth]);
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useSyncState.js


function useSyncState(defaultState, onChange) {
  var stateRef = react.useRef(defaultState);
  var _React$useState = react.useState({}),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    forceUpdate = _React$useState2[1];
  function setState(updater) {
    var newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;
    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }
    stateRef.current = newValue;
    forceUpdate({});
  }
  return [stateRef.current, setState];
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useTouchMove.js



var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);

// ================================= Hook =================================
function useTouchMove(ref, onOffset) {
  var _useState = (0,react.useState)(),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    touchPosition = _useState2[0],
    setTouchPosition = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    lastTimestamp = _useState4[0],
    setLastTimestamp = _useState4[1];
  var _useState5 = (0,react.useState)(0),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    lastTimeDiff = _useState6[0],
    setLastTimeDiff = _useState6[1];
  var _useState7 = (0,react.useState)(),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    lastOffset = _useState8[0],
    setLastOffset = _useState8[1];
  var motionRef = (0,react.useRef)();

  // ========================= Events =========================
  // >>> Touch events
  function onTouchStart(e) {
    var _e$touches$ = e.touches[0],
      screenX = _e$touches$.screenX,
      screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }
  function onTouchMove(e) {
    if (!touchPosition) return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0],
      screenX = _e$touches$2.screenX,
      screenY = _e$touches$2.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var offsetX = screenX - touchPosition.x;
    var offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    var now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition) return;
    setTouchPosition(null);
    setLastOffset(null);

    // Swipe if needed
    if (lastOffset) {
      var distanceX = lastOffset.x / lastTimeDiff;
      var distanceY = lastOffset.y / lastTimeDiff;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY);

      // Skip swipe if low distance
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionRef.current = window.setInterval(function () {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }

  // >>> Wheel event
  var lastWheelDirectionRef = (0,react.useRef)();
  function onWheel(e) {
    var deltaX = e.deltaX,
      deltaY = e.deltaY;

    // Convert both to x & y since wheel only happened on PC
    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = 'y';
    }
    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  }

  // ========================= Effect =========================
  var touchEventsRef = (0,react.useRef)(null);
  touchEventsRef.current = {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onWheel: onWheel
  };
  react.useEffect(function () {
    function onProxyTouchStart(e) {
      touchEventsRef.current.onTouchStart(e);
    }
    function onProxyTouchMove(e) {
      touchEventsRef.current.onTouchMove(e);
    }
    function onProxyTouchEnd(e) {
      touchEventsRef.current.onTouchEnd(e);
    }
    function onProxyWheel(e) {
      touchEventsRef.current.onWheel(e);
    }
    document.addEventListener('touchmove', onProxyTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', onProxyTouchEnd, {
      passive: false
    });

    // No need to clean up since element removed
    ref.current.addEventListener('touchstart', onProxyTouchStart, {
      passive: false
    });
    ref.current.addEventListener('wheel', onProxyWheel);
    return function () {
      document.removeEventListener('touchmove', onProxyTouchMove);
      document.removeEventListener('touchend', onProxyTouchEnd);
    };
  }, []);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(981);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useUpdate.js




/**
 * Help to merge callback with `useLayoutEffect`.
 * One time will only trigger once.
 */
function useUpdate(callback) {
  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var effectRef = (0,react.useRef)(0);
  var callbackRef = (0,react.useRef)();
  callbackRef.current = callback;

  // Trigger on `useLayoutEffect`
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    var _callbackRef$current;
    (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef);
  }, [count]);

  // Trigger to update count
  return function () {
    if (effectRef.current !== count) {
      return;
    }
    effectRef.current += 1;
    setCount(effectRef.current);
  };
}
function useUpdateState(defaultState) {
  var batchRef = (0,react.useRef)([]);
  var _useState3 = (0,react.useState)({}),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    forceUpdate = _useState4[1];
  var state = (0,react.useRef)(typeof defaultState === 'function' ? defaultState() : defaultState);
  var flushUpdate = useUpdate(function () {
    var current = state.current;
    batchRef.current.forEach(function (callback) {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });
  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }
  return [state.current, updater];
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useVisibleRange.js

var useVisibleRange_DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(tabOffsets, visibleTabContentValue, transform, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, _ref) {
  var tabs = _ref.tabs,
    tabPosition = _ref.tabPosition,
    rtl = _ref.rtl;
  var charUnit;
  var position;
  var transformSize;
  if (['top', 'bottom'].includes(tabPosition)) {
    charUnit = 'width';
    position = rtl ? 'right' : 'left';
    transformSize = Math.abs(transform);
  } else {
    charUnit = 'height';
    position = 'top';
    transformSize = -transform;
  }
  return (0,react.useMemo)(function () {
    if (!tabs.length) {
      return [0, 0];
    }
    var len = tabs.length;
    var endIndex = len;
    for (var i = 0; i < len; i += 1) {
      var offset = tabOffsets.get(tabs[i].key) || useVisibleRange_DEFAULT_SIZE;
      if (offset[position] + offset[charUnit] > transformSize + visibleTabContentValue) {
        endIndex = i - 1;
        break;
      }
    }
    var startIndex = 0;
    for (var _i = len - 1; _i >= 0; _i -= 1) {
      var _offset = tabOffsets.get(tabs[_i].key) || useVisibleRange_DEFAULT_SIZE;
      if (_offset[position] < transformSize) {
        startIndex = _i + 1;
        break;
      }
    }
    return [startIndex, endIndex];
  }, [tabOffsets, visibleTabContentValue, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, transformSize, tabPosition, tabs.map(function (tab) {
    return tab.key;
  }).join('_'), rtl]);
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/util.js
/**
 * We trade Map as deps which may change with same value but different ref object.
 * We should make it as hash for deps
 * */
function stringify(obj) {
  var tgt;
  if (obj instanceof Map) {
    tgt = {};
    obj.forEach(function (v, k) {
      tgt[k] = v;
    });
  } else {
    tgt = obj;
  }
  return JSON.stringify(tgt);
}
var RC_TABS_DOUBLE_QUOTE = 'TABS_DQ';
function genDataNodeKey(key) {
  return String(key).replace(/"/g, RC_TABS_DOUBLE_QUOTE);
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/AddButton.js

function AddButton(_ref, ref) {
  var prefixCls = _ref.prefixCls,
    editable = _ref.editable,
    locale = _ref.locale,
    style = _ref.style;
  if (!editable || editable.showAdd === false) {
    return null;
  }
  return /*#__PURE__*/react.createElement("button", {
    ref: ref,
    type: "button",
    className: "".concat(prefixCls, "-nav-add"),
    style: style,
    "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
    onClick: function onClick(event) {
      editable.onEdit('add', {
        event: event
      });
    }
  }, editable.addIcon || '+');
}
/* harmony default export */ const TabNavList_AddButton = (/*#__PURE__*/react.forwardRef(AddButton));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/ExtraContent.js


var ExtraContent = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var position = _ref.position,
    prefixCls = _ref.prefixCls,
    extra = _ref.extra;
  if (!extra) return null;
  var content;

  // Parse extra
  var assertExtra = {};
  if ((0,esm_typeof/* default */.A)(extra) === 'object' && ! /*#__PURE__*/react.isValidElement(extra)) {
    assertExtra = extra;
  } else {
    assertExtra.right = extra;
  }
  if (position === 'right') {
    content = assertExtra.right;
  }
  if (position === 'left') {
    content = assertExtra.left;
  }
  return content ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-extra-content"),
    ref: ref
  }, content) : null;
});
if (false) {}
/* harmony default export */ const TabNavList_ExtraContent = (ExtraContent);
// EXTERNAL MODULE: ./node_modules/rc-dropdown/es/index.js + 3 modules
var rc_dropdown_es = __webpack_require__(813);
// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 24 modules
var rc_menu_es = __webpack_require__(4415);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(6928);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/OperationNode.js









function OperationNode(_ref, ref) {
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    tabs = _ref.tabs,
    locale = _ref.locale,
    mobile = _ref.mobile,
    _ref$moreIcon = _ref.moreIcon,
    moreIcon = _ref$moreIcon === void 0 ? 'More' : _ref$moreIcon,
    moreTransitionName = _ref.moreTransitionName,
    style = _ref.style,
    className = _ref.className,
    editable = _ref.editable,
    tabBarGutter = _ref.tabBarGutter,
    rtl = _ref.rtl,
    removeAriaLabel = _ref.removeAriaLabel,
    onTabClick = _ref.onTabClick,
    getPopupContainer = _ref.getPopupContainer,
    popupClassName = _ref.popupClassName;
  // ======================== Dropdown ========================
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    selectedKey = _useState4[0],
    setSelectedKey = _useState4[1];
  var popupId = "".concat(id, "-more-popup");
  var dropdownPrefix = "".concat(prefixCls, "-dropdown");
  var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
  var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
  function onRemoveTab(event, key) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }
  var menu = /*#__PURE__*/react.createElement(rc_menu_es/* default */.Ay, {
    onClick: function onClick(_ref2) {
      var key = _ref2.key,
        domEvent = _ref2.domEvent;
      onTabClick(key, domEvent);
      setOpen(false);
    },
    prefixCls: "".concat(dropdownPrefix, "-menu"),
    id: popupId,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": selectedItemId,
    selectedKeys: [selectedKey],
    "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
  }, tabs.map(function (tab) {
    var removable = editable && tab.closable !== false && !tab.disabled;
    return /*#__PURE__*/react.createElement(rc_menu_es/* MenuItem */.Dr, {
      key: tab.key,
      id: "".concat(popupId, "-").concat(tab.key),
      role: "option",
      "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
      disabled: tab.disabled
    }, /*#__PURE__*/react.createElement("span", null, tab.label), removable && /*#__PURE__*/react.createElement("button", {
      type: "button",
      "aria-label": removeAriaLabel || 'remove',
      tabIndex: 0,
      className: "".concat(dropdownPrefix, "-menu-item-remove"),
      onClick: function onClick(e) {
        e.stopPropagation();
        onRemoveTab(e, tab.key);
      }
    }, tab.closeIcon || editable.removeIcon || '×'));
  }));
  function selectOffset(offset) {
    var enabledTabs = tabs.filter(function (tab) {
      return !tab.disabled;
    });
    var selectedIndex = enabledTabs.findIndex(function (tab) {
      return tab.key === selectedKey;
    }) || 0;
    var len = enabledTabs.length;
    for (var i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset + len) % len;
      var tab = enabledTabs[selectedIndex];
      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }
  function onKeyDown(e) {
    var which = e.which;
    if (!open) {
      if ([KeyCode/* default */.A.DOWN, KeyCode/* default */.A.SPACE, KeyCode/* default */.A.ENTER].includes(which)) {
        setOpen(true);
        e.preventDefault();
      }
      return;
    }
    switch (which) {
      case KeyCode/* default */.A.UP:
        selectOffset(-1);
        e.preventDefault();
        break;
      case KeyCode/* default */.A.DOWN:
        selectOffset(1);
        e.preventDefault();
        break;
      case KeyCode/* default */.A.ESC:
        setOpen(false);
        break;
      case KeyCode/* default */.A.SPACE:
      case KeyCode/* default */.A.ENTER:
        if (selectedKey !== null) onTabClick(selectedKey, e);
        break;
    }
  }

  // ========================= Effect =========================
  (0,react.useEffect)(function () {
    // We use query element here to avoid React strict warning
    var ele = document.getElementById(selectedItemId);
    if (ele && ele.scrollIntoView) {
      ele.scrollIntoView(false);
    }
  }, [selectedKey]);
  (0,react.useEffect)(function () {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]);

  // ========================= Render =========================
  var moreStyle = (0,defineProperty/* default */.A)({}, rtl ? 'marginRight' : 'marginLeft', tabBarGutter);
  if (!tabs.length) {
    moreStyle.visibility = 'hidden';
    moreStyle.order = 1;
  }
  var overlayClassName = classnames_default()((0,defineProperty/* default */.A)({}, "".concat(dropdownPrefix, "-rtl"), rtl));
  var moreNode = mobile ? null : /*#__PURE__*/react.createElement(rc_dropdown_es/* default */.A, {
    prefixCls: dropdownPrefix,
    overlay: menu,
    trigger: ['hover'],
    visible: tabs.length ? open : false,
    transitionName: moreTransitionName,
    onVisibleChange: setOpen,
    overlayClassName: classnames_default()(overlayClassName, popupClassName),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: getPopupContainer
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "".concat(prefixCls, "-nav-more"),
    style: moreStyle,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": popupId,
    id: "".concat(id, "-more"),
    "aria-expanded": open,
    onKeyDown: onKeyDown
  }, moreIcon));
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-nav-operations"), className),
    style: style,
    ref: ref
  }, moreNode, /*#__PURE__*/react.createElement(TabNavList_AddButton, {
    prefixCls: prefixCls,
    locale: locale,
    editable: editable
  }));
}
/* harmony default export */ const TabNavList_OperationNode = (/*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(OperationNode), function (_, next) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    next.tabMoving
  );
}));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/TabNode.js





function TabNode(_ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    active = _ref.active,
    _ref$tab = _ref.tab,
    key = _ref$tab.key,
    label = _ref$tab.label,
    disabled = _ref$tab.disabled,
    closeIcon = _ref$tab.closeIcon,
    closable = _ref.closable,
    renderWrapper = _ref.renderWrapper,
    removeAriaLabel = _ref.removeAriaLabel,
    editable = _ref.editable,
    onClick = _ref.onClick,
    onFocus = _ref.onFocus,
    style = _ref.style;
  var tabPrefix = "".concat(prefixCls, "-tab");
  var removable = editable && closable !== false && !disabled;
  function onInternalClick(e) {
    if (disabled) {
      return;
    }
    onClick(e);
  }
  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }
  var node = /*#__PURE__*/react.createElement("div", {
    key: key
    // ref={ref}
    ,
    "data-node-key": genDataNodeKey(key),
    className: classnames_default()(tabPrefix, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(tabPrefix, "-with-remove"), removable), (0,defineProperty/* default */.A)(_classNames, "".concat(tabPrefix, "-active"), active), (0,defineProperty/* default */.A)(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
    style: style,
    onClick: onInternalClick
  }, /*#__PURE__*/react.createElement("div", {
    role: "tab",
    "aria-selected": active,
    id: id && "".concat(id, "-tab-").concat(key),
    className: "".concat(tabPrefix, "-btn"),
    "aria-controls": id && "".concat(id, "-panel-").concat(key),
    "aria-disabled": disabled,
    tabIndex: disabled ? null : 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      onInternalClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      if ([KeyCode/* default */.A.SPACE, KeyCode/* default */.A.ENTER].includes(e.which)) {
        e.preventDefault();
        onInternalClick(e);
      }
    },
    onFocus: onFocus
  }, label), removable && /*#__PURE__*/react.createElement("button", {
    type: "button",
    "aria-label": removeAriaLabel || 'remove',
    tabIndex: 0,
    className: "".concat(tabPrefix, "-remove"),
    onClick: function onClick(e) {
      e.stopPropagation();
      onRemoveTab(e);
    }
  }, closeIcon || editable.removeIcon || '×'));
  return renderWrapper ? renderWrapper(node) : node;
}
/* harmony default export */ const TabNavList_TabNode = (TabNode);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/index.js























var getSize = function getSize(refObj) {
  var _ref = refObj.current || {},
    _ref$offsetWidth = _ref.offsetWidth,
    offsetWidth = _ref$offsetWidth === void 0 ? 0 : _ref$offsetWidth,
    _ref$offsetHeight = _ref.offsetHeight,
    offsetHeight = _ref$offsetHeight === void 0 ? 0 : _ref$offsetHeight;
  return [offsetWidth, offsetHeight];
};

/**
 * Convert `SizeInfo` to unit value. Such as [123, 456] with `top` position get `123`
 */
var getUnitValue = function getUnitValue(size, tabPositionTopOrBottom) {
  return size[tabPositionTopOrBottom ? 0 : 1];
};
function TabNavList(props, ref) {
  var _classNames;
  var _React$useContext = react.useContext(TabContext),
    prefixCls = _React$useContext.prefixCls,
    tabs = _React$useContext.tabs;
  var className = props.className,
    style = props.style,
    id = props.id,
    animated = props.animated,
    activeKey = props.activeKey,
    rtl = props.rtl,
    extra = props.extra,
    editable = props.editable,
    locale = props.locale,
    tabPosition = props.tabPosition,
    tabBarGutter = props.tabBarGutter,
    children = props.children,
    onTabClick = props.onTabClick,
    onTabScroll = props.onTabScroll;
  var containerRef = (0,react.useRef)();
  var extraLeftRef = (0,react.useRef)();
  var extraRightRef = (0,react.useRef)();
  var tabsWrapperRef = (0,react.useRef)();
  var tabListRef = (0,react.useRef)();
  var operationsRef = (0,react.useRef)();
  var innerAddButtonRef = (0,react.useRef)();
  // const [getBtnRef, removeBtnRef] = useRefs<HTMLDivElement>();

  var tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';
  var _useSyncState = useSyncState(0, function (next, prev) {
      if (tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({
          direction: next > prev ? 'left' : 'right'
        });
      }
    }),
    _useSyncState2 = (0,slicedToArray/* default */.A)(_useSyncState, 2),
    transformLeft = _useSyncState2[0],
    setTransformLeft = _useSyncState2[1];
  var _useSyncState3 = useSyncState(0, function (next, prev) {
      if (!tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({
          direction: next > prev ? 'top' : 'bottom'
        });
      }
    }),
    _useSyncState4 = (0,slicedToArray/* default */.A)(_useSyncState3, 2),
    transformTop = _useSyncState4[0],
    setTransformTop = _useSyncState4[1];
  var _useState = (0,react.useState)([0, 0]),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    containerExcludeExtraSize = _useState2[0],
    setContainerExcludeExtraSize = _useState2[1];
  var _useState3 = (0,react.useState)([0, 0]),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    tabContentSize = _useState4[0],
    setTabContentSize = _useState4[1];
  var _useState5 = (0,react.useState)([0, 0]),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    addSize = _useState6[0],
    setAddSize = _useState6[1];
  var _useState7 = (0,react.useState)([0, 0]),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    operationSize = _useState8[0],
    setOperationSize = _useState8[1];
  var _useUpdateState = useUpdateState(new Map()),
    _useUpdateState2 = (0,slicedToArray/* default */.A)(_useUpdateState, 2),
    tabSizes = _useUpdateState2[0],
    setTabSizes = _useUpdateState2[1];
  var tabOffsets = useOffsets(tabs, tabSizes, tabContentSize[0]);

  // ========================== Unit =========================
  var containerExcludeExtraSizeValue = getUnitValue(containerExcludeExtraSize, tabPositionTopOrBottom);
  var tabContentSizeValue = getUnitValue(tabContentSize, tabPositionTopOrBottom);
  var addSizeValue = getUnitValue(addSize, tabPositionTopOrBottom);
  var operationSizeValue = getUnitValue(operationSize, tabPositionTopOrBottom);
  var needScroll = containerExcludeExtraSizeValue < tabContentSizeValue + addSizeValue;
  var visibleTabContentValue = needScroll ? containerExcludeExtraSizeValue - operationSizeValue : containerExcludeExtraSizeValue - addSizeValue;

  // ========================== Util =========================
  var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
  var transformMin = 0;
  var transformMax = 0;
  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, tabContentSizeValue - visibleTabContentValue);
  } else {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  }
  function alignInRange(value) {
    if (value < transformMin) {
      return transformMin;
    }
    if (value > transformMax) {
      return transformMax;
    }
    return value;
  }

  // ========================= Mobile ========================
  var touchMovingRef = (0,react.useRef)();
  var _useState9 = (0,react.useState)(),
    _useState10 = (0,slicedToArray/* default */.A)(_useState9, 2),
    lockAnimation = _useState10[0],
    setLockAnimation = _useState10[1];
  function doLockAnimation() {
    setLockAnimation(Date.now());
  }
  function clearTouchMoving() {
    window.clearTimeout(touchMovingRef.current);
  }
  useTouchMove(tabsWrapperRef, function (offsetX, offsetY) {
    function doMove(setState, offset) {
      setState(function (value) {
        var newValue = alignInRange(value + offset);
        return newValue;
      });
    }

    // Skip scroll if place is enough
    if (!needScroll) {
      return false;
    }
    if (tabPositionTopOrBottom) {
      doMove(setTransformLeft, offsetX);
    } else {
      doMove(setTransformTop, offsetY);
    }
    clearTouchMoving();
    doLockAnimation();
    return true;
  });
  (0,react.useEffect)(function () {
    clearTouchMoving();
    if (lockAnimation) {
      touchMovingRef.current = window.setTimeout(function () {
        setLockAnimation(0);
      }, 100);
    }
    return clearTouchMoving;
  }, [lockAnimation]);

  // ===================== Visible Range =====================
  // Render tab node & collect tab offset
  var _useVisibleRange = useVisibleRange(tabOffsets,
    // Container
    visibleTabContentValue,
    // Transform
    tabPositionTopOrBottom ? transformLeft : transformTop,
    // Tabs
    tabContentSizeValue,
    // Add
    addSizeValue,
    // Operation
    operationSizeValue, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
      tabs: tabs
    })),
    _useVisibleRange2 = (0,slicedToArray/* default */.A)(_useVisibleRange, 2),
    visibleStart = _useVisibleRange2[0],
    visibleEnd = _useVisibleRange2[1];

  // ========================= Scroll ========================
  var scrollToTab = (0,useEvent/* default */.A)(function () {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeKey;
    var tabOffset = tabOffsets.get(key) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (tabPositionTopOrBottom) {
      // ============ Align with top & bottom ============
      var newTransform = transformLeft;

      // RTL
      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + visibleTabContentValue) {
          newTransform = tabOffset.right + tabOffset.width - visibleTabContentValue;
        }
      }
      // LTR
      else if (tabOffset.left < -transformLeft) {
        newTransform = -tabOffset.left;
      } else if (tabOffset.left + tabOffset.width > -transformLeft + visibleTabContentValue) {
        newTransform = -(tabOffset.left + tabOffset.width - visibleTabContentValue);
      }
      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform));
    } else {
      // ============ Align with left & right ============
      var _newTransform = transformTop;
      if (tabOffset.top < -transformTop) {
        _newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + visibleTabContentValue) {
        _newTransform = -(tabOffset.top + tabOffset.height - visibleTabContentValue);
      }
      setTransformLeft(0);
      setTransformTop(alignInRange(_newTransform));
    }
  });

  // ========================== Tab ==========================
  var tabNodeStyle = {};
  if (tabPosition === 'top' || tabPosition === 'bottom') {
    tabNodeStyle[rtl ? 'marginRight' : 'marginLeft'] = tabBarGutter;
  } else {
    tabNodeStyle.marginTop = tabBarGutter;
  }
  var tabNodes = tabs.map(function (tab, i) {
    var key = tab.key;
    return /*#__PURE__*/react.createElement(TabNavList_TabNode, {
      id: id,
      prefixCls: prefixCls,
      key: key,
      tab: tab
      /* first node should not have margin left */,
      style: i === 0 ? undefined : tabNodeStyle,
      closable: tab.closable,
      editable: editable,
      active: key === activeKey,
      renderWrapper: children,
      removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
      onClick: function onClick(e) {
        onTabClick(key, e);
      },
      onFocus: function onFocus() {
        scrollToTab(key);
        doLockAnimation();
        if (!tabsWrapperRef.current) {
          return;
        }
        // Focus element will make scrollLeft change which we should reset back
        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }
        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });

  // Update buttons records
  var updateTabSizes = function updateTabSizes() {
    return setTabSizes(function () {
      var newSizes = new Map();
      tabs.forEach(function (_ref2) {
        var _tabListRef$current;
        var key = _ref2.key;
        var btnNode = (_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.querySelector("[data-node-key=\"".concat(genDataNodeKey(key), "\"]"));
        if (btnNode) {
          newSizes.set(key, {
            width: btnNode.offsetWidth,
            height: btnNode.offsetHeight,
            left: btnNode.offsetLeft,
            top: btnNode.offsetTop
          });
        }
      });
      return newSizes;
    });
  };
  (0,react.useEffect)(function () {
    updateTabSizes();
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_')]);
  var onListHolderResize = useUpdate(function () {
    // Update wrapper records
    var containerSize = getSize(containerRef);
    var extraLeftSize = getSize(extraLeftRef);
    var extraRightSize = getSize(extraRightRef);
    setContainerExcludeExtraSize([containerSize[0] - extraLeftSize[0] - extraRightSize[0], containerSize[1] - extraLeftSize[1] - extraRightSize[1]]);
    var newAddSize = getSize(innerAddButtonRef);
    setAddSize(newAddSize);
    var newOperationSize = getSize(operationsRef);
    setOperationSize(newOperationSize);

    // Which includes add button size
    var tabContentFullSize = getSize(tabListRef);
    setTabContentSize([tabContentFullSize[0] - newAddSize[0], tabContentFullSize[1] - newAddSize[1]]);

    // Update buttons records
    updateTabSizes();
  });

  // ======================== Dropdown =======================
  var startHiddenTabs = tabs.slice(0, visibleStart);
  var endHiddenTabs = tabs.slice(visibleEnd + 1);
  var hiddenTabs = [].concat((0,toConsumableArray/* default */.A)(startHiddenTabs), (0,toConsumableArray/* default */.A)(endHiddenTabs));

  // =================== Link & Operations ===================
  var _useState11 = (0,react.useState)(),
    _useState12 = (0,slicedToArray/* default */.A)(_useState11, 2),
    inkStyle = _useState12[0],
    setInkStyle = _useState12[1];
  var activeTabOffset = tabOffsets.get(activeKey);

  // Delay set ink style to avoid remove tab blink
  var inkBarRafRef = (0,react.useRef)();
  function cleanInkBarRaf() {
    raf/* default */.A.cancel(inkBarRafRef.current);
  }
  (0,react.useEffect)(function () {
    var newInkStyle = {};
    if (activeTabOffset) {
      if (tabPositionTopOrBottom) {
        if (rtl) {
          newInkStyle.right = activeTabOffset.right;
        } else {
          newInkStyle.left = activeTabOffset.left;
        }
        newInkStyle.width = activeTabOffset.width;
      } else {
        newInkStyle.top = activeTabOffset.top;
        newInkStyle.height = activeTabOffset.height;
      }
    }
    cleanInkBarRaf();
    inkBarRafRef.current = (0,raf/* default */.A)(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, tabPositionTopOrBottom, rtl]);

  // ========================= Effect ========================
  (0,react.useEffect)(function () {
    scrollToTab();
    // eslint-disable-next-line
  }, [activeKey, transformMin, transformMax, stringify(activeTabOffset), stringify(tabOffsets), tabPositionTopOrBottom]);

  // Should recalculate when rtl changed
  (0,react.useEffect)(function () {
    onListHolderResize();
    // eslint-disable-next-line
  }, [rtl]);

  // ========================= Render ========================
  var hasDropdown = !!hiddenTabs.length;
  var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
  var pingLeft;
  var pingRight;
  var pingTop;
  var pingBottom;
  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft !== transformMax;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = transformLeft !== transformMin;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = transformTop !== transformMin;
  }
  return /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.A, {
    onResize: onListHolderResize
  }, /*#__PURE__*/react.createElement("div", {
    ref: (0,es_ref/* useComposeRef */.xK)(ref, containerRef),
    role: "tablist",
    className: classnames_default()("".concat(prefixCls, "-nav"), className),
    style: style,
    onKeyDown: function onKeyDown() {
      // No need animation when use keyboard
      doLockAnimation();
    }
  }, /*#__PURE__*/react.createElement(TabNavList_ExtraContent, {
    ref: extraLeftRef,
    position: "left",
    extra: extra,
    prefixCls: prefixCls
  }), /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(wrapPrefix, (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), (0,defineProperty/* default */.A)(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), (0,defineProperty/* default */.A)(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), (0,defineProperty/* default */.A)(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
    ref: tabsWrapperRef
  }, /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.A, {
    onResize: onListHolderResize
  }, /*#__PURE__*/react.createElement("div", {
    ref: tabListRef,
    className: "".concat(prefixCls, "-nav-list"),
    style: {
      transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
      transition: lockAnimation ? 'none' : undefined
    }
  }, tabNodes, /*#__PURE__*/react.createElement(TabNavList_AddButton, {
    ref: innerAddButtonRef,
    prefixCls: prefixCls,
    locale: locale,
    editable: editable,
    style: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, tabNodes.length === 0 ? undefined : tabNodeStyle), {}, {
      visibility: hasDropdown ? 'hidden' : null
    })
  }), /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-ink-bar"), (0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
    style: inkStyle
  })))), /*#__PURE__*/react.createElement(TabNavList_OperationNode, (0,esm_extends/* default */.A)({}, props, {
    removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
    ref: operationsRef,
    prefixCls: prefixCls,
    tabs: hiddenTabs,
    className: !hasDropdown && operationsHiddenClassName,
    tabMoving: !!lockAnimation
  })), /*#__PURE__*/react.createElement(TabNavList_ExtraContent, {
    ref: extraRightRef,
    position: "right",
    extra: extra,
    prefixCls: prefixCls
  })));
  /* eslint-enable */
}

/* harmony default export */ const es_TabNavList = (/*#__PURE__*/react.forwardRef(TabNavList));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/Wrapper.js



var Wrapper_excluded = ["renderTabBar"],
  _excluded2 = ["label", "key"];
// zombieJ: To compatible with `renderTabBar` usage.





// We have to create a TabNavList components.
function TabNavListWrapper(_ref) {
  var renderTabBar = _ref.renderTabBar,
    restProps = (0,objectWithoutProperties/* default */.A)(_ref, Wrapper_excluded);
  var _React$useContext = react.useContext(TabContext),
    tabs = _React$useContext.tabs;
  if (renderTabBar) {
    var tabNavBarProps = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, restProps), {}, {
      // Legacy support. We do not use this actually
      panes: tabs.map(function (_ref2) {
        var label = _ref2.label,
          key = _ref2.key,
          restTabProps = (0,objectWithoutProperties/* default */.A)(_ref2, _excluded2);
        return /*#__PURE__*/react.createElement(TabPanelList_TabPane, (0,esm_extends/* default */.A)({
          tab: label,
          key: key,
          tabKey: key
        }, restTabProps));
      })
    });
    return renderTabBar(tabNavBarProps, es_TabNavList);
  }
  return /*#__PURE__*/react.createElement(es_TabNavList, restProps);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(8210);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useAnimateConfig.js



function useAnimateConfig() {
  var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    inkBar: true,
    tabPane: false
  };
  var mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: false
    };
  } else {
    mergedAnimated = (0,objectSpread2/* default */.A)({
      inkBar: true
    }, (0,esm_typeof/* default */.A)(animated) === 'object' ? animated : {});
  }

  // Enable tabPane animation if provide motion
  if (mergedAnimated.tabPaneMotion && mergedAnimated.tabPane === undefined) {
    mergedAnimated.tabPane = true;
  }
  if (!mergedAnimated.tabPaneMotion && mergedAnimated.tabPane) {
    if (false) {}
    mergedAnimated.tabPane = false;
  }
  return mergedAnimated;
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/Tabs.js






var Tabs_excluded = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName"];
// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role










/**
 * Should added antd:
 * - type
 *
 * Removed:
 * - onNextClick
 * - onPrevClick
 * - keyboard
 */

// Used for accessibility
var uuid = 0;
function Tabs(_ref, ref) {
  var _classNames;
  var id = _ref.id,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-tabs' : _ref$prefixCls,
    className = _ref.className,
    items = _ref.items,
    direction = _ref.direction,
    activeKey = _ref.activeKey,
    defaultActiveKey = _ref.defaultActiveKey,
    editable = _ref.editable,
    animated = _ref.animated,
    _ref$tabPosition = _ref.tabPosition,
    tabPosition = _ref$tabPosition === void 0 ? 'top' : _ref$tabPosition,
    tabBarGutter = _ref.tabBarGutter,
    tabBarStyle = _ref.tabBarStyle,
    tabBarExtraContent = _ref.tabBarExtraContent,
    locale = _ref.locale,
    moreIcon = _ref.moreIcon,
    moreTransitionName = _ref.moreTransitionName,
    destroyInactiveTabPane = _ref.destroyInactiveTabPane,
    renderTabBar = _ref.renderTabBar,
    onChange = _ref.onChange,
    onTabClick = _ref.onTabClick,
    onTabScroll = _ref.onTabScroll,
    getPopupContainer = _ref.getPopupContainer,
    popupClassName = _ref.popupClassName,
    restProps = (0,objectWithoutProperties/* default */.A)(_ref, Tabs_excluded);
  var tabs = react.useMemo(function () {
    return (items || []).filter(function (item) {
      return item && (0,esm_typeof/* default */.A)(item) === 'object' && 'key' in item;
    });
  }, [items]);
  var rtl = direction === 'rtl';
  var mergedAnimated = useAnimateConfig(animated);

  // ======================== Mobile ========================
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    mobile = _useState2[0],
    setMobile = _useState2[1];
  (0,react.useEffect)(function () {
    // Only update on the client side
    setMobile((0,isMobile/* default */.A)());
  }, []);

  // ====================== Active Key ======================
  var _useMergedState = (0,useMergedState/* default */.A)(function () {
      var _tabs$;
      return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
    }, {
      value: activeKey,
      defaultValue: defaultActiveKey
    }),
    _useMergedState2 = (0,slicedToArray/* default */.A)(_useMergedState, 2),
    mergedActiveKey = _useMergedState2[0],
    setMergedActiveKey = _useMergedState2[1];
  var _useState3 = (0,react.useState)(function () {
      return tabs.findIndex(function (tab) {
        return tab.key === mergedActiveKey;
      });
    }),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    activeIndex = _useState4[0],
    setActiveIndex = _useState4[1];

  // Reset active key if not exist anymore
  (0,react.useEffect)(function () {
    var newActiveIndex = tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });
    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;
      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
    }
    setActiveIndex(newActiveIndex);
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), mergedActiveKey, activeIndex]);

  // ===================== Accessibility ====================
  var _useMergedState3 = (0,useMergedState/* default */.A)(null, {
      value: id
    }),
    _useMergedState4 = (0,slicedToArray/* default */.A)(_useMergedState3, 2),
    mergedId = _useMergedState4[0],
    setMergedId = _useMergedState4[1];

  // Async generate id to avoid ssr mapping failed
  (0,react.useEffect)(function () {
    if (!id) {
      setMergedId("rc-tabs-".concat( false ? 0 : uuid));
      uuid += 1;
    }
  }, []);

  // ======================== Events ========================
  function onInternalTabClick(key, e) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e);
    var isActiveChanged = key !== mergedActiveKey;
    setMergedActiveKey(key);
    if (isActiveChanged) {
      onChange === null || onChange === void 0 ? void 0 : onChange(key);
    }
  }

  // ======================== Render ========================
  var sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition: tabPosition,
    rtl: rtl,
    mobile: mobile
  };
  var tabNavBar;
  var tabNavBarProps = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, sharedProps), {}, {
    editable: editable,
    locale: locale,
    moreIcon: moreIcon,
    moreTransitionName: moreTransitionName,
    tabBarGutter: tabBarGutter,
    onTabClick: onInternalTabClick,
    onTabScroll: onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    panes: null,
    getPopupContainer: getPopupContainer,
    popupClassName: popupClassName
  });
  return /*#__PURE__*/react.createElement(TabContext.Provider, {
    value: {
      tabs: tabs,
      prefixCls: prefixCls
    }
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
    ref: ref,
    id: id,
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(tabPosition), (_classNames = {}, (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-mobile"), mobile), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-editable"), editable), (0,defineProperty/* default */.A)(_classNames, "".concat(prefixCls, "-rtl"), rtl), _classNames), className)
  }, restProps), tabNavBar, /*#__PURE__*/react.createElement(TabNavListWrapper, (0,esm_extends/* default */.A)({}, tabNavBarProps, {
    renderTabBar: renderTabBar
  })), /*#__PURE__*/react.createElement(TabPanelList, (0,esm_extends/* default */.A)({
    destroyInactiveTabPane: destroyInactiveTabPane
  }, sharedProps, {
    animated: mergedAnimated
  }))));
}
var ForwardTabs = /*#__PURE__*/react.forwardRef(Tabs);
if (false) {}
/* harmony default export */ const es_Tabs = (ForwardTabs);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/index.js

/* harmony default export */ const rc_tabs_es = (es_Tabs);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(3723);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/hooks/useAnimateConfig.js



var useAnimateConfig_motion = {
  motionAppear: false,
  motionEnter: true,
  motionLeave: true
};
function useAnimateConfig_useAnimateConfig(prefixCls) {
  var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    inkBar: true,
    tabPane: false
  };
  var mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = (0,esm_extends/* default */.A)({
      inkBar: true
    }, (0,esm_typeof/* default */.A)(animated) === 'object' ? animated : {});
  }
  if (mergedAnimated.tabPane) {
    mergedAnimated.tabPaneMotion = (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, useAnimateConfig_motion), {
      motionName: (0,motion/* getTransitionName */.by)(prefixCls, 'switch')
    });
  }
  return mergedAnimated;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(2546);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/hooks/useLegacyItems.js

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



function filter(items) {
  return items.filter(function (item) {
    return item;
  });
}
function useLegacyItems(items, children) {
  if (items) {
    return items;
  }
   false ? 0 : void 0;
  var childrenItems = (0,toArray/* default */.A)(children).map(function (node) {
    if ( /*#__PURE__*/react.isValidElement(node)) {
      var key = node.key,
        props = node.props;
      var _a = props || {},
        tab = _a.tab,
        restProps = __rest(_a, ["tab"]);
      var item = (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({
        key: String(key)
      }, restProps), {
        label: tab
      });
      return item;
    }
    return null;
  });
  return filter(childrenItems);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/TabPane.js
var TabPane_TabPane = function TabPane() {
  return null;
};
if (false) {}
/* harmony default export */ const tabs_TabPane = (TabPane_TabPane);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/index.js


var tabs_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












function tabs_Tabs(_a) {
  var type = _a.type,
    className = _a.className,
    propSize = _a.size,
    _onEdit = _a.onEdit,
    hideAdd = _a.hideAdd,
    centered = _a.centered,
    addIcon = _a.addIcon,
    children = _a.children,
    items = _a.items,
    animated = _a.animated,
    props = tabs_rest(_a, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon", "children", "items", "animated"]);
  var customizePrefixCls = props.prefixCls,
    _props$moreIcon = props.moreIcon,
    moreIcon = _props$moreIcon === void 0 ? /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.A, null) : _props$moreIcon;
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction,
    getPopupContainer = _React$useContext.getPopupContainer;
  var prefixCls = getPrefixCls('tabs', customizePrefixCls);
  var editable;
  if (type === 'editable-card') {
    editable = {
      onEdit: function onEdit(editType, _ref) {
        var key = _ref.key,
          event = _ref.event;
        _onEdit === null || _onEdit === void 0 ? void 0 : _onEdit(editType === 'add' ? event : key, editType);
      },
      removeIcon: /*#__PURE__*/react.createElement(CloseOutlined/* default */.A, null),
      addIcon: addIcon || /*#__PURE__*/react.createElement(icons_PlusOutlined, null),
      showAdd: hideAdd !== true
    };
  }
  var rootPrefixCls = getPrefixCls();
   false ? 0 : void 0;
  var mergedItems = useLegacyItems(items, children);
  var mergedAnimated = useAnimateConfig_useAnimateConfig(prefixCls, animated);
  return /*#__PURE__*/react.createElement(SizeContext/* default */.A.Consumer, null, function (contextSize) {
    var size = propSize !== undefined ? propSize : contextSize;
    return /*#__PURE__*/react.createElement(rc_tabs_es, (0,esm_extends/* default */.A)({
      direction: direction,
      getPopupContainer: getPopupContainer,
      moreTransitionName: "".concat(rootPrefixCls, "-slide-up")
    }, props, {
      items: mergedItems,
      className: classnames_default()((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-").concat(size), size), "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), "".concat(prefixCls, "-editable-card"), type === 'editable-card'), "".concat(prefixCls, "-centered"), centered), className),
      editable: editable,
      moreIcon: moreIcon,
      prefixCls: prefixCls,
      animated: mergedAnimated
    }));
  });
}
tabs_Tabs.TabPane = tabs_TabPane;
/* harmony default export */ const es_tabs = (tabs_Tabs);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/Grid.js


var Grid_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var Grid = function Grid(_a) {
  var prefixCls = _a.prefixCls,
    className = _a.className,
    _a$hoverable = _a.hoverable,
    hoverable = _a$hoverable === void 0 ? true : _a$hoverable,
    props = Grid_rest(_a, ["prefixCls", "className", "hoverable"]);
  return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.TG, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('card', prefixCls);
    var classString = classnames_default()("".concat(prefix, "-grid"), className, (0,defineProperty/* default */.A)({}, "".concat(prefix, "-grid-hoverable"), hoverable));
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, props, {
      className: classString
    }));
  });
};
/* harmony default export */ const card_Grid = (Grid);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/Card.js


var Card_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








function getAction(actions) {
  var actionList = actions.map(function (action, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react.createElement("li", {
        style: {
          width: "".concat(100 / actions.length, "%")
        },
        key: "action-".concat(index)
      }, /*#__PURE__*/react.createElement("span", null, action))
    );
  });
  return actionList;
}
var Card = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = react.useContext(SizeContext/* default */.A);
  var onTabChange = function onTabChange(key) {
    var _a;
    (_a = props.onTabChange) === null || _a === void 0 ? void 0 : _a.call(props, key);
  };
  var isContainGrid = function isContainGrid() {
    var containGrid;
    react.Children.forEach(props.children, function (element) {
      if (element && element.type && element.type === card_Grid) {
        containGrid = true;
      }
    });
    return containGrid;
  };
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    extra = props.extra,
    _props$headStyle = props.headStyle,
    headStyle = _props$headStyle === void 0 ? {} : _props$headStyle,
    _props$bodyStyle = props.bodyStyle,
    bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
    title = props.title,
    loading = props.loading,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    customizeSize = props.size,
    type = props.type,
    cover = props.cover,
    actions = props.actions,
    tabList = props.tabList,
    children = props.children,
    activeTabKey = props.activeTabKey,
    defaultActiveTabKey = props.defaultActiveTabKey,
    tabBarExtraContent = props.tabBarExtraContent,
    hoverable = props.hoverable,
    _props$tabProps = props.tabProps,
    tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
    others = Card_rest(props, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps"]);
  var prefixCls = getPrefixCls('card', customizePrefixCls);
  var loadingBlock = /*#__PURE__*/react.createElement(skeleton, {
    loading: true,
    active: true,
    paragraph: {
      rows: 4
    },
    title: false
  }, children);
  var hasActiveTabKey = activeTabKey !== undefined;
  var extraProps = (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, tabProps), (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), "tabBarExtraContent", tabBarExtraContent));
  var head;
  var tabs = tabList && tabList.length ? ( /*#__PURE__*/react.createElement(es_tabs, (0,esm_extends/* default */.A)({
    size: "large"
  }, extraProps, {
    className: "".concat(prefixCls, "-head-tabs"),
    onChange: onTabChange,
    items: tabList.map(function (item) {
      var _a;
      return {
        label: item.tab,
        key: item.key,
        disabled: (_a = item.disabled) !== null && _a !== void 0 ? _a : false
      };
    })
  }))) : null;
  if (title || extra || tabs) {
    head = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-head"),
      style: headStyle
    }, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-head-wrapper")
    }, title && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-head-title")
    }, title), extra && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-extra")
    }, extra)), tabs);
  }
  var coverDom = cover ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-cover")
  }, cover) : null;
  var body = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle
  }, loading ? loadingBlock : children);
  var actionDom = actions && actions.length ? ( /*#__PURE__*/react.createElement("ul", {
    className: "".concat(prefixCls, "-actions")
  }, getAction(actions))) : null;
  var divProps = (0,omit/* default */.A)(others, ['onTabChange']);
  var mergedSize = customizeSize || size;
  var classString = classnames_default()(prefixCls, (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-loading"), loading), "".concat(prefixCls, "-bordered"), bordered), "".concat(prefixCls, "-hoverable"), hoverable), "".concat(prefixCls, "-contain-grid"), isContainGrid()), "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), "".concat(prefixCls, "-").concat(mergedSize), mergedSize), "".concat(prefixCls, "-type-").concat(type), !!type), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
    ref: ref
  }, divProps, {
    className: classString
  }), head, coverDom, body, actionDom);
});
/* harmony default export */ const card_Card = (Card);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/Meta.js

var Meta_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var Meta = function Meta(props) {
  return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.TG, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      avatar = props.avatar,
      title = props.title,
      description = props.description,
      others = Meta_rest(props, ["prefixCls", "className", "avatar", "title", "description"]);
    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = classnames_default()("".concat(prefixCls, "-meta"), className);
    var avatarDom = avatar ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-avatar")
    }, avatar) : null;
    var titleDom = title ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-title")
    }, title) : null;
    var descriptionDom = description ? ( /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-description")
    }, description)) : null;
    var MetaDetail = titleDom || descriptionDom ? ( /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-detail")
    }, titleDom, descriptionDom)) : null;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, others, {
      className: classString
    }), avatarDom, MetaDetail);
  });
};
/* harmony default export */ const card_Meta = (Meta);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/index.js



var es_card_Card = card_Card;
es_card_Card.Grid = card_Grid;
es_card_Card.Meta = card_Meta;
/* harmony default export */ const card = (es_card_Card);

/***/ }),

/***/ 2953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ es_col)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2284);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(2279);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/RowContext.js
var RowContext = __webpack_require__(6121);
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/col.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }
  return flex;
}
var sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var Col = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var _React$useContext2 = react.useContext(RowContext/* default */.A),
    gutter = _React$useContext2.gutter,
    wrap = _React$useContext2.wrap,
    supportFlexGap = _React$useContext2.supportFlexGap;
  var customizePrefixCls = props.prefixCls,
    span = props.span,
    order = props.order,
    offset = props.offset,
    push = props.push,
    pull = props.pull,
    className = props.className,
    children = props.children,
    flex = props.flex,
    style = props.style,
    others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);
  var prefixCls = getPrefixCls('col', customizePrefixCls);
  var sizeClassObj = {};
  sizes.forEach(function (size) {
    var sizeProps = {};
    var propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if ((0,esm_typeof/* default */.A)(propSize) === 'object') {
      sizeProps = propSize || {};
    }
    delete others[size];
    sizeClassObj = (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, sizeClassObj), (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), "".concat(prefixCls, "-rtl"), direction === 'rtl'));
  });
  var classes = classnames_default()(prefixCls, (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-").concat(span), span !== undefined), "".concat(prefixCls, "-order-").concat(order), order), "".concat(prefixCls, "-offset-").concat(offset), offset), "".concat(prefixCls, "-push-").concat(push), push), "".concat(prefixCls, "-pull-").concat(pull), pull), className, sizeClassObj);
  var mergedStyle = {};
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    var horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }
  // Vertical gutter use padding when gap not support
  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    var verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, others, {
    style: (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children);
});
if (false) {}
/* harmony default export */ const col = (Col);
;// CONCATENATED MODULE: ./node_modules/antd/es/col/index.js

/* harmony default export */ const es_col = (col);

/***/ }),

/***/ 6121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);

var RowContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RowContext);

/***/ }),

/***/ 7384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ es_row)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(2284);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6942);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(2279);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useFlexGapSupport.js + 1 modules
var useFlexGapSupport = __webpack_require__(2615);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/responsiveObserve.js
var responsiveObserve = __webpack_require__(7831);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(9017);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/RowContext.js
var RowContext = __webpack_require__(6121);
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/row.js




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







var RowAligns = (0,type/* tuple */.P)('top', 'middle', 'bottom', 'stretch');
var RowJustify = (0,type/* tuple */.P)('start', 'end', 'center', 'space-around', 'space-between', 'space-evenly');
function useMergePropByScreen(oriProp, screen) {
  var _React$useState = react.useState(typeof oriProp === 'string' ? oriProp : ''),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    prop = _React$useState2[0],
    setProp = _React$useState2[1];
  var clacMergeAlignOrJustify = function clacMergeAlignOrJustify() {
    if (typeof oriProp === 'string') {
      setProp(oriProp);
    }
    if ((0,esm_typeof/* default */.A)(oriProp) !== 'object') {
      return;
    }
    for (var i = 0; i < responsiveObserve/* responsiveArray */.ye.length; i++) {
      var breakpoint = responsiveObserve/* responsiveArray */.ye[i];
      // if do not match, do nothing
      if (!screen[breakpoint]) continue;
      var curVal = oriProp[breakpoint];
      if (curVal !== undefined) {
        setProp(curVal);
        return;
      }
    }
  };
  react.useEffect(function () {
    clacMergeAlignOrJustify();
  }, [JSON.stringify(oriProp), screen]);
  return prop;
}
var Row = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var customizePrefixCls = props.prefixCls,
    justify = props.justify,
    align = props.align,
    className = props.className,
    style = props.style,
    children = props.children,
    _props$gutter = props.gutter,
    gutter = _props$gutter === void 0 ? 0 : _props$gutter,
    wrap = props.wrap,
    others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);
  var _React$useContext = react.useContext(context/* ConfigContext */.QO),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var _React$useState3 = react.useState({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true
    }),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    screens = _React$useState4[0],
    setScreens = _React$useState4[1];
  // to save screens info when responsiveObserve callback had been call
  var _React$useState5 = react.useState({
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false
    }),
    _React$useState6 = (0,slicedToArray/* default */.A)(_React$useState5, 2),
    curScreens = _React$useState6[0],
    setCurScreens = _React$useState6[1];
  // ================================== calc reponsive data ==================================
  var mergeAlign = useMergePropByScreen(align, curScreens);
  var mergeJustify = useMergePropByScreen(justify, curScreens);
  var supportFlexGap = (0,useFlexGapSupport/* default */.A)();
  var gutterRef = react.useRef(gutter);
  // ================================== Effect ==================================
  react.useEffect(function () {
    var token = responsiveObserve/* default */.Ay.subscribe(function (screen) {
      setCurScreens(screen);
      var currentGutter = gutterRef.current || 0;
      if (!Array.isArray(currentGutter) && (0,esm_typeof/* default */.A)(currentGutter) === 'object' || Array.isArray(currentGutter) && ((0,esm_typeof/* default */.A)(currentGutter[0]) === 'object' || (0,esm_typeof/* default */.A)(currentGutter[1]) === 'object')) {
        setScreens(screen);
      }
    });
    return function () {
      return responsiveObserve/* default */.Ay.unsubscribe(token);
    };
  }, []);
  // ================================== Render ==================================
  var getGutter = function getGutter() {
    var results = [undefined, undefined];
    var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
    normalizedGutter.forEach(function (g, index) {
      if ((0,esm_typeof/* default */.A)(g) === 'object') {
        for (var i = 0; i < responsiveObserve/* responsiveArray */.ye.length; i++) {
          var breakpoint = responsiveObserve/* responsiveArray */.ye[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };
  var prefixCls = getPrefixCls('row', customizePrefixCls);
  var gutters = getGutter();
  var classes = classnames_default()(prefixCls, (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, "".concat(prefixCls, "-no-wrap"), wrap === false), "".concat(prefixCls, "-").concat(mergeJustify), mergeJustify), "".concat(prefixCls, "-").concat(mergeAlign), mergeAlign), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  // Add gutter related style
  var rowStyle = {};
  var horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
  var verticalGutter = gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;
  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }
  if (supportFlexGap) {
    // Set gap direct if flex gap support
    var _gutters = (0,slicedToArray/* default */.A)(gutters, 2);
    rowStyle.rowGap = _gutters[1];
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }
  // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.
  var _gutters2 = (0,slicedToArray/* default */.A)(gutters, 2),
    gutterH = _gutters2[0],
    gutterV = _gutters2[1];
  var rowContext = react.useMemo(function () {
    return {
      gutter: [gutterH, gutterV],
      wrap: wrap,
      supportFlexGap: supportFlexGap
    };
  }, [gutterH, gutterV, wrap, supportFlexGap]);
  return /*#__PURE__*/react.createElement(RowContext/* default */.A.Provider, {
    value: rowContext
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, others, {
    className: classes,
    style: (0,esm_extends/* default */.A)((0,esm_extends/* default */.A)({}, rowStyle), style),
    ref: ref
  }), children));
});
if (false) {}
/* harmony default export */ const row = (Row);
;// CONCATENATED MODULE: ./node_modules/antd/es/row/index.js

/* harmony default export */ const es_row = (row);

/***/ })

}]);