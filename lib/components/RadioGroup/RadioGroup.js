"use strict";
exports.__esModule = true;
exports.RadioGroup = exports.radioGroupPropAlignDefault = exports.radioGroupPropAlign = exports.radioGroupDefaultView = exports.radioGroupViews = exports.radioGroupDefaultSize = exports.radioGroupSizes = exports.radioGroupDefaultDirection = exports.radioGroupDirections = exports.cnRadioGroup = void 0;
var tslib_1 = require("tslib");
require("./RadioGroup.css");
var react_1 = tslib_1.__importDefault(require("react"));
var useChoiceGroup_1 = require("../../hooks/useChoiceGroup/useChoiceGroup");
var bem_1 = require("../../utils/bem");
var Radio_1 = require("../Radio/Radio");
exports.cnRadioGroup = bem_1.cn('RadioGroup');
exports.radioGroupDirections = ['column', 'row'];
exports.radioGroupDefaultDirection = exports.radioGroupDirections[0];
exports.radioGroupSizes = ['m', 'l'];
exports.radioGroupDefaultSize = exports.radioGroupSizes[0];
exports.radioGroupViews = ['primary', 'ghost'];
exports.radioGroupDefaultView = exports.radioGroupViews[0];
exports.radioGroupPropAlign = ['center', 'top'];
exports.radioGroupPropAlignDefault = exports.radioGroupPropAlign[0];
exports.RadioGroup = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.value, value = _a === void 0 ? null : _a, items = props.items, getLabel = props.getLabel, getDisabled = props.getDisabled, onChange = props.onChange, name = props.name, _b = props.direction, direction = _b === void 0 ? exports.radioGroupDefaultDirection : _b, _c = props.size, size = _c === void 0 ? exports.radioGroupDefaultSize : _c, _d = props.view, view = _d === void 0 ? exports.radioGroupDefaultView : _d, _e = props.align, align = _e === void 0 ? exports.radioGroupPropAlignDefault : _e, _f = props.disabled, disabled = _f === void 0 ? false : _f, className = props.className, otherProps = tslib_1.__rest(props, ["value", "items", "getLabel", "getDisabled", "onChange", "name", "direction", "size", "view", "align", "disabled", "className"]);
    var _g = useChoiceGroup_1.useChoiceGroup({
        value: value,
        getKey: getLabel,
        callBack: onChange,
        multiple: false
    }), getOnChange = _g.getOnChange, getChecked = _g.getChecked;
    return (react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { ref: ref, className: exports.cnRadioGroup({ direction: direction, size: size, view: view }, [className]) }), items.map(function (item) { return (react_1["default"].createElement(Radio_1.Radio, { align: align, key: getLabel(item), label: getLabel(item), size: size, view: view, name: name, disabled: disabled || (!!getDisabled && getDisabled(item)), checked: getChecked(item), onChange: function (_a) {
            var e = _a.e;
            return getOnChange(item)(e);
        }, className: exports.cnRadioGroup('Item') })); })));
});
