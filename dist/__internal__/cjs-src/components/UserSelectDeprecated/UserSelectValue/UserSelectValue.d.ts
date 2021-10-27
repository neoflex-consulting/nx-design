import './UserSelectValue.css';
import React from 'react';
declare type UserValueProps = {
    label: string;
    onCancel: (e: React.SyntheticEvent) => void;
    size: 's' | 'm' | 'l';
    disabled: boolean;
    children?: never;
    url?: string;
    subLabel?: string;
};
export declare const UserSelectValue: React.FC<UserValueProps>;
export {};
