"use strict";
exports.__esModule = true;
exports.Responses = exports.cnResponses = exports.responsesPropSizeDefault = exports.responsesPropSize = void 0;
var tslib_1 = require("tslib");
require("./Responses.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../utils/bem");
exports.responsesPropSize = ['l', 'm'];
exports.responsesPropSizeDefault = exports.responsesPropSize[0];
exports.cnResponses = bem_1.cn('Responses');
exports.Responses = react_1["default"].forwardRef(function (props, ref) {
    var className = props.className, title = props.title, description = props.description, _a = props.size, size = _a === void 0 ? exports.responsesPropSizeDefault : _a, image = props.image, actions = props.actions;
    var Image = image;
    return (react_1["default"].createElement("div", { className: exports.cnResponses({ size: size }, [className]), ref: ref },
        react_1["default"].createElement(Image, { className: exports.cnResponses('Image') }),
        title && react_1["default"].createElement("h1", { className: exports.cnResponses('Title') }, title),
        description && react_1["default"].createElement("p", { className: exports.cnResponses('Description') }, description),
        actions && react_1["default"].createElement("div", { className: exports.cnResponses('ButtonsWrapper') }, actions)));
});
