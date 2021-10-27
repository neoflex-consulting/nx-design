import React from 'react';
declare const eventInterceptorPropComponent: readonly ["Button", "TextField", "Checkbox", "SnackBar", "Select"];
export declare type EventInterceptorPropComponent = typeof eventInterceptorPropComponent[number];
export declare type EventInterceptorProps = {
    component: EventInterceptorPropComponent;
    event?: string;
    options: {
        [key: string]: any;
    };
};
export declare type EventInterceptorHandler = ((props: EventInterceptorProps) => void) | undefined;
export declare type EventHandler = <T>(props: T, handler: EventInterceptorHandler, ref?: React.RefObject<HTMLElement>) => T;
export declare type EventInterceptorPropMap = {
    [key: string]: EventHandler;
};
declare const EventInterceptorContext: React.Context<{
    eventHandler: EventInterceptorHandler;
    map: EventInterceptorPropMap;
} | undefined>;
declare const EventInterceptorProvider: ({ children, eventHandler, map, }: {
    children: React.ReactNode;
    eventHandler: EventInterceptorHandler;
    map: EventInterceptorPropMap;
}) => JSX.Element;
export { EventInterceptorContext, EventInterceptorProvider };
export * from './eventInterceptorMap';
