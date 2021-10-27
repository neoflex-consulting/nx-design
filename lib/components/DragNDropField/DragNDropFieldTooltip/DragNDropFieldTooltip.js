"use strict";
exports.__esModule = true;
exports.DragNDropFieldTooltip = void 0;
var tslib_1 = require("tslib");
require("./DragNDropFieldTooltip.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var Text_1 = require("../../Text/Text");
var Tooltip_1 = require("../../Tooltip/Tooltip");
var cnDragNDropFieldTooltip = bem_1.cn('DragNDropFieldTooltip');
exports.DragNDropFieldTooltip = function (_a) {
    var anchorRef = _a.anchorRef, errors = _a.errors;
    var _b = tslib_1.__read(react_1["default"].useState(false), 2), isHidden = _b[0], setIsHidden = _b[1];
    react_1["default"].useEffect(function () {
        setIsHidden(false);
    }, [errors]);
    return isHidden || errors.length === 0 ? null : (react_1["default"].createElement(Tooltip_1.Tooltip, { anchorRef: anchorRef, status: "alert", size: "l", isInteractive: false, onClickOutside: function () { return setIsHidden(true); } },
        react_1["default"].createElement(Text_1.Text, { size: "s" }, errors.length === 1 ? (errors[0]) : (react_1["default"].createElement("ul", { className: cnDragNDropFieldTooltip('List') }, errors.map(function (error) { return (react_1["default"].createElement("li", { key: error }, error)); }))))));
};
