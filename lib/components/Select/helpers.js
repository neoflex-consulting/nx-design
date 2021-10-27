"use strict";
exports.__esModule = true;
exports.withDefaultGetters = exports.defaultGetGroupLabel = exports.defaultGetGroupKey = exports.defaultGetItemDisabled = exports.defaultGetItemGroupKey = exports.defaultGetItemLabel = exports.defaultGetItemKey = void 0;
var tslib_1 = require("tslib");
exports.defaultGetItemKey = function (item) { return item.id; };
exports.defaultGetItemLabel = function (item) { return item.label; };
exports.defaultGetItemGroupKey = function (item) { return item.groupId; };
exports.defaultGetItemDisabled = function (item) { return item.disabled; };
exports.defaultGetGroupKey = function (group) { return group.id; };
exports.defaultGetGroupLabel = function (group) { return group.label; };
function withDefaultGetters(props) {
    return tslib_1.__assign(tslib_1.__assign({}, props), { getItemLabel: props.getItemLabel || exports.defaultGetItemLabel, getItemKey: props.getItemKey || exports.defaultGetItemKey, getItemGroupKey: props.getItemGroupKey || exports.defaultGetItemGroupKey, getItemDisabled: props.getItemDisabled || exports.defaultGetItemDisabled, getGroupLabel: props.getGroupLabel || exports.defaultGetGroupLabel, getGroupKey: props.getGroupKey || exports.defaultGetGroupKey });
}
exports.withDefaultGetters = withDefaultGetters;
