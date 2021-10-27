"use strict";
exports.__esModule = true;
exports.useKeys = void 0;
var tslib_1 = require("tslib");
exports.useKeys = function (userKeys) {
    return function (_a) {
        var onKeyDown = _a.onKeyDown, rest = tslib_1.__rest(_a, ["onKeyDown"]);
        return tslib_1.__assign(tslib_1.__assign({}, rest), { onKeyDown: function (e) {
                var keyCode = e.keyCode, key = e.key, shift = e.shiftKey, meta = e.metaKey;
                var handler = userKeys[key] || userKeys[keyCode];
                if (typeof handler === 'function') {
                    handler({
                        keyCode: keyCode,
                        key: key,
                        shift: shift,
                        meta: meta
                    }, e);
                }
                if (typeof onKeyDown === 'function') {
                    onKeyDown(e);
                }
            } });
    };
};
