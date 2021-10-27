import React from 'react';
import { SnackBarProps } from '../../SnackBar/SnackBar';
import { EventInterceptorHandler } from '../EventInterceptor';
export declare const useSnackBarEventsHandler: (props: SnackBarProps, handler: EventInterceptorHandler) => {
    items: import("../../SnackBar/SnackBar").Item[];
    children?: undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: boolean | "true" | "false" | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | "true" | "false" | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: boolean | "true" | "false" | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: boolean | "true" | "false" | undefined;
    'aria-autocomplete'?: "none" | "inline" | "list" | "both" | undefined;
    'aria-busy'?: boolean | "true" | "false" | undefined;
    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: boolean | "true" | "false" | undefined;
    'aria-dropeffect'?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: boolean | "true" | "false" | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: boolean | "true" | "false" | undefined;
    'aria-haspopup'?: boolean | "dialog" | "menu" | "true" | "false" | "listbox" | "tree" | "grid" | undefined;
    'aria-hidden'?: boolean | "true" | "false" | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: boolean | "true" | "false" | undefined;
    'aria-multiline'?: boolean | "true" | "false" | undefined;
    'aria-multiselectable'?: boolean | "true" | "false" | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-readonly'?: boolean | "true" | "false" | undefined;
    'aria-relevant'?: "text" | "additions" | "additions text" | "all" | "removals" | undefined;
    'aria-required'?: boolean | "true" | "false" | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: boolean | "true" | "false" | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onCopyCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onCut?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onCutCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onPaste?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onPasteCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
    onCompositionEnd?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
    onCompositionEndCapture?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
    onCompositionStart?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
    onCompositionStartCapture?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
    onCompositionUpdate?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
    onCompositionUpdateCapture?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
    onFocus?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
    onFocusCapture?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
    onBlurCapture?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
    onChange?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onChangeCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onBeforeInput?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onBeforeInputCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onInput?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onInputCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onReset?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onResetCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onSubmit?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onSubmitCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onInvalid?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onInvalidCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
    onLoad?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onError?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onErrorCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onKeyDown?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onKeyPress?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onKeyUp?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
    onAbort?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onAbortCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onCanPlay?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onCanPlayThroughCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onDurationChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onDurationChangeCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEmptied?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEncrypted?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEncryptedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEnded?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onEndedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadedData?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadedDataCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadedMetadataCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadStart?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onLoadStartCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPause?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPauseCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPlay?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPlayCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPlaying?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onPlayingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onProgress?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onProgressCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onRateChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onRateChangeCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSeeked?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSeekedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSeeking?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSeekingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onStalled?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onStalledCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSuspend?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSuspendCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onTimeUpdate?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onTimeUpdateCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onVolumeChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onVolumeChangeCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onWaiting?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onWaitingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onAuxClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onAuxClickCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onClickCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onContextMenu?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onContextMenuCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onDoubleClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onDoubleClickCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onDrag?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragEnd?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragEndCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragEnter?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragEnterCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragExit?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragExitCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragLeave?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragLeaveCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragOver?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragOverCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragStart?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDragStartCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDrop?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onDropCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
    onMouseDown?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseDownCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseEnter?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseLeave?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseMove?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseMoveCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseOut?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseOutCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseOver?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseOverCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseUp?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onMouseUpCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onSelect?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onSelectCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
    onTouchCancel?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchCancelCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchEnd?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchEndCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchMove?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchMoveCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchStart?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
    onTouchStartCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
    onPointerDown?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerDownCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerMove?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerMoveCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerUp?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerUpCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerCancel?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerCancelCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerEnter?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerEnterCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerLeave?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerLeaveCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerOver?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerOverCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerOut?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onPointerOutCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onGotPointerCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onGotPointerCaptureCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onLostPointerCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onLostPointerCaptureCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
    onScroll?: ((event: React.UIEvent<HTMLDivElement, UIEvent>) => void) | undefined;
    onScrollCapture?: ((event: React.UIEvent<HTMLDivElement, UIEvent>) => void) | undefined;
    onWheel?: ((event: React.WheelEvent<HTMLDivElement>) => void) | undefined;
    onWheelCapture?: ((event: React.WheelEvent<HTMLDivElement>) => void) | undefined;
    onAnimationStart?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
    onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
    onAnimationEnd?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
    onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
    onAnimationIteration?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
    onAnimationIterationCapture?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
    onTransitionEnd?: ((event: React.TransitionEvent<HTMLDivElement>) => void) | undefined;
    onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLDivElement>) => void) | undefined;
};
