import './UserSelectItem.css';
import React from 'react';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
declare const sizes: readonly ["xs", "s", "m", "l"];
declare type PropSize = typeof sizes[number];
declare type UserSelectItemProps = PropsWithHTMLAttributes<{
    label: string;
    subLabel?: string;
    url?: string;
    active: boolean;
    hovered: boolean;
    size: PropSize;
    indent: 'normal' | 'increased';
}, HTMLDivElement>;
export declare const cnUserItem: import("@bem-react/classname").ClassNameFormatter;
export declare const cnUserItemCssTransition: import("../../../utils/cnForCssTransition").CSSTransitionClassNames;
export declare const UserSelectItem: React.FC<UserSelectItemProps>;
export {};
