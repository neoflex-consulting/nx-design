"use strict";
exports.__esModule = true;
exports.createFileIcon = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var FileIcon_1 = require("../FileIcon/FileIcon");
function createFileIcon(_a) {
    var m = _a.m, s = _a.s, name = _a.name;
    var FileIconComponent = function (props) {
        function getSvgBySize(size) {
            switch (size) {
                case 's':
                    return s;
                case 'm':
                    return m;
                default:
                    return m;
            }
        }
        var Svg = getSvgBySize(props.size);
        return (react_1["default"].createElement(FileIcon_1.FileIcon, tslib_1.__assign({}, props, { className: FileIcon_1.cnIconFile(null, [name, props.className]) }),
            react_1["default"].createElement(Svg, { className: FileIcon_1.cnIconFile('Svg') }),
            props.children));
    };
    return FileIconComponent;
}
exports.createFileIcon = createFileIcon;
