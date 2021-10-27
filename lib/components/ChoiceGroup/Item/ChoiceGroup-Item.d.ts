import React from 'react';
import { IconProps, IconPropSize } from '../../../icons/Icon/Icon';
declare type Props = {
    icon?: React.FC<IconProps>;
    onlyIcon?: boolean;
    iconSize?: IconPropSize;
    label: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
    multiple: boolean;
};
export declare const ChoiceGroupItem: React.FC<Props>;
export {};
