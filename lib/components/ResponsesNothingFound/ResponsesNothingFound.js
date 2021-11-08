"use strict";
exports.__esModule = true;
exports.ResponsesNothingFound = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ResponsesImageNothingFound_1 = require("../../responsesImages/ResponsesImageNothingFound/ResponsesImageNothingFound");
var index_1 = require("../index");
var createResponses_1 = require("../Responses/createResponses");
exports.ResponsesNothingFound = createResponses_1.createResponses({
    name: 'ResponsesNothingFound',
    image: ResponsesImageNothingFound_1.ResponsesImageNothingFound,
    title: 'Ничего не найдено',
    description: 'Попробуйте сформулировать запрос по-другому',
    actions: react_1["default"].createElement(index_1.Button, { label: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434", view: "ghost" })
});
