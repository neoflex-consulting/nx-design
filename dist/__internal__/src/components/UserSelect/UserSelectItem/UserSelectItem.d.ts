import './UserSelectItem.css';
import React from 'react';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
declare type UserSelectItemProps = PropsWithHTMLAttributes<{
    label: string;
    active: boolean;
    hovered: boolean;
    size: 's' | 'm' | 'l';
    indent: 'normal' | 'increased';
    subLabel?: string;
    avatarUrl?: string;
    disable?: boolean;
    multiple?: boolean;
}, HTMLDivElement>;
export declare const cnUserSelectItem: import("@bem-react/classname").ClassNameFormatter;
export declare const UserSelectItem: React.FC<UserSelectItemProps>;
export {};
