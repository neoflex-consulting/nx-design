"use strict";
exports.__esModule = true;
exports.Badge = exports.cnBadge = exports.badgePropFormDefault = exports.badgePropForm = exports.badgePropStatusDefault = exports.badgePropStatus = exports.badgePropViewDefault = exports.badgePropView = exports.badgePropSizeDefault = exports.badgePropSize = void 0;
var tslib_1 = require("tslib");
require("./Badge.css");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = require("@bem-react/classnames");
var bem_1 = require("../../utils/bem");
var PropsWithAsAttributes_1 = require("../../utils/types/PropsWithAsAttributes");
var Theme_1 = require("../Theme/Theme");
exports.badgePropSize = ['m', 's', 'l'];
exports.badgePropSizeDefault = exports.badgePropSize[0];
exports.badgePropView = ['filled', 'stroked'];
exports.badgePropViewDefault = exports.badgePropView[0];
exports.badgePropStatus = ['normal', 'success', 'error', 'warning', 'system'];
exports.badgePropStatusDefault = exports.badgePropStatus[0];
exports.badgePropForm = ['default', 'round'];
exports.badgePropFormDefault = exports.badgePropForm[0];
exports.cnBadge = bem_1.cn('Badge');
exports.Badge = PropsWithAsAttributes_1.forwardRefWithAs(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? exports.badgePropSizeDefault : _a, _b = props.view, view = _b === void 0 ? exports.badgePropViewDefault : _b, _c = props.status, status = _c === void 0 ? exports.badgePropStatusDefault : _c, _d = props.form, form = _d === void 0 ? exports.badgePropFormDefault : _d, icon = props.icon, minified = props.minified, label = props.label, _e = props.as, as = _e === void 0 ? 'div' : _e, otherProps = tslib_1.__rest(props, ["size", "view", "status", "form", "icon", "minified", "label", "as"]);
    var Tag = as;
    var themeClassNames = Theme_1.useTheme().themeClassNames;
    var className = status !== 'system' && view === 'filled'
        ? classnames_1.classnames(props.className, themeClassNames.color.accent)
        : props.className;
    var Icon = icon;
    var withIcon = !!icon;
    if (minified) {
        return (react_1["default"].createElement(Tag, tslib_1.__assign({}, otherProps, { className: exports.cnBadge({ size: size, status: status, minified: minified }, [className]), title: label, ref: ref })));
    }
    return (react_1["default"].createElement(Tag, tslib_1.__assign({}, otherProps, { className: exports.cnBadge({ size: size, view: view, status: status, form: form, withIcon: withIcon }, [className]), ref: ref }), Icon ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Icon, { size: "xs", className: exports.cnBadge('Icon') }),
        label)) : (label)));
});
