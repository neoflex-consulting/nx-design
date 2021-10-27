import { __assign, __rest } from "tslib";
import React from 'react';
import { cnMixCard } from '../../mixs/MixCard/MixCard';
import { cn } from '../../utils/bem';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
export var cardPropForm = ['round', 'square'];
export var cardPropFormDefault = cardPropForm[0];
export var cardPropSpace = ['m', 'xs', 's', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'];
export var cardPropStatus = ['alert', 'success', 'warning'];
export var cnCard = cn('Card');
export var Card = forwardRefWithAs(function (props, ref) {
    var verticalSpace = props.verticalSpace, horizontalSpace = props.horizontalSpace, status = props.status, _a = props.form, form = _a === void 0 ? cardPropFormDefault : _a, _b = props.shadow, shadow = _b === void 0 ? true : _b, children = props.children, tabIndex = props.tabIndex, className = props.className, _c = props.as, as = _c === void 0 ? 'div' : _c, otherProps = __rest(props, ["verticalSpace", "horizontalSpace", "status", "form", "shadow", "children", "tabIndex", "className", "as"]);
    var Tag = as;
    return (React.createElement(Tag, __assign({ tabIndex: tabIndex, ref: ref, className: cnCard(null, [
            cnMixCard({ verticalSpace: verticalSpace, horizontalSpace: horizontalSpace, shadow: shadow, form: form, status: status }),
            className,
        ]) }, otherProps), children));
});
