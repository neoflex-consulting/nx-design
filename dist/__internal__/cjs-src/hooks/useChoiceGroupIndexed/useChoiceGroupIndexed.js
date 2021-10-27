"use strict";
exports.__esModule = true;
exports.useChoiceGroupIndexed = void 0;
var tslib_1 = require("tslib");
function isMultiple(params) {
    return !!params.multiple;
}
function isNotMultiple(params) {
    return !params.multiple;
}
function formatValue(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === 'number') {
        return [value];
    }
    return [];
}
function useChoiceGroupIndexed(props) {
    var value = formatValue(props.value);
    var getChecked = function (index) { return value.includes(index); };
    var getOnChange = function (index) { return function (e) {
        if (isMultiple(props)) {
            var newValue = void 0;
            if (getChecked(index)) {
                newValue = value.filter(function (item) { return item !== index; });
                if (newValue.length === 0) {
                    newValue = null;
                }
            }
            else {
                newValue = tslib_1.__spread(value);
                newValue.push(index);
            }
            props.callBack({ e: e, value: newValue });
            return;
        }
        if (isNotMultiple(props)) {
            if (props.isNullableValue && getChecked(index)) {
                props.callBack({ e: e, value: null });
            }
            else {
                props.callBack({ e: e, value: index });
            }
        }
    }; };
    return { getOnChange: getOnChange, getChecked: getChecked };
}
exports.useChoiceGroupIndexed = useChoiceGroupIndexed;
