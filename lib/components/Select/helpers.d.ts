import React from 'react';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';
import { PropForm, PropSize, PropView, RenderItemProps } from '../SelectComponents/types';
export declare type DefaultItem = {
    label: string;
    id: string | number;
    groupId?: string | number;
    disabled?: boolean;
};
export declare type DefaultGroup = {
    label: string;
    id: string | number;
};
declare type PropValue<ITEM> = ITEM | null | undefined;
declare type RenderValueProps<ITEM> = {
    item: ITEM;
};
export declare type PropGetItemLabel<ITEM> = (item: ITEM) => string;
export declare type PropGetItemKey<ITEM> = (item: ITEM) => string | number;
export declare type PropGetItemGroupKey<ITEM> = (item: ITEM) => string | number | undefined;
export declare type PropGetItemDisabled<ITEM> = (item: ITEM) => boolean | undefined;
export declare type PropGetGroupKey<GROUP> = (group: GROUP) => string | number;
export declare type PropGetGroupLabel<GROUP> = (group: GROUP) => string;
export declare type PropRenderItem<ITEM> = (props: RenderItemProps<ITEM>) => React.ReactElement | null;
export declare type PropRenderValue<ITEM> = (props: RenderValueProps<ITEM>) => React.ReactElement | null;
export declare type SelectProps<ITEM = DefaultItem, GROUP = DefaultGroup> = PropsWithHTMLAttributesAndRef<{
    items: ITEM[];
    onChange: (props: {
        value: ITEM | null;
        e: React.SyntheticEvent;
    }) => void;
    disabled?: boolean;
    form?: PropForm;
    size?: PropSize;
    view?: PropView;
    focused?: boolean;
    multiple?: boolean;
    placeholder?: string;
    ariaLabel?: string;
    dropdownClassName?: string;
    dropdownRef?: React.RefObject<HTMLDivElement>;
    name?: string;
    value?: PropValue<ITEM>;
    renderItem?: PropRenderItem<ITEM>;
    renderValue?: PropRenderValue<ITEM>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    inputRef?: React.RefObject<HTMLInputElement>;
    groups?: GROUP[];
    getItemLabel?: PropGetItemLabel<ITEM>;
    getItemKey?: PropGetItemKey<ITEM>;
    getItemGroupKey?: PropGetItemGroupKey<ITEM>;
    getItemDisabled?: PropGetItemDisabled<ITEM>;
    getGroupLabel?: PropGetGroupLabel<GROUP>;
    getGroupKey?: PropGetGroupKey<GROUP>;
}, HTMLDivElement> & (ITEM extends {
    label: DefaultItem['label'];
} ? {} : {
    getItemLabel: PropGetItemLabel<ITEM>;
}) & (ITEM extends {
    id: DefaultItem['id'];
} ? {} : {
    getItemKey: PropGetItemKey<ITEM>;
}) & (GROUP extends {
    label: DefaultGroup['label'];
} ? {} : {
    getGroupLabel: PropGetGroupLabel<GROUP>;
}) & (GROUP extends {
    id: DefaultGroup['id'];
} ? {} : {
    getGroupKey: PropGetGroupKey<GROUP>;
});
export declare type SelectComponent = <ITEM = DefaultItem, GROUP = DefaultGroup>(props: SelectProps<ITEM, GROUP>) => React.ReactElement | null;
export declare const defaultGetItemKey: PropGetItemKey<DefaultItem>;
export declare const defaultGetItemLabel: PropGetItemLabel<DefaultItem>;
export declare const defaultGetItemGroupKey: PropGetItemGroupKey<DefaultItem>;
export declare const defaultGetItemDisabled: PropGetItemDisabled<DefaultItem>;
export declare const defaultGetGroupKey: PropGetGroupKey<DefaultGroup>;
export declare const defaultGetGroupLabel: PropGetGroupLabel<DefaultGroup>;
export declare function withDefaultGetters<ITEM, GROUP>(props: SelectProps<ITEM, GROUP>): {
    items: ITEM[];
    onChange: (props: {
        value: ITEM | null;
        e: React.SyntheticEvent<Element, Event>;
    }) => void;
    disabled?: boolean | undefined;
    form?: "default" | "round" | "brick" | "brickDefault" | "defaultBrick" | "clearRound" | "roundClear" | "clearDefault" | "defaultClear" | "brickClear" | "clearBrick" | "clearClear" | undefined;
    size?: "xs" | "s" | "m" | "l" | undefined;
    view?: "default" | "clear" | undefined;
    focused?: boolean | undefined;
    multiple?: boolean | undefined;
    placeholder?: string | undefined;
    ariaLabel?: string | undefined;
    dropdownClassName?: string | undefined;
    dropdownRef?: React.RefObject<HTMLDivElement> | undefined;
    name?: string | undefined;
    value?: PropValue<ITEM>;
    renderItem?: PropRenderItem<ITEM> | undefined;
    renderValue?: PropRenderValue<ITEM> | undefined;
    onFocus?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    inputRef?: React.RefObject<HTMLInputElement> | undefined;
    groups?: GROUP[] | undefined;
    getItemLabel?: PropGetItemLabel<ITEM> | undefined;
    getItemKey?: PropGetItemKey<ITEM> | undefined;
    getItemGroupKey?: PropGetItemGroupKey<ITEM> | undefined;
    getItemDisabled?: PropGetItemDisabled<ITEM> | undefined;
    getGroupLabel?: PropGetGroupLabel<GROUP> | undefined;
    getGroupKey?: PropGetGroupKey<GROUP> | undefined;
} & Pick<React.HTMLAttributes<HTMLDivElement>, "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & React.RefAttributes<HTMLDivElement> & (ITEM extends {
    label: string;
} ? {} : {
    getItemLabel: PropGetItemLabel<ITEM>;
}) & (ITEM extends {
    id: React.ReactText;
} ? {} : {
    getItemKey: PropGetItemKey<ITEM>;
}) & (GROUP extends {
    label: string;
} ? {} : {
    getGroupLabel: PropGetGroupLabel<GROUP>;
}) & (GROUP extends {
    id: React.ReactText;
} ? {} : {
    getGroupKey: PropGetGroupKey<GROUP>;
}) & {
    getItemLabel: PropGetItemLabel<DefaultItem> | PropGetItemLabel<ITEM>;
    getItemKey: PropGetItemKey<DefaultItem> | PropGetItemKey<ITEM>;
    getItemGroupKey: PropGetItemGroupKey<DefaultItem> | PropGetItemGroupKey<ITEM>;
    getItemDisabled: PropGetItemDisabled<DefaultItem> | PropGetItemDisabled<ITEM>;
    getGroupLabel: PropGetGroupLabel<DefaultGroup> | PropGetGroupLabel<GROUP>;
    getGroupKey: PropGetGroupKey<DefaultGroup> | PropGetGroupKey<GROUP>;
};
export {};
