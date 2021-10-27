import { __assign } from "tslib";
import React from 'react';
import { defaultGetItemLabel } from '../../Select/helpers';
import { cnSelect } from '../../SelectComponents/cnSelect';
export var useSelectEventsHandler = function (props, handler, controlRef) {
    var newProps = __assign({}, props);
    React.useEffect(function () {
        if (newProps.value) {
            var value = {
                component: cnSelect(),
                event: 'change',
                options: {
                    placeholder: newProps.placeholder,
                    label: newProps.getItemLabel
                        ? newProps.getItemLabel(newProps.value)
                        : defaultGetItemLabel(newProps.value),
                    value: newProps.value,
                    pageURL: window.location.href,
                    DOMRef: controlRef.current
                }
            };
            handler(value);
        }
    }, [newProps.value]);
    return props;
};
