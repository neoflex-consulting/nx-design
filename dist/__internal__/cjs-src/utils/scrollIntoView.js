"use strict";
exports.__esModule = true;
exports.scrollIntoView = void 0;
var tslib_1 = require("tslib");
var compute_scroll_into_view_1 = tslib_1.__importDefault(require("compute-scroll-into-view"));
function scrollIntoView(node, menuNode) {
    var actions = compute_scroll_into_view_1["default"](node, {
        boundary: menuNode,
        block: 'nearest',
        scrollMode: 'if-needed'
    });
    actions.forEach(function (action) {
        var el = action.el, top = action.top, left = action.left;
        el.scrollTop = top;
        el.scrollLeft = left;
    });
}
exports.scrollIntoView = scrollIntoView;
