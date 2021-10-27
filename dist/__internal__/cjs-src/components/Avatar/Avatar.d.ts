import './Avatar.css';
export declare const avatarPropSize: readonly ["m", "s", "xs"];
export declare type AvatarPropSize = typeof avatarPropSize[number];
export declare const avatarPropSizeDefault: AvatarPropSize;
export declare const avatarPropForm: readonly ["round", "brick", "default"];
export declare type AvatarPropForm = typeof avatarPropForm[number];
export declare const avatarPropFormDefault: AvatarPropForm;
declare type Props = {
    url?: string;
    name?: string;
    size?: AvatarPropSize;
    form?: AvatarPropForm;
    children?: never;
};
export declare const cnAvatar: import("@bem-react/classname").ClassNameFormatter;
export declare const getColorIndexForName: (name: string | undefined, maxIndex?: number | undefined) => number;
export declare const getInitialsForName: (name: string | undefined) => string;
export declare const Avatar: import("../../utils/types/PropsWithAsAttributes").ComponentWithAs<Props, "div">;
export {};
