import './TableSelectedOptionsList.css';
import React from 'react';
declare type Props = {
    values: Array<{
        id: string;
        name: string;
        value?: any;
    }>;
    onRemove: (id: string) => void;
    onReset: () => void;
};
export declare const TableSelectedOptionsList: React.FC<Props>;
export {};
