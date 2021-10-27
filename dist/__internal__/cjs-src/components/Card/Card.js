"use strict";
exports.__esModule = true;
exports.Card = exports.cnCard = exports.cardPropStatus = exports.cardPropSpace = exports.cardPropFormDefault = exports.cardPropForm = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var MixCard_1 = require("../../mixs/MixCard/MixCard");
var bem_1 = require("../../utils/bem");
var PropsWithAsAttributes_1 = require("../../utils/types/PropsWithAsAttributes");
exports.cardPropForm = ['round', 'square'];
exports.cardPropFormDefault = exports.cardPropForm[0];
exports.cardPropSpace = ['m', 'xs', 's', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'];
exports.cardPropStatus = ['alert', 'success', 'warning'];
exports.cnCard = bem_1.cn('Card');
exports.Card = PropsWithAsAttributes_1.forwardRefWithAs(function (props, ref) {
    var verticalSpace = props.verticalSpace, horizontalSpace = props.horizontalSpace, status = props.status, _a = props.form, form = _a === void 0 ? exports.cardPropFormDefault : _a, _b = props.shadow, shadow = _b === void 0 ? true : _b, children = props.children, tabIndex = props.tabIndex, className = props.className, _c = props.as, as = _c === void 0 ? 'div' : _c, otherProps = tslib_1.__rest(props, ["verticalSpace", "horizontalSpace", "status", "form", "shadow", "children", "tabIndex", "className", "as"]);
    var Tag = as;
    return (react_1["default"].createElement(Tag, tslib_1.__assign({ tabIndex: tabIndex, ref: ref, className: exports.cnCard(null, [
            MixCard_1.cnMixCard({ verticalSpace: verticalSpace, horizontalSpace: horizontalSpace, shadow: shadow, form: form, status: status }),
            className,
        ]) }, otherProps), children));
});
