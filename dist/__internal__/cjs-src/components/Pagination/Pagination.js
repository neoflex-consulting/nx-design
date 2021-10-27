"use strict";
exports.__esModule = true;
exports.Pagination = exports.cnPagination = exports.paginationDefaultPosition = exports.paginationPositions = exports.paginationDefaultType = exports.paginationTypes = exports.paginationDefaultSize = exports.paginationSizes = exports.paginationDefaultForm = exports.paginationForms = void 0;
var tslib_1 = require("tslib");
require("./Pagination.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconBackward_1 = require("../../icons/IconBackward/IconBackward");
var IconForward_1 = require("../../icons/IconForward/IconForward");
var bem_1 = require("../../utils/bem");
var Button_1 = require("../Button/Button");
var Text_1 = require("../Text/Text");
var TextField_1 = require("../TextField/TextField");
var helpers_1 = require("./helpers");
exports.paginationForms = ['default', 'round', 'brick'];
exports.paginationDefaultForm = 'default';
exports.paginationSizes = ['xs', 's', 'm', 'l'];
exports.paginationDefaultSize = 'm';
exports.paginationTypes = ['default', 'input'];
exports.paginationDefaultType = 'default';
exports.paginationPositions = ['left', 'center', 'right'];
exports.paginationDefaultPosition = 'center';
var getDefaultLabel = function (totalPages) { return "\u0438\u0437 " + totalPages; };
exports.cnPagination = bem_1.cn('Pagination');
exports.Pagination = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.currentPage, currentPage = _a === void 0 ? 0 : _a, _b = props.totalPages, totalPages = _b === void 0 ? 0 : _b, onChange = props.onChange, _c = props.getLabel, getLabel = _c === void 0 ? getDefaultLabel(totalPages) : _c, _d = props.form, form = _d === void 0 ? exports.paginationDefaultForm : _d, _e = props.size, size = _e === void 0 ? exports.paginationDefaultSize : _e, _f = props.type, type = _f === void 0 ? exports.paginationDefaultType : _f, _g = props.position, position = _g === void 0 ? exports.paginationDefaultPosition : _g, _h = props.minified, minified = _h === void 0 ? false : _h, _j = props.hotkeys, hotkeys = _j === void 0 ? {
        nextPage: {
            label: 'Alt →',
            values: ['Alt', 'ArrowRight']
        },
        prevPage: {
            label: '← Alt',
            values: ['Alt', 'ArrowLeft']
        }
    } : _j, _k = props.containerEventListener, containerEventListener = _k === void 0 ? window : _k, className = props.className, otherProps = tslib_1.__rest(props, ["currentPage", "totalPages", "onChange", "getLabel", "form", "size", "type", "position", "minified", "hotkeys", "containerEventListener", "className"]);
    if (!totalPages)
        return null;
    var currPage = currentPage + 1;
    var _l = helpers_1.getPaginationInfo(currPage, totalPages), prevPage = _l.prevPage, nextPage = _l.nextPage, isStartDots = _l.isStartDots, isEndDots = _l.isEndDots, pages = _l.pages, isEmpty = _l.isEmpty;
    var _m = tslib_1.__read(react_1["default"].useState([]), 2), keys = _m[0], setKeys = _m[1];
    var changePage = function (page) {
        if (page && page !== currPage && onChange) {
            onChange(page - 1);
        }
    };
    var handleClick = function (page) { return function (e) {
        e.preventDefault();
        changePage(page);
    }; };
    var handleChange = function (args) {
        var value = args.value;
        var pageNumber = Number(value);
        if (pageNumber > totalPages || Number.isNaN(pageNumber))
            return;
        if (onChange) {
            onChange(pageNumber - 1);
        }
    };
    var keyUpListener = function (event) {
        var key = event.key;
        setKeys(function (prevState) { return prevState.filter(function (hotKey) { return hotKey !== key; }); });
    };
    var keyDownListener = function (event) {
        var key = event.key;
        if (hotkeys.nextPage.values.includes(key) || hotkeys.prevPage.values.includes(key)) {
            var newKeys_1 = tslib_1.__spread(keys, [key]);
            if (hotkeys.nextPage.values.every(function (hotKey) { return newKeys_1.includes(hotKey); })) {
                changePage(nextPage);
            }
            else if (hotkeys.prevPage.values.every(function (hotKey) { return newKeys_1.includes(hotKey); })) {
                changePage(prevPage);
            }
            setKeys(newKeys_1);
        }
    };
    react_1["default"].useEffect(function () {
        containerEventListener.addEventListener('keydown', keyDownListener);
        containerEventListener.addEventListener('keyup', keyUpListener);
        return function () {
            containerEventListener.removeEventListener('keydown', keyDownListener);
            containerEventListener.removeEventListener('keyup', keyUpListener);
        };
    });
    var itemWidth = "var(--control-height-" + size + ")";
    return ((!isEmpty && (react_1["default"].createElement("nav", tslib_1.__assign({ className: exports.cnPagination({ form: form, size: size, position: minified ? exports.paginationDefaultPosition : position }, [className]), ref: ref }, otherProps),
        (currPage > 1 || minified) && (react_1["default"].createElement("div", { className: exports.cnPagination('PrevPage') },
            react_1["default"].createElement(Button_1.Button, { className: exports.cnPagination('ItemLeft', {
                    minified: minified,
                    show: currPage > 1
                }), label: "\u041D\u0430\u0437\u0430\u0434", iconLeft: IconBackward_1.IconBackward, view: "ghost", form: form, size: size, onClick: handleClick(prevPage) }),
            !minified && (react_1["default"].createElement(Text_1.Text, { className: exports.cnPagination('TipLeft'), size: "xs", view: "ghost" }, hotkeys.prevPage.label)))),
        type === exports.paginationDefaultType ? (react_1["default"].createElement("div", { className: exports.cnPagination('Pages') },
            isStartDots && (react_1["default"].createElement(Button_1.Button, { className: exports.cnPagination('Item', { isActive: currPage === 1 }), style: { width: itemWidth }, label: "1", title: "1", view: "ghost", form: form, size: size, onClick: handleClick(1) })),
            isStartDots && (react_1["default"].createElement(Text_1.Text, { size: size, view: "linkMinor", className: exports.cnPagination('More'), style: { width: itemWidth } }, "...")),
            pages.map(function (page) { return (react_1["default"].createElement(Button_1.Button, { key: page, className: exports.cnPagination('Item', { isActive: currPage === page }), style: { width: itemWidth }, label: page, title: "" + page, view: "ghost", form: form, size: size, onClick: handleClick(page) })); }),
            isEndDots && (react_1["default"].createElement(Text_1.Text, { size: size, view: "linkMinor", className: exports.cnPagination('More'), style: { width: itemWidth } }, "...")),
            isEndDots && (react_1["default"].createElement(Button_1.Button, { className: exports.cnPagination('Item', { isActive: currPage === totalPages }), style: { width: itemWidth }, label: totalPages, title: "" + totalPages, view: "ghost", form: form, size: size, onClick: handleClick(totalPages) })))) : (react_1["default"].createElement("div", { className: exports.cnPagination('Pages') },
            react_1["default"].createElement(TextField_1.TextField, { className: exports.cnPagination('Input'), form: form, size: size, value: currPage.toString(), onChange: handleChange }),
            react_1["default"].createElement(Text_1.Text, { size: size, view: "linkMinor", className: exports.cnPagination('Total') }, getLabel))),
        (currPage < totalPages || minified) && (react_1["default"].createElement("div", { className: exports.cnPagination('NextPage') },
            react_1["default"].createElement(Button_1.Button, { className: exports.cnPagination('ItemRight', {
                    minified: minified,
                    show: currPage < totalPages
                }), label: "\u0412\u043F\u0435\u0440\u0451\u0434", iconRight: IconForward_1.IconForward, view: "ghost", form: form, size: size, onClick: handleClick(nextPage) }),
            !minified && (react_1["default"].createElement(Text_1.Text, { className: exports.cnPagination('TipRight'), size: "xs", view: "ghost" }, hotkeys.nextPage.label))))))) ||
        null);
});
