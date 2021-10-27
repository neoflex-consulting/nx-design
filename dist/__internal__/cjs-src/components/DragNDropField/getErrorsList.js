"use strict";
exports.__esModule = true;
exports.getErrorsList = void 0;
var tslib_1 = require("tslib");
var type_guards_1 = require("../../utils/type-guards");
var formatFileSize_1 = require("./formatFileSize");
var ERROR_FORMATTERS = {
    'file-invalid-type': function (_a) {
        var type = _a.type;
        return ['формат файла не подходит', type && "(" + type + ")"].filter(type_guards_1.isNotNil).join(' ');
    },
    'file-too-large': function (_a) {
        var size = _a.size;
        return "\u0444\u0430\u0439\u043B \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439 (\u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C " + formatFileSize_1.formatFileSize(size) + ")";
    },
    'file-too-small': function (_a) {
        var size = _a.size;
        return "\u0444\u0430\u0439\u043B \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 (\u043C\u0438\u043D\u0438\u043C\u0443\u043C " + formatFileSize_1.formatFileSize(size) + ")";
    }
};
var GENERAL_ERROR = 'не получилось добавить файл';
exports.getErrorsList = function (fileRejections) {
    var e_1, _a, e_2, _b;
    var _c, _d;
    var errorsList = [];
    var tooManyFilesErrorsCount = 0;
    try {
        for (var fileRejections_1 = tslib_1.__values(fileRejections), fileRejections_1_1 = fileRejections_1.next(); !fileRejections_1_1.done; fileRejections_1_1 = fileRejections_1.next()) {
            var rejection = fileRejections_1_1.value;
            try {
                for (var _e = (e_2 = void 0, tslib_1.__values(rejection.errors)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var error = _f.value;
                    if (error.code === 'too-many-files') {
                        tooManyFilesErrorsCount++;
                    }
                    else {
                        errorsList.push(rejection.file.name + ": " + ((_d = (_c = ERROR_FORMATTERS[error.code]) === null || _c === void 0 ? void 0 : _c.call(ERROR_FORMATTERS, rejection.file)) !== null && _d !== void 0 ? _d : GENERAL_ERROR));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (fileRejections_1_1 && !fileRejections_1_1.done && (_a = fileRejections_1["return"])) _a.call(fileRejections_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (tooManyFilesErrorsCount) {
        errorsList.unshift("\u0412\u044B \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0444\u0430\u0439\u043B\u043E\u0432. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u0438\u043D, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430");
    }
    return errorsList;
};
