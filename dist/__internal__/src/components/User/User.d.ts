import './User.css';
import React from 'react';
import { IconProps } from '../../icons/Icon/Icon';
export declare const userPropSize: readonly ["m", "s", "l"];
export declare type UserPropSize = typeof userPropSize[number];
export declare const userPropSizeDefault: UserPropSize;
export declare const userPropView: readonly ["clear", "ghost"];
export declare type UserPropView = typeof userPropView[number];
export declare const userPropViewDefault: UserPropView;
export declare const userPropWidth: readonly ["default", "full"];
export declare type UserPropWidth = typeof userPropWidth[number];
export declare const userPropWidthDefault: UserPropWidth;
export declare const userPropStatus: readonly ["available", "remote", "out"];
export declare type UserPropStatus = typeof userPropStatus[number];
declare type Props = {
    avatarUrl?: string;
    name?: string;
    size?: UserPropSize;
    view?: UserPropView;
    width?: UserPropWidth;
    status?: UserPropStatus;
    onlyAvatar?: boolean;
    info?: string;
    children?: never;
} & ({
    withArrow?: boolean;
    iconRight?: never;
    onIconRightClick?: never;
} | {
    withArrow?: never;
    iconRight?: React.FC<IconProps>;
    onIconRightClick?: (e: React.SyntheticEvent) => void;
});
export declare const cnUser: import("@bem-react/classname").ClassNameFormatter;
export declare const User: import("../../utils/types/PropsWithAsAttributes").ComponentWithAs<Props, "div">;
export {};
