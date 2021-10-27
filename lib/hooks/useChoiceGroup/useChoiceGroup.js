"use strict";
exports.__esModule = true;
exports.useChoiceGroup = void 0;
var tslib_1 = require("tslib");
function isMultiple(params) {
    return params.multiple;
}
function isNotMultiple(params) {
    return !params.multiple;
}
function formatValue(valueProp, getKey, multiple) {
    var e_1, _a;
    var valueByKey = {};
    if (!valueProp) {
        return valueByKey;
    }
    var value = multiple ? valueProp : [valueProp];
    if (value && value.length > 0) {
        try {
            for (var value_1 = tslib_1.__values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                var item = value_1_1.value;
                valueByKey[getKey(item)] = item;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (value_1_1 && !value_1_1.done && (_a = value_1["return"])) _a.call(value_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return valueByKey;
}
function useChoiceGroup(props) {
    var formatedValue = formatValue(props.value, props.getKey, props.multiple);
    var getChecked = function (item) {
        return Object.prototype.hasOwnProperty.call(formatedValue, props.getKey(item));
    };
    var getOnChange = function (selectedItem) { return function (e) {
        if (isMultiple(props)) {
            var newValue = void 0;
            if (getChecked(selectedItem)) {
                var value = props.value || [];
                newValue = value.filter(function (item) { return props.getKey(item) !== props.getKey(selectedItem); });
                if (newValue.length === 0) {
                    newValue = null;
                }
            }
            else {
                newValue = props.value ? tslib_1.__spread(props.value) : [];
                newValue.push(selectedItem);
            }
            props.callBack({ e: e, value: newValue });
        }
        if (isNotMultiple(props)) {
            props.callBack({ e: e, value: selectedItem });
        }
    }; };
    return {
        getOnChange: getOnChange,
        getChecked: getChecked
    };
}
exports.useChoiceGroup = useChoiceGroup;
