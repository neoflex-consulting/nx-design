"use strict";
exports.__esModule = true;
exports.searchCompare = exports.withDefaultGetters = exports.isNotMultipleParams = exports.isMultipleParams = exports.defaultGetGroupLabel = exports.defaultGetGroupKey = exports.defaultGetItemDisabled = exports.defaultGetItemGroupKey = exports.defaultGetItemAvatarUrl = exports.defaultGetItemSubLabel = exports.defaultGetItemLabel = exports.defaultGetItemKey = void 0;
var tslib_1 = require("tslib");
exports.defaultGetItemKey = function (item) { return item.id; };
exports.defaultGetItemLabel = function (item) { return item.label; };
exports.defaultGetItemSubLabel = function (item) { return item.subLabel; };
exports.defaultGetItemAvatarUrl = function (item) { return item.avatarUrl; };
exports.defaultGetItemGroupKey = function (item) { return item.groupId; };
exports.defaultGetItemDisabled = function (item) { return item.disabled; };
exports.defaultGetGroupKey = function (group) { return group.id; };
exports.defaultGetGroupLabel = function (group) { return group.label; };
exports.isMultipleParams = function (params) {
    return !!params.multiple;
};
exports.isNotMultipleParams = function (params) {
    return !params.multiple;
};
function withDefaultGetters(props) {
    return tslib_1.__assign(tslib_1.__assign({}, props), { getItemLabel: props.getItemLabel || exports.defaultGetItemLabel, getItemKey: props.getItemKey || exports.defaultGetItemKey, getItemGroupKey: props.getItemGroupKey || exports.defaultGetItemGroupKey, getItemDisabled: props.getItemDisabled || exports.defaultGetItemDisabled, getGroupLabel: props.getGroupLabel || exports.defaultGetGroupLabel, getGroupKey: props.getGroupKey || exports.defaultGetGroupKey, getItemSubLabel: props.getItemSubLabel || exports.defaultGetItemSubLabel, getItemAvatarUrl: props.getItemAvatarUrl || exports.defaultGetItemAvatarUrl });
}
exports.withDefaultGetters = withDefaultGetters;
exports.searchCompare = function (searchValue, compare) {
    if (!compare) {
        return false;
    }
    return compare.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1;
};
