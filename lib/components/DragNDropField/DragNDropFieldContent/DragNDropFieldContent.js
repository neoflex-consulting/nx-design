"use strict";
exports.__esModule = true;
exports.DragNDropFieldContent = void 0;
var tslib_1 = require("tslib");
require("./DragNDropFieldContent.css");
var react_1 = tslib_1.__importDefault(require("react"));
var IconAttach_1 = require("../../../icons/IconAttach/IconAttach");
var bem_1 = require("../../../utils/bem");
var index_1 = require("../../index");
var Text_1 = require("../../Text/Text");
var formatFileRequirements_1 = require("./formatFileRequirements");
var cnDragNDropFieldContent = bem_1.cn('DragNDropFieldContent');
exports.DragNDropFieldContent = function (_a) {
    var accept = _a.accept, maxSize = _a.maxSize, multiple = _a.multiple, openFileDialog = _a.openFileDialog;
    var requirements = formatFileRequirements_1.formatFileRequirements(accept, maxSize);
    var fileText = multiple ? 'файлы' : 'файл';
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Text_1.Text, { view: "secondary", size: "s", lineHeight: "s", align: "center" },
            "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 ",
            fileText,
            " \u0441\u044E\u0434\u0430 \u0438\u043B\u0438\u00A0\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043F\u043E\u00A0\u043A\u043D\u043E\u043F\u043A\u0435",
            requirements && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("br", null),
                requirements))),
        react_1["default"].createElement(index_1.Button, { className: cnDragNDropFieldContent('Button'), label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C " + fileText, iconLeft: IconAttach_1.IconAttach, view: "ghost", size: "s", onClick: openFileDialog })));
};
