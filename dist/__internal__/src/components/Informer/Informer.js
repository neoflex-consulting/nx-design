import { __assign, __rest } from "tslib";
import './Informer.css';
import React from 'react';
import { classnames } from '@bem-react/classnames';
import { cn } from '../../utils/bem';
import { Text } from '../Text/Text';
import { useTheme } from '../Theme/Theme';
export var informerPropView = ['filled', 'bordered'];
export var informerPropViewDefault = informerPropView[0];
export var informerPropStatus = ['success', 'system', 'alert', 'alert', 'warning'];
export var informerPropStatusDefault = informerPropStatus[0];
export var informerPropSize = ['m', 's'];
export var informerPropSiseDefault = informerPropSize[0];
export var cnInformer = cn('Informer');
export var Informer = React.forwardRef(function (props, ref) {
    var _a = props.view, view = _a === void 0 ? informerPropViewDefault : _a, _b = props.status, status = _b === void 0 ? informerPropStatusDefault : _b, _c = props.size, size = _c === void 0 ? informerPropSiseDefault : _c, icon = props.icon, label = props.label, title = props.title, children = props.children, otherProps = __rest(props, ["view", "status", "size", "icon", "label", "title", "children"]);
    var Icon = icon;
    var withIcon = !!icon;
    var themeClassNames = useTheme().themeClassNames;
    var className = status !== 'system' && view === 'filled'
        ? classnames(props.className, themeClassNames.color.accent)
        : props.className;
    return (React.createElement("div", __assign({}, otherProps, { className: cnInformer({
            view: view,
            status: status,
            withIcon: withIcon
        }, [className]), ref: ref }),
        Icon && React.createElement(Icon, { className: cnInformer('Icon'), size: "s" }),
        React.createElement("div", { className: cnInformer('Content') },
            title && (React.createElement(Text, { className: cnInformer('Title'), weight: "bold", size: size }, title)),
            label ? (React.createElement(Text, { className: cnInformer('Label'), size: size }, label)) : (children))));
});
