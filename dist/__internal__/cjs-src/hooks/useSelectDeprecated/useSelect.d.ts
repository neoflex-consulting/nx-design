import React, { CSSProperties } from 'react';
declare type ScrollToIndexFunctionType = (optionIndex: number) => void;
declare type OnChangeFunctionType = Function;
declare type IndexForHighlight = number | ((oldIndex: number) => number);
declare type SetHandlerArg<T> = boolean | number | T;
declare type SetHandler<T> = (arg: SetHandlerArg<T>) => void;
export declare type Option<T> = T & {
    group?: string;
    optionForCreate?: boolean;
};
export interface SelectProps<T> {
    options: T[];
    value: T[] | null;
    multiple?: boolean;
    onChange: OnChangeFunctionType;
    optionsRef: React.MutableRefObject<HTMLDivElement | null>;
    controlRef: React.MutableRefObject<HTMLDivElement | null>;
    scrollToIndex?: ScrollToIndexFunctionType;
    disabled?: boolean;
    filterFn?(options: T[], searchValue: string): T[];
    getOptionLabel(option: T): string;
    getOptionKey(option: T): string | number;
    searchFunction(option: T, searchValue: string): boolean;
    onCreate?(s: string): void;
    getGroupOptions?(group: T): T[];
    onSelectOption?(): void;
}
export interface OptionProps extends React.HTMLAttributes<HTMLDivElement> {
    index: number;
    style?: CSSProperties;
    className?: string;
    onClick?(e: React.SyntheticEvent): void;
    onMouseEnter?(e: React.SyntheticEvent): void;
}
export declare type GetOptionPropsResult = {
    onClick(e: React.SyntheticEvent): void;
    onMouseEnter(e: React.SyntheticEvent): void;
} & JSX.IntrinsicElements['div'];
declare type NativeInputProps = JSX.IntrinsicElements['input'];
interface ToggleProps extends NativeInputProps {
    refKey?: string;
    ref?: React.MutableRefObject<HTMLInputElement | null>;
}
interface GetTogglePropsResult extends React.HTMLProps<HTMLInputElement> {
    disabled?: boolean;
}
declare type UseSelectResult<T> = {
    searchValue?: string;
    isOpen: boolean;
    highlightedIndex: number;
    visibleOptions: Option<T>[];
    value: T[] | null;
    selectIndex: SetHandler<T>;
    removeValue?: SetHandler<T>;
    setOpen(isOpen: boolean): void;
    setSearch?(value: string): void;
    highlightIndex(index: IndexForHighlight, scrollToHighlighted: boolean): void;
    getToggleProps(props?: ToggleProps): GetTogglePropsResult;
    getOptionProps(props: OptionProps): GetOptionPropsResult;
};
export declare function useSelect<T>(params: SelectProps<T>): UseSelectResult<T>;
export {};
