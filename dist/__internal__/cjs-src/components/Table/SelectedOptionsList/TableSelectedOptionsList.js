"use strict";
exports.__esModule = true;
exports.TableSelectedOptionsList = void 0;
var tslib_1 = require("tslib");
require("./TableSelectedOptionsList.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconClose_1 = require("../../../icons/IconClose/IconClose");
var bem_1 = require("../../../utils/bem");
var type_guards_1 = require("../../../utils/type-guards");
var Button_1 = require("../../Button/Button");
var Tag_1 = require("../../Tag/Tag");
var cnTableSelectedOptionsList = bem_1.cn('TableSelectedOptionsList');
var getTagLabel = function (name, value) {
    if (!type_guards_1.isNotNil(value)) {
        return name;
    }
    var restName = '';
    if (Array.isArray(value)) {
        restName = value.map(function (_a) {
            var name = _a.name;
            return name;
        }).join(', ');
    }
    if (value.min && value.max) {
        restName = "\u043E\u0442 " + value.min + " \u0434\u043E " + value.max;
    }
    else if (value.min) {
        restName = "\u043E\u0442 " + value.min;
    }
    else if (value.max) {
        restName = "\u0434\u043E " + value.max;
    }
    if (value.name) {
        restName = "" + value.name;
    }
    return name + restName;
};
exports.TableSelectedOptionsList = function (_a) {
    var values = _a.values, onRemove = _a.onRemove, onReset = _a.onReset;
    return (react_1["default"].createElement("div", { className: cnTableSelectedOptionsList() },
        react_1["default"].createElement("div", { className: cnTableSelectedOptionsList('Options') }, values.map(function (option) { return (react_1["default"].createElement(Tag_1.Tag, { className: cnTableSelectedOptionsList('Option'), key: option.id, label: getTagLabel(option.name, option.value), size: "xs", mode: "cancel", onCancel: function () { return onRemove(option.id); } })); })),
        react_1["default"].createElement(Button_1.Button, { type: "button", onClick: onReset, title: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B", size: "xs", view: "clear", onlyIcon: true, iconLeft: IconClose_1.IconClose, className: cnTableSelectedOptionsList('Button') })));
};
