"use strict";
exports.__esModule = true;
exports.SwitchGroup = exports.switchGroupDefaultView = exports.switchGroupViews = exports.switchGroupDefaultSize = exports.switchGroupSizes = exports.switchGroupDefaultDirection = exports.switchGroupDirections = exports.cnSwitchGroup = void 0;
var tslib_1 = require("tslib");
require("./SwitchGroup.css");
var react_1 = tslib_1.__importDefault(require("react"));
var useChoiceGroup_1 = require("../../hooks/useChoiceGroup/useChoiceGroup");
var bem_1 = require("../../utils/bem");
var Switch_1 = require("../Switch/Switch");
exports.cnSwitchGroup = bem_1.cn('SwitchGroup');
exports.switchGroupDirections = ['column', 'row'];
exports.switchGroupDefaultDirection = exports.switchGroupDirections[0];
exports.switchGroupSizes = ['m', 'l'];
exports.switchGroupDefaultSize = exports.switchGroupSizes[0];
exports.switchGroupViews = ['primary', 'ghost'];
exports.switchGroupDefaultView = exports.switchGroupViews[0];
exports.SwitchGroup = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.value, value = _a === void 0 ? null : _a, items = props.items, getLabel = props.getLabel, getDisabled = props.getDisabled, onChange = props.onChange, name = props.name, _b = props.direction, direction = _b === void 0 ? exports.switchGroupDefaultDirection : _b, _c = props.size, size = _c === void 0 ? exports.switchGroupDefaultSize : _c, _d = props.view, view = _d === void 0 ? exports.switchGroupDefaultView : _d, _e = props.disabled, disabled = _e === void 0 ? false : _e, className = props.className, otherProps = tslib_1.__rest(props, ["value", "items", "getLabel", "getDisabled", "onChange", "name", "direction", "size", "view", "disabled", "className"]);
    var _f = useChoiceGroup_1.useChoiceGroup({
        value: value,
        getKey: getLabel,
        callBack: onChange,
        multiple: true
    }), getOnChange = _f.getOnChange, getChecked = _f.getChecked;
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { ref: ref, className: exports.cnSwitchGroup({ direction: direction, size: size, view: view }, [className]) }), items.map(function (item) { return (react_1["default"].createElement(Switch_1.Switch, { key: getLabel(item), label: getLabel(item), size: size, view: view, name: name, disabled: disabled || (getDisabled === null || getDisabled === void 0 ? void 0 : getDisabled(item)), checked: getChecked(item), onChange: function (_a) {
            var e = _a.e;
            return getOnChange(item)(e);
        }, className: exports.cnSwitchGroup('Item') })); })));
});
