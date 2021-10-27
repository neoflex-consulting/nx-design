"use strict";
exports.__esModule = true;
exports.ContextMenuItem = exports.cnContextMenuItem = void 0;
var tslib_1 = require("tslib");
require("./ContextMenuItem.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconArrowRight_1 = require("../../../icons/IconArrowRight/IconArrowRight");
var bem_1 = require("../../../utils/bem");
var Text_1 = require("../../Text/Text");
var helpers_1 = require("../helpers");
exports.cnContextMenuItem = bem_1.cn('ContextMenuItem');
function renderSide(side, position, withArrow) {
    var sides = side ? tslib_1.__spread((Array.isArray(side) ? side : [side])) : [];
    if (withArrow) {
        sides.push(react_1["default"].createElement(IconArrowRight_1.IconArrowRight, { size: "xs", view: "secondary" }));
    }
    var sidesRender = sides.map(function (item, index) { return (react_1["default"].createElement("div", { className: exports.cnContextMenuItem('Side', {
            position: position
        }), key: index }, item)); });
    return sidesRender;
}
exports.ContextMenuItem = react_1["default"].forwardRef(function (props, ref) {
    var label = props.label, rightSide = props.rightSide, leftSide = props.leftSide, _a = props.size, size = _a === void 0 ? helpers_1.contextMenuDefaultSize : _a, active = props.active, withSubMenu = props.withSubMenu, accent = props.accent, disabled = props.disabled, otherProps = tslib_1.__rest(props, ["label", "rightSide", "leftSide", "size", "active", "withSubMenu", "accent", "disabled"]);
    var view = disabled ? undefined : accent;
    return (react_1["default"].createElement(Text_1.Text, tslib_1.__assign({}, otherProps, { className: exports.cnContextMenuItem({ size: size, active: active, disabled: disabled }), ref: ref, size: size, view: view, lineHeight: "xs" }),
        renderSide(leftSide, 'left', false),
        !rightSide && !leftSide && !withSubMenu ? (label) : (react_1["default"].createElement("div", { className: exports.cnContextMenuItem('Side', { position: 'center' }) }, label)),
        renderSide(rightSide, 'right', withSubMenu)));
});
