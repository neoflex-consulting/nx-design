import { __assign, __rest } from "tslib";
import './SnackBar.css';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { cn } from '../../utils/bem';
import { cnForCssTransition } from '../../utils/cnForCssTransition';
import { usePropsHandler } from '../EventInterceptor/usePropsHandler';
import { SnackBarItem } from './Item/SnackBar-Item';
export var snackBarItemStatus = ['normal', 'system', 'success', 'warning', 'alert'];
export var snackBarItemStatusDefault = snackBarItemStatus[0];
export var cnSnackBar = cn('SnackBar');
export var cnSnackBarItem = cn('SnackBar', 'Item');
var cssTransitionClassNames = cnForCssTransition(cnSnackBarItem);
export var SnackBar = function (props) {
    var _a = usePropsHandler(cnSnackBar(), props), items = _a.items, className = _a.className, otherProps = __rest(_a, ["items", "className"]);
    return (React.createElement(TransitionGroup, __assign({}, otherProps, { className: cnSnackBar(null, [className]), appear: true, enter: true, exit: true }), items.map(function (item) {
        return (React.createElement(CSSTransition, { classNames: cssTransitionClassNames, key: item.key, timeout: 200 },
            React.createElement(SnackBarItem, { item: item })));
    })));
};
