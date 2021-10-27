import { __assign } from "tslib";
export var defaultGetItemKey = function (item) { return item.id; };
export var defaultGetItemLabel = function (item) { return item.label; };
export var defaultGetItemGroupKey = function (item) { return item.groupId; };
export var defaultGetItemDisabled = function (item) { return item.disabled; };
export var defaultGetGroupKey = function (group) { return group.id; };
export var defaultGetGroupLabel = function (group) { return group.label; };
export var isMultipleParams = function (params) {
    return !!params.multiple;
};
export var isNotMultipleParams = function (params) {
    return !params.multiple;
};
export function withDefaultGetters(props) {
    return __assign(__assign({}, props), { getItemLabel: props.getItemLabel || defaultGetItemLabel, getItemKey: props.getItemKey || defaultGetItemKey, getItemGroupKey: props.getItemGroupKey || defaultGetItemGroupKey, getItemDisabled: props.getItemDisabled || defaultGetItemDisabled, getGroupLabel: props.getGroupLabel || defaultGetGroupLabel, getGroupKey: props.getGroupKey || defaultGetGroupKey });
}
