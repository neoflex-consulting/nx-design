import { __values } from "tslib";
import { useMemo } from 'react';
import { setRef } from '../../utils/setRef';
export function useForkRef(refs) {
    return useMemo(function () {
        if (refs.length < 1) {
            return null;
        }
        return function (refValue) {
            var e_1, _a;
            try {
                for (var refs_1 = __values(refs), refs_1_1 = refs_1.next(); !refs_1_1.done; refs_1_1 = refs_1.next()) {
                    var ref = refs_1_1.value;
                    setRef(ref, refValue);
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
