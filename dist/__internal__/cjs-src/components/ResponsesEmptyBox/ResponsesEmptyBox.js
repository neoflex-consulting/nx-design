"use strict";
exports.__esModule = true;
exports.ResponsesEmptyBox = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ResponsesImageEmptyBox_1 = require("../../responsesImages/ResponsesImageEmptyBox/ResponsesImageEmptyBox");
var Button_1 = require("../Button/Button");
var createResponses_1 = require("../Responses/createResponses");
exports.ResponsesEmptyBox = createResponses_1.createResponses({
    name: 'ResponsesEmptyBox',
    image: ResponsesImageEmptyBox_1.ResponsesImageEmptyBox,
    title: 'Здесь пока ничего нет',
    description: 'Будьте первым, добавьте что-нибудь полезное',
    actions: react_1["default"].createElement(Button_1.Button, { label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C" })
});
