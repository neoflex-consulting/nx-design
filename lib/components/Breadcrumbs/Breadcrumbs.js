"use strict";
exports.__esModule = true;
exports.Breadcrumbs = exports.cnBreadcrumbs = exports.breadcrumbPropSizeDefault = exports.breadcrumbPropSize = void 0;
var tslib_1 = require("tslib");
require("./Breadcrumbs.css");
var react_1 = tslib_1.__importStar(require("react"));
var IconArrowRight_1 = require("../../icons/IconArrowRight/IconArrowRight");
var bem_1 = require("../../utils/bem");
var getSizeByMap_1 = require("../../utils/getSizeByMap");
var index_1 = require("../index");
exports.breadcrumbPropSize = ['m', 'xs', 's', 'l'];
exports.breadcrumbPropSizeDefault = exports.breadcrumbPropSize[0];
exports.cnBreadcrumbs = bem_1.cn('Breadcrumbs');
var sizeMap = {
    xs: 'xs',
    s: 'xs',
    m: 'xs',
    l: 'm'
};
exports.Breadcrumbs = react_1["default"].forwardRef(function (props, ref) {
    var pages = props.pages, getLabel = props.getLabel, getIsActive = props.getIsActive, getLink = props.getLink, getIcon = props.getIcon, _a = props.size, size = _a === void 0 ? exports.breadcrumbPropSizeDefault : _a, _b = props.maxCount, maxCount = _b === void 0 ? 0 : _b, onClick = props.onClick, _c = props.onlyIconRoot, onlyIconRoot = _c === void 0 ? false : _c, className = props.className, restProps = tslib_1.__rest(props, ["pages", "getLabel", "getIsActive", "getLink", "getIcon", "size", "maxCount", "onClick", "onlyIconRoot", "className"]);
    var iconSize = getSizeByMap_1.getSizeByMap(sizeMap, size);
    var _d = react_1.useMemo(function () {
        var rest = pages.slice();
        var head = rest.splice(0, 1);
        var tail = rest.splice(2 - maxCount);
        return {
            head: head,
            tail: tail,
            rest: rest
        };
    }, [pages, maxCount]), head = _d.head, tail = _d.tail, rest = _d.rest;
    var delimiter = react_1.useMemo(function () { return (react_1["default"].createElement(IconArrowRight_1.IconArrowRight, { size: iconSize, className: exports.cnBreadcrumbs('Delimiter', {
            size: iconSize
        }) })); }, [iconSize]);
    var renderPages = function (pages, isFirst) {
        if (isFirst === void 0) { isFirst = false; }
        return pages.map(function (page) {
            var Icon = getIcon === null || getIcon === void 0 ? void 0 : getIcon(page);
            var label = getLabel(page);
            var link = getLink(page);
            var isActive = getIsActive === null || getIsActive === void 0 ? void 0 : getIsActive(page);
            return (react_1["default"].createElement("li", { key: label + ":" + link, className: exports.cnBreadcrumbs('Item') },
                !isFirst && delimiter,
                react_1["default"].createElement("a", { className: exports.cnBreadcrumbs('Link', { active: isActive }), onClick: function (e) { return onClick === null || onClick === void 0 ? void 0 : onClick(page, e); }, href: link },
                    Icon &&
                        (onlyIconRoot && isFirst ? (react_1["default"].createElement(index_1.Button, { view: "clear", onlyIcon: true, iconLeft: Icon, size: iconSize })) : (react_1["default"].createElement(Icon, { className: exports.cnBreadcrumbs('Icon'), size: iconSize }))),
                    (!isFirst || !onlyIconRoot) && react_1["default"].createElement("span", { className: exports.cnBreadcrumbs('Label') }, label))));
        });
    };
    return (react_1["default"].createElement("ul", tslib_1.__assign({ className: exports.cnBreadcrumbs({ size: size }, [className]), ref: ref }, restProps),
        renderPages(head, true),
        maxCount && rest.length > 1 ? (react_1["default"].createElement("li", { className: exports.cnBreadcrumbs('Item') },
            delimiter,
            react_1["default"].createElement("span", { className: exports.cnBreadcrumbs('More') }, "..."))) : (renderPages(rest)),
        renderPages(tail)));
});
