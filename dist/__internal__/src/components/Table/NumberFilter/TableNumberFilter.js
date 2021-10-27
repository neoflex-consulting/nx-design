import { __read } from "tslib";
import './TableNumberFilter.css';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils/bem';
import { TextField } from '../../TextField/TextField';
import { TableFilterContainer } from '../FilterContainer/TableFilterContainer';
var cnNumberFilter = cn('TableNumberFilter');
export var TableNumberFilter = function (_a) {
    var onConfirm = _a.onConfirm, filterValue = _a.filterValue, title = _a.title, onCancel = _a.onCancel;
    var _b = __read(useState(filterValue === null || filterValue === void 0 ? void 0 : filterValue.min), 2), minValue = _b[0], setMinValue = _b[1];
    var _c = __read(useState(filterValue === null || filterValue === void 0 ? void 0 : filterValue.max), 2), maxValue = _c[0], setMaxValue = _c[1];
    var textFieldRef = useRef(null);
    useEffect(function () {
        // setTimeout нужен для корректного выставления автофокуса
        setTimeout(function () {
            if (textFieldRef.current) {
                textFieldRef.current.focus();
            }
        });
    }, []);
    var confirmHandler = function () {
        onConfirm({
            min: minValue,
            max: maxValue
        });
    };
    return (React.createElement(TableFilterContainer, { title: title, onCancel: onCancel, onConfirm: confirmHandler },
        React.createElement("div", { className: cnNumberFilter('Inputs') },
            React.createElement(TextField, { id: "\u043E\u0442", leftSide: "\u043E\u0442", value: minValue, onChange: function (e) { return setMinValue(e.value); }, form: "defaultBrick", size: "m", inputRef: textFieldRef }),
            React.createElement(TextField, { leftSide: "\u0434\u043E", id: "\u0434\u043E", value: maxValue, onChange: function (e) { return setMaxValue(e.value); }, form: "clearDefault", size: "m" }))));
};
