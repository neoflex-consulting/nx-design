import { __assign, __read, __rest, __spread } from "tslib";
import './Pagination.css';
import React from 'react';
import { IconBackward } from '../../icons/IconBackward/IconBackward';
import { IconForward } from '../../icons/IconForward/IconForward';
import { cn } from '../../utils/bem';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { TextField } from '../TextField/TextField';
import { getPaginationInfo } from './helpers';
export var paginationForms = ['default', 'round', 'brick'];
export var paginationDefaultForm = 'default';
export var paginationSizes = ['xs', 's', 'm', 'l'];
export var paginationDefaultSize = 'm';
export var paginationTypes = ['default', 'input'];
export var paginationDefaultType = 'default';
export var paginationPositions = ['left', 'center', 'right'];
export var paginationDefaultPosition = 'center';
var getDefaultLabel = function (totalPages) { return "\u0438\u0437 " + totalPages; };
export var cnPagination = cn('Pagination');
export var Pagination = React.forwardRef(function (props, ref) {
    var _a = props.currentPage, currentPage = _a === void 0 ? 0 : _a, _b = props.totalPages, totalPages = _b === void 0 ? 0 : _b, onChange = props.onChange, _c = props.getLabel, getLabel = _c === void 0 ? getDefaultLabel(totalPages) : _c, _d = props.form, form = _d === void 0 ? paginationDefaultForm : _d, _e = props.size, size = _e === void 0 ? paginationDefaultSize : _e, _f = props.type, type = _f === void 0 ? paginationDefaultType : _f, _g = props.position, position = _g === void 0 ? paginationDefaultPosition : _g, _h = props.minified, minified = _h === void 0 ? false : _h, _j = props.hotkeys, hotkeys = _j === void 0 ? {
        nextPage: {
            label: 'Alt →',
            values: ['Alt', 'ArrowRight']
        },
        prevPage: {
            label: '← Alt',
            values: ['Alt', 'ArrowLeft']
        }
    } : _j, _k = props.containerEventListener, containerEventListener = _k === void 0 ? window : _k, className = props.className, otherProps = __rest(props, ["currentPage", "totalPages", "onChange", "getLabel", "form", "size", "type", "position", "minified", "hotkeys", "containerEventListener", "className"]);
    if (!totalPages)
        return null;
    var currPage = currentPage + 1;
    var _l = getPaginationInfo(currPage, totalPages), prevPage = _l.prevPage, nextPage = _l.nextPage, isStartDots = _l.isStartDots, isEndDots = _l.isEndDots, pages = _l.pages, isEmpty = _l.isEmpty;
    var _m = __read(React.useState([]), 2), keys = _m[0], setKeys = _m[1];
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
            var newKeys_1 = __spread(keys, [key]);
            if (hotkeys.nextPage.values.every(function (hotKey) { return newKeys_1.includes(hotKey); })) {
                changePage(nextPage);
            }
            else if (hotkeys.prevPage.values.every(function (hotKey) { return newKeys_1.includes(hotKey); })) {
                changePage(prevPage);
            }
            setKeys(newKeys_1);
        }
    };
    React.useEffect(function () {
        containerEventListener.addEventListener('keydown', keyDownListener);
        containerEventListener.addEventListener('keyup', keyUpListener);
        return function () {
            containerEventListener.removeEventListener('keydown', keyDownListener);
            containerEventListener.removeEventListener('keyup', keyUpListener);
        };
    });
    var itemWidth = "var(--control-height-" + size + ")";
    return ((!isEmpty && (React.createElement("nav", __assign({ className: cnPagination({ form: form, size: size, position: minified ? paginationDefaultPosition : position }, [className]), ref: ref }, otherProps),
        (currPage > 1 || minified) && (React.createElement("div", { className: cnPagination('PrevPage') },
            React.createElement(Button, { className: cnPagination('ItemLeft', {
                    minified: minified,
                    show: currPage > 1
                }), label: "\u041D\u0430\u0437\u0430\u0434", iconLeft: IconBackward, view: "ghost", form: form, size: size, onClick: handleClick(prevPage) }),
            !minified && (React.createElement(Text, { className: cnPagination('TipLeft'), size: "xs", view: "ghost" }, hotkeys.prevPage.label)))),
        type === paginationDefaultType ? (React.createElement("div", { className: cnPagination('Pages') },
            isStartDots && (React.createElement(Button, { className: cnPagination('Item', { isActive: currPage === 1 }), style: { width: itemWidth }, label: "1", title: "1", view: "ghost", form: form, size: size, onClick: handleClick(1) })),
            isStartDots && (React.createElement(Text, { size: size, view: "linkMinor", className: cnPagination('More'), style: { width: itemWidth } }, "...")),
            pages.map(function (page) { return (React.createElement(Button, { key: page, className: cnPagination('Item', { isActive: currPage === page }), style: { width: itemWidth }, label: page, title: "" + page, view: "ghost", form: form, size: size, onClick: handleClick(page) })); }),
            isEndDots && (React.createElement(Text, { size: size, view: "linkMinor", className: cnPagination('More'), style: { width: itemWidth } }, "...")),
            isEndDots && (React.createElement(Button, { className: cnPagination('Item', { isActive: currPage === totalPages }), style: { width: itemWidth }, label: totalPages, title: "" + totalPages, view: "ghost", form: form, size: size, onClick: handleClick(totalPages) })))) : (React.createElement("div", { className: cnPagination('Pages') },
            React.createElement(TextField, { className: cnPagination('Input'), form: form, size: size, value: currPage.toString(), onChange: handleChange }),
            React.createElement(Text, { size: size, view: "linkMinor", className: cnPagination('Total') }, getLabel))),
        (currPage < totalPages || minified) && (React.createElement("div", { className: cnPagination('NextPage') },
            React.createElement(Button, { className: cnPagination('ItemRight', {
                    minified: minified,
                    show: currPage < totalPages
                }), label: "\u0412\u043F\u0435\u0440\u0451\u0434", iconRight: IconForward, view: "ghost", form: form, size: size, onClick: handleClick(nextPage) }),
            !minified && (React.createElement(Text, { className: cnPagination('TipRight'), size: "xs", view: "ghost" }, hotkeys.nextPage.label))))))) ||
        null);
});
