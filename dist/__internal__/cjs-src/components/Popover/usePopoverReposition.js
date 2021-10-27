"use strict";
exports.__esModule = true;
exports.usePopoverReposition = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var getAllParents = function (element) {
    var mutableParents = [];
    var currentNode = element;
    while (currentNode) {
        currentNode !== element && mutableParents.push(currentNode);
        currentNode = currentNode.parentNode;
    }
    return mutableParents;
};
/** Запрос репозиции поповера при ресайзе окна и скролле */
exports.usePopoverReposition = function (_a) {
    var isActive = _a.isActive, scrollAnchorRef = _a.scrollAnchorRef, onRequestReposition = _a.onRequestReposition;
    react_1["default"].useEffect(function () {
        if (isActive) {
            window.addEventListener('resize', onRequestReposition);
            var allParents_1 = (scrollAnchorRef === null || scrollAnchorRef === void 0 ? void 0 : scrollAnchorRef.current) ? getAllParents(scrollAnchorRef.current) : [];
            allParents_1.forEach(function (parentEl) { return parentEl.addEventListener('scroll', onRequestReposition); });
            return function () {
                window.removeEventListener('resize', onRequestReposition);
                allParents_1.forEach(function (parentEl) {
                    return parentEl.removeEventListener('scroll', onRequestReposition);
                });
            };
        }
        return undefined;
    }, [isActive, scrollAnchorRef, onRequestReposition]);
};
