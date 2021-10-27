"use strict";
exports.__esModule = true;
exports.useForkRef = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var setRef_1 = require("../../utils/setRef");
function useForkRef(refs) {
    return react_1.useMemo(function () {
        if (refs.length < 1) {
            return null;
        }
        return function (refValue) {
            var e_1, _a;
            try {
                for (var refs_1 = tslib_1.__values(refs), refs_1_1 = refs_1.next(); !refs_1_1.done; refs_1_1 = refs_1.next()) {
                    var ref = refs_1_1.value;
                    setRef_1.setRef(ref, refValue);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (refs_1_1 && !refs_1_1.done && (_a = refs_1["return"])) _a.call(refs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
    }, [refs]);
}
exports.useForkRef = useForkRef;
