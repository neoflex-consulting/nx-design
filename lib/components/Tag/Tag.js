"use strict";
exports.__esModule = true;
exports.Tag = exports.getParams = exports.tagPropModeDefault = exports.tagPropMode = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TagBase_1 = require("../TagBase/TagBase");
exports.tagPropMode = ['button', 'check', 'cancel', 'link', 'info'];
exports.tagPropModeDefault = exports.tagPropMode[0];
function forwardRef(render) {
    return react_1["default"].forwardRef(render);
}
function getParams(mode, checked, onClick, onChange, onCancel) {
    switch (mode) {
        case 'button':
            return {
                view: 'filled',
                onClick: onClick,
                as: 'button',
                withAction: true
            };
        case 'link':
            return {
                view: 'filled',
                onClick: onClick,
                as: 'a',
                withAction: true
            };
        case 'check':
            return {
                view: checked ? 'filled' : 'stroked',
                onClick: typeof onChange === 'function'
                    ? function (e) { return onChange({ e: e, checked: !checked }); }
                    : undefined,
                as: 'button',
                withAction: true
            };
        case 'cancel':
            return {
                view: 'filled',
                onCancel: onCancel,
                as: 'span'
            };
        case 'info':
            return {
                view: 'filled',
                as: 'span'
            };
    }
}
exports.getParams = getParams;
exports.Tag = forwardRef(function (props, ref) {
    var _a = props.mode, mode = _a === void 0 ? exports.tagPropModeDefault : _a, onChange = props.onChange, checked = props.checked, onCancel = props.onCancel, onClick = props.onClick, otherProps = tslib_1.__rest(props, ["mode", "onChange", "checked", "onCancel", "onClick"]);
    var params = getParams(mode, checked, onClick, onChange, onCancel);
    return react_1["default"].createElement(TagBase_1.TagBase, tslib_1.__assign({}, otherProps, params, { ref: ref }));
});
