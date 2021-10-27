"use strict";
exports.__esModule = true;
exports.TableNumberFilter = void 0;
var tslib_1 = require("tslib");
require("./TableNumberFilter.css");
var react_1 = tslib_1.__importStar(require("react"));
var bem_1 = require("../../../utils/bem");
var TextField_1 = require("../../TextField/TextField");
var TableFilterContainer_1 = require("../FilterContainer/TableFilterContainer");
var cnNumberFilter = bem_1.cn('TableNumberFilter');
exports.TableNumberFilter = function (_a) {
    var onConfirm = _a.onConfirm, filterValue = _a.filterValue, title = _a.title, onCancel = _a.onCancel;
    var _b = tslib_1.__read(react_1.useState(filterValue === null || filterValue === void 0 ? void 0 : filterValue.min), 2), minValue = _b[0], setMinValue = _b[1];
    var _c = tslib_1.__read(react_1.useState(filterValue === null || filterValue === void 0 ? void 0 : filterValue.max), 2), maxValue = _c[0], setMaxValue = _c[1];
    var textFieldRef = react_1.useRef(null);
    react_1.useEffect(function () {
        // setTimeout нужен для корректного выставления автофокуса
        setTimeout(function () {
            if (textFieldRef.current) {
                textFieldRef.current.focus();
            }
        });
    }, []);
    var confirmHandler = function () {
        onConfirm({
            min: minValue,
            max: maxValue
        });
    };
    return (react_1["default"].createElement(TableFilterContainer_1.TableFilterContainer, { title: title, onCancel: onCancel, onConfirm: confirmHandler },
        react_1["default"].createElement("div", { className: cnNumberFilter('Inputs') },
            react_1["default"].createElement(TextField_1.TextField, { id: "\u043E\u0442", leftSide: "\u043E\u0442", value: minValue, onChange: function (e) { return setMinValue(e.value); }, form: "defaultBrick", size: "m", inputRef: textFieldRef }),
            react_1["default"].createElement(TextField_1.TextField, { leftSide: "\u0434\u043E", id: "\u0434\u043E", value: maxValue, onChange: function (e) { return setMaxValue(e.value); }, form: "clearDefault", size: "m" }))));
};
