import { __assign, __rest } from "tslib";
import './File.css';
import React from 'react';
import { fileIconPropSizeDefault } from '../../fileIcons/FileIcon/FileIcon';
import { FileIconAvi } from '../../fileIcons/FileIconAvi/FileIconAvi';
import { FileIconBmp } from '../../fileIcons/FileIconBmp/FileIconBmp';
import { FileIconCsv } from '../../fileIcons/FileIconCsv/FileIconCsv';
import { FileIconDoc } from '../../fileIcons/FileIconDoc/FileIconDoc';
import { FileIconExe } from '../../fileIcons/FileIconExe/FileIconExe';
import { FileIconGif } from '../../fileIcons/FileIconGif/FileIconGif';
import { FileIconJpg } from '../../fileIcons/FileIconJpg/FileIconJpg';
import { FileIconJson } from '../../fileIcons/FileIconJson/FileIconJson';
import { FileIconLoading } from '../../fileIcons/FileIconLoading/FileIconLoading';
import { FileIconMov } from '../../fileIcons/FileIconMov/FileIconMov';
import { FileIconMp3 } from '../../fileIcons/FileIconMp3/FileIconMp3';
import { FileIconMp4 } from '../../fileIcons/FileIconMp4/FileIconMp4';
import { FileIconPdf } from '../../fileIcons/FileIconPdf/FileIconPdf';
import { FileIconPng } from '../../fileIcons/FileIconPng/FileIconPng';
import { FileIconPtt } from '../../fileIcons/FileIconPtt/FileIconPtt';
import { FileIconRar } from '../../fileIcons/FileIconRar/FileIconRar';
import { FileIconRtf } from '../../fileIcons/FileIconRtf/FileIconRtf';
import { FileIconTiff } from '../../fileIcons/FileIconTiff/FileIconTiff';
import { FileIconTxt } from '../../fileIcons/FileIconTxt/FileIconTxt';
import { FileIconUndefined } from '../../fileIcons/FileIconUndefined/FileIconUndefined';
import { FileIconWav } from '../../fileIcons/FileIconWav/FileIconWav';
import { FileIconXls } from '../../fileIcons/FileIconXls/FileIconXls';
import { FileIconZip } from '../../fileIcons/FileIconZip/FileIconZip';
import { cn } from '../../utils/bem';
import { ProgressSpin } from '../ProgressSpin/ProgressSpin';
export var cnFile = cn('File');
var mapExtensionToSvg = {
    bmp: FileIconBmp,
    csv: FileIconCsv,
    avi: FileIconAvi,
    doc: FileIconDoc,
    docx: FileIconDoc,
    gif: FileIconGif,
    exe: FileIconExe,
    jpg: FileIconJpg,
    jpeg: FileIconJpg,
    mp3: FileIconMp3,
    mov: FileIconMov,
    mp4: FileIconMp4,
    pdf: FileIconPdf,
    ptt: FileIconPtt,
    pttx: FileIconPtt,
    png: FileIconPng,
    rar: FileIconRar,
    rtf: FileIconRtf,
    tiff: FileIconTiff,
    txt: FileIconTxt,
    wav: FileIconWav,
    zip: FileIconZip,
    gz: FileIconZip,
    xls: FileIconXls,
    xlsx: FileIconXls,
    json: FileIconJson
};
function getIconByExtension(extension) {
    if (!extension) {
        return FileIconUndefined;
    }
    return mapExtensionToSvg[extension.toLowerCase()] || FileIconUndefined;
}
export var File = function (props) {
    var extension = props.extension, loading = props.loading, loadingProgress = props.loadingProgress, className = props.className, _a = props.size, size = _a === void 0 ? fileIconPropSizeDefault : _a, loadingWithProgressSpin = props.loadingWithProgressSpin, otherProps = __rest(props, ["extension", "loading", "loadingProgress", "className", "size", "loadingWithProgressSpin"]);
    if (loading) {
        return (React.createElement(FileIconLoading, __assign({ className: cnFile(null, [className]), size: size }, otherProps), loadingWithProgressSpin && (React.createElement("div", { className: cnFile('Loader', { size: size }) },
            React.createElement(ProgressSpin, { className: cnFile('Progress'), size: size, progress: loadingProgress, animation: true })))));
    }
    var Icon = getIconByExtension(extension);
    return React.createElement(Icon, __assign({ className: cnFile(null, [className]), size: size }, otherProps));
};
