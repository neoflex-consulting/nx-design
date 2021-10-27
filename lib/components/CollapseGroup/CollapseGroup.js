"use strict";
exports.__esModule = true;
exports.CollapseGroup = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var IconArrowDown_1 = require("../../icons/IconArrowDown/IconArrowDown");
var Collapse_1 = require("../Collapse/Collapse");
var helpers_1 = require("./helpers");
var useChoice_1 = require("./useChoice");
var CollapseGroupRender = function (props, ref) {
    var _a = helpers_1.withDefaultGetters(props), items = _a.items, getItemLabel = _a.getItemLabel, getItemContent = _a.getItemContent, _b = _a.size, size = _b === void 0 ? Collapse_1.collapsePropSizeDefault : _b, _c = _a.view, view = _c === void 0 ? Collapse_1.collapsePropViewDefault : _c, hoverEffect = _a.hoverEffect, divider = _a.divider, _d = _a.icon, icon = _d === void 0 ? IconArrowDown_1.IconArrowDown : _d, closeIcon = _a.closeIcon, getItemRightSide = _a.getItemRightSide, horizontalSpace = _a.horizontalSpace, _e = _a.iconPosition, iconPosition = _e === void 0 ? Collapse_1.collapsePropIconPositionDefault : _e, _f = _a.directionIcon, directionIcon = _f === void 0 ? Collapse_1.collapsePropDirectionIconDefault : _f, _g = _a.closeDirectionIcon, closeDirectionIcon = _g === void 0 ? Collapse_1.collapsePropCloseDirectionIconDefault : _g, otherProps = tslib_1.__rest(_a, ["items", "getItemLabel", "getItemContent", "size", "view", "hoverEffect", "divider", "icon", "closeIcon", "getItemRightSide", "horizontalSpace", "iconPosition", "directionIcon", "closeDirectionIcon"]);
    var _h = useChoice_1.useChoice(props), getChecked = _h.getChecked, getOnChange = _h.getOnChange;
    return (react_1["default"].createElement("div", tslib_1.__assign({ ref: ref }, otherProps), items.map(function (item, index) {
        return (react_1["default"].createElement(Collapse_1.Collapse, tslib_1.__assign({ label: getItemLabel(item), key: index, size: size, view: view, horizontalSpace: horizontalSpace, icon: icon, hoverEffect: hoverEffect, divider: divider, isOpen: getChecked(index), onClick: getOnChange(index) }, (iconPosition === 'left'
            ? {
                iconPosition: iconPosition,
                rightSide: getItemRightSide(item)
            }
            : { iconPosition: iconPosition }), (closeIcon
            ? { closeIcon: closeIcon }
            : {
                directionIcon: directionIcon,
                closeDirectionIcon: closeDirectionIcon
            })), getItemContent(item)));
    })));
};
exports.CollapseGroup = react_1.forwardRef(CollapseGroupRender);
tslib_1.__exportStar(require("./helpers"), exports);
