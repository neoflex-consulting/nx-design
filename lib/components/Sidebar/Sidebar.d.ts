import './Sidebar.css';
import React from 'react';
declare type DivProps = JSX.IntrinsicElements['div'];
declare const sidebarPropPosition: readonly ["right", "bottom", "left", "top"];
declare type SidebarPropPosition = typeof sidebarPropPosition[number];
declare const sidebarPropWidth: readonly ["auto"];
declare type SidebarPropWidth = typeof sidebarPropWidth[number];
declare const sidebarPropHeight: readonly ["auto"];
declare type SidebarPropHeight = typeof sidebarPropHeight[number];
declare type SidebarProps = {
    isOpen?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    hasOverlay?: boolean;
    onOverlayClick?: (event: MouseEvent) => void;
    onClickOutside?: (event: MouseEvent) => void;
    position?: SidebarPropPosition;
    width?: SidebarPropWidth;
    height?: SidebarPropHeight;
    className?: string;
    children?: React.ReactNode;
    container?: HTMLDivElement | undefined;
};
declare type SidebarContentProps = {
    className?: string;
    children: React.ReactNode;
};
declare type SidebarActionsProps = {
    className?: string;
    children: React.ReactNode;
};
declare const SidebarContent: React.FC<SidebarContentProps>;
declare const SidebarActions: React.FC<SidebarActionsProps>;
interface SidebarComponent extends React.FC<SidebarProps>, DivProps {
    Content: typeof SidebarContent;
    Actions: typeof SidebarActions;
}
export declare const Sidebar: SidebarComponent;
export {};
