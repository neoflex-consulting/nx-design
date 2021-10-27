"use strict";
exports.__esModule = true;
exports.withDefaultGetters = exports.defaultGetItemRightSide = exports.defaultGetItemContent = exports.defaultGetItemLabel = void 0;
var tslib_1 = require("tslib");
exports.defaultGetItemLabel = function (item) { return item.label; };
exports.defaultGetItemContent = function (item) {
    return item.content;
};
exports.defaultGetItemRightSide = function (item) {
    return item.rightSide;
};
function withDefaultGetters(props) {
    return tslib_1.__assign(tslib_1.__assign({}, props), { getItemLabel: props.getItemLabel || exports.defaultGetItemLabel, getItemContent: props.getItemContent || exports.defaultGetItemContent, getItemRightSide: props.getItemRightSide || exports.defaultGetItemRightSide });
}
exports.withDefaultGetters = withDefaultGetters;
