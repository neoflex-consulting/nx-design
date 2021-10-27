"use strict";
exports.__esModule = true;
exports.createIcon = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Icon_1 = require("../Icon/Icon");
function createIcon(_a) {
    var m = _a.m, s = _a.s, xs = _a.xs, name = _a.name;
    var IconComponent = function (props) {
        function getSvgBySize(size) {
            switch (size) {
                case 'xs':
                    return xs;
                case 's':
                    return s;
                case 'm':
                    return m;
                default:
                    return m;
            }
        }
        var Svg = getSvgBySize(props.size);
        return (react_1["default"].createElement(Icon_1.Icon, tslib_1.__assign({}, props, { className: Icon_1.cnIcon(null, [name, props.className]) }),
            react_1["default"].createElement(Svg, { className: Icon_1.cnIcon('Svg') })));
    };
    return IconComponent;
}
exports.createIcon = createIcon;
