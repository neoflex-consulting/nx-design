"use strict";
exports.__esModule = true;
exports.Collapse = exports.sizeIconMap = exports.cnCollapse = exports.collapsePropCloseDirectionIconDefault = exports.collapsePropDirectionIconDefault = exports.collapsePropDirectionIcon = exports.collapsePropIconPositionDefault = exports.collapsePropIconPosition = exports.collapsePropHorizontalSpace = exports.collapsePropViewDefault = exports.collapsePropView = exports.collapsePropSizeDefault = exports.collapsePropSize = void 0;
var tslib_1 = require("tslib");
require("./Collapse.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconArrowDown_1 = require("../../icons/IconArrowDown/IconArrowDown");
var bem_1 = require("../../utils/bem");
var getSizeByMap_1 = require("../../utils/getSizeByMap");
var Text_1 = require("../Text/Text");
var CollapseIcon_1 = require("./CollapseIcon/CollapseIcon");
exports.collapsePropSize = ['m', 'l', 's', 'xs', '2xs'];
exports.collapsePropSizeDefault = exports.collapsePropSize[0];
exports.collapsePropView = ['primary', 'secondary'];
exports.collapsePropViewDefault = exports.collapsePropView[0];
exports.collapsePropHorizontalSpace = [
    '3xs',
    '6xl',
    '5xl',
    '4xl',
    '3xl',
    '2xl',
    'xl',
    'l',
    'm',
    's',
    'xs',
    '2xs',
];
exports.collapsePropIconPosition = ['left', 'right'];
exports.collapsePropIconPositionDefault = exports.collapsePropIconPosition[0];
exports.collapsePropDirectionIcon = CollapseIcon_1.collapseIconPropDirection;
exports.collapsePropDirectionIconDefault = exports.collapsePropDirectionIcon[0];
exports.collapsePropCloseDirectionIconDefault = exports.collapsePropDirectionIcon[2];
exports.cnCollapse = bem_1.cn('Collapse');
exports.sizeIconMap = {
    '2xs': 'xs',
    'xs': 'xs',
    's': 'xs',
    'm': 's',
    'l': 's'
};
function renderSide(side) {
    var sides = side ? tslib_1.__spread((Array.isArray(side) ? side : [side])) : [];
    return sides.map(function (item, index) { return (react_1["default"].createElement("div", { className: exports.cnCollapse('Side'), key: index }, item)); });
}
exports.Collapse = react_1["default"].forwardRef(function (props, ref) {
    var label = props.label, _a = props.size, size = _a === void 0 ? exports.collapsePropSizeDefault : _a, _b = props.view, view = _b === void 0 ? exports.collapsePropViewDefault : _b, className = props.className, isOpen = props.isOpen, children = props.children, hoverEffect = props.hoverEffect, divider = props.divider, _c = props.icon, icon = _c === void 0 ? IconArrowDown_1.IconArrowDown : _c, closeIcon = props.closeIcon, rightSide = props.rightSide, horizontalSpace = props.horizontalSpace, _d = props.iconPosition, iconPosition = _d === void 0 ? exports.collapsePropIconPositionDefault : _d, _e = props.directionIcon, directionIcon = _e === void 0 ? exports.collapsePropDirectionIconDefault : _e, _f = props.closeDirectionIcon, closeDirectionIcon = _f === void 0 ? exports.collapsePropCloseDirectionIconDefault : _f, style = props.style, otherProps = tslib_1.__rest(props, ["label", "size", "view", "className", "isOpen", "children", "hoverEffect", "divider", "icon", "closeIcon", "rightSide", "horizontalSpace", "iconPosition", "directionIcon", "closeDirectionIcon", "style"]);
    return (react_1["default"].createElement("div", { ref: ref, className: exports.cnCollapse({ size: size, view: view, horizontalSpace: horizontalSpace }, [className]), style: style },
        react_1["default"].createElement("div", tslib_1.__assign({ className: exports.cnCollapse('Label', {
                hoverEffect: hoverEffect,
                divider: divider,
                iconPosition: iconPosition
            }) }, otherProps),
            react_1["default"].createElement(CollapseIcon_1.CollapseIcon, { className: exports.cnCollapse('Icon', { position: iconPosition }), size: getSizeByMap_1.getSizeByMap(exports.sizeIconMap, size), icon: icon, closeIcon: closeIcon, isOpen: isOpen, direction: directionIcon, closeDirection: closeDirectionIcon }),
            react_1["default"].createElement(Text_1.Text, { className: exports.cnCollapse('LabelText'), view: view, size: size }, label),
            iconPosition === 'left' && renderSide(rightSide)),
        react_1["default"].createElement("div", { className: exports.cnCollapse('Body', { isOpen: isOpen }) },
            react_1["default"].createElement("div", { className: exports.cnCollapse('Content') }, children))));
});
