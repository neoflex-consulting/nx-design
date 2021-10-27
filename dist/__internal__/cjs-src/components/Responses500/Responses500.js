"use strict";
exports.__esModule = true;
exports.Responses500 = void 0;
var ResponsesImage500_1 = require("../../responsesImages/ResponsesImage500/ResponsesImage500");
var createResponses_1 = require("../Responses/createResponses");
exports.Responses500 = createResponses_1.createResponses({
    name: 'Responses500',
    image: ResponsesImage500_1.ResponsesImage500,
    title: 'Что-то сломалось',
    description: 'Попробуйте обновить страницу или зайдите позже'
});
