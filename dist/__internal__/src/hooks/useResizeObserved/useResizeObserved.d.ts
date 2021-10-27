import React, { RefObject } from 'react';
export declare const useResizeObserved: <ELEMENT extends HTMLElement | SVGGraphicsElement, RETURN_TYPE>(refs: React.RefObject<ELEMENT>[], mapper: (el: ELEMENT | null) => RETURN_TYPE) => RETURN_TYPE[];
