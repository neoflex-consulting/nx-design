import { __assign, __rest } from "tslib";
import './Breadcrumbs.css';
import React, { useMemo } from 'react';
import { IconArrowRight } from '../../icons/IconArrowRight/IconArrowRight';
import { cn } from '../../utils/bem';
import { getSizeByMap } from '../../utils/getSizeByMap';
import { Button } from '../Button/Button';
export var breadcrumbPropSize = ['m', 'xs', 's', 'l'];
export var breadcrumbPropSizeDefault = breadcrumbPropSize[0];
export var cnBreadcrumbs = cn('Breadcrumbs');
var sizeMap = {
    xs: 'xs',
    s: 'xs',
    m: 'xs',
    l: 'm'
};
export var Breadcrumbs = React.forwardRef(function (props, ref) {
    var pages = props.pages, getLabel = props.getLabel, getIsActive = props.getIsActive, getLink = props.getLink, getIcon = props.getIcon, _a = props.size, size = _a === void 0 ? breadcrumbPropSizeDefault : _a, _b = props.maxCount, maxCount = _b === void 0 ? 0 : _b, onClick = props.onClick, _c = props.onlyIconRoot, onlyIconRoot = _c === void 0 ? false : _c, className = props.className, restProps = __rest(props, ["pages", "getLabel", "getIsActive", "getLink", "getIcon", "size", "maxCount", "onClick", "onlyIconRoot", "className"]);
    var iconSize = getSizeByMap(sizeMap, size);
    var _d = useMemo(function () {
        var rest = pages.slice();
        var head = rest.splice(0, 1);
        var tail = rest.splice(2 - maxCount);
        return {
            head: head,
            tail: tail,
            rest: rest
        };
    }, [pages, maxCount]), head = _d.head, tail = _d.tail, rest = _d.rest;
    var delimiter = useMemo(function () { return (React.createElement(IconArrowRight, { size: iconSize, className: cnBreadcrumbs('Delimiter', {
            size: iconSize
        }) })); }, [iconSize]);
    var renderPages = function (pages, isFirst) {
        if (isFirst === void 0) { isFirst = false; }
        return pages.map(function (page) {
            var Icon = getIcon === null || getIcon === void 0 ? void 0 : getIcon(page);
            var label = getLabel(page);
            var link = getLink(page);
            var isActive = getIsActive === null || getIsActive === void 0 ? void 0 : getIsActive(page);
            return (React.createElement("li", { key: label + ":" + link, className: cnBreadcrumbs('Item') },
                !isFirst && delimiter,
                React.createElement("a", { className: cnBreadcrumbs('Link', { active: isActive }), onClick: function (e) { return onClick === null || onClick === void 0 ? void 0 : onClick(page, e); }, href: link },
                    Icon &&
                        (onlyIconRoot && isFirst ? (React.createElement(Button, { view: "clear", onlyIcon: true, iconLeft: Icon, size: iconSize })) : (React.createElement(Icon, { className: cnBreadcrumbs('Icon'), size: iconSize }))),
                    (!isFirst || !onlyIconRoot) && React.createElement("span", { className: cnBreadcrumbs('Label') }, label))));
        });
    };
    return (React.createElement("ul", __assign({ className: cnBreadcrumbs({ size: size }, [className]), ref: ref }, restProps),
        renderPages(head, true),
        maxCount && rest.length > 1 ? (React.createElement("li", { className: cnBreadcrumbs('Item') },
            delimiter,
            React.createElement("span", { className: cnBreadcrumbs('More') }, "..."))) : (renderPages(rest)),
        renderPages(tail)));
});
