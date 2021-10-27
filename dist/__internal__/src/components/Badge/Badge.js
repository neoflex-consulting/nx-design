import { __assign, __rest } from "tslib";
import './Badge.css';
import React from 'react';
import { classnames } from '@bem-react/classnames';
import { cn } from '../../utils/bem';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
import { useTheme } from '../Theme/Theme';
export var badgePropSize = ['m', 's', 'l'];
export var badgePropSizeDefault = badgePropSize[0];
export var badgePropView = ['filled', 'stroked'];
export var badgePropViewDefault = badgePropView[0];
export var badgePropStatus = ['normal', 'success', 'error', 'warning', 'system'];
export var badgePropStatusDefault = badgePropStatus[0];
export var badgePropForm = ['default', 'round'];
export var badgePropFormDefault = badgePropForm[0];
export var cnBadge = cn('Badge');
export var Badge = forwardRefWithAs(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? badgePropSizeDefault : _a, _b = props.view, view = _b === void 0 ? badgePropViewDefault : _b, _c = props.status, status = _c === void 0 ? badgePropStatusDefault : _c, _d = props.form, form = _d === void 0 ? badgePropFormDefault : _d, icon = props.icon, minified = props.minified, label = props.label, _e = props.as, as = _e === void 0 ? 'div' : _e, otherProps = __rest(props, ["size", "view", "status", "form", "icon", "minified", "label", "as"]);
    var Tag = as;
    var themeClassNames = useTheme().themeClassNames;
    var className = status !== 'system' && view === 'filled'
        ? classnames(props.className, themeClassNames.color.accent)
        : props.className;
    var Icon = icon;
    var withIcon = !!icon;
    if (minified) {
        return (React.createElement(Tag, __assign({}, otherProps, { className: cnBadge({ size: size, status: status, minified: minified }, [className]), title: label, ref: ref })));
    }
    return (React.createElement(Tag, __assign({}, otherProps, { className: cnBadge({ size: size, view: view, status: status, form: form, withIcon: withIcon }, [className]), ref: ref }), Icon ? (React.createElement(React.Fragment, null,
        React.createElement(Icon, { size: "xs", className: cnBadge('Icon') }),
        label)) : (label)));
});
