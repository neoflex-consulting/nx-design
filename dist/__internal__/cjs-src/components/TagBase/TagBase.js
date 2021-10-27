"use strict";
exports.__esModule = true;
exports.TagBase = exports.cnTagBase = exports.tagBasePropViewDefault = exports.tagBasePropView = exports.tagBasePropGroup = exports.tagBasePropGroupStringValue = exports.tagBasePropGroupNumberValue = exports.tagBasePropSizeDefault = exports.tagBasePropSize = void 0;
var tslib_1 = require("tslib");
require("./TagBase.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconClose_1 = require("../../icons/IconClose/IconClose");
var bem_1 = require("../../utils/bem");
var getSizeByMap_1 = require("../../utils/getSizeByMap");
var PropsWithAsAttributes_1 = require("../../utils/types/PropsWithAsAttributes");
exports.tagBasePropSize = ['m', 'xs', 's', 'l'];
exports.tagBasePropSizeDefault = exports.tagBasePropSize[0];
exports.tagBasePropGroupNumberValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
exports.tagBasePropGroupStringValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
exports.tagBasePropGroup = tslib_1.__spread(exports.tagBasePropGroupNumberValue, exports.tagBasePropGroupStringValue);
exports.tagBasePropView = ['stroked', 'filled'];
exports.tagBasePropViewDefault = exports.tagBasePropView[0];
exports.cnTagBase = bem_1.cn('TagBase');
var sizeMap = {
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 's'
};
exports.TagBase = PropsWithAsAttributes_1.forwardRefWithAs(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? exports.tagBasePropSizeDefault : _a, _b = props.as, as = _b === void 0 ? 'div' : _b, label = props.label, className = props.className, group = props.group, _c = props.view, view = _c === void 0 ? exports.tagBasePropViewDefault : _c, onCancel = props.onCancel, Icon = props.icon, iconSize = props.iconSize, withAction = props.withAction, otherProps = tslib_1.__rest(props, ["size", "as", "label", "className", "group", "view", "onCancel", "icon", "iconSize", "withAction"]);
    var Tag = as;
    var withCancel = typeof onCancel === 'function';
    var withIcon = !!Icon;
    var IconCloseSize = getSizeByMap_1.getSizeByMap(sizeMap, size);
    var IconSize = getSizeByMap_1.getSizeByMap(sizeMap, size, iconSize);
    return (react_1["default"].createElement(Tag, tslib_1.__assign({}, otherProps, { className: exports.cnTagBase({
            size: size,
            view: view,
            withCancel: withCancel,
            withIcon: withIcon,
            group: group,
            withAction: withAction
        }, [className]), ref: ref }), withCancel || Icon ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        Icon && (react_1["default"].createElement("span", { className: exports.cnTagBase('IconWrapper') },
            react_1["default"].createElement(Icon, { size: IconSize, className: exports.cnTagBase('Icon') }))),
        react_1["default"].createElement("span", { className: exports.cnTagBase('Label') }, label),
        withCancel && (react_1["default"].createElement("button", { className: exports.cnTagBase('CancelButton'), type: "button", onClick: onCancel },
            react_1["default"].createElement(IconClose_1.IconClose, { className: exports.cnTagBase('CancelIcon'), size: IconCloseSize }))))) : (label)));
});
