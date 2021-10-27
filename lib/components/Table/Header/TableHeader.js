"use strict";
exports.__esModule = true;
exports.TableHeader = exports.levelTypes = void 0;
var tslib_1 = require("tslib");
require("./TableHeader.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../../utils/bem");
var Button_1 = require("../../Button/Button");
var TableCell_1 = require("../Cell/TableCell");
var filtering_1 = require("../filtering");
var TableFilterTooltip_1 = require("../FilterTooltip/TableFilterTooltip");
var cnTableHeader = bem_1.cn('TableHeader');
exports.levelTypes = ['high', 'low', 'default'];
exports.TableHeader = function (_a) {
    var isStickyHeader = _a.isStickyHeader, headersWithMetaData = _a.headersWithMetaData, headerRowsHeights = _a.headerRowsHeights, headerRowsRefs = _a.headerRowsRefs, getStickyLeftOffset = _a.getStickyLeftOffset, stickyColumnsGrid = _a.stickyColumnsGrid, showVerticalCellShadow = _a.showVerticalCellShadow, headerVerticalAlign = _a.headerVerticalAlign, getSortIcon = _a.getSortIcon, handleSortClick = _a.handleSortClick, handleFilterTogglerClick = _a.handleFilterTogglerClick, handleTooltipSave = _a.handleTooltipSave, filters = _a.filters, visibleFilter = _a.visibleFilter, selectedFilters = _a.selectedFilters, showHorizontalCellShadow = _a.showHorizontalCellShadow, borderBetweenColumns = _a.borderBetweenColumns;
    var tableHeaderHeight = headerRowsHeights.reduce(function (a, b) { return a + b; }, 0);
    var tableHeaderStyle = {
        '--table-header-height': tableHeaderHeight + "px"
    };
    var getLevelType = function (column) {
        var _a;
        if (Number(column.position.colSpan) >= 1)
            return 'high';
        if ((_a = column.position) === null || _a === void 0 ? void 0 : _a.smallTextSize)
            return 'low';
        return 'default';
    };
    var isColumnResized = function (column) {
        var headers = [];
        var build = function (header) {
            if (!header.columns) {
                headers.push(header);
            }
            else {
                header.columns.forEach(function (col) {
                    return build(headersWithMetaData.find(function (head) { return head.title === col.title; }));
                });
            }
        };
        build(column);
        return headers.some(function (header) { return header.isResized; });
    };
    var getFilterPopover = function (column) {
        var _a, _b, _c, _d;
        if (!filters || !column.accessor) {
            return null;
        }
        var curFilter = filters.find(function (_a) {
            var field = _a.field;
            return field === column.accessor;
        });
        var FilterComponent = (_a = curFilter === null || curFilter === void 0 ? void 0 : curFilter.component) === null || _a === void 0 ? void 0 : _a.name;
        var filterComponentProps = (_c = (_b = curFilter === null || curFilter === void 0 ? void 0 : curFilter.component) === null || _b === void 0 ? void 0 : _b.props) !== null && _c !== void 0 ? _c : {};
        var onToggle = handleFilterTogglerClick(column.accessor);
        var filterId = curFilter === null || curFilter === void 0 ? void 0 : curFilter.id;
        var handleFilterSave = function (filterValue) {
            if (filterId) {
                handleTooltipSave(column.accessor, [filterId], filterValue);
            }
            onToggle();
        };
        return column.filterable ? (react_1["default"].createElement(TableFilterTooltip_1.TableFilterTooltip, { field: column.accessor, isOpened: visibleFilter === column.accessor, options: filtering_1.getOptionsForFilters(filters, column.accessor), values: selectedFilters[column.accessor].selected || [], onChange: handleTooltipSave, onToggle: handleFilterTogglerClick(column.accessor), className: cnTableHeader('Icon', { type: 'filter' }) }, FilterComponent && (react_1["default"].createElement(FilterComponent, tslib_1.__assign({}, filterComponentProps, { onConfirm: handleFilterSave, filterValue: (_d = selectedFilters[column.accessor]) === null || _d === void 0 ? void 0 : _d.value, onCancel: handleFilterTogglerClick(column.accessor) }))))) : null;
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: cnTableHeader('Row', { withVerticalBorder: borderBetweenColumns }) }, headersWithMetaData.map(function (column, columnIdx) {
            var _a, _b, _c;
            var style = {};
            if (column.position.colSpan) {
                style.gridColumnEnd = "span " + column.position.colSpan;
            }
            if (column.position.rowSpan) {
                style.gridRowEnd = "span " + column.position.rowSpan;
            }
            if (isStickyHeader) {
                style.top = headerRowsHeights
                    .slice(0, column.position.level)
                    .reduce(function (a, b) { return a + b; }, 0);
            }
            return (react_1["default"].createElement(TableCell_1.TableCell, { type: "header", key: columnIdx, ref: function (ref) {
                    /* eslint-disable-next-line no-param-reassign */
                    headerRowsRefs.current[columnIdx] = ref;
                }, style: tslib_1.__assign(tslib_1.__assign({}, style), { left: getStickyLeftOffset(column.position.gridIndex, column.position.topHeaderGridIndex) }), isSticky: isStickyHeader, isResized: isColumnResized(column), column: column, verticalAlign: headerVerticalAlign, className: cnTableHeader('Cell', {
                    isFirstColumn: column.position.gridIndex === 0,
                    isFirstRow: column.position.level === 0,
                    isLastInColumn: ((_a = column.position) === null || _a === void 0 ? void 0 : _a.topHeaderGridIndex) !== ((_c = (_b = headersWithMetaData[columnIdx + 1]) === null || _b === void 0 ? void 0 : _b.position) === null || _c === void 0 ? void 0 : _c.topHeaderGridIndex),
                    level: getLevelType(column)
                }), showVerticalShadow: showVerticalCellShadow &&
                    (column === null || column === void 0 ? void 0 : column.position.gridIndex) + ((column === null || column === void 0 ? void 0 : column.position.colSpan) || 1) ===
                        stickyColumnsGrid },
                column.title,
                react_1["default"].createElement("div", { className: cnTableHeader('Buttons', {
                        isSortingActive: column.isSortingActive,
                        isFilterActive: column.isFilterActive,
                        verticalAlign: headerVerticalAlign
                    }) },
                    column.sortable && (react_1["default"].createElement(Button_1.Button, { size: "xs", iconSize: "s", view: "clear", onlyIcon: true, onClick: function () { return handleSortClick(column); }, iconLeft: getSortIcon(column), className: cnTableHeader('Icon', { type: 'sort' }) })),
                    getFilterPopover(column))));
        })),
        react_1["default"].createElement("div", { className: cnTableHeader('ShadowWrapper'), style: tableHeaderStyle },
            react_1["default"].createElement("div", { className: cnTableHeader('Shadow', { show: showHorizontalCellShadow && isStickyHeader }) }))));
};