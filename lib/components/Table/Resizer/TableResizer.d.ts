import './TableResizer.css';
import React from 'react';
declare type Props = {
    height: number;
    top: number;
    isVisible?: boolean;
    onResize: (delta: number) => void;
    onDoubleClick: () => void;
};
export declare class TableResizer extends React.Component<Props, {
    isDragging: boolean;
}> {
    state: {
        isDragging: boolean;
    };
    componentWillUnmount(): void;
    onMouseDown: () => void;
    onMouseMove: (e: MouseEvent) => void;
    onMouseUp: () => void;
    removeListeners: () => void;
    render(): JSX.Element;
}
export {};
