"use strict";
exports.__esModule = true;
exports.Responses403 = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ResponsesImage403_1 = require("../../responsesImages/ResponsesImage403/ResponsesImage403");
var Button_1 = require("../Button/Button");
var createResponses_1 = require("../Responses/createResponses");
exports.Responses403 = createResponses_1.createResponses({
    name: 'Responses403',
    image: ResponsesImage403_1.ResponsesImage403,
    title: 'Нет доступа',
    description: 'Если вы уверены, что вам нужна эта страница, запросите доступ у администратора',
    actions: react_1["default"].createElement(Button_1.Button, { label: "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F", view: "ghost" })
});
