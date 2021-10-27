import './HeaderLogo.css';
import React from 'react';
import { PropsWithAsAttributes } from '../../../utils/types/PropsWithAsAttributes';
export declare const cnHeaderLogo: import("@bem-react/classname").ClassNameFormatter;
export declare type HeaderProps<As extends keyof JSX.IntrinsicElements> = PropsWithAsAttributes<{}, As>;
export declare function HeaderLogo<As extends keyof JSX.IntrinsicElements = 'div'>(props: HeaderProps<As>): React.ReactElement;
