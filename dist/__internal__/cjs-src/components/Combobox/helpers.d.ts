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
declare type RenderValueProps<ITEM> = {
    item: ITEM;
    handleRemove?: (e: React.SyntheticEvent) => void;
};
export declare type PropGetItemLabel<ITEM> = (item: ITEM) => string;
export declare type PropGetItemKey<ITEM> = (item: ITEM) => string | number;
export declare type PropGetItemGroupKey<ITEM> = (item: ITEM) => string | number | undefined;
export declare type PropGetItemDisabled<ITEM> = (item: ITEM) => boolean | undefined;
export declare type PropGetGroupKey<GROUP> = (group: GROUP) => string | number;
export declare type PropGetGroupLabel<GROUP> = (group: GROUP) => string;
declare type PropSearchFunction<ITEM> = (item: ITEM, searchValue: string) => boolean;
declare type PropOnChange<ITEM, MULTIPLE extends boolean> = (props: {
    value: (MULTIPLE extends true ? ITEM[] : ITEM) | null;
    e: React.SyntheticEvent;
}) => void;
declare type PropValue<ITEM, MULTIPLE extends boolean> = (MULTIPLE extends true ? ITEM[] : ITEM) | null | undefined;
export declare type PropRenderItem<ITEM> = (props: RenderItemProps<ITEM>) => React.ReactElement | null;
export declare type PropRenderValue<ITEM> = (props: RenderValueProps<ITEM>) => React.ReactElement | null;
export declare type ComboboxProps<ITEM = DefaultItem, GROUP = DefaultGroup, MULTIPLE extends boolean = false> = PropsWithHTMLAttributesAndRef<{
    items: ITEM[];
    onChange: PropOnChange<ITEM, MULTIPLE>;
    disabled?: boolean;
    form?: PropForm;
    size?: Exclude<PropSize, 'xs'>;
    view?: PropView;
    placeholder?: string;
    ariaLabel?: string;
    dropdownClassName?: string;
    dropdownRef?: React.RefObject<HTMLDivElement>;
    name?: string;
    renderItem?: PropRenderItem<ITEM>;
    renderValue?: PropRenderValue<ITEM>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onCreate?: (props: {
        e: React.SyntheticEvent;
        label: string;
    }) => void;
    inputRef?: React.RefObject<HTMLInputElement>;
    labelForNotFound?: string;
    labelForCreate?: string;
    searchFunction?: PropSearchFunction<ITEM>;
    multiple?: MULTIPLE;
    value?: PropValue<ITEM, MULTIPLE>;
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
export declare type ComboboxComponent = <ITEM = DefaultItem, GROUP = DefaultGroup, MULTIPLE extends boolean = false>(props: ComboboxProps<ITEM, GROUP, MULTIPLE>) => React.ReactElement | null;
export declare const defaultGetItemKey: PropGetItemKey<DefaultItem>;
export declare const defaultGetItemLabel: PropGetItemLabel<DefaultItem>;
export declare const defaultGetItemGroupKey: PropGetItemGroupKey<DefaultItem>;
export declare const defaultGetItemDisabled: PropGetItemDisabled<DefaultItem>;
export declare const defaultGetGroupKey: PropGetGroupKey<DefaultGroup>;
export declare const defaultGetGroupLabel: PropGetGroupLabel<DefaultGroup>;
export declare const isMultipleParams: <ITEM, GROUP>(params: ComboboxProps<ITEM, GROUP, boolean>) => params is ComboboxProps<ITEM, GROUP, true>;
export declare const isNotMultipleParams: <ITEM, GROUP>(params: ComboboxProps<ITEM, GROUP, boolean>) => params is ComboboxProps<ITEM, GROUP, false>;
export declare function withDefaultGetters<ITEM = DefaultItem, GROUP = DefaultGroup, MULTIPLE extends boolean = false>(props: ComboboxProps<ITEM, GROUP, MULTIPLE>): {
    items: ITEM[];
    onChange: PropOnChange<ITEM, MULTIPLE>;
    disabled?: boolean | undefined;
    form?: "default" | "round" | "brick" | "brickDefault" | "defaultBrick" | "clearRound" | "roundClear" | "clearDefault" | "defaultClear" | "brickClear" | "clearBrick" | "clearClear" | undefined;
    size?: "s" | "m" | "l" | undefined;
    view?: "default" | "clear" | undefined;
    placeholder?: string | undefined;
    ariaLabel?: string | undefined;
    dropdownClassName?: string | undefined;
    dropdownRef?: React.RefObject<HTMLDivElement> | undefined;
    name?: string | undefined;
    renderItem?: PropRenderItem<ITEM> | undefined;
    renderValue?: PropRenderValue<ITEM> | undefined;
    onFocus?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    onCreate?: ((props: {
        e: React.SyntheticEvent<Element, Event>;
        label: string;
    }) => void) | undefined;
    inputRef?: React.RefObject<HTMLInputElement> | undefined;
    labelForNotFound?: string | undefined;
    labelForCreate?: string | undefined;
    searchFunction?: PropSearchFunction<ITEM> | undefined;
    multiple?: MULTIPLE | undefined;
    value?: PropValue<ITEM, MULTIPLE>;
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
