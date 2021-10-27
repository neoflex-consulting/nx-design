"use strict";
exports.__esModule = true;
exports.ChoiceGroup = exports.cnChoiceGroup = exports.choiceGroupWidthDefault = exports.choiceGroupWidth = exports.choiceGroupDefaultView = exports.choiceGroupViews = exports.choiceGroupDefaultSize = exports.choiceGroupSizes = exports.choiceGroupDefaultForm = exports.choiceGroupForms = void 0;
var tslib_1 = require("tslib");
require("./ChoiceGroup.css");
var react_1 = tslib_1.__importDefault(require("react"));
var useChoiceGroup_1 = require("../../hooks/useChoiceGroup/useChoiceGroup");
var bem_1 = require("../../utils/bem");
var getSizeByMap_1 = require("../../utils/getSizeByMap");
var ChoiceGroup_Item_1 = require("./Item/ChoiceGroup-Item");
exports.choiceGroupForms = ['default', 'brick', 'round'];
exports.choiceGroupDefaultForm = 'default';
exports.choiceGroupSizes = ['xs', 's', 'm', 'l'];
exports.choiceGroupDefaultSize = 'm';
exports.choiceGroupViews = ['primary', 'ghost', 'secondary'];
exports.choiceGroupDefaultView = 'primary';
exports.choiceGroupWidth = ['default', 'full'];
exports.choiceGroupWidthDefault = exports.choiceGroupWidth[0];
var sizeMap = {
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 'm'
};
exports.cnChoiceGroup = bem_1.cn('ChoiceGroup');
exports.ChoiceGroup = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? exports.choiceGroupDefaultSize : _a, _b = props.form, form = _b === void 0 ? exports.choiceGroupDefaultForm : _b, _c = props.view, view = _c === void 0 ? exports.choiceGroupDefaultView : _c, _d = props.width, width = _d === void 0 ? exports.choiceGroupWidthDefault : _d, onlyIcon = props.onlyIcon, iconSizeProp = props.iconSize, _e = props.value, value = _e === void 0 ? null : _e, _f = props.multiple, multiple = _f === void 0 ? false : _f, items = props.items, getLabel = props.getLabel, onChange = props.onChange, getIcon = props.getIcon, name = props.name, className = props.className, otherProps = tslib_1.__rest(props, ["size", "form", "view", "width", "onlyIcon", "iconSize", "value", "multiple", "items", "getLabel", "onChange", "getIcon", "name", "className"]);
    var _g = useChoiceGroup_1.useChoiceGroup({
        value: value,
        getKey: getLabel,
        callBack: onChange,
        multiple: multiple
    }), getOnChange = _g.getOnChange, getChecked = _g.getChecked;
    var iconSize = getSizeByMap_1.getSizeByMap(sizeMap, size, iconSizeProp);
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { ref: ref, className: exports.cnChoiceGroup({ size: size, form: form, view: view, width: width, onlyIcon: onlyIcon }, [className]) }), items.map(function (item) { return (react_1["default"].createElement(ChoiceGroup_Item_1.ChoiceGroupItem, { key: getLabel(item), onChange: getOnChange(item), checked: getChecked(item), label: getLabel(item).toString(), icon: getIcon && getIcon(item), iconSize: iconSize, multiple: multiple, onlyIcon: onlyIcon, name: name })); })));
});
