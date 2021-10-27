import React from 'react';
import { SelectProps } from '../../Select/helpers';
import { EventInterceptorHandler } from '../EventInterceptor';
export declare const useSelectEventsHandler: (props: SelectProps, handler: EventInterceptorHandler, controlRef: React.RefObject<HTMLDivElement | null>) => SelectProps<import("../../Select/helpers").DefaultItem, import("../../Select/helpers").DefaultGroup>;
