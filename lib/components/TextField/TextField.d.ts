import './TextField.css';
import React from 'react';
import { IconProps, IconPropSize } from '../../icons/Icon/Icon';
import { PropsWithHTMLAttributes } from '../../utils/types/PropsWithHTMLAttributes';
export declare type TextFieldPropValue = string | null;
export declare type TextFieldPropName = string;
export declare type TextFieldPropId = string | number;
export declare const textFieldPropSize: readonly ["m", "xs", "s", "l"];
export declare type TextFieldPropSize = typeof textFieldPropSize[number];
export declare const textFieldPropSizeDefault: TextFieldPropSize;
export declare type TextFieldPropOnChange = (args: TextFieldOnChangeArguments) => void;
export declare type TextFieldOnChangeArguments = {
    e: React.ChangeEvent;
    id?: TextFieldPropId;
    name?: TextFieldPropName;
    value: TextFieldPropValue;
};
export declare const textFieldPropView: readonly ["default", "clear"];
export declare type TextFieldPropView = typeof textFieldPropView[number];
export declare const textFieldPropViewDefault: TextFieldPropView;
export declare const textFieldPropForm: readonly ["default", "defaultClear", "defaultBrick", "brick", "brickDefault", "brickClear", "brickRound", "round", "roundClear", "roundBrick", "clearRound", "clearDefault", "clearBrick", "clearClear"];
export declare type TextFieldPropForm = typeof textFieldPropForm[number];
export declare const textFieldPropFormDefault: TextFieldPropForm;
export declare const textFieldPropState: readonly ["alert", "success", "warning"];
export declare type TextFieldPropState = typeof textFieldPropState[number];
export declare const textFieldPropWidth: readonly ["default", "full"];
export declare type TextFieldPropWidth = typeof textFieldPropWidth[number];
export declare const textFieldPropWidthDefault: TextFieldPropWidth;
export declare type TextFieldPropAutoComplete = 'on' | 'off';
declare type Props = {
    className?: string;
    value?: TextFieldPropValue;
    onChange?: TextFieldPropOnChange;
    id?: TextFieldPropId;
    name?: TextFieldPropName;
    type?: string;
    disabled?: boolean;
    rows?: number;
    cols?: number;
    minRows?: number;
    maxRows?: number;
    maxLength?: number;
    size?: TextFieldPropSize;
    view?: TextFieldPropView;
    form?: TextFieldPropForm;
    state?: TextFieldPropState;
    width?: TextFieldPropWidth;
    onFocus?: React.FocusEventHandler<HTMLElement>;
    onBlur?: React.FocusEventHandler<HTMLElement>;
    autoFocus?: boolean;
    placeholder?: string;
    leftSide?: string | React.FC<IconProps>;
    rightSide?: string | React.FC<IconProps>;
    autoComplete?: TextFieldPropAutoComplete;
    max?: number | string;
    min?: number | string;
    readOnly?: boolean;
    required?: boolean;
    step?: number | string;
    tabIndex?: number;
    inputRef?: React.Ref<HTMLTextAreaElement | HTMLInputElement>;
    ariaLabel?: string;
    iconSize?: IconPropSize;
    children?: never;
};
export declare type TextFieldProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;
export declare const cnTextField: import("@bem-react/classname").ClassNameFormatter;
export declare const TextField: React.ForwardRefExoticComponent<Props & Pick<React.HTMLAttributes<HTMLDivElement>, "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "slot" | "spellCheck" | "style" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture"> & React.RefAttributes<HTMLDivElement>>;
export {};