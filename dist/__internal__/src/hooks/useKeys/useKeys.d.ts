/// <reference types="react" />
export declare type KeyHandler = (prop: Record<string, unknown>, e: React.KeyboardEvent) => void;
export declare type KeyProps = {
    onKeyDown?: (e: React.KeyboardEvent) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};
export declare type UserKeysProps = {
    [key: string]: (prop: {
        keyCode: number;
        key: string;
        shift: boolean;
        meta: boolean;
    }, e: React.KeyboardEvent<Element>) => void;
};
export declare const useKeys: (userKeys: UserKeysProps) => (rest?: KeyProps | undefined) => KeyProps;
