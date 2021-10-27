import { __read } from "tslib";
import React, { useState } from 'react';
import { cnMixFocus } from '../../../mixs/MixFocus/MixFocus';
import { cnChoiceGroup } from '../ChoiceGroup';
export var ChoiceGroupItem = function (props) {
    var label = props.label, onChange = props.onChange, checked = props.checked, multiple = props.multiple, Icon = props.icon, onlyIcon = props.onlyIcon, name = props.name, iconSize = props.iconSize;
    var _a = __read(useState(false), 2), focus = _a[0], setFocus = _a[1];
    var handleBlur = function () { return setFocus(false); };
    var handleFocus = function () { return setFocus(true); };
    return (React.createElement("label", { className: cnChoiceGroup('Label', { focus: focus, checked: checked }, [cnMixFocus()]), title: onlyIcon ? label : undefined },
        React.createElement("input", { type: multiple ? 'checkbox' : 'radio', className: cnChoiceGroup('Input'), checked: checked, onFocus: handleFocus, onBlur: handleBlur, value: name + "-" + label, onChange: onChange, name: name }),
        Icon && React.createElement(Icon, { className: cnChoiceGroup('Icon'), size: iconSize }),
        !onlyIcon && React.createElement("span", { className: cnChoiceGroup('Text') }, label)));
};
