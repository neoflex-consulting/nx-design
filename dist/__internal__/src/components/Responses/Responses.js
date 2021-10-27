import './Responses.css';
import React from 'react';
import { cn } from '../../utils/bem';
export var responsesPropSize = ['l', 'm'];
export var responsesPropSizeDefault = responsesPropSize[0];
export var cnResponses = cn('Responses');
export var Responses = React.forwardRef(function (props, ref) {
    var className = props.className, title = props.title, description = props.description, _a = props.size, size = _a === void 0 ? responsesPropSizeDefault : _a, image = props.image, actions = props.actions;
    var Image = image;
    return (React.createElement("div", { className: cnResponses({ size: size }, [className]), ref: ref },
        React.createElement(Image, { className: cnResponses('Image') }),
        title && React.createElement("h1", { className: cnResponses('Title') }, title),
        description && React.createElement("p", { className: cnResponses('Description') }, description),
        actions && React.createElement("div", { className: cnResponses('ButtonsWrapper') }, actions)));
});
