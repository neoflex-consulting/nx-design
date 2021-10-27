import './GridItem.css';
declare type Breakpoint = {
    col?: number | string;
    colStart?: number | string;
    row?: number | string;
    rowStart?: number | string;
    order?: number | string;
};
declare type BreakpointsProps = {
    'xs'?: Breakpoint;
    's'?: Breakpoint;
    'm'?: Breakpoint;
    'l'?: Breakpoint;
    'xl'?: Breakpoint;
    '2xl'?: Breakpoint;
};
export declare type GridItemProps = Breakpoint & {
    breakpoints?: BreakpointsProps;
};
export declare const cnGridItem: import("@bem-react/classname").ClassNameFormatter;
export declare const GridItem: import("../../../utils/types/PropsWithAsAttributes").ComponentWithAs<GridItemProps, "div">;
export {};
