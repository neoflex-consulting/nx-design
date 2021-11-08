"use strict";
exports.__esModule = true;
exports.ResponsesConnectionError = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ResponsesImageConnectionError_1 = require("../../responsesImages/ResponsesImageConnectionError/ResponsesImageConnectionError");
var index_1 = require("../index");
var createResponses_1 = require("../Responses/createResponses");
exports.ResponsesConnectionError = createResponses_1.createResponses({
    name: 'ResponsesConnectionError',
    image: ResponsesImageConnectionError_1.ResponsesImageConnectionError,
    title: 'Проблемы с загрузкой',
    description: 'Какие-то проблемы со связью. Обновите страницу.',
    actions: react_1["default"].createElement(index_1.Button, { label: "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C", view: "ghost" })
});
