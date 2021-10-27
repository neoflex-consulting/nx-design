import { __assign } from "tslib";
import React from 'react';
import { cnIconFile, FileIcon } from '../FileIcon/FileIcon';
export function createFileIcon(_a) {
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
        return (React.createElement(FileIcon, __assign({}, props, { className: cnIconFile(null, [name, props.className]) }),
            React.createElement(Svg, { className: cnIconFile('Svg') }),
            props.children));
    };
    return FileIconComponent;
}
