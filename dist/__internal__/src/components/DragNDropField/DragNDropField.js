import { __assign } from "tslib";
import './DragNDropField.css';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useForkRef } from '../../hooks/useForkRef/useForkRef';
import { cn } from '../../utils/bem';
import { Text } from '../Text/Text';
import { DragNDropFieldContent } from './DragNDropFieldContent/DragNDropFieldContent';
import { DragNDropFieldTooltip } from './DragNDropFieldTooltip/DragNDropFieldTooltip';
import { getErrorsList } from './getErrorsList';
var cnDragNDropField = cn('DragNDropField');
export var DragNDropField = React.forwardRef(function (_a, ref) {
    var accept = _a.accept, maxSize = _a.maxSize, _b = _a.multiple, multiple = _b === void 0 ? false : _b, onDropFiles = _a.onDropFiles, _c = _a.children, children = _c === void 0 ? DragNDropFieldContent : _c;
    var handleDrop = React.useCallback(function (acceptedFiles) { return acceptedFiles.length > 0 && onDropFiles(acceptedFiles); }, [onDropFiles]);
    var _d = useDropzone({
        accept: (accept === null || accept === void 0 ? void 0 : accept.length) ? accept : undefined,
        maxSize: maxSize || undefined,
        onDrop: handleDrop,
        multiple: multiple
    }), fileRejections = _d.fileRejections, getRootProps = _d.getRootProps, getInputProps = _d.getInputProps, isDragActive = _d.isDragActive, rootRef = _d.rootRef, open = _d.open;
    var handleRootClick = React.useCallback(function (event) {
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
    var errors = React.useMemo(function () { return getErrorsList(fileRejections); }, [fileRejections]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", __assign({}, rootProps, { ref: useForkRef([ref, rootRef]) }),
            React.createElement("input", __assign({}, getInputProps())),
            isDragActive ? (React.createElement(Text, { view: "secondary", size: "s", align: "center" }, "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0441\u044E\u0434\u0430")) : (content)),
        React.createElement(DragNDropFieldTooltip, { anchorRef: rootRef, errors: errors })));
});
var isRenderProp = function (children) { return typeof children === 'function'; };
