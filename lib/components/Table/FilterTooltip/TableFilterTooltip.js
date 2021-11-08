"use strict";
exports.__esModule = true;
exports.TableFilterTooltip = void 0;
var tslib_1 = require("tslib");
require("./TableFilterTooltip.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconFunnel_1 = require("../../../icons/IconFunnel/IconFunnel");
var bem_1 = require("../../../utils/bem");
var index_1 = require("../../index");
var Popover_1 = require("../../Popover/Popover");
var Text_1 = require("../../Text/Text");
var cnTableFilterTooltip = bem_1.cn('TableFilterTooltip');
exports.TableFilterTooltip = function (_a) {
    var field = _a.field, isOpened = _a.isOpened, options = _a.options, values = _a.values, className = _a.className, children = _a.children, onChange = _a.onChange, onToggle = _a.onToggle;
    var buttonRef = react_1["default"].useRef(null);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(index_1.Button, { ref: buttonRef, size: "xs", iconSize: "s", view: "clear", onlyIcon: true, onClick: onToggle, className: cnTableFilterTooltip('Button', { isOpened: isOpened }, [className]), iconLeft: IconFunnel_1.IconFunnel }),
        isOpened && buttonRef.current && (react_1["default"].createElement(Popover_1.Popover, { anchorRef: buttonRef, possibleDirections: ['downRight', 'downLeft'], direction: "downRight", offset: 4, arrowOffset: 12, onClickOutside: onToggle }, children || (react_1["default"].createElement("div", { className: cnTableFilterTooltip('Content') },
            react_1["default"].createElement(Text_1.Text, { as: "div", size: "xs", view: "primary", className: cnTableFilterTooltip('Title') }, "\u0424\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044E"),
            react_1["default"].createElement("select", { className: cnTableFilterTooltip('Select'), value: tslib_1.__spread(values), multiple: true, onChange: function (e) {
                    onChange(field, Array.from(e.target.selectedOptions).map(function (option) { return option.value; }));
                } }, options.map(function (option) { return (react_1["default"].createElement("option", { key: option.value, className: cnTableFilterTooltip('Option'), value: option.value, title: option.label }, option.label)); }))))))));
};
