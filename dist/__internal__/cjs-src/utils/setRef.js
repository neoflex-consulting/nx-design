"use strict";
exports.__esModule = true;
exports.setRef = void 0;
function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        // eslint-disable-next-line no-param-reassign
        ref.current = value;
    }
}
exports.setRef = setRef;
