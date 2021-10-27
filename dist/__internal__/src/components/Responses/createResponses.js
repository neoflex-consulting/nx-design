import { __assign } from "tslib";
import React from 'react';
import { cnResponses, Responses } from './Responses';
export function createResponses(_a) {
    var name = _a.name, image = _a.image, title = _a.title, description = _a.description, actions = _a.actions;
    var ResponsesComponent = React.forwardRef(function (props, ref) {
        return (React.createElement(Responses, __assign({}, props, { ref: ref, className: cnResponses(null, [name, props.className]), title: props.title || title, description: props.description || description, actions: props.actions || actions, image: image })));
    });
    return ResponsesComponent;
}
