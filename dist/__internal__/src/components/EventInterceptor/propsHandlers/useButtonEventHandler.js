import { __assign, __read, __spread } from "tslib";
import { cnButton } from '../../Button/Button';
export var useButtonEventHandler = function (props, handler) {
    var newProps = __assign({}, props);
    newProps.onClick = function () {
        var _a;
        var onClickArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            onClickArgs[_i] = arguments[_i];
        }
        var _b = __read(onClickArgs, 1), e = _b[0];
        var value = {
            component: cnButton(),
            event: e.type,
            options: {
                text: e.currentTarget.innerText,
                pageURL: e.currentTarget.baseURI,
                DOMRef: e.currentTarget
            }
        };
        handler(value);
        return (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spread([props], onClickArgs));
    };
    return newProps;
};
