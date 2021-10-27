import './TableFilterContainer.css';
import React from 'react';
export declare type TableFilterContainerProps = {
    onCancel: () => void;
    onConfirm: () => void;
    title?: string;
    confirmButtonLabel?: string;
    cancelButtonLabel?: string;
    className?: string;
};
export declare const TableFilterContainer: React.FC<TableFilterContainerProps>;
