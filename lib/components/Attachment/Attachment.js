"use strict";
exports.__esModule = true;
exports.cnAttachment = exports.Attachment = void 0;
var tslib_1 = require("tslib");
require("./Attachment.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../utils/bem");
var PropsWithAsAttributes_1 = require("../../utils/types/PropsWithAsAttributes");
var index_1 = require("../index");
var File_1 = require("../File/File");
var Text_1 = require("../Text/Text");
var cnAttachment = bem_1.cn('Attachment');
exports.cnAttachment = cnAttachment;
var Attachment = PropsWithAsAttributes_1.forwardRefWithAs(function (props, ref) {
    var className = props.className, _a = props.as, as = _a === void 0 ? 'div' : _a, fileExtension = props.fileExtension, loading = props.loading, fileName = props.fileName, buttonIcon = props.buttonIcon, onButtonClick = props.onButtonClick, errorText = props.errorText, _b = props.loadingText, loadingText = _b === void 0 ? 'Loading' : _b, loadingProgress = props.loadingProgress, fileDescription = props.fileDescription, onClick = props.onClick, withActionProp = props.withAction, buttonTitle = props.buttonTitle, otherProps = tslib_1.__rest(props, ["className", "as", "fileExtension", "loading", "fileName", "buttonIcon", "onButtonClick", "errorText", "loadingText", "loadingProgress", "fileDescription", "onClick", "withAction", "buttonTitle"]);
    var Tag = as;
    var withAction = withActionProp || Boolean(onClick);
    var withOnButtonAction = Boolean(onButtonClick);
    return (react_1["default"].createElement(Tag, tslib_1.__assign({}, otherProps, { onClick: onClick, className: cnAttachment({ withAction: withAction, withOnButtonAction: withOnButtonAction }, [className]), ref: ref }),
        react_1["default"].createElement(File_1.File, { className: cnAttachment('File', { error: Boolean(errorText) }), extension: fileExtension, loading: loading, loadingWithProgressSpin: true, loadingProgress: loadingProgress, size: "s" }),
        react_1["default"].createElement("div", { className: cnAttachment('Content') },
            fileName && (react_1["default"].createElement(Text_1.Text, { className: cnAttachment('FileName'), size: "s", view: "primary", lineHeight: "xs" }, fileName)),
            fileDescription && !loading && (react_1["default"].createElement(Text_1.Text, { className: cnAttachment('FileDescription'), size: "xs", lineHeight: "xs", view: "ghost" }, fileDescription)),
            loadingText && loading && (react_1["default"].createElement(Text_1.Text, { className: cnAttachment('LoadingText'), size: "xs", lineHeight: "xs", view: "ghost" }, loadingProgress ? loadingText + " " + loadingProgress + "%" : loadingText + "...")),
            errorText && (react_1["default"].createElement(Text_1.Text, { className: cnAttachment('ErrorText'), size: "xs", lineHeight: "xs", view: "alert" }, errorText))),
        withOnButtonAction && (react_1["default"].createElement(index_1.Button, { className: cnAttachment('Button'), as: "span", onlyIcon: true, iconLeft: buttonIcon, onClick: onButtonClick, title: buttonTitle, size: "xs", view: "clear" }))));
});
exports.Attachment = Attachment;
