import { __assign, __read, __spread } from "tslib";
import './Table.css';
import React, { useMemo } from 'react';
import { useComponentSize } from '../../hooks/useComponentSize/useComponentSize';
import { IconSortDown } from '../../icons/IconSortDown/IconSortDown';
import { IconSortUp } from '../../icons/IconSortUp/IconSortUp';
import { IconUnsort } from '../../icons/IconUnsort/IconUnsort';
import { sortBy as sortByDefault, updateAt } from '../../utils/array';
import { cn } from '../../utils/bem';
import { isNotNil } from '../../utils/type-guards';
import { Text } from '../Text/Text';
import { TableCell } from './Cell/TableCell';
import { TableHeader } from './Header/TableHeader';
import { TableResizer } from './Resizer/TableResizer';
import { TableRowsCollapse, } from './RowsCollapse/TableRowsCollapse';
import { TableSelectedOptionsList } from './SelectedOptionsList/TableSelectedOptionsList';
import { fieldFiltersPresent, filterTableData, getSelectedFiltersList, isSelectedFiltersPresent, useSelectedFilters, } from './filtering';
import { getColumnLeftOffset, getColumnsSize, getNewSorting, transformRows, useHeaderData, useLazyLoadData, } from './helpers';
export { TableTextFilter } from './TextFilter/TableTextFilter';
export { TableFilterContainer } from './FilterContainer/TableFilterContainer';
export { TableNumberFilter } from './NumberFilter/TableNumberFilter';
export { TableChoiceGroupFilter } from './ChoiceGroupFilter/TableChoiceGroupFilter';
var cnTable = cn('Table');
export var sizes = ['s', 'm', 'l'];
export var zebraStriped = ['odd', 'even'];
export var headerVerticalAligns = ['center', 'bottom'];
var getColumnSortByField = function (column) {
    return (column.sortable && column.sortByField) || column.accessor;
};
var sortingData = function (rows, sorting, onSortBy) {
    if (onSortBy) {
        return rows;
    }
    if (!sorting) {
        return rows;
    }
    var sorredRows = sortByDefault(rows, sorting.by, sorting.order, sorting.sortFn);
    if (sorredRows.some(function (row) { var _a; return (_a = row.rows) === null || _a === void 0 ? void 0 : _a.length; })) {
        return sorredRows.map(function (row) {
            return row.rows ? __assign(__assign({}, row), { rows: sortingData(row.rows, sorting, onSortBy) }) : row;
        });
    }
    return sorredRows;
};
var defaultEmptyRowsPlaceholder = (React.createElement(Text, { as: "span", view: "primary", size: "s", lineHeight: "s" }, "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"));
export var Table = function (_a) {
    var _b, _c, _d, _e;
    var columns = _a.columns, rows = _a.rows, _f = _a.size, size = _f === void 0 ? 'l' : _f, filters = _a.filters, _g = _a.isResizable, isResizable = _g === void 0 ? false : _g, _h = _a.stickyHeader, stickyHeader = _h === void 0 ? false : _h, _j = _a.stickyColumns, stickyColumns = _j === void 0 ? 0 : _j, activeRow = _a.activeRow, _k = _a.verticalAlign, verticalAlign = _k === void 0 ? 'top' : _k, _l = _a.headerVerticalAlign, headerVerticalAlign = _l === void 0 ? 'center' : _l, zebraStriped = _a.zebraStriped, _m = _a.borderBetweenRows, borderBetweenRows = _m === void 0 ? false : _m, _o = _a.borderBetweenColumns, borderBetweenColumns = _o === void 0 ? false : _o, _p = _a.emptyRowsPlaceholder, emptyRowsPlaceholder = _p === void 0 ? defaultEmptyRowsPlaceholder : _p, className = _a.className, onRowHover = _a.onRowHover, onRowClick = _a.onRowClick, lazyLoad = _a.lazyLoad, onSortBy = _a.onSortBy, onFiltersUpdated = _a.onFiltersUpdated, _q = _a.isExpandedRowsByDefault, isExpandedRowsByDefault = _q === void 0 ? false : _q;
    var _r = useHeaderData(columns), headers = _r.headers, flattenedHeaders = _r.flattenedHeaders, lowHeaders = _r.lowHeaders, headerRowsRefs = _r.headerRowsRefs, headerRowsHeights = _r.headerRowsHeights, resizerTopOffsets = _r.resizerTopOffsets;
    var stickyColumnsGrid = ((_b = headers[0][stickyColumns - 1]) === null || _b === void 0 ? void 0 : _b.position.gridIndex) +
        (((_c = headers[0][stickyColumns - 1]) === null || _c === void 0 ? void 0 : _c.position.colSpan) || 1);
    var getColumnsWidth = function () { return lowHeaders.map(function (column) { return column.width; }); };
    var _s = __read(React.useState(getColumnsWidth()), 2), resizedColumnWidths = _s[0], setResizedColumnWidths = _s[1];
    React.useEffect(function () {
        setResizedColumnWidths(getColumnsWidth());
    }, [lowHeaders.length]);
    var _t = __read(React.useState([]), 2), initialColumnWidths = _t[0], setInitialColumnWidths = _t[1];
    var _u = __read(React.useState(null), 2), sorting = _u[0], setSorting = _u[1];
    var _v = __read(React.useState(null), 2), visibleFilter = _v[0], setVisibleFilter = _v[1];
    var _w = __read(React.useState({ top: 0, left: 0 }), 2), tableScroll = _w[0], setTableScroll = _w[1];
    var tableRef = React.useRef(null);
    var columnsRefs = React.useRef({});
    var _x = useSelectedFilters(filters, onFiltersUpdated), selectedFilters = _x.selectedFilters, updateSelectedFilters = _x.updateSelectedFilters, removeOneSelectedFilter = _x.removeOneSelectedFilter, removeAllSelectedFilters = _x.removeAllSelectedFilters;
    var _y = __read(React.useState([]), 2), expandedRowIds = _y[0], setExpandedRowIds = _y[1];
    /*
      Подписываемся на изменения размеров таблицы, но не используем значения из
      хука так как нам нужна ширина и высота таблицы без размера скролла. Этот хук
      использует значения `offsetWidth` и `offsetHeight` которые включают размер
      скролл бара.
    */
    useComponentSize(tableRef);
    var tableHeight = ((_d = tableRef.current) === null || _d === void 0 ? void 0 : _d.clientHeight) || 0;
    var tableWidth = ((_e = tableRef.current) === null || _e === void 0 ? void 0 : _e.clientWidth) || 0;
    var showVerticalCellShadow = tableScroll.left > 0;
    var showHorizontalCellShadow = tableScroll.top > 0;
    var isRowsClickable = activeRow && activeRow.onChange;
    var updateColumnWidth = function (idx, newWidth) {
        setResizedColumnWidths(updateAt(resizedColumnWidths, idx, newWidth));
    };
    React.useLayoutEffect(function () {
        var columnsElements = Object.values(columnsRefs.current).filter(isNotNil);
        if (columnsElements.length === 0)
            return;
        var columnsElementsWidths = columnsElements.map(function (el) { return el.getBoundingClientRect().width; });
        setInitialColumnWidths(columnsElementsWidths);
        // Проверяем, что таблица отрисовалась корректно, и устанавливаем значения ширин колонок после 1го и последующих рендера
        if (columnsElements[0].getBoundingClientRect().left !==
            columnsElements[columnsElements.length - 1].getBoundingClientRect().left &&
            !resizedColumnWidths.some(isNotNil)) {
            return setResizedColumnWidths(columnsElementsWidths);
        }
        // условие изменения ширины колонок при изменении ширины экрана (контейнера таблицы)
        if (tableWidth > 0 && !isResizable) {
            return setResizedColumnWidths(getColumnsWidth());
        }
    }, [tableWidth]);
    var isSortedByColumn = function (column) {
        return getColumnSortByField(column) === (sorting === null || sorting === void 0 ? void 0 : sorting.by);
    };
    var getSortIcon = function (column) {
        return ((isSortedByColumn(column) && ((sorting === null || sorting === void 0 ? void 0 : sorting.order) === 'desc' ? IconSortDown : IconSortUp)) ||
            IconUnsort);
    };
    var handleSortClick = function (column) {
        var newSorting = getNewSorting(sorting, getColumnSortByField(column), (column.sortable && (column === null || column === void 0 ? void 0 : column.sortFn)) || undefined);
        var sortProps = newSorting
            ? {
                sortingBy: newSorting.by,
                sortOrder: newSorting.order
            }
            : null;
        onSortBy && onSortBy(sortProps);
        setSorting(newSorting);
    };
    var handleFilterTogglerClick = function (id) { return function () {
        setVisibleFilter(visibleFilter === id ? null : id);
    }; };
    var handleTooltipSave = function (field, tooltipSelectedFilters, value) {
        updateSelectedFilters(field, tooltipSelectedFilters, value);
    };
    var removeSelectedFilter = function (tableFilters) { return function (filter) {
        removeOneSelectedFilter(tableFilters, filter);
    }; };
    var resetSelectedFilters = function () {
        if (filters && filters.length) {
            removeAllSelectedFilters(filters);
        }
    };
    var getStickyLeftOffset = function (columnIndex, topHeaderGridIndex) {
        if (topHeaderGridIndex >= stickyColumns) {
            return;
        }
        return getColumnLeftOffset({
            columnIndex: columnIndex,
            resizedColumnWidths: resizedColumnWidths,
            initialColumnWidths: initialColumnWidths
        });
    };
    var handleScroll = function (e) {
        if (!(e.target instanceof HTMLElement) || e.target !== tableRef.current) {
            return;
        }
        setTableScroll({
            top: e.target.scrollTop,
            left: e.target.scrollLeft
        });
    };
    var handleSelectRow = function (_a) {
        var id = _a.id, e = _a.e;
        if (!activeRow || !activeRow.onChange) {
            return;
        }
        activeRow.onChange({ id: activeRow.id === id ? undefined : id, e: e });
    };
    var handleColumnResize = function (idx, delta) {
        var columnMinWidth = Math.min(150, initialColumnWidths[idx]);
        var prevColumnWidth = resizedColumnWidths[idx] || initialColumnWidths[idx];
        var newColumnWidth = Math.max(columnMinWidth, prevColumnWidth + delta);
        updateColumnWidth(idx, newColumnWidth);
        // При расширении последней колонки скроллим таблицу вправо
        var containerEl = tableRef.current;
        if (idx === resizedColumnWidths.length - 1 && delta > 0 && containerEl) {
            containerEl.scrollBy(delta, 0);
        }
    };
    var stickyColumnsWidth = getColumnLeftOffset({
        columnIndex: stickyColumns,
        resizedColumnWidths: resizedColumnWidths,
        initialColumnWidths: initialColumnWidths
    });
    var columnsWithMetaData = function (columns) {
        return columns.map(function (column) {
            var _a;
            var columnIndex = column.position.gridIndex;
            var resizedColumnWidth = resizedColumnWidths[columnIndex];
            var initialColumnWidth = initialColumnWidths[columnIndex];
            var columnWidth = resizedColumnWidth || initialColumnWidth;
            var columnLeftOffset = getColumnLeftOffset({
                columnIndex: columnIndex,
                resizedColumnWidths: resizedColumnWidths,
                initialColumnWidths: initialColumnWidths
            });
            var isResized = !!columnWidth && columnWidth !== initialColumnWidth;
            var isSticky = stickyColumns > column.position.topHeaderGridIndex;
            var showResizer = stickyColumns > columnIndex ||
                stickyColumnsWidth + tableScroll.left < columnLeftOffset + columnWidth;
            var isFilterActive = (((_a = selectedFilters[column.accessor]) === null || _a === void 0 ? void 0 : _a.selected) || []).length > 0;
            return __assign(__assign({}, column), { filterable: Boolean(filters && fieldFiltersPresent(filters, column.accessor)), isSortingActive: isSortedByColumn(column), isFilterActive: isFilterActive,
                isResized: isResized,
                isSticky: isSticky,
                showResizer: showResizer,
                columnWidth: columnWidth,
                columnLeftOffset: columnLeftOffset });
        });
    };
    var headersWithMetaData = columnsWithMetaData(flattenedHeaders);
    var hasNestedRows = useMemo(function () { return rows.some(function (row) { var _a; return Boolean((_a = row.rows) === null || _a === void 0 ? void 0 : _a.length); }); }, [rows]);
    var sortedTableData = sortingData(rows, sorting, onSortBy);
    var filteredData = filters && isSelectedFiltersPresent(selectedFilters)
        ? filterTableData({
            data: sortedTableData,
            filters: filters || [],
            selectedFilters: selectedFilters
        })
        : sortedTableData;
    var _z = lazyLoad || {}, _0 = _z.maxVisibleRows, maxVisibleRows = _0 === void 0 ? 210 : _0, _1 = _z.scrollableEl, scrollableEl = _1 === void 0 ? tableRef.current : _1;
    var _2 = useLazyLoadData(maxVisibleRows, scrollableEl, !!lazyLoad), getSlicedRows = _2.getSlicedRows, setBoundaryRef = _2.setBoundaryRef;
    var flatRowsData = transformRows(filteredData, expandedRowIds, isExpandedRowsByDefault);
    var rowsData = getSlicedRows(flatRowsData);
    var tableStyle = {
        'gridTemplateColumns': getColumnsSize(resizedColumnWidths),
        '--table-width': tableWidth + "px"
    };
    var hasMergedCells = columnsWithMetaData(lowHeaders).some(function (header) { return header.mergeCells; });
    var handleExpandRow = function (id) {
        return function () {
            if (expandedRowIds.includes(id)) {
                setExpandedRowIds(function (prevState) { return prevState.filter(function (rowId) { return rowId !== id; }); });
                return;
            }
            setExpandedRowIds(function (prevState) { return __spread(prevState, [id]); });
        };
    };
    var getCollapseRollProps = function (row, columnIdx) {
        var _a;
        var withCollapseButton = Boolean((_a = row.rows) === null || _a === void 0 ? void 0 : _a.length) && columnIdx === 0;
        var baseProps = {
            level: row.level,
            isExpandedByDefault: isExpandedRowsByDefault
        };
        if (!withCollapseButton || isExpandedRowsByDefault) {
            return baseProps;
        }
        var isExpanded = expandedRowIds.includes(row.id);
        var toggleCollapse = handleExpandRow(row.id);
        return __assign(__assign({}, baseProps), { withCollapseButton: withCollapseButton,
            isExpanded: isExpanded,
            toggleCollapse: toggleCollapse });
    };
    var renderCell = function (column, row, columnIdx) {
        var cellContent = column.renderCell ? column.renderCell(row) : row[column.accessor];
        if (!hasNestedRows || columnIdx !== 0) {
            return cellContent;
        }
        var collapseRollProps = getCollapseRollProps(row, columnIdx);
        return React.createElement(TableRowsCollapse, __assign({}, collapseRollProps), cellContent);
    };
    var renderEmptyRowsPlaceholder = function (placeholder) {
        return typeof placeholder === 'string' ? React.createElement(Text, { size: "s" }, placeholder) : placeholder;
    };
    var getTableCellProps = function (row, rowIdx, column, columnIdx) {
        var rowSpan = 1;
        if ((rowsData[rowIdx - 1] && rowsData[rowIdx - 1][column.accessor] !== row[column.accessor]) ||
            rowIdx === 0 ||
            !column.mergeCells) {
            for (var i = rowIdx; i < rowsData.length; i++) {
                if (rowsData[i + 1] && rowsData[i + 1][column.accessor] === row[column.accessor]) {
                    rowSpan++;
                }
                else {
                    break;
                }
            }
            var style = {
                'left': getStickyLeftOffset(columnIdx, column.position.topHeaderGridIndex),
                '--row-span': column.mergeCells ? "span " + rowSpan : null
            };
            return {
                show: true,
                style: style,
                rowSpan: rowSpan
            };
        }
        return {
            show: false,
            rowSpan: rowSpan
        };
    };
    return (React.createElement("div", { ref: tableRef, className: cnTable({
            size: size,
            isResizable: isResizable,
            zebraStriped: !hasMergedCells && zebraStriped,
            withBorderBottom: !filteredData.length
        }, [className]), style: tableStyle, onScroll: handleScroll },
        columnsWithMetaData(lowHeaders).map(function (column, columnIdx) { return (React.createElement(TableCell, { type: "resizer", key: columnIdx, ref: function (ref) {
                columnsRefs.current[columnIdx] = ref;
            }, style: {
                left: getStickyLeftOffset(columnIdx, columnIdx)
            }, column: column, showVerticalShadow: showVerticalCellShadow }, isResizable && (React.createElement(TableResizer, { height: tableHeight - resizerTopOffsets[columnIdx], top: resizerTopOffsets[columnIdx], isVisible: column.showResizer, onResize: function (delta) { return handleColumnResize(columnIdx, delta); }, onDoubleClick: function () {
                return updateColumnWidth(columnIdx, initialColumnWidths[columnIdx]);
            } })))); }),
        React.createElement(TableHeader, { isStickyHeader: stickyHeader, headersWithMetaData: headersWithMetaData, headerRowsHeights: headerRowsHeights, headerRowsRefs: headerRowsRefs, getStickyLeftOffset: getStickyLeftOffset, stickyColumnsGrid: stickyColumnsGrid, showVerticalCellShadow: showVerticalCellShadow, headerVerticalAlign: headerVerticalAlign, getSortIcon: getSortIcon, handleSortClick: handleSortClick, handleFilterTogglerClick: handleFilterTogglerClick, handleTooltipSave: handleTooltipSave, filters: filters, visibleFilter: visibleFilter, selectedFilters: selectedFilters, showHorizontalCellShadow: showHorizontalCellShadow, borderBetweenColumns: borderBetweenColumns }),
        filters && isSelectedFiltersPresent(selectedFilters) && (React.createElement("div", { className: cnTable('RowWithoutCells') },
            React.createElement(TableSelectedOptionsList, { values: getSelectedFiltersList({ filters: filters, selectedFilters: selectedFilters, columns: lowHeaders }), onRemove: removeSelectedFilter(filters), onReset: resetSelectedFilters }))),
        rowsData.length > 0 ? (rowsData.map(function (row, rowIdx) {
            var nth = (rowIdx + 1) % 2 === 0 ? 'even' : 'odd';
            return (React.createElement("div", { key: row.id, role: "presentation", className: cnTable('CellsRow', {
                    nth: nth,
                    withMergedCells: hasMergedCells
                }), onMouseEnter: function (e) { return onRowHover && onRowHover({ id: row.id, e: e }); }, onMouseLeave: function (e) { return onRowHover && onRowHover({ id: undefined, e: e }); }, onClick: function (e) { return onRowClick && onRowClick({ id: row.id, e: e }); } }, columnsWithMetaData(lowHeaders).map(function (column, columnIdx) {
                var _a = getTableCellProps(row, rowIdx, column, columnIdx), show = _a.show, style = _a.style, rowSpan = _a.rowSpan;
                if (show) {
                    return (React.createElement(TableCell, { type: "content", key: column.accessor, ref: setBoundaryRef(columnIdx, rowIdx), style: style, wrapperClassName: cnTable('ContentCell', {
                            isActive: activeRow ? activeRow.id === row.id : false,
                            isDarkned: activeRow
                                ? activeRow.id !== undefined && activeRow.id !== row.id
                                : false,
                            isMerged: column.mergeCells && rowSpan > 1
                        }), onClick: function (e) {
                            return handleSelectRow({ id: row.id, e: e });
                        }, column: column, verticalAlign: verticalAlign, isClickable: !!isRowsClickable, showVerticalShadow: showVerticalCellShadow &&
                            (column === null || column === void 0 ? void 0 : column.position.gridIndex) + ((column === null || column === void 0 ? void 0 : column.position.colSpan) || 1) ===
                                stickyColumnsGrid, isBorderTop: rowIdx > 0 && borderBetweenRows, isBorderLeft: columnIdx > 0 && borderBetweenColumns }, renderCell(column, row, columnIdx)));
                }
                return null;
            })));
        })) : (React.createElement("div", { className: cnTable('RowWithoutCells') },
            React.createElement("div", { className: cnTable('EmptyCell') }, renderEmptyRowsPlaceholder(emptyRowsPlaceholder))))));
};
