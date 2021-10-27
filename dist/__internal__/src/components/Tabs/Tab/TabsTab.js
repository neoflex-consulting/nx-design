import './TabsTab.css';
import React, { forwardRef } from 'react';
import { cnMixFocus } from '../../../mixs/MixFocus/MixFocus';
import { cn } from '../../../utils/bem';
import { getSizeByMap } from '../../../utils/getSizeByMap';
export var cnTabsTab = cn('TabsTab');
var sizeMap = {
    s: 'xs',
    m: 's'
};
export var TabsTab = forwardRef(function (props, ref) {
    var label = props.label, onChange = props.onChange, checked = props.checked, size = props.size, onlyIcon = props.onlyIcon, Icon = props.icon, iconSizeProp = props.iconSize, className = props.className;
    var iconSize = getSizeByMap(sizeMap, size, iconSizeProp);
    return (React.createElement("button", { className: cnTabsTab({ size: size, checked: checked, onlyIcon: onlyIcon }, [cnMixFocus({ before: true }), className]), onClick: checked ? undefined : onChange, ref: ref, role: "tab", type: "button", title: onlyIcon ? label : undefined },
        Icon && React.createElement(Icon, { className: cnTabsTab('Icon'), size: iconSize }),
        !onlyIcon && label));
});
