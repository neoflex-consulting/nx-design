"use strict";
exports.__esModule = true;
exports.Loader = exports.cnLoader = exports.loaderPropSizeDefault = exports.loaderPropSize = void 0;
var tslib_1 = require("tslib");
require("./Loader.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../utils/bem");
exports.loaderPropSize = ['m', 's'];
exports.loaderPropSizeDefault = exports.loaderPropSize[0];
exports.cnLoader = bem_1.cn('Loader');
exports.Loader = react_1["default"].forwardRef(function (props, ref) {
    var className = props.className, _a = props.size, size = _a === void 0 ? exports.loaderPropSizeDefault : _a, otherProps = tslib_1.__rest(props, ["className", "size"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { ref: ref, className: exports.cnLoader({ size: size }, [className]) }),
        react_1["default"].createElement("div", { className: exports.cnLoader('Dot') })));
});
