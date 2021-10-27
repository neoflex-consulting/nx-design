import React from 'react';
import { IconProps } from '../../icons/Icon/Icon';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';
import { CollapsePropHorizontalSpace, CollapsePropSize, CollapsePropView } from '../Collapse/Collapse';
import { CollapseIconPropDirection } from '../Collapse/CollapseIcon/CollapseIcon';
export declare type DefaultItem = {
    label: string;
    content: React.ReactNode;
    rightSide?: React.ReactNode | React.ReactNode[];
};
export declare type CollapseGroupPropOnOpen<IS_ACCORDION> = (params: {
    e: React.MouseEvent<HTMLDivElement, MouseEvent>;
    value: (IS_ACCORDION extends true ? number : number[]) | null;
}) => void;
export declare type CollapseGroupPropOpened<IS_ACCORDION> = (IS_ACCORDION extends true ? number : number[]) | null | undefined;
declare type CollapseGroupPropGetItemLabel<ITEM> = (item: ITEM) => string;
declare type CollapseGroupPropGetItemContent<ITEM> = (item: ITEM) => React.ReactNode;
declare type CollapseGroupPropGetItemRightSide<ITEM> = (item: ITEM) => React.ReactNode | React.ReactNode[] | undefined;
export declare type CollapseGroupProps<ITEM, IS_ACCORDION extends boolean> = PropsWithHTMLAttributesAndRef<{
    items: ITEM[];
    isAccordion?: IS_ACCORDION;
    children?: never;
    icon?: React.FC<IconProps>;
    divider?: boolean;
    size?: CollapsePropSize;
    view?: CollapsePropView;
    horizontalSpace?: CollapsePropHorizontalSpace;
    hoverEffect?: boolean;
    onOpen?: CollapseGroupPropOnOpen<IS_ACCORDION>;
    opened?: CollapseGroupPropOpened<IS_ACCORDION>;
    getItemLabel?: CollapseGroupPropGetItemLabel<ITEM>;
    getItemContent?: CollapseGroupPropGetItemContent<ITEM>;
} & ({
    closeIcon: React.FC<IconProps>;
    directionIcon?: never;
    closeDirectionIcon?: never;
} | {
    closeIcon?: never;
    directionIcon?: CollapseIconPropDirection;
    closeDirectionIcon?: CollapseIconPropDirection;
}) & ({
    iconPosition?: 'left';
    getItemRightSide?: CollapseGroupPropGetItemRightSide<ITEM>;
} | {
    iconPosition?: 'right';
    getItemRightSide?: never;
}), HTMLDivElement> & (ITEM extends {
    label: DefaultItem['label'];
} ? {} : {
    getItemLabel: CollapseGroupPropGetItemLabel<ITEM>;
}) & (ITEM extends {
    content: DefaultItem['content'];
} ? {} : {
    getItemContent: CollapseGroupPropGetItemContent<ITEM>;
});
export declare const defaultGetItemLabel: CollapseGroupPropGetItemLabel<DefaultItem>;
export declare const defaultGetItemContent: CollapseGroupPropGetItemContent<DefaultItem>;
export declare const defaultGetItemRightSide: CollapseGroupPropGetItemContent<DefaultItem>;
export declare type CollapseGroupComponent = <ITEM, IS_ACCORDION extends boolean = false>(props: CollapseGroupProps<ITEM, IS_ACCORDION>) => React.ReactElement | null;
export declare type CollapseGroupRenderFunction = <ITEM, IS_ACCORDION extends boolean = false>(props: CollapseGroupProps<ITEM, IS_ACCORDION>, ref: React.Ref<HTMLDivElement>) => React.ReactElement | null;
export declare function withDefaultGetters<ITEM, IS_ACCORDION extends boolean>(props: CollapseGroupProps<ITEM, IS_ACCORDION>): ({
    items: ITEM[];
    isAccordion?: IS_ACCORDION | undefined;
    children?: undefined;
    icon?: React.FC<import("../../utils/types/PropsWithHTMLAttributes").PropsWithHTMLAttributes<import("../../icons/Icon/Icon").Props, HTMLSpanElement>> | undefined;
    divider?: boolean | undefined;
    size?: "xs" | "s" | "m" | "l" | "2xs" | undefined;
    view?: "primary" | "secondary" | undefined;
    horizontalSpace?: "xs" | "s" | "m" | "l" | "2xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "3xs" | undefined;
    hoverEffect?: boolean | undefined;
    onOpen?: CollapseGroupPropOnOpen<IS_ACCORDION> | undefined;
    opened?: CollapseGroupPropOpened<IS_ACCORDION>;
    getItemLabel?: CollapseGroupPropGetItemLabel<ITEM> | undefined;
    getItemContent?: CollapseGroupPropGetItemContent<ITEM> | undefined;
} & {
    closeIcon: React.FC<import("../../utils/types/PropsWithHTMLAttributes").PropsWithHTMLAttributes<import("../../icons/Icon/Icon").Props, HTMLSpanElement>>;
    directionIcon?: undefined;
    closeDirectionIcon?: undefined;
} & {
    iconPosition?: "left" | undefined;
    getItemRightSide?: CollapseGroupPropGetItemRightSide<ITEM> | undefined;
} & Pick<React.HTMLAttributes<HTMLDivElement>, "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & React.RefAttributes<HTMLDivElement> & (ITEM extends {
    label: string;
} ? {} : {
    getItemLabel: CollapseGroupPropGetItemLabel<ITEM>;
}) & (ITEM extends {
    content: React.ReactNode;
} ? {} : {
    getItemContent: CollapseGroupPropGetItemContent<ITEM>;
}) & {
    getItemLabel: CollapseGroupPropGetItemLabel<DefaultItem> | CollapseGroupPropGetItemLabel<ITEM>;
    getItemContent: CollapseGroupPropGetItemContent<DefaultItem> | CollapseGroupPropGetItemContent<ITEM>;
    getItemRightSide: CollapseGroupPropGetItemContent<DefaultItem> | CollapseGroupPropGetItemRightSide<ITEM>;
}) | ({
    items: ITEM[];
    isAccordion?: IS_ACCORDION | undefined;
    children?: undefined;
    icon?: React.FC<import("../../utils/types/PropsWithHTMLAttributes").PropsWithHTMLAttributes<import("../../icons/Icon/Icon").Props, HTMLSpanElement>> | undefined;
    divider?: boolean | undefined;
    size?: "xs" | "s" | "m" | "l" | "2xs" | undefined;
    view?: "primary" | "secondary" | undefined;
    horizontalSpace?: "xs" | "s" | "m" | "l" | "2xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "3xs" | undefined;
    hoverEffect?: boolean | undefined;
    onOpen?: CollapseGroupPropOnOpen<IS_ACCORDION> | undefined;
    opened?: CollapseGroupPropOpened<IS_ACCORDION>;
    getItemLabel?: CollapseGroupPropGetItemLabel<ITEM> | undefined;
    getItemContent?: CollapseGroupPropGetItemContent<ITEM> | undefined;
} & {
    closeIcon?: undefined;
    directionIcon?: "left" | "right" | "downRight" | "downLeft" | "upRight" | "upLeft" | "up" | "down" | undefined;
    closeDirectionIcon?: "left" | "right" | "downRight" | "downLeft" | "upRight" | "upLeft" | "up" | "down" | undefined;
} & {
    iconPosition?: "left" | undefined;
    getItemRightSide?: CollapseGroupPropGetItemRightSide<ITEM> | undefined;
} & Pick<React.HTMLAttributes<HTMLDivElement>, "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & React.RefAttributes<HTMLDivElement> & (ITEM extends {
    label: string;
} ? {} : {
    getItemLabel: CollapseGroupPropGetItemLabel<ITEM>;
}) & (ITEM extends {
    content: React.ReactNode;
} ? {} : {
    getItemContent: CollapseGroupPropGetItemContent<ITEM>;
}) & {
    getItemLabel: CollapseGroupPropGetItemLabel<DefaultItem> | CollapseGroupPropGetItemLabel<ITEM>;
    getItemContent: CollapseGroupPropGetItemContent<DefaultItem> | CollapseGroupPropGetItemContent<ITEM>;
    getItemRightSide: CollapseGroupPropGetItemContent<DefaultItem> | CollapseGroupPropGetItemRightSide<ITEM>;
});
export {};
