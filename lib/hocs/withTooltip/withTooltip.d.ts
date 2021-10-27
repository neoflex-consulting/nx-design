import React from 'react';
import { TooltipProps as TooltipComponentProps } from '../../components/Tooltip/Tooltip';
export declare const withTooltipPropMode: readonly ["mouseover", "click"];
export declare const withTooltipPropModeDefault: "mouseover";
declare type WithTooltipPropMode = typeof withTooltipPropMode[number];
export declare const appearTimeoutDefault = 400;
export declare const exitTimeoutDefault = 200;
declare type ComponentProps = {
    onClick?: (() => void) | React.EventHandler<React.MouseEvent>;
    onMouseEnter?: (() => void) | React.MouseEventHandler;
    onMouseLeave?: (() => void) | React.MouseEventHandler;
};
export declare type TooltipProps = Omit<TooltipComponentProps, 'children' | 'ref'> & {
    content?: React.ReactNode;
    mode?: WithTooltipPropMode;
    closeOnClickOutside?: boolean;
    appearTimeout?: number;
    exitTimeout?: number;
};
export declare type WithToltipProps<Props> = Omit<Props, 'tooltipProps'> & {
    tooltipProps?: TooltipProps;
};
export declare function withTooltip(hocProps?: TooltipProps): <COMPONENT_TYPE extends React.ComponentClass<ComponentProps, any> | React.FunctionComponent<ComponentProps> | ((props: ComponentProps) => React.ReactElement | null), COMPONENT_PROPS extends ComponentProps>(Component: COMPONENT_TYPE) => COMPONENT_TYPE | React.ComponentClass<WithToltipProps<COMPONENT_PROPS>, any> | React.FunctionComponent<WithToltipProps<COMPONENT_PROPS>>;
export {};
