/// <reference types="react" />
declare type ComponentSize = {
    width: number;
    height: number;
};
export declare function useComponentSize(ref: React.RefObject<HTMLElement | SVGGraphicsElement>): ComponentSize;
export {};
