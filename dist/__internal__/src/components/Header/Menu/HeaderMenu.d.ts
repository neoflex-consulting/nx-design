import './HeaderMenu.css';
import React from 'react';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
export declare const cnHeaderMenu: import("@bem-react/classname").ClassNameFormatter;
export declare type Item = {
    label?: string;
    href?: string;
    target?: string;
    active?: boolean;
    onClick?: React.EventHandler<React.MouseEvent>;
    children?: never;
};
declare type MenuProps = PropsWithJsxAttributes<{
    items: Item[];
}, 'nav'>;
export declare const HeaderMenu: React.FC<MenuProps>;
export {};
