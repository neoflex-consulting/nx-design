import { __assign, __rest } from "tslib";
import './Text.css';
import React from 'react';
import { cn } from '../../utils/bem';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
export var textPropAlign = ['left', 'center', 'right'];
export var textPropDisplay = ['block', 'inlineBlock', 'inline'];
export var textPropFont = ['primary', 'mono'];
export var textPropCursor = ['pointer'];
export var textPropDecoration = ['underline'];
export var textPropLineHeight = ['2xs', 'xs', 's', 'm', 'l'];
export var textPropLineHeightDefault = 'm';
export var textPropSize = [
    'm',
    '2xs',
    'xs',
    's',
    'l',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
];
export var textPropSizeDefault = textPropSize[0];
export var textPropSpacing = ['xs', 's', 'm', 'l'];
export var textPropType = ['blockquote', 'p', 'h3', 'h2', 'h1'];
export var textPropView = [
    'primary',
    'alert',
    'brand',
    'ghost',
    'link',
    'linkMinor',
    'primary',
    'secondary',
    'success',
    'warning',
];
export var textPropViewDefault = textPropView[0];
export var textPropWeight = ['black', 'bold', 'light', 'regular', 'semibold', 'thin'];
export var textPropFontStyle = ['italic'];
export var textPropTransform = ['uppercase'];
export var textPropWidth = ['default'];
export var cnText = cn('Text');
export var Text = forwardRefWithAs(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'div' : _a, align = props.align, cursor = props.cursor, decoration = props.decoration, display = props.display, font = props.font, _b = props.lineHeight, lineHeight = _b === void 0 ? textPropLineHeightDefault : _b, _c = props.size, size = _c === void 0 ? textPropSizeDefault : _c, spacing = props.spacing, fontStyle = props.fontStyle, transform = props.transform, type = props.type, _d = props.view, view = _d === void 0 ? textPropViewDefault : _d, weight = props.weight, width = props.width, className = props.className, children = props.children, otherProps = __rest(props, ["as", "align", "cursor", "decoration", "display", "font", "lineHeight", "size", "spacing", "fontStyle", "transform", "type", "view", "weight", "width", "className", "children"]);
    var Tag = as;
    return (React.createElement(Tag, __assign({}, otherProps, { className: cnText({
            align: align,
            cursor: cursor,
            decoration: decoration,
            display: display,
            font: font,
            lineHeight: lineHeight,
            size: size,
            spacing: spacing,
            fontStyle: fontStyle,
            transform: transform,
            type: type,
            view: view,
            weight: weight,
            width: width
        }, [className]), ref: ref }), children));
});
