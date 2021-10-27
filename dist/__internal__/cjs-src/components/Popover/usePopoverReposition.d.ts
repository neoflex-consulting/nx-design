import React from 'react';
/** Запрос репозиции поповера при ресайзе окна и скролле */
export declare const usePopoverReposition: ({ isActive, scrollAnchorRef, onRequestReposition, }: {
    isActive: boolean;
    /** При скролле родителей этого элемента будет запрашиваться репозиция поповера */
    scrollAnchorRef: React.RefObject<HTMLElement | null>;
    onRequestReposition: () => void;
}) => void;
