import { __read } from "tslib";
import { useEffect, useState } from 'react';
import { useChoiceGroupIndexed } from '../../hooks/useChoiceGroupIndexed/useChoiceGroupIndexed';
export var useChoice = function (props) {
    var _a = __read(useState(props.opened), 2), openedKeys = _a[0], setOpenedKeys = _a[1];
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
    useEffect(function () {
        setOpenedKeys(props.opened);
    }, [props.opened]);
    return useChoiceGroupIndexed(choiceGroupIndexedParams);
};
