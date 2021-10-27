"use strict";
exports.__esModule = true;
exports.ChoiceGroupItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var MixFocus_1 = require("../../../mixs/MixFocus/MixFocus");
var ChoiceGroup_1 = require("../ChoiceGroup");
exports.ChoiceGroupItem = function (props) {
    var label = props.label, onChange = props.onChange, checked = props.checked, multiple = props.multiple, Icon = props.icon, onlyIcon = props.onlyIcon, name = props.name, iconSize = props.iconSize;
    var _a = tslib_1.__read(react_1.useState(false), 2), focus = _a[0], setFocus = _a[1];
    var handleBlur = function () { return setFocus(false); };
    var handleFocus = function () { return setFocus(true); };
    return (react_1["default"].createElement("label", { className: ChoiceGroup_1.cnChoiceGroup('Label', { focus: focus, checked: checked }, [MixFocus_1.cnMixFocus()]), title: onlyIcon ? label : undefined },
        react_1["default"].createElement("input", { type: multiple ? 'checkbox' : 'radio', className: ChoiceGroup_1.cnChoiceGroup('Input'), checked: checked, onFocus: handleFocus, onBlur: handleBlur, value: name + "-" + label, onChange: onChange, name: name }),
        Icon && react_1["default"].createElement(Icon, { className: ChoiceGroup_1.cnChoiceGroup('Icon'), size: iconSize }),
        !onlyIcon && react_1["default"].createElement("span", { className: ChoiceGroup_1.cnChoiceGroup('Text') }, label)));
};
