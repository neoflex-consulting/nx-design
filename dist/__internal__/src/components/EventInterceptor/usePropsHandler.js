import React from 'react';
import { EventInterceptorContext } from './EventInterceptor';
export var usePropsHandler = function (componentName, props, ref) {
    var context = React.useContext(EventInterceptorContext);
    if (!context) {
        return props;
    }
    var eventHandler = context.eventHandler, map = context.map;
    var propsHandler = map[componentName];
    if (!propsHandler) {
        return props;
    }
    return propsHandler(props, eventHandler, ref);
};
