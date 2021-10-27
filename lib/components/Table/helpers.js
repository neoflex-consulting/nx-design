"use strict";
exports.__esModule = true;
exports.transformRows = exports.useLazyLoadData = exports.useHeaderData = exports.transformColumns = exports.getMaxLevel = exports.getNewSorting = exports.getColumnLeftOffset = exports.getColumnsSize = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var type_guards_1 = require("../../utils/type-guards");
exports.getColumnsSize = function (sizes) {
    return sizes.map(function (s) { return (s ? s + "px" : "minmax(min-content, " + 100 / sizes.length + "%)"); }).join(' ');
};
exports.getColumnLeftOffset = function (_a) {
    var columnIndex = _a.columnIndex, resizedColumnWidths = _a.resizedColumnWidths, initialColumnWidths = _a.initialColumnWidths;
    var selectedColumns = initialColumnWidths
        .slice(0, columnIndex)
        .map(function (size, index) { return resizedColumnWidths[index] || size; });
    return selectedColumns.reduce(function (acc, column) { return acc + column; }, 0);
};
exports.getNewSorting = function (currentSorting, newField, sortFn) {
    if (!currentSorting || currentSorting.by !== newField) {
        return {
            by: newField,
            order: 'asc',
            sortFn: sortFn
        };
    }
    if (currentSorting.order === 'asc') {
        return {
            by: newField,
            order: 'desc',
            sortFn: sortFn
        };
    }
    return null;
};
exports.getMaxLevel = function (columns) {
    var count = 0;
    var traverse = function (cols, level) {
        if (level === void 0) { level = 1; }
        if (level > count)
            count = level;
        cols.forEach(function (item) {
            if (item.columns) {
                traverse(item.columns, level + 1);
            }
        });
    };
    traverse(columns);
    return count;
};
var getLastChildrenCount = function (columns) {
    var count = 0;
    var traverse = function (cols) {
        cols.forEach(function (item) {
            if (item.columns) {
                traverse(item.columns);
            }
            else {
                count++;
            }
        });
    };
    traverse(columns);
    return count;
};
exports.transformColumns = function (columns, maxLevel) {
    var stack = [{ columns: columns, index: 0 }];
    var headersArr = [];
    while (stack.length) {
        var level = stack.length - 1;
        var node = stack[level];
        var item = node.columns[node.index];
        if (item) {
            if (!headersArr[level])
                headersArr[level] = [];
            var topHeaderGridIndex = stack[0].index;
            var prevItem = headersArr[level][headersArr[level].length - 1];
            var gridIndex = prevItem
                ? prevItem.position.gridIndex + (prevItem.position.colSpan || 1)
                : 0;
            var handledItem = tslib_1.__assign(tslib_1.__assign({}, item), { position: {
                    topHeaderGridIndex: topHeaderGridIndex,
                    gridIndex: gridIndex,
                    level: level
                } });
            if (!handledItem.columns) {
                handledItem.position.rowSpan = maxLevel - level;
                headersArr[level].push(handledItem);
                node.index++;
            }
            else {
                handledItem.position.colSpan = getLastChildrenCount(handledItem.columns);
                headersArr[level].push(handledItem);
                stack.push({ columns: handledItem.columns, index: 0 });
            }
        }
        else {
            stack.pop();
            if (stack[stack.length - 1])
                stack[stack.length - 1].index++;
        }
    }
    return headersArr;
};
/**
 * Возвращает данные, необходимые для построения хидера таблицы
 *
 * @param columns - массив колонок
 *
 * @return {
 *   {Array<Header<T>>[]} headers: двумерный массив заголовков, выстроенный по вертикали;
 *   {Array<Header<T>>} flattenedHeaders: плоский массив заголовков;
 *   {Array<Header<T>>} lowHeaders: самые нижние заголовки (по ним строятся колонки);
 *   {Record<number, HTMLDivElement | null>} headerRowsRefs: содержит рефы на заголовки;
 *   {Array<number>} headerRowsHeights: массив высот строк заголовков;
 *   {Array<number>} headerColumnsHeights: массив высот колонок заголовков;
 *   {Array<number>} resizerTopOffsets: массив отступов для компонентов Resizer;
 * }
 */
exports.useHeaderData = function (columns) {
    var headerRowsRefs = react_1["default"].useRef({});
    var headers = exports.transformColumns(columns, exports.getMaxLevel(columns));
    var headerColumnsHeights = Object.values(headerRowsRefs.current)
        .filter(type_guards_1.isNotNil)
        .map(function (ref) { return ref.getBoundingClientRect().height; });
    var flattenedHeaders = headers.flat().map(function (column, index) { return (tslib_1.__assign(tslib_1.__assign({}, column), { position: tslib_1.__assign(tslib_1.__assign({}, column.position), { smallTextSize: headers.length > 1 && column.position.level === headers.length - 1, height: headerColumnsHeights[index] || 0 }) })); });
    var headerRowsHeights = headers.map(function (arr, index) {
        return Math.min.apply(null, flattenedHeaders
            .filter(function (col) { return col.position.level === index; })
            .map(function (item) { return item.position.height; }));
    });
    var lowHeaders = flattenedHeaders
        .filter(function (_a) {
        var colSpan = _a.position.colSpan;
        return !colSpan;
    })
        .sort(function (a, b) {
        if (a.position.topHeaderGridIndex !== b.position.topHeaderGridIndex) {
            return a.position.topHeaderGridIndex > b.position.topHeaderGridIndex ? 1 : -1;
        }
        return a.position.gridIndex > b.position.gridIndex ? 1 : -1;
    });
    var resizerTopOffsets = lowHeaders.map(function (header, index) {
        var _a, _b;
        var headerHeight = headerRowsHeights.reduce(function (a, b) { return a + b; }, 0);
        if ((header.position.rowSpan || 0) >= (((_a = lowHeaders[index + 1]) === null || _a === void 0 ? void 0 : _a.position.rowSpan) || 0)) {
            return headerHeight - (header.position.height || 0);
        }
        return headerHeight - ((_b = lowHeaders[index + 1]) === null || _b === void 0 ? void 0 : _b.position.height) || 0;
    });
    return {
        headers: headers,
        flattenedHeaders: flattenedHeaders,
        lowHeaders: lowHeaders,
        headerRowsRefs: headerRowsRefs,
        headerRowsHeights: headerRowsHeights,
        headerColumnsHeights: headerColumnsHeights,
        resizerTopOffsets: resizerTopOffsets
    };
};
/**
 * Возвращает 2 функции, необходимые для отображения большого количества строк в таблице
 *
 * @param maxVisibleRows - максимальное количество отображаемых строк в один момент времени
 * @param scrollableEl - элемент, на который вешается scroll listener
 * @param enabled - флаг включения данной функциональность
 *
 * @return {
 *   getSlicedRows: функция, обрезающая исходный массив данных
 *   setBoundaryRef: функция, проставляющая рефы необходимым ячейкам для вычисления границ отображения строк
 * }
 */
exports.useLazyLoadData = function (maxVisibleRows, scrollableEl, enabled) {
    var _a = tslib_1.__read(react_1["default"].useState(0), 2), visibleStartIndex = _a[0], setVisibleStartIndex = _a[1];
    var cellsRefStart = react_1["default"].useRef(null);
    var cellsRefEnd = react_1["default"].useRef(null);
    var additionalRowsCount = Math.floor(maxVisibleRows / 3);
    react_1["default"].useEffect(function () {
        if (!enabled)
            return;
        var elHeight = 0;
        if (scrollableEl && 'offsetHeight' in scrollableEl) {
            elHeight = scrollableEl.offsetHeight;
        }
        else if (scrollableEl && 'outerHeight' in scrollableEl) {
            elHeight = scrollableEl.outerHeight;
        }
        var onScrollListener = function () {
            if (cellsRefEnd.current && elHeight / 2 > cellsRefEnd.current.getBoundingClientRect().top) {
                setVisibleStartIndex(function (prevIndex) { return prevIndex + additionalRowsCount; });
            }
            else if (cellsRefStart.current &&
                cellsRefStart.current.getBoundingClientRect().top > elHeight / 2) {
                setVisibleStartIndex(function (prevIndex) {
                    return prevIndex - additionalRowsCount < 0 ? 0 : prevIndex - additionalRowsCount;
                });
            }
        };
        scrollableEl === null || scrollableEl === void 0 ? void 0 : scrollableEl.addEventListener('scroll', onScrollListener);
        return function () { return scrollableEl === null || scrollableEl === void 0 ? void 0 : scrollableEl.removeEventListener('scroll', onScrollListener); };
    }, [visibleStartIndex, scrollableEl]);
    var setBoundaryRef = function (columnIdx, rowIdx) {
        if (enabled && columnIdx === 0 && rowIdx === additionalRowsCount && visibleStartIndex > 0) {
            return cellsRefStart;
        }
        if (enabled && columnIdx === 0 && rowIdx === maxVisibleRows - additionalRowsCount) {
            return cellsRefEnd;
        }
        return undefined;
    };
    var getSlicedRows = function (rows) {
        return !enabled || rows.length < maxVisibleRows
            ? rows
            : rows.slice(visibleStartIndex, visibleStartIndex + maxVisibleRows);
    };
    return {
        getSlicedRows: getSlicedRows,
        setBoundaryRef: setBoundaryRef
    };
};
exports.transformRows = function (rows, expandedRowIds, isTableExpanded) {
    var stack = [{ rows: rows, index: 0 }];
    var rowsArr = [];
    while (stack.length) {
        var level = stack.length - 1;
        var node = stack[level];
        var item = node.rows[node.index];
        if (item) {
            var handledItem = tslib_1.__assign(tslib_1.__assign({}, item), { level: level, rows: item.rows && tslib_1.__spread(item.rows) });
            var needGoDeeper = Boolean(handledItem.rows) && (isTableExpanded || expandedRowIds.includes(handledItem.id));
            if (needGoDeeper) {
                stack.push({ rows: handledItem.rows, index: 0 });
            }
            else {
                node.index++;
            }
            rowsArr.push(handledItem);
        }
        else {
            stack.pop();
            if (stack[stack.length - 1]) {
                stack[stack.length - 1].index++;
            }
        }
    }
    return rowsArr;
};
