import React from 'react';
import { IconProps } from '../../icons/Icon/Icon';
import { TagBase } from '../TagBase/TagBase';
declare type TagBaseProps = React.ComponentProps<typeof TagBase>;
export declare const tagPropMode: readonly ["button", "check", "cancel", "link", "info"];
export declare const tagPropModeDefault: "button";
declare type TagPropMode = typeof tagPropMode[number];
declare type CommonProps = {
    size?: TagBaseProps['size'];
    label: TagBaseProps['label'];
    group?: TagBaseProps['group'];
    icon?: React.FC<IconProps>;
    iconSize?: IconProps['size'];
    children?: never;
};
declare type PropsWithModeButton = CommonProps & {
    mode?: 'button';
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    checked?: never;
    onChange?: never;
    onCancel?: never;
};
declare type PropsWithModeLink = CommonProps & {
    mode: 'link';
    checked?: never;
    onChange?: never;
    onCancel?: never;
};
declare type PropsWithModeCheck = CommonProps & {
    mode: 'check';
    onChange: ({ e, checked }: {
        e?: React.MouseEvent;
        checked: boolean;
    }) => void;
    checked: boolean;
    onClick?: never;
    onCancel?: never;
};
declare type PropsWithModeCancel = CommonProps & {
    mode: 'cancel';
    onCancel: React.MouseEventHandler<HTMLButtonElement>;
    onClick?: never;
    onChange?: never;
    checked?: never;
};
declare type PropsWithModeInfo = CommonProps & {
    mode: 'info';
    onCancel?: never;
    onClick?: never;
    onChange?: never;
    checked?: never;
};
declare type Props<ROLE extends TagPropMode = 'button'> = ROLE extends 'button' ? PropsWithModeButton & Omit<JSX.IntrinsicElements['button'], keyof PropsWithModeButton> : {} & ROLE extends 'check' ? PropsWithModeCheck & Omit<JSX.IntrinsicElements['button'], keyof PropsWithModeCheck> : {} & ROLE extends 'cancel' ? PropsWithModeCancel & Omit<JSX.IntrinsicElements['span'], keyof PropsWithModeCancel> : {} & ROLE extends 'link' ? PropsWithModeLink & Omit<JSX.IntrinsicElements['a'], keyof PropsWithModeLink> : {} & ROLE extends 'info' ? PropsWithModeInfo & Omit<JSX.IntrinsicElements['span'], keyof PropsWithModeInfo> : {};
declare type Component = <ROLE extends TagPropMode>(props: Props<ROLE> & React.RefAttributes<HTMLElement>) => React.ReactElement | null;
export declare function getParams(mode: TagPropMode, checked?: PropsWithModeCheck['checked'], onClick?: React.MouseEventHandler, onChange?: PropsWithModeCheck['onChange'], onCancel?: PropsWithModeCancel['onCancel']): {
    view?: TagBaseProps['view'];
    onClick?: TagBaseProps['onClick'];
    onCancel?: TagBaseProps['onCancel'];
    withAction?: TagBaseProps['withAction'];
    as: keyof JSX.IntrinsicElements;
};
export declare const Tag: Component;
export {};
