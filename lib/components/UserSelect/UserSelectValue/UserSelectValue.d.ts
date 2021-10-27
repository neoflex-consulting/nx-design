import './UserSelectValue.css';
import React from 'react';
declare type UserValueProps = {
    label: string;
    size: 's' | 'm' | 'l';
    subLabel?: string;
    avatarUrl?: string;
    handleRemove?: (e: React.SyntheticEvent) => void;
    multiple?: boolean;
    disabled?: boolean;
    children?: never;
};
export declare const cnUserSelectValue: import("@bem-react/classname").ClassNameFormatter;
export declare const UserSelectValue: React.FC<UserValueProps>;
export {};
