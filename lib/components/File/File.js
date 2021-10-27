"use strict";
exports.__esModule = true;
exports.File = exports.cnFile = void 0;
var tslib_1 = require("tslib");
require("./File.css");
var react_1 = tslib_1.__importDefault(require("react"));
var FileIcon_1 = require("../../fileIcons/FileIcon/FileIcon");
var FileIconAvi_1 = require("../../fileIcons/FileIconAvi/FileIconAvi");
var FileIconBmp_1 = require("../../fileIcons/FileIconBmp/FileIconBmp");
var FileIconCsv_1 = require("../../fileIcons/FileIconCsv/FileIconCsv");
var FileIconDoc_1 = require("../../fileIcons/FileIconDoc/FileIconDoc");
var FileIconExe_1 = require("../../fileIcons/FileIconExe/FileIconExe");
var FileIconGif_1 = require("../../fileIcons/FileIconGif/FileIconGif");
var FileIconJpg_1 = require("../../fileIcons/FileIconJpg/FileIconJpg");
var FileIconJson_1 = require("../../fileIcons/FileIconJson/FileIconJson");
var FileIconLoading_1 = require("../../fileIcons/FileIconLoading/FileIconLoading");
var FileIconMov_1 = require("../../fileIcons/FileIconMov/FileIconMov");
var FileIconMp3_1 = require("../../fileIcons/FileIconMp3/FileIconMp3");
var FileIconMp4_1 = require("../../fileIcons/FileIconMp4/FileIconMp4");
var FileIconPdf_1 = require("../../fileIcons/FileIconPdf/FileIconPdf");
var FileIconPng_1 = require("../../fileIcons/FileIconPng/FileIconPng");
var FileIconPtt_1 = require("../../fileIcons/FileIconPtt/FileIconPtt");
var FileIconRar_1 = require("../../fileIcons/FileIconRar/FileIconRar");
var FileIconRtf_1 = require("../../fileIcons/FileIconRtf/FileIconRtf");
var FileIconTiff_1 = require("../../fileIcons/FileIconTiff/FileIconTiff");
var FileIconTxt_1 = require("../../fileIcons/FileIconTxt/FileIconTxt");
var FileIconUndefined_1 = require("../../fileIcons/FileIconUndefined/FileIconUndefined");
var FileIconWav_1 = require("../../fileIcons/FileIconWav/FileIconWav");
var FileIconXls_1 = require("../../fileIcons/FileIconXls/FileIconXls");
var FileIconZip_1 = require("../../fileIcons/FileIconZip/FileIconZip");
var bem_1 = require("../../utils/bem");
var ProgressSpin_1 = require("../ProgressSpin/ProgressSpin");
exports.cnFile = bem_1.cn('File');
var mapExtensionToSvg = {
    bmp: FileIconBmp_1.FileIconBmp,
    csv: FileIconCsv_1.FileIconCsv,
    avi: FileIconAvi_1.FileIconAvi,
    doc: FileIconDoc_1.FileIconDoc,
    docx: FileIconDoc_1.FileIconDoc,
    gif: FileIconGif_1.FileIconGif,
    exe: FileIconExe_1.FileIconExe,
    jpg: FileIconJpg_1.FileIconJpg,
    jpeg: FileIconJpg_1.FileIconJpg,
    mp3: FileIconMp3_1.FileIconMp3,
    mov: FileIconMov_1.FileIconMov,
    mp4: FileIconMp4_1.FileIconMp4,
    pdf: FileIconPdf_1.FileIconPdf,
    ptt: FileIconPtt_1.FileIconPtt,
    pttx: FileIconPtt_1.FileIconPtt,
    png: FileIconPng_1.FileIconPng,
    rar: FileIconRar_1.FileIconRar,
    rtf: FileIconRtf_1.FileIconRtf,
    tiff: FileIconTiff_1.FileIconTiff,
    txt: FileIconTxt_1.FileIconTxt,
    wav: FileIconWav_1.FileIconWav,
    zip: FileIconZip_1.FileIconZip,
    gz: FileIconZip_1.FileIconZip,
    xls: FileIconXls_1.FileIconXls,
    xlsx: FileIconXls_1.FileIconXls,
    json: FileIconJson_1.FileIconJson
};
function getIconByExtension(extension) {
    if (!extension) {
        return FileIconUndefined_1.FileIconUndefined;
    }
    return mapExtensionToSvg[extension.toLowerCase()] || FileIconUndefined_1.FileIconUndefined;
}
exports.File = function (props) {
    var extension = props.extension, loading = props.loading, loadingProgress = props.loadingProgress, className = props.className, _a = props.size, size = _a === void 0 ? FileIcon_1.fileIconPropSizeDefault : _a, loadingWithProgressSpin = props.loadingWithProgressSpin, otherProps = tslib_1.__rest(props, ["extension", "loading", "loadingProgress", "className", "size", "loadingWithProgressSpin"]);
    if (loading) {
        return (react_1["default"].createElement(FileIconLoading_1.FileIconLoading, tslib_1.__assign({ className: exports.cnFile(null, [className]), size: size }, otherProps), loadingWithProgressSpin && (react_1["default"].createElement("div", { className: exports.cnFile('Loader', { size: size }) },
            react_1["default"].createElement(ProgressSpin_1.ProgressSpin, { className: exports.cnFile('Progress'), size: size, progress: loadingProgress, animation: true })))));
    }
    var Icon = getIconByExtension(extension);
    return react_1["default"].createElement(Icon, tslib_1.__assign({ className: exports.cnFile(null, [className]), size: size }, otherProps));
};
