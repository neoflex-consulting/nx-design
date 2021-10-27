"use strict";
exports.__esModule = true;
exports.HeaderSearchBar = exports.cnHeaderSearchBar = void 0;
var tslib_1 = require("tslib");
require("./HeaderSearchBar.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconSearch_1 = require("../../../icons/IconSearch/IconSearch");
var bem_1 = require("../../../utils/bem");
var TextField_1 = require("../../TextField/TextField");
exports.cnHeaderSearchBar = bem_1.cn('HeaderSearchBar');
exports.HeaderSearchBar = function (_a) {
    var placeholder = _a.placeholder, label = _a.label, className = _a.className, value = _a.value, onSearch = _a.onSearch, onChange = _a.onChange, otherProps = tslib_1.__rest(_a, ["placeholder", "label", "className", "value", "onSearch", "onChange"]);
    var handleSearch = function (e) {
        e.preventDefault();
        onSearch && onSearch({ e: e, value: value || null });
    };
    return (react_1["default"].createElement("form", tslib_1.__assign({}, otherProps, { onSubmit: handleSearch, className: exports.cnHeaderSearchBar(null, [className]) }),
        label && (react_1["default"].createElement("label", { className: exports.cnHeaderSearchBar('Label'), htmlFor: exports.cnHeaderSearchBar('Label') }, label)),
        react_1["default"].createElement(TextField_1.TextField, { className: exports.cnHeaderSearchBar('Input'), name: exports.cnHeaderSearchBar('Input'), placeholder: placeholder, size: "m", width: "full", value: value, onChange: onChange, leftSide: IconSearch_1.IconSearch })));
};
