"use strict";
exports.__esModule = true;
exports.createResponses = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Responses_1 = require("./Responses");
function createResponses(_a) {
    var name = _a.name, image = _a.image, title = _a.title, description = _a.description, actions = _a.actions;
    var ResponsesComponent = react_1["default"].forwardRef(function (props, ref) {
        return (react_1["default"].createElement(Responses_1.Responses, tslib_1.__assign({}, props, { ref: ref, className: Responses_1.cnResponses(null, [name, props.className]), title: props.title || title, description: props.description || description, actions: props.actions || actions, image: image })));
    });
    return ResponsesComponent;
}
exports.createResponses = createResponses;
