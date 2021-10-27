import './TableSelectedOptionsList.css';
import React from 'react';
import { IconClose } from '../../../icons/IconClose/IconClose';
import { cn } from '../../../utils/bem';
import { isNotNil } from '../../../utils/type-guards';
import { Button } from '../../Button/Button';
import { Tag } from '../../Tag/Tag';
var cnTableSelectedOptionsList = cn('TableSelectedOptionsList');
var getTagLabel = function (name, value) {
    if (!isNotNil(value)) {
        return name;
    }
    var restName = '';
    if (Array.isArray(value)) {
        restName = value.map(function (_a) {
            var name = _a.name;
            return name;
        }).join(', ');
    }
    if (value.min && value.max) {
        restName = "\u043E\u0442 " + value.min + " \u0434\u043E " + value.max;
    }
    else if (value.min) {
        restName = "\u043E\u0442 " + value.min;
    }
    else if (value.max) {
        restName = "\u0434\u043E " + value.max;
    }
    if (value.name) {
        restName = "" + value.name;
    }
    return name + restName;
};
export var TableSelectedOptionsList = function (_a) {
    var values = _a.values, onRemove = _a.onRemove, onReset = _a.onReset;
    return (React.createElement("div", { className: cnTableSelectedOptionsList() },
        React.createElement("div", { className: cnTableSelectedOptionsList('Options') }, values.map(function (option) { return (React.createElement(Tag, { className: cnTableSelectedOptionsList('Option'), key: option.id, label: getTagLabel(option.name, option.value), size: "xs", mode: "cancel", onCancel: function () { return onRemove(option.id); } })); })),
        React.createElement(Button, { type: "button", onClick: onReset, title: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B", size: "xs", view: "clear", onlyIcon: true, iconLeft: IconClose, className: cnTableSelectedOptionsList('Button') })));
};
