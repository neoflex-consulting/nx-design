"use strict";
exports.__esModule = true;
exports.useChoice = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var useChoiceGroupIndexed_1 = require("../../hooks/useChoiceGroupIndexed/useChoiceGroupIndexed");
exports.useChoice = function (props) {
    var _a = tslib_1.__read(react_1.useState(props.opened), 2), openedKeys = _a[0], setOpenedKeys = _a[1];
    var callBack = function (params) {
        var _a;
        setOpenedKeys(params.value);
        (_a = props.onOpen) === null || _a === void 0 ? void 0 : _a.call(props, params);
    };
    var choiceGroupIndexedParams = {
        value: openedKeys,
        multiple: !props.isAccordion,
        callBack: callBack,
        isNullableValue: true
    };
    react_1.useEffect(function () {
        setOpenedKeys(props.opened);
    }, [props.opened]);
    return useChoiceGroupIndexed_1.useChoiceGroupIndexed(choiceGroupIndexedParams);
};
