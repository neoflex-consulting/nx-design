import React from 'react';
declare type State = {
    searchValue: string;
    resolvedSearchValue: string;
    isOpen: boolean;
    highlightedIndex: number;
    scrollToHighlighted: boolean;
};
declare type Action = string;
declare type Updater = (state: State) => State;
export declare function useHoistedState(initialState: State): [State, (updater: Updater, action: Action) => void];
declare type ScrollToIndexFunctionType = (optionIndex: number, dropdownRef: React.MutableRefObject<HTMLDivElement | null>) => void;
export declare const scrollToIndex: ScrollToIndexFunctionType;
export {};
