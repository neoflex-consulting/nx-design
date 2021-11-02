"use strict";
exports.__esModule = true;
exports.Responses404 = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ResponsesImage404_1 = require("../../responsesImages/ResponsesImage404/ResponsesImage404");
var index_1 = require("../index");
var createResponses_1 = require("../Responses/createResponses");
exports.Responses404 = createResponses_1.createResponses({
    name: 'Responses404',
    image: ResponsesImage404_1.ResponsesImage404,
    title: 'Такой страницы нет',
    description: 'Возможно, эту страницу уже удалили, или в вашей ссылке ошибка',
    actions: react_1["default"].createElement(index_1.Button, { label: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434", view: "ghost" })
});
