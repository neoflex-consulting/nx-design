import { __assign } from "tslib";
export var useKeys = function (userKeys) {
    return function (rest) {
        return __assign(__assign({}, rest), { onKeyDown: function (e) {
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
                if (typeof (rest === null || rest === void 0 ? void 0 : rest.onKeyDown) === 'function') {
                    rest.onKeyDown(e);
                }
            } });
    };
};
