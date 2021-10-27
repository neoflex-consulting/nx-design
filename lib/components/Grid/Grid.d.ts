import './Grid.css';
export * from './GridItem/GridItem';
export declare const gridPropXAlign: readonly ["left", "center", "right"];
export declare type GridPropXAlign = typeof gridPropXAlign[number];
export declare const gridPropYAlign: readonly ["top", "center", "bottom"];
export declare type GridPropYAlign = typeof gridPropYAlign[number];
export declare const gridPropGap: readonly [0, "2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"];
export declare type GridPropGap = typeof gridPropGap[number] | '0';
export declare type GridPropColGap = GridPropGap;
export declare type GridPropRowGap = GridPropGap;
export declare const breakpointSizes: readonly ["xs", "s", "m", "l", "xl", "2xl"];
export declare type BreakpointSizes = typeof breakpointSizes[number];
declare type Breakpoint = {
    cols?: number | string;
    gap?: GridPropGap;
    colGap?: GridPropColGap;
    rowGap?: GridPropRowGap;
    xAlign?: GridPropXAlign;
    yAlign?: GridPropYAlign;
};
declare type BreakpointsProps = {
    'xs'?: Breakpoint;
    's'?: Breakpoint;
    'm'?: Breakpoint;
    'l'?: Breakpoint;
    'xl'?: Breakpoint;
    '2xl'?: Breakpoint;
};
export declare type GridProps = Breakpoint & {
    breakpoints?: BreakpointsProps;
};
export declare const cnGrid: import("@bem-react/classname").ClassNameFormatter;
export declare const Grid: import("../../utils/types/PropsWithAsAttributes").ComponentWithAs<GridProps, "div">;
