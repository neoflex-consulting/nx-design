/// <reference types="react" />
import { CollapseGroupProps } from './helpers';
export declare const useChoice: <ITEM, IS_ACCORDION extends boolean>(props: CollapseGroupProps<ITEM, IS_ACCORDION>) => {
    getOnChange: (index: number) => (e: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void;
    getChecked: (index: number) => boolean;
};
