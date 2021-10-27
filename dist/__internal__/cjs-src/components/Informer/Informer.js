"use strict";
exports.__esModule = true;
exports.Informer = exports.cnInformer = exports.informerPropSiseDefault = exports.informerPropSize = exports.informerPropStatusDefault = exports.informerPropStatus = exports.informerPropViewDefault = exports.informerPropView = void 0;
var tslib_1 = require("tslib");
require("./Informer.css");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = require("@bem-react/classnames");
var bem_1 = require("../../utils/bem");
var Text_1 = require("../Text/Text");
var Theme_1 = require("../Theme/Theme");
exports.informerPropView = ['filled', 'bordered'];
exports.informerPropViewDefault = exports.informerPropView[0];
exports.informerPropStatus = ['success', 'system', 'alert', 'alert', 'warning'];
exports.informerPropStatusDefault = exports.informerPropStatus[0];
exports.informerPropSize = ['m', 's'];
exports.informerPropSiseDefault = exports.informerPropSize[0];
exports.cnInformer = bem_1.cn('Informer');
exports.Informer = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.view, view = _a === void 0 ? exports.informerPropViewDefault : _a, _b = props.status, status = _b === void 0 ? exports.informerPropStatusDefault : _b, _c = props.size, size = _c === void 0 ? exports.informerPropSiseDefault : _c, icon = props.icon, label = props.label, title = props.title, children = props.children, otherProps = tslib_1.__rest(props, ["view", "status", "size", "icon", "label", "title", "children"]);
    var Icon = icon;
    var withIcon = !!icon;
    var themeClassNames = Theme_1.useTheme().themeClassNames;
    var className = status !== 'system' && view === 'filled'
        ? classnames_1.classnames(props.className, themeClassNames.color.accent)
        : props.className;
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { className: exports.cnInformer({
            view: view,
            status: status,
            withIcon: withIcon
        }, [className]), ref: ref }),
        Icon && react_1["default"].createElement(Icon, { className: exports.cnInformer('Icon'), size: "s" }),
        react_1["default"].createElement("div", { className: exports.cnInformer('Content') },
            title && (react_1["default"].createElement(Text_1.Text, { className: exports.cnInformer('Title'), weight: "bold", size: size }, title)),
            label ? (react_1["default"].createElement(Text_1.Text, { className: exports.cnInformer('Label'), size: size }, label)) : (children))));
});
