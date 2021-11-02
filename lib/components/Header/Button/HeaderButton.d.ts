import React from 'react';
import { Button } from '../../index';
export declare const cnHeaderButton: import("@bem-react/classname").ClassNameFormatter;
declare type ButtonProps = React.ComponentProps<typeof Button>;
declare type HeaderButtonProps = Omit<ButtonProps, 'size' | 'view' | 'form' | 'onlyIcon'>;
export declare const HeaderButton: React.FC<HeaderButtonProps>;
export {};
