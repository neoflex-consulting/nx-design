"use strict";
exports.__esModule = true;
exports.Text = exports.cnText = exports.textPropWidth = exports.textPropTransform = exports.textPropFontStyle = exports.textPropWeight = exports.textPropViewDefault = exports.textPropView = exports.textPropType = exports.textPropSpacing = exports.textPropSizeDefault = exports.textPropSize = exports.textPropLineHeightDefault = exports.textPropLineHeight = exports.textPropDecoration = exports.textPropCursor = exports.textPropFont = exports.textPropDisplay = exports.textPropAlign = void 0;
var tslib_1 = require("tslib");
require("./Text.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../utils/bem");
var PropsWithAsAttributes_1 = require("../../utils/types/PropsWithAsAttributes");
exports.textPropAlign = ['left', 'center', 'right'];
exports.textPropDisplay = ['block', 'inlineBlock', 'inline'];
exports.textPropFont = ['primary', 'mono'];
exports.textPropCursor = ['pointer'];
exports.textPropDecoration = ['underline'];
exports.textPropLineHeight = ['2xs', 'xs', 's', 'm', 'l'];
exports.textPropLineHeightDefault = 'm';
exports.textPropSize = [
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
exports.textPropSizeDefault = exports.textPropSize[0];
exports.textPropSpacing = ['xs', 's', 'm', 'l'];
exports.textPropType = ['blockquote', 'p', 'h3', 'h2', 'h1'];
exports.textPropView = [
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
exports.textPropViewDefault = exports.textPropView[0];
exports.textPropWeight = ['black', 'bold', 'light', 'regular', 'semibold', 'thin'];
exports.textPropFontStyle = ['italic'];
exports.textPropTransform = ['uppercase'];
exports.textPropWidth = ['default'];
exports.cnText = bem_1.cn('Text');
exports.Text = PropsWithAsAttributes_1.forwardRefWithAs(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'div' : _a, align = props.align, cursor = props.cursor, decoration = props.decoration, display = props.display, font = props.font, _b = props.lineHeight, lineHeight = _b === void 0 ? exports.textPropLineHeightDefault : _b, _c = props.size, size = _c === void 0 ? exports.textPropSizeDefault : _c, spacing = props.spacing, fontStyle = props.fontStyle, transform = props.transform, type = props.type, _d = props.view, view = _d === void 0 ? exports.textPropViewDefault : _d, weight = props.weight, width = props.width, className = props.className, children = props.children, otherProps = tslib_1.__rest(props, ["as", "align", "cursor", "decoration", "display", "font", "lineHeight", "size", "spacing", "fontStyle", "transform", "type", "view", "weight", "width", "className", "children"]);
    var Tag = as;
    return (react_1["default"].createElement(Tag, tslib_1.__assign({}, otherProps, { className: exports.cnText({
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
