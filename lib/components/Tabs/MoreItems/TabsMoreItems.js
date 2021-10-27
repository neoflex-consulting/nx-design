"use strict";
exports.__esModule = true;
exports.TabsMoreItems = void 0;
var tslib_1 = require("tslib");
require("./TabsMoreItems.css");
var react_1 = tslib_1.__importDefault(require("react"));
var focus_trap_react_1 = tslib_1.__importDefault(require("focus-trap-react"));
var useForkRef_1 = require("../../../hooks/useForkRef/useForkRef");
var IconMeatball_1 = require("../../../icons/IconMeatball/IconMeatball");
var bem_1 = require("../../../utils/bem");
var Button_1 = require("../../Button/Button");
var Popover_1 = require("../../Popover/Popover");
var cnTabsMoreItems = bem_1.cn('TabsMoreItems');
exports.TabsMoreItems = react_1["default"].forwardRef(function (_a, ref) {
    var items = _a.items, renderItem = _a.renderItem, getLabel = _a.getLabel, getChecked = _a.getChecked, height = _a.height;
    var _b = tslib_1.__read(react_1["default"].useState(false), 2), isMoreItemsVisible = _b[0], setIsMoreItemsVisible = _b[1];
    var buttonRef = react_1["default"].useRef(null);
    react_1["default"].useEffect(function () {
        if (items.length === 0) {
            setIsMoreItemsVisible(false);
        }
    }, [items]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { ref: useForkRef_1.useForkRef([ref, buttonRef]), className: cnTabsMoreItems('Button'), style: { height: height } },
            react_1["default"].createElement(Button_1.Button, { size: "xs", view: "ghost", onlyIcon: true, iconLeft: IconMeatball_1.IconMeatball, onClick: function () { return setIsMoreItemsVisible(function (state) { return !state; }); } })),
        isMoreItemsVisible && buttonRef.current && (react_1["default"].createElement(Popover_1.Popover, { anchorRef: buttonRef, offset: -1, direction: "downStartRight", spareDirection: "downStartLeft", possibleDirections: [
                'downStartRight',
                'downStartLeft',
                'upStartRight',
                'upStartLeft',
                'downCenter',
                'upCenter',
            ] },
            react_1["default"].createElement(focus_trap_react_1["default"], { focusTrapOptions: {
                    fallbackFocus: buttonRef.current,
                    clickOutsideDeactivates: function (e) {
                        var _a;
                        var isClickInsideButton = (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target);
                        return !isClickInsideButton;
                    },
                    allowOutsideClick: true,
                    onDeactivate: function () { return setIsMoreItemsVisible(false); }
                } },
                react_1["default"].createElement("div", { className: cnTabsMoreItems('Popover') }, items.map(function (item) { return (react_1["default"].createElement("div", { key: getLabel(item), className: cnTabsMoreItems('Item', { active: getChecked(item) }) }, renderItem(item, function () { return setIsMoreItemsVisible(false); }))); })))))));
});
