import './SnackBar-ActionButton.css';
import React from 'react';
import { Button } from '../../Button/Button';
import { cnSnackBar } from '../SnackBar';
export var SnackBarActionButton = function (props) {
    var actions = props.actions;
    if (actions.length < 1) {
        return null;
    }
    return (React.createElement("div", { className: cnSnackBar('ActionButtonsWrapper') }, actions.map(function (item, i) { return (React.createElement(Button, { className: cnSnackBar('ActionButton'), key: i, size: "s", view: "ghost", label: item.label, onClick: item.onClick })); })));
};
