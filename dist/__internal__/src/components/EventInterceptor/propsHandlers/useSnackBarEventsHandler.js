import { __assign } from "tslib";
import React from 'react';
import { cnSnackBar } from '../../SnackBar/SnackBar';
export var useSnackBarEventsHandler = function (props, handler) {
    var newProps = __assign({}, props);
    React.useEffect(function () {
        if (newProps.items.length) {
            var value = {
                component: cnSnackBar(),
                event: 'change',
                options: {
                    pageURL: window.location.href,
                    DOMRef: document.getElementsByClassName(cnSnackBar())[0],
                    items: newProps.items
                }
            };
            handler(value);
        }
    }, [newProps.items.length]);
    return newProps;
};
