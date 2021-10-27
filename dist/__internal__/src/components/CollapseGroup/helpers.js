import { __assign } from "tslib";
export var defaultGetItemLabel = function (item) { return item.label; };
export var defaultGetItemContent = function (item) {
    return item.content;
};
export var defaultGetItemRightSide = function (item) {
    return item.rightSide;
};
export function withDefaultGetters(props) {
    return __assign(__assign({}, props), { getItemLabel: props.getItemLabel || defaultGetItemLabel, getItemContent: props.getItemContent || defaultGetItemContent, getItemRightSide: props.getItemRightSide || defaultGetItemRightSide });
}
