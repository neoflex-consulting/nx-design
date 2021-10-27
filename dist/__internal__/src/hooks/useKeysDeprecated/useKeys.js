import { __assign, __rest } from "tslib";
export var useKeys = function (userKeys) {
    return function (_a) {
        var onKeyDown = _a.onKeyDown, rest = __rest(_a, ["onKeyDown"]);
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
                if (typeof onKeyDown === 'function') {
                    onKeyDown(e);
                }
            } });
    };
};
