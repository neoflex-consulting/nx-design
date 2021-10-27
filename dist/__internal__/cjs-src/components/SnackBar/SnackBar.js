"use strict";
exports.__esModule = true;
exports.SnackBar = exports.cnSnackBarItem = exports.cnSnackBar = exports.snackBarItemStatusDefault = exports.snackBarItemStatus = void 0;
var tslib_1 = require("tslib");
require("./SnackBar.css");
var react_1 = tslib_1.__importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
var bem_1 = require("../../utils/bem");
var cnForCssTransition_1 = require("../../utils/cnForCssTransition");
var usePropsHandler_1 = require("../EventInterceptor/usePropsHandler");
var SnackBar_Item_1 = require("./Item/SnackBar-Item");
exports.snackBarItemStatus = ['normal', 'system', 'success', 'warning', 'alert'];
exports.snackBarItemStatusDefault = exports.snackBarItemStatus[0];
exports.cnSnackBar = bem_1.cn('SnackBar');
exports.cnSnackBarItem = bem_1.cn('SnackBar', 'Item');
var cssTransitionClassNames = cnForCssTransition_1.cnForCssTransition(exports.cnSnackBarItem);
exports.SnackBar = function (props) {
    var _a = usePropsHandler_1.usePropsHandler(exports.cnSnackBar(), props), items = _a.items, className = _a.className, otherProps = tslib_1.__rest(_a, ["items", "className"]);
    return (react_1["default"].createElement(react_transition_group_1.TransitionGroup, tslib_1.__assign({}, otherProps, { className: exports.cnSnackBar(null, [className]), appear: true, enter: true, exit: true }), items.map(function (item) {
        return (react_1["default"].createElement(react_transition_group_1.CSSTransition, { classNames: cssTransitionClassNames, key: item.key, timeout: 200 },
            react_1["default"].createElement(SnackBar_Item_1.SnackBarItem, { item: item })));
    })));
};
