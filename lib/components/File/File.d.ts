import './File.css';
import React from 'react';
import { FileIconProps } from '../../fileIcons/FileIcon/FileIcon';
declare type Props = {
    extension?: string;
    loading?: boolean;
    loadingWithProgressSpin?: boolean;
    loadingProgress?: number;
    children?: never;
};
export declare type FileProps = Props & Omit<FileIconProps, keyof Props>;
export declare const cnFile: import("@bem-react/classname").ClassNameFormatter;
export declare const File: React.FC<FileProps>;
export {};
