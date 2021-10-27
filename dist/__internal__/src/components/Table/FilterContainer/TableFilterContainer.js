import './TableFilterContainer.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { Text } from '../../Text/Text';
var cnTableFilterContainer = cn('TableFilterContainer');
export var TableFilterContainer = function (_a) {
    var onConfirm = _a.onConfirm, title = _a.title, _b = _a.confirmButtonLabel, confirmButtonLabel = _b === void 0 ? 'Применить' : _b, _c = _a.cancelButtonLabel, cancelButtonLabel = _c === void 0 ? 'Отмена' : _c, onCancel = _a.onCancel, children = _a.children, className = _a.className;
    return (React.createElement("div", { className: cnTableFilterContainer(null, [className]) },
        title && (React.createElement(Text, { view: "primary", size: "m", className: cnTableFilterContainer('Title'), lineHeight: "l" }, title)),
        children,
        React.createElement("div", { className: cnTableFilterContainer('Buttons') },
            React.createElement(Button, { label: cancelButtonLabel, size: "s", view: "ghost", onClick: onCancel }),
            React.createElement(Button, { label: confirmButtonLabel, size: "s", view: "primary", onClick: onConfirm }))));
};
