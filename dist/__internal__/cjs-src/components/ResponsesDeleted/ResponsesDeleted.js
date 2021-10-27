"use strict";
exports.__esModule = true;
exports.ResponsesDeleted = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ResponsesImageDeleted_1 = require("../../responsesImages/ResponsesImageDeleted/ResponsesImageDeleted");
var Button_1 = require("../Button/Button");
var createResponses_1 = require("../Responses/createResponses");
exports.ResponsesDeleted = createResponses_1.createResponses({
    name: 'ResponsesDeleted',
    image: ResponsesImageDeleted_1.ResponsesImageDeleted,
    title: '*Что-то* удалено',
    description: '*Что-то* успешно удалено',
    actions: (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Button_1.Button, { label: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u043D\u0430 \u043C\u0435\u0441\u0442\u043E", view: "ghost", style: { marginRight: 'var(--space-m)' } }),
        react_1["default"].createElement(Button_1.Button, { label: "\u041E\u0442\u043B\u0438\u0447\u043D\u043E!", view: "ghost" })))
});
