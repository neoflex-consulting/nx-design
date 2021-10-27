"use strict";
exports.__esModule = true;
exports.DragNDropField = void 0;
var tslib_1 = require("tslib");
require("./DragNDropField.css");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dropzone_1 = require("react-dropzone");
var useForkRef_1 = require("../../hooks/useForkRef/useForkRef");
var bem_1 = require("../../utils/bem");
var Text_1 = require("../Text/Text");
var DragNDropFieldContent_1 = require("./DragNDropFieldContent/DragNDropFieldContent");
var DragNDropFieldTooltip_1 = require("./DragNDropFieldTooltip/DragNDropFieldTooltip");
var getErrorsList_1 = require("./getErrorsList");
var cnDragNDropField = bem_1.cn('DragNDropField');
exports.DragNDropField = react_1["default"].forwardRef(function (_a, ref) {
    var accept = _a.accept, maxSize = _a.maxSize, _b = _a.multiple, multiple = _b === void 0 ? false : _b, onDropFiles = _a.onDropFiles, _c = _a.children, children = _c === void 0 ? DragNDropFieldContent_1.DragNDropFieldContent : _c;
    var handleDrop = react_1["default"].useCallback(function (acceptedFiles) { return acceptedFiles.length > 0 && onDropFiles(acceptedFiles); }, [onDropFiles]);
    var _d = react_dropzone_1.useDropzone({
        accept: (accept === null || accept === void 0 ? void 0 : accept.length) ? accept : undefined,
        maxSize: maxSize || undefined,
        onDrop: handleDrop,
        multiple: multiple
    }), fileRejections = _d.fileRejections, getRootProps = _d.getRootProps, getInputProps = _d.getInputProps, isDragActive = _d.isDragActive, rootRef = _d.rootRef, open = _d.open;
    var handleRootClick = react_1["default"].useCallback(function (event) {
        // Чтобы не открывалось окно выбора файла при клике по внутренним элементам
        if (event.target !== rootRef.current) {
            event.stopPropagation();
        }
    }, []);
    var rootProps = getRootProps({
        className: cnDragNDropField('', { active: isDragActive }),
        onClick: handleRootClick
    });
    var content = isRenderProp(children)
        ? children({ accept: accept, maxSize: maxSize, multiple: multiple, openFileDialog: open })
        : children;
    var errors = react_1["default"].useMemo(function () { return getErrorsList_1.getErrorsList(fileRejections); }, [fileRejections]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", tslib_1.__assign({}, rootProps, { ref: useForkRef_1.useForkRef([ref, rootRef]) }),
            react_1["default"].createElement("input", tslib_1.__assign({}, getInputProps())),
            isDragActive ? (react_1["default"].createElement(Text_1.Text, { view: "secondary", size: "s", align: "center" }, "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0441\u044E\u0434\u0430")) : (content)),
        react_1["default"].createElement(DragNDropFieldTooltip_1.DragNDropFieldTooltip, { anchorRef: rootRef, errors: errors })));
});
var isRenderProp = function (children) { return typeof children === 'function'; };
