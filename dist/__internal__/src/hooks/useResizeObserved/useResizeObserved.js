import { __read, __values } from "tslib";
import React from 'react';
export var useResizeObserved = function (refs, mapper) {
    var _a = __read(React.useState(function () {
        return refs.map(function (ref) { return mapper(ref.current); });
    }), 2), dimensions = _a[0], setDimensions = _a[1];
    // Храним маппер в рефке, чтобы если его передадут инлайн-функцией, это не вызвало бесконечные перерендеры
    var mapperRef = React.useRef(mapper);
    React.useLayoutEffect(function () {
        mapperRef.current = mapper;
    }, [mapper]);
    React.useLayoutEffect(function () {
        var e_1, _a;
        var resizeObserver = new ResizeObserver(function () {
            setDimensions(refs.map(function (ref) { return mapperRef.current(ref.current); }));
        });
        try {
            for (var refs_1 = __values(refs), refs_1_1 = refs_1.next(); !refs_1_1.done; refs_1_1 = refs_1.next()) {
                var ref = refs_1_1.value;
                ref.current && resizeObserver.observe(ref.current);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (refs_1_1 && !refs_1_1.done && (_a = refs_1["return"])) _a.call(refs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return function () {
            resizeObserver.disconnect();
        };
    }, [refs]);
    return dimensions;
};
