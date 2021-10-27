import { __read } from "tslib";
import './DragNDropFieldTooltip.css';
import React from 'react';
import { cn } from '../../../utils/bem';
import { Text } from '../../Text/Text';
import { Tooltip } from '../../Tooltip/Tooltip';
var cnDragNDropFieldTooltip = cn('DragNDropFieldTooltip');
export var DragNDropFieldTooltip = function (_a) {
    var anchorRef = _a.anchorRef, errors = _a.errors;
    var _b = __read(React.useState(false), 2), isHidden = _b[0], setIsHidden = _b[1];
    React.useEffect(function () {
        setIsHidden(false);
    }, [errors]);
    return isHidden || errors.length === 0 ? null : (React.createElement(Tooltip, { anchorRef: anchorRef, status: "alert", size: "l", isInteractive: false, onClickOutside: function () { return setIsHidden(true); } },
        React.createElement(Text, { size: "s" }, errors.length === 1 ? (errors[0]) : (React.createElement("ul", { className: cnDragNDropFieldTooltip('List') }, errors.map(function (error) { return (React.createElement("li", { key: error }, error)); }))))));
};
