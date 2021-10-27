import { __assign, __rest } from "tslib";
import './HeaderSearchBar.css';
import React from 'react';
import { IconSearch } from '../../../icons/IconSearch/IconSearch';
import { cn } from '../../../utils/bem';
import { TextField } from '../../TextField/TextField';
export var cnHeaderSearchBar = cn('HeaderSearchBar');
export var HeaderSearchBar = function (_a) {
    var placeholder = _a.placeholder, label = _a.label, className = _a.className, value = _a.value, onSearch = _a.onSearch, onChange = _a.onChange, otherProps = __rest(_a, ["placeholder", "label", "className", "value", "onSearch", "onChange"]);
    var handleSearch = function (e) {
        e.preventDefault();
        onSearch && onSearch({ e: e, value: value || null });
    };
    return (React.createElement("form", __assign({}, otherProps, { onSubmit: handleSearch, className: cnHeaderSearchBar(null, [className]) }),
        label && (React.createElement("label", { className: cnHeaderSearchBar('Label'), htmlFor: cnHeaderSearchBar('Label') }, label)),
        React.createElement(TextField, { className: cnHeaderSearchBar('Input'), name: cnHeaderSearchBar('Input'), placeholder: placeholder, size: "m", width: "full", value: value, onChange: onChange, leftSide: IconSearch })));
};
