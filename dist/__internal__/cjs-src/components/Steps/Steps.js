"use strict";
exports.__esModule = true;
exports.Steps = exports.cnSteps = exports.stepsDefaultSize = exports.stepsSizes = void 0;
var tslib_1 = require("tslib");
require("./Steps.css");
var react_1 = tslib_1.__importDefault(require("react"));
var useChoiceGroup_1 = require("../../hooks/useChoiceGroup/useChoiceGroup");
var bem_1 = require("../../utils/bem");
var StepsStep_1 = require("./StepsStep/StepsStep");
exports.stepsSizes = ['m', 'l'];
exports.stepsDefaultSize = exports.stepsSizes[0];
exports.cnSteps = bem_1.cn('Steps');
exports.Steps = react_1["default"].forwardRef(function (props, ref) {
    var _a = props.size, size = _a === void 0 ? exports.stepsDefaultSize : _a, items = props.items, value = props.value, getLabel = props.getLabel, getDisabled = props.getDisabled, getCompleted = props.getCompleted, getSkipped = props.getSkipped, onChange = props.onChange, className = props.className, otherProps = tslib_1.__rest(props, ["size", "items", "value", "getLabel", "getDisabled", "getCompleted", "getSkipped", "onChange", "className"]);
    var _b = useChoiceGroup_1.useChoiceGroup({
        value: value,
        getKey: getLabel,
        callBack: onChange,
        multiple: false
    }), getOnChange = _b.getOnChange, getChecked = _b.getChecked;
    return (react_1["default"].createElement("div", tslib_1.__assign({ ref: ref, className: exports.cnSteps({ size: size }, [className]) }, otherProps), items.map(function (item, index) { return (react_1["default"].createElement(StepsStep_1.StepsStep, { key: index, className: exports.cnSteps('Item'), label: (getCompleted === null || getCompleted === void 0 ? void 0 : getCompleted(item)) ? getLabel(item) : index + 1 + " " + getLabel(item), size: size, active: getChecked(item), onChange: getOnChange(item), completed: getCompleted === null || getCompleted === void 0 ? void 0 : getCompleted(item), skipped: getSkipped === null || getSkipped === void 0 ? void 0 : getSkipped(item), disabled: getDisabled === null || getDisabled === void 0 ? void 0 : getDisabled(item) })); })));
});
