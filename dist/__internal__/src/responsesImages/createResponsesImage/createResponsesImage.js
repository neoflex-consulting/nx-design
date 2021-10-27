import { __assign } from "tslib";
import React from 'react';
import { cnResponsesImage, ResponsesImage, } from '../ResponsesImage/ResponsesImage';
export function createResponsesImage(_a) {
    var name = _a.name, Svg = _a.component;
    var IconComponent = function (props) {
        return (React.createElement(ResponsesImage, __assign({}, props, { className: cnResponsesImage(null, [name, props.className]) }),
            React.createElement(Svg, { className: cnResponsesImage('Svg') })));
    };
    return IconComponent;
}
