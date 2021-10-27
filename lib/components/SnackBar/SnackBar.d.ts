import './SnackBar.css';
import React from 'react';
import { IconProps } from '../../icons/Icon/Icon';
import { PropsWithHTMLAttributes } from '../../utils/types/PropsWithHTMLAttributes';
export declare type SnackBarPropItemAction = {
    label: string | number;
    onClick: React.EventHandler<React.MouseEvent>;
};
export declare const snackBarItemStatus: readonly ["normal", "system", "success", "warning", "alert"];
export declare type SnackBarItemStatus = typeof snackBarItemStatus[number];
export declare const snackBarItemStatusDefault: SnackBarItemStatus;
export declare type Item = {
    key: string | number;
    message?: string | number;
    status?: SnackBarItemStatus;
    autoClose?: boolean | number;
    icon?: React.FC<IconProps>;
    actions?: SnackBarPropItemAction[];
    onClose?: (item: Item) => void;
    onAutoClose?: (item: Item) => void;
};
declare type Props = {
    items: Item[];
    children?: never;
};
export declare type SnackBarProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;
export declare const cnSnackBar: import("@bem-react/classname").ClassNameFormatter;
export declare const cnSnackBarItem: import("@bem-react/classname").ClassNameFormatter;
export declare const SnackBar: React.FC<SnackBarProps>;
export {};
