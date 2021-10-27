import React from 'react';
var eventInterceptorPropComponent = [
    'Button',
    'TextField',
    'Checkbox',
    'SnackBar',
    'Select',
];
// eslint-disable-next-line @typescript-eslint/no-empty-function
var EventInterceptorContext = React.createContext(undefined);
var EventInterceptorProvider = function (_a) {
    var children = _a.children, eventHandler = _a.eventHandler, map = _a.map;
    return (React.createElement(EventInterceptorContext.Provider, { value: { eventHandler: eventHandler, map: map } }, children));
};
export { EventInterceptorContext, EventInterceptorProvider };
export * from './eventInterceptorMap';
