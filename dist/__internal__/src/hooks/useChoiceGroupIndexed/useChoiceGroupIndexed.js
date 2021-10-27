import { __read, __spread } from "tslib";
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
export function useChoiceGroupIndexed(props) {
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
                newValue = __spread(value);
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
