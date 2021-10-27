import { __assign } from "tslib";
import React from 'react';
import { cnIcon, Icon } from '../Icon/Icon';
export function createIcon(_a) {
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
        return (React.createElement(Icon, __assign({}, props, { className: cnIcon(null, [name, props.className]) }),
            React.createElement(Svg, { className: cnIcon('Svg') })));
    };
    return IconComponent;
}
