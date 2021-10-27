import './FileField.css';
import React from 'react';
import { PropsWithJsxAttributes } from '../../utils/types/PropsWithJsxAttributes';
declare type ComponentProps = {
    role: string;
    as: keyof JSX.IntrinsicElements;
};
declare type RenderFn = (props: ComponentProps) => React.ReactNode;
export declare type FileFieldProps = PropsWithJsxAttributes<{
    id: string;
    onChange?: (e: DragEvent | React.ChangeEvent) => void;
    children?: RenderFn | React.ReactNode;
    inputRef?: React.Ref<HTMLInputElement>;
}, 'input'>;
export declare const cnFileField: import("@bem-react/classname").ClassNameFormatter;
export declare const FileField: React.FC<FileFieldProps>;
export {};
