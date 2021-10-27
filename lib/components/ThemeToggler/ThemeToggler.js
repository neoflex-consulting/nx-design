"use strict";
exports.__esModule = true;
exports.ThemeToggler = exports.themeTogglerPropSizeDefault = exports.themeTogglerPropSize = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var useChoiceGroup_1 = require("../../hooks/useChoiceGroup/useChoiceGroup");
var IconCheck_1 = require("../../icons/IconCheck/IconCheck");
var getSizeByMap_1 = require("../../utils/getSizeByMap");
var setRef_1 = require("../../utils/setRef");
var Button_1 = require("../Button/Button");
var ContextMenu_1 = require("../ContextMenu/ContextMenu");
exports.themeTogglerPropSize = ['m', 'l', 's', 'xs'];
exports.themeTogglerPropSizeDefault = exports.themeTogglerPropSize[0];
var iconSizeMap = {
    l: 'm',
    m: 's',
    s: 's',
    xs: 'xs'
};
var contextMenuSizeMap = {
    l: 'l',
    m: 'm',
    s: 's',
    xs: 's'
};
exports.ThemeToggler = react_1["default"].forwardRef(function (props, componentRef) {
    var _a = props.size, size = _a === void 0 ? exports.themeTogglerPropSizeDefault : _a, items = props.items, value = props.value, onChange = props.onChange, getItemKey = props.getItemKey, getItemLabel = props.getItemLabel, getItemIcon = props.getItemIcon, direction = props.direction, possibleDirections = props.possibleDirections, otherProps = tslib_1.__rest(props, ["size", "items", "value", "onChange", "getItemKey", "getItemLabel", "getItemIcon", "direction", "possibleDirections"]);
    var ref = react_1.useRef(null);
    var _b = tslib_1.__read(react_1.useState(false), 2), isOpen = _b[0], setIsOpen = _b[1];
    react_1.useEffect(function () {
        if (componentRef) {
            setRef_1.setRef(componentRef, ref.current);
        }
    });
    var _c = useChoiceGroup_1.useChoiceGroup({
        value: value,
        getKey: getItemKey || getItemLabel,
        callBack: onChange,
        multiple: false
    }), getOnChange = _c.getOnChange, getChecked = _c.getChecked;
    var iconSize = getSizeByMap_1.getSizeByMap(iconSizeMap, size);
    var contextMenuSize = getSizeByMap_1.getSizeByMap(contextMenuSizeMap, size);
    var getButtonIcon = function () { return getItemIcon(items.find(function (theme) { return getChecked(theme); })); };
    var onButtonClick = function (e) {
        if (items.length > 2) {
            setIsOpen(!isOpen);
        }
        else {
            var isFirstThemeSelected = getChecked(items[0]);
            getOnChange(items[isFirstThemeSelected ? 1 : 0])(e);
        }
    };
    var renderIcons = function (item) {
        var Icon = getItemIcon(item);
        return react_1["default"].createElement(Icon, { size: iconSize });
    };
    var renderChecks = function (item) {
        return getChecked(item) && react_1["default"].createElement(IconCheck_1.IconCheck, { size: iconSize });
    };
    if (items.length <= 1) {
        return null;
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Button_1.Button, tslib_1.__assign({}, otherProps, { ref: ref, iconLeft: getButtonIcon(), onClick: onButtonClick, onlyIcon: true, size: size, view: "clear" })),
        items.length > 2 && isOpen && (react_1["default"].createElement(ContextMenu_1.ContextMenu, { offset: 8, items: items, getLabel: getItemLabel, anchorRef: ref, direction: direction, possibleDirections: possibleDirections, getLeftSideBar: renderIcons, getRightSideBar: renderChecks, onClickOutside: function () { return setIsOpen(false); }, getOnClick: getOnChange, size: contextMenuSize }))));
});
