"use strict";
exports.__esModule = true;
exports.HeaderMenu = exports.cnHeaderMenu = void 0;
var tslib_1 = require("tslib");
require("./HeaderMenu.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
exports.cnHeaderMenu = bem_1.cn('HeaderMenu');
exports.HeaderMenu = function (_a) {
    var items = _a.items, className = _a.className, otherProps = tslib_1.__rest(_a, ["items", "className"]);
    return (react_1["default"].createElement("nav", tslib_1.__assign({}, otherProps, { className: exports.cnHeaderMenu(null, [className]) }),
        react_1["default"].createElement("ul", { className: exports.cnHeaderMenu('List') }, items.map(function (_a, index) {
            var label = _a.label, href = _a.href, target = _a.target, active = _a.active, onClick = _a.onClick;
            var Tag = href ? 'a' : 'div';
            return (react_1["default"].createElement("li", { className: exports.cnHeaderMenu('Item'), key: exports.cnHeaderMenu('Item', { index: index }) },
                react_1["default"].createElement(Tag, { className: exports.cnHeaderMenu('Link', { active: active }), href: href, target: target, onClick: onClick }, label)));
        }))));
};
