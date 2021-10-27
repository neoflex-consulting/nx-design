import './TableRowsCollapse.css';
import React from 'react';
export declare type Props = {
    level: number;
    isExpandedByDefault?: boolean;
    toggleCollapse?: (e: React.SyntheticEvent) => void;
    isExpanded?: boolean;
    withCollapseButton?: boolean;
};
export declare const cnTableRowsCollapse: import("@bem-react/classname").ClassNameFormatter;
export declare const TableRowsCollapse: React.FC<Props>;
