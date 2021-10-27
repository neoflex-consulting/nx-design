"use strict";
exports.__esModule = true;
exports.useResizeObserved = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
exports.useResizeObserved = function (refs, mapper) {
    var _a = tslib_1.__read(react_1["default"].useState(function () {
        return refs.map(function (ref) { return mapper(ref.current); });
    }), 2), dimensions = _a[0], setDimensions = _a[1];
    // Храним маппер в рефке, чтобы если его передадут инлайн-функцией, это не вызвало бесконечные перерендеры
    var mapperRef = react_1["default"].useRef(mapper);
    react_1["default"].useLayoutEffect(function () {
        mapperRef.current = mapper;
    }, [mapper]);
    react_1["default"].useLayoutEffect(function () {
        var e_1, _a;
        var resizeObserver = new ResizeObserver(function () {
            setDimensions(refs.map(function (ref) { return mapperRef.current(ref.current); }));
        });
        try {
            for (var refs_1 = tslib_1.__values(refs), refs_1_1 = refs_1.next(); !refs_1_1.done; refs_1_1 = refs_1.next()) {
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
