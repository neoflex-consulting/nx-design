import { RefObject } from 'react';
export declare type ClickOutsideHandler = (event: MouseEvent) => void;
declare type UseClickOutsideProps = {
    isActive: boolean;
    ignoreClicksInsideRefs: ReadonlyArray<RefObject<HTMLElement>>;
    handler: ClickOutsideHandler;
};
export declare function useClickOutside({ isActive, ignoreClicksInsideRefs, handler, }: UseClickOutsideProps): void;
export {};
