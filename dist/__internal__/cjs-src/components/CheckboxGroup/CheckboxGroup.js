"use strict";
exports.__esModule = true;
exports.CheckboxGroup = exports.checkboxGroupDefaultView = exports.checkboxGroupViews = exports.checkboxGroupDefaultSize = exports.checkboxGroupSizes = exports.checkboxGroupDefaultDirection = exports.checkboxGroupDirections = exports.cnCheckboxGroup = void 0;
var tslib_1 = require("tslib");
require("./CheckboxGroup.css");
var react_1 = tslib_1.__importDefault(require("react"));
var useChoiceGroup_1 = require("../../hooks/useChoiceGroup/useChoiceGroup");
var bem_1 = require("../../utils/bem");
var Checkbox_1 = require("../Checkbox/Checkbox");
exports.cnCheckboxGroup = bem_1.cn('CheckboxGroup');
exports.checkboxGroupDirections = ['column', 'row'];
exports.checkboxGroupDefaultDirection = exports.checkboxGroupDirections[0];
exports.checkboxGroupSizes = ['m', 'l'];
exports.checkboxGroupDefaultSize = exports.checkboxGroupSizes[0];
exports.checkboxGroupViews = ['primary', 'ghost'];
exports.checkboxGroupDefaultView = exports.checkboxGroupViews[0];
exports.CheckboxGroup = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.value, value = _a === void 0 ? null : _a, items = props.items, getLabel = props.getLabel, getDisabled = props.getDisabled, onChange = props.onChange, name = props.name, _b = props.direction, direction = _b === void 0 ? exports.checkboxGroupDefaultDirection : _b, _c = props.size, size = _c === void 0 ? exports.checkboxGroupDefaultSize : _c, _d = props.view, view = _d === void 0 ? exports.checkboxGroupDefaultView : _d, _e = props.disabled, disabled = _e === void 0 ? false : _e, className = props.className, otherProps = tslib_1.__rest(props, ["value", "items", "getLabel", "getDisabled", "onChange", "name", "direction", "size", "view", "disabled", "className"]);
    var _f = useChoiceGroup_1.useChoiceGroup({
        value: value,
        getKey: getLabel,
        callBack: onChange,
        multiple: true
    }), getOnChange = _f.getOnChange, getChecked = _f.getChecked;
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { ref: ref, className: exports.cnCheckboxGroup({ direction: direction, size: size, view: view }, [className]) }), items.map(function (item) { return (react_1["default"].createElement(Checkbox_1.Checkbox, { key: getLabel(item), label: getLabel(item), size: size, view: view, name: name, disabled: disabled || (getDisabled === null || getDisabled === void 0 ? void 0 : getDisabled(item)), checked: getChecked(item), onChange: function (_a) {
            var e = _a.e;
            return getOnChange(item)(e);
        }, className: exports.cnCheckboxGroup('Item') })); })));
});
