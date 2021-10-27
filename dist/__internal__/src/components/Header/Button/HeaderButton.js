import { __assign, __rest } from "tslib";
import React from 'react';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
export var cnHeaderButton = cn('HeaderButton');
export var HeaderButton = function (props) {
    var className = props.className, otherProps = __rest(props, ["className"]);
    return (React.createElement(Button, __assign({}, otherProps, { className: cnHeaderButton(null, [className]), size: "m", view: "clear", form: "round", onlyIcon: true })));
};
