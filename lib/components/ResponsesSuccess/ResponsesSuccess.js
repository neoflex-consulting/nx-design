"use strict";
exports.__esModule = true;
exports.ResponsesSuccess = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ResponsesImageSuccess_1 = require("../../responsesImages/ResponsesImageSuccess/ResponsesImageSuccess");
var Button_1 = require("../Button/Button");
var createResponses_1 = require("../Responses/createResponses");
exports.ResponsesSuccess = createResponses_1.createResponses({
    name: 'ResponsesSuccess',
    image: ResponsesImageSuccess_1.ResponsesImageSuccess,
    title: 'Письмо отправлено',
    actions: react_1["default"].createElement(Button_1.Button, { label: "\u0425\u043E\u0440\u043E\u0448\u043E", view: "ghost" })
});
