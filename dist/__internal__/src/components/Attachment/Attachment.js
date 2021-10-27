import { __assign, __rest } from "tslib";
import './Attachment.css';
import React from 'react';
import { cn } from '../../utils/bem';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
import { Button } from '../Button/Button';
import { File } from '../File/File';
import { Text } from '../Text/Text';
var cnAttachment = cn('Attachment');
var Attachment = forwardRefWithAs(function (props, ref) {
    var className = props.className, _a = props.as, as = _a === void 0 ? 'div' : _a, fileExtension = props.fileExtension, loading = props.loading, fileName = props.fileName, buttonIcon = props.buttonIcon, onButtonClick = props.onButtonClick, errorText = props.errorText, _b = props.loadingText, loadingText = _b === void 0 ? 'Loading' : _b, loadingProgress = props.loadingProgress, fileDescription = props.fileDescription, onClick = props.onClick, withActionProp = props.withAction, buttonTitle = props.buttonTitle, otherProps = __rest(props, ["className", "as", "fileExtension", "loading", "fileName", "buttonIcon", "onButtonClick", "errorText", "loadingText", "loadingProgress", "fileDescription", "onClick", "withAction", "buttonTitle"]);
    var Tag = as;
    var withAction = withActionProp || Boolean(onClick);
    var withOnButtonAction = Boolean(onButtonClick);
    return (React.createElement(Tag, __assign({}, otherProps, { onClick: onClick, className: cnAttachment({ withAction: withAction, withOnButtonAction: withOnButtonAction }, [className]), ref: ref }),
        React.createElement(File, { className: cnAttachment('File', { error: Boolean(errorText) }), extension: fileExtension, loading: loading, loadingWithProgressSpin: true, loadingProgress: loadingProgress, size: "s" }),
        React.createElement("div", { className: cnAttachment('Content') },
            fileName && (React.createElement(Text, { className: cnAttachment('FileName'), size: "s", view: "primary", lineHeight: "xs" }, fileName)),
            fileDescription && !loading && (React.createElement(Text, { className: cnAttachment('FileDescription'), size: "xs", lineHeight: "xs", view: "ghost" }, fileDescription)),
            loadingText && loading && (React.createElement(Text, { className: cnAttachment('LoadingText'), size: "xs", lineHeight: "xs", view: "ghost" }, loadingProgress ? loadingText + " " + loadingProgress + "%" : loadingText + "...")),
            errorText && (React.createElement(Text, { className: cnAttachment('ErrorText'), size: "xs", lineHeight: "xs", view: "alert" }, errorText))),
        withOnButtonAction && (React.createElement(Button, { className: cnAttachment('Button'), as: "span", onlyIcon: true, iconLeft: buttonIcon, onClick: onButtonClick, title: buttonTitle, size: "xs", view: "clear" }))));
});
export { Attachment, cnAttachment };
