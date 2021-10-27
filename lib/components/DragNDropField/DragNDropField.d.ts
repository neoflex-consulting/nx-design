import './DragNDropField.css';
import React from 'react';
export declare type DragNDropFieldProps = {
    accept?: string | string[];
    maxSize?: number;
    multiple?: boolean;
    onDropFiles: (files: File[]) => void;
    children?: React.ReactNode | DragNDropFieldChildrenRenderProp;
};
export declare type DragNDropFieldChildrenRenderProp = (props: {
    openFileDialog: () => void;
} & Pick<DragNDropFieldProps, 'accept' | 'maxSize' | 'multiple'>) => React.ReactNode;
export declare const DragNDropField: React.ForwardRefExoticComponent<DragNDropFieldProps & React.RefAttributes<HTMLDivElement>>;
