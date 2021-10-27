import { __assign, __read, __spread } from "tslib";
import { cnCheckbox } from '../../Checkbox/Checkbox';
export var useCheckboxEventsHandler = function (props, handler, checkboxRef) {
    var newProps = __assign({}, props);
    newProps.onChange = function () {
        var _a;
        var onChangeArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            onChangeArgs[_i] = arguments[_i];
        }
        var _b = __read(onChangeArgs, 1), checked = _b[0].checked;
        var value = {
            component: cnCheckbox(),
            event: 'change',
            options: {
                label: newProps.label,
                checked: checked,
                pageURL: window.location.href,
                DOMRef: checkboxRef.current
            }
        };
        handler(value);
        return (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spread([props], onChangeArgs));
    };
    return newProps;
};
