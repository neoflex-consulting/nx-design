"use strict";
exports.__esModule = true;
exports.TextField = exports.cnTextField = exports.textFieldPropWidthDefault = exports.textFieldPropWidth = exports.textFieldPropState = exports.textFieldPropFormDefault = exports.textFieldPropForm = exports.textFieldPropViewDefault = exports.textFieldPropView = exports.textFieldPropSizeDefault = exports.textFieldPropSize = void 0;
var tslib_1 = require("tslib");
require("./TextField.css");
var react_1 = tslib_1.__importStar(require("react"));
var react_textarea_autosize_1 = tslib_1.__importDefault(require("react-textarea-autosize"));
var bem_1 = require("../../utils/bem");
var getSizeByMap_1 = require("../../utils/getSizeByMap");
var usePropsHandler_1 = require("../EventInterceptor/usePropsHandler");
exports.textFieldPropSize = ['m', 'xs', 's', 'l'];
exports.textFieldPropSizeDefault = exports.textFieldPropSize[0];
exports.textFieldPropView = ['default', 'clear'];
exports.textFieldPropViewDefault = exports.textFieldPropView[0];
exports.textFieldPropForm = [
    'default',
    'defaultClear',
    'defaultBrick',
    'brick',
    'brickDefault',
    'brickClear',
    'brickRound',
    'round',
    'roundClear',
    'roundBrick',
    'clearRound',
    'clearDefault',
    'clearBrick',
    'clearClear',
];
exports.textFieldPropFormDefault = exports.textFieldPropForm[0];
exports.textFieldPropState = ['alert', 'success', 'warning'];
exports.textFieldPropWidth = ['default', 'full'];
exports.textFieldPropWidthDefault = exports.textFieldPropWidth[0];
exports.cnTextField = bem_1.cn('TextField');
var sizeMap = {
    xs: 'xs',
    s: 's',
    m: 's',
    l: 'm'
};
exports.TextField = react_1["default"].forwardRef(function (props, ref) {
    var textFieldRef = ref || react_1["default"].useRef(null);
    var _a = usePropsHandler_1.usePropsHandler(exports.cnTextField(), props, textFieldRef), className = _a.className, _b = _a.type, type = _b === void 0 ? 'text' : _b, value = _a.value, onChange = _a.onChange, id = _a.id, name = _a.name, rows = _a.rows, cols = _a.cols, minRows = _a.minRows, maxRows = _a.maxRows, inputRef = _a.inputRef, maxLength = _a.maxLength, disabled = _a.disabled, _c = _a.size, size = _c === void 0 ? exports.textFieldPropSizeDefault : _c, _d = _a.view, view = _d === void 0 ? exports.textFieldPropViewDefault : _d, _e = _a.form, form = _e === void 0 ? exports.textFieldPropFormDefault : _e, state = _a.state, _f = _a.width, width = _f === void 0 ? exports.textFieldPropWidthDefault : _f, onBlur = _a.onBlur, onFocus = _a.onFocus, _g = _a.autoFocus, autoFocus = _g === void 0 ? false : _g, placeholder = _a.placeholder, leftSide = _a.leftSide, rightSide = _a.rightSide, autoComplete = _a.autoComplete, max = _a.max, min = _a.min, readOnly = _a.readOnly, required = _a.required, step = _a.step, tabIndex = _a.tabIndex, ariaLabel = _a.ariaLabel, iconSizeProp = _a.iconSize, otherProps = tslib_1.__rest(_a, ["className", "type", "value", "onChange", "id", "name", "rows", "cols", "minRows", "maxRows", "inputRef", "maxLength", "disabled", "size", "view", "form", "state", "width", "onBlur", "onFocus", "autoFocus", "placeholder", "leftSide", "rightSide", "autoComplete", "max", "min", "readOnly", "required", "step", "tabIndex", "ariaLabel", "iconSize"]);
    var _h = tslib_1.__read(react_1.useState(autoFocus), 2), focus = _h[0], setFocus = _h[1];
    var textarea = type === 'textarea';
    var LeftIcon = leftSide;
    var RightIcon = rightSide;
    var leftSideIsString = typeof leftSide === 'string';
    var rightSideIsString = typeof rightSide === 'string';
    var iconSize = getSizeByMap_1.getSizeByMap(sizeMap, size, iconSizeProp);
    var handleChange = function (e) {
        var value = e.target.value;
        !disabled && onChange && onChange({ e: e, id: id, name: name, value: value || null });
    };
    var handleBlur = function (e) {
        setFocus(false);
        onBlur && onBlur(e);
    };
    var handleFocus = function (e) {
        setFocus(true);
        onFocus && onFocus(e);
    };
    var commonProps = {
        'className': exports.cnTextField('Input'),
        'value': value || '',
        'onChange': handleChange,
        maxLength: maxLength,
        disabled: disabled,
        'onBlur': handleBlur,
        'onFocus': handleFocus,
        autoFocus: autoFocus,
        placeholder: placeholder,
        autoComplete: autoComplete,
        readOnly: readOnly,
        required: required,
        tabIndex: tabIndex,
        name: name,
        'id': id ? id.toString() : '',
        'aria-label': ariaLabel
    };
    var textareaProps = {
        rows: rows,
        cols: cols,
        minRows: minRows || rows,
        maxRows: maxRows || rows,
        inputRef: inputRef === null
            ? undefined
            : inputRef
    };
    var inputProps = {
        type: type,
        max: max,
        min: min,
        step: step,
        ref: inputRef
    };
    return (react_1["default"].createElement("div", tslib_1.__assign({ className: exports.cnTextField({
            size: size,
            view: view,
            form: form,
            state: state,
            disabled: disabled,
            width: width,
            type: type,
            focus: focus,
            withValue: !!value
        }, [className]), ref: textFieldRef }, otherProps),
        LeftIcon && (react_1["default"].createElement("div", { className: exports.cnTextField('Side', {
                position: 'left',
                type: leftSideIsString ? 'string' : 'icon'
            }), title: typeof leftSide === 'string' ? leftSide : undefined }, leftSideIsString ? (leftSide) : (react_1["default"].createElement(LeftIcon, { className: exports.cnTextField('Icon'), size: iconSize })))),
        textarea ? (react_1["default"].createElement(react_textarea_autosize_1["default"], tslib_1.__assign({}, commonProps, textareaProps))) : (react_1["default"].createElement("input", tslib_1.__assign({}, commonProps, inputProps))),
        RightIcon && (react_1["default"].createElement("div", { className: exports.cnTextField('Side', {
                position: 'right',
                type: rightSideIsString ? 'string' : 'icon'
            }), title: typeof rightSide === 'string' ? rightSide : undefined }, rightSideIsString ? (rightSide) : (react_1["default"].createElement(RightIcon, { className: exports.cnTextField('Icon'), size: iconSize }))))));
});
