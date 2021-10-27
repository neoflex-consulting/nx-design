"use strict";
exports.__esModule = true;
exports.createResponsesImage = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ResponsesImage_1 = require("../ResponsesImage/ResponsesImage");
function createResponsesImage(_a) {
    var name = _a.name, Svg = _a.component;
    var IconComponent = function (props) {
        return (react_1["default"].createElement(ResponsesImage_1.ResponsesImage, tslib_1.__assign({}, props, { className: ResponsesImage_1.cnResponsesImage(null, [name, props.className]) }),
            react_1["default"].createElement(Svg, { className: ResponsesImage_1.cnResponsesImage('Svg') })));
    };
    return IconComponent;
}
exports.createResponsesImage = createResponsesImage;
