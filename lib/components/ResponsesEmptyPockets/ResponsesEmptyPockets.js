"use strict";
exports.__esModule = true;
exports.ResponsesEmptyPockets = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ResponsesImageEmptyPockets_1 = require("../../responsesImages/ResponsesImageEmptyPockets/ResponsesImageEmptyPockets");
var index_1 = require("../index");
var createResponses_1 = require("../Responses/createResponses");
exports.ResponsesEmptyPockets = createResponses_1.createResponses({
    name: 'ResponsesEmptyPockets',
    image: ResponsesImageEmptyPockets_1.ResponsesImageEmptyPockets,
    title: 'Здесь пока ничего нет',
    description: 'Будьте первым, добавьте что-нибудь красивое',
    actions: react_1["default"].createElement(index_1.Button, { label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C" })
});
