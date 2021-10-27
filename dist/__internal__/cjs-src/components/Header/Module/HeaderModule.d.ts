import './HeaderModule.css';
import React from 'react';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
export declare const cnHeaderModule: import("@bem-react/classname").ClassNameFormatter;
declare const headerModulePropIndent: readonly ["s", "m", "l"];
export declare type HeaderModulePropIndent = typeof headerModulePropIndent[number];
declare type HeaderModuleProps = PropsWithJsxAttributes<{
    indent?: HeaderModulePropIndent;
}, 'div'>;
export declare const HeaderModule: React.FC<HeaderModuleProps>;
export {};
