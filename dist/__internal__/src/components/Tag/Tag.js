import { __assign, __rest } from "tslib";
import React from 'react';
import { TagBase } from '../TagBase/TagBase';
export var tagPropMode = ['button', 'check', 'cancel', 'link', 'info'];
export var tagPropModeDefault = tagPropMode[0];
function forwardRef(render) {
    return React.forwardRef(render);
}
export function getParams(mode, checked, onClick, onChange, onCancel) {
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
export var Tag = forwardRef(function (props, ref) {
    var _a = props.mode, mode = _a === void 0 ? tagPropModeDefault : _a, onChange = props.onChange, checked = props.checked, onCancel = props.onCancel, onClick = props.onClick, otherProps = __rest(props, ["mode", "onChange", "checked", "onCancel", "onClick"]);
    var params = getParams(mode, checked, onClick, onChange, onCancel);
    return React.createElement(TagBase, __assign({}, otherProps, params, { ref: ref }));
});
