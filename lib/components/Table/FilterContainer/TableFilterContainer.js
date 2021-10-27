"use strict";
exports.__esModule = true;
exports.TableFilterContainer = void 0;
var tslib_1 = require("tslib");
require("./TableFilterContainer.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var Button_1 = require("../../Button/Button");
var Text_1 = require("../../Text/Text");
var cnTableFilterContainer = bem_1.cn('TableFilterContainer');
exports.TableFilterContainer = function (_a) {
    var onConfirm = _a.onConfirm, title = _a.title, _b = _a.confirmButtonLabel, confirmButtonLabel = _b === void 0 ? 'Применить' : _b, _c = _a.cancelButtonLabel, cancelButtonLabel = _c === void 0 ? 'Отмена' : _c, onCancel = _a.onCancel, children = _a.children, className = _a.className;
    return (react_1["default"].createElement("div", { className: cnTableFilterContainer(null, [className]) },
        title && (react_1["default"].createElement(Text_1.Text, { view: "primary", size: "m", className: cnTableFilterContainer('Title'), lineHeight: "l" }, title)),
        children,
        react_1["default"].createElement("div", { className: cnTableFilterContainer('Buttons') },
            react_1["default"].createElement(Button_1.Button, { label: cancelButtonLabel, size: "s", view: "ghost", onClick: onCancel }),
            react_1["default"].createElement(Button_1.Button, { label: confirmButtonLabel, size: "s", view: "primary", onClick: onConfirm }))));
};
