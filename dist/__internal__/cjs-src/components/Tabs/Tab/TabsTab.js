"use strict";
exports.__esModule = true;
exports.TabsTab = exports.cnTabsTab = void 0;
var tslib_1 = require("tslib");
require("./TabsTab.css");
var react_1 = tslib_1.__importStar(require("react"));
var MixFocus_1 = require("../../../mixs/MixFocus/MixFocus");
var bem_1 = require("../../../utils/bem");
var getSizeByMap_1 = require("../../../utils/getSizeByMap");
exports.cnTabsTab = bem_1.cn('TabsTab');
var sizeMap = {
    s: 'xs',
    m: 's'
};
exports.TabsTab = react_1.forwardRef(function (props, ref) {
    var label = props.label, onChange = props.onChange, checked = props.checked, size = props.size, onlyIcon = props.onlyIcon, Icon = props.icon, iconSizeProp = props.iconSize, className = props.className;
    var iconSize = getSizeByMap_1.getSizeByMap(sizeMap, size, iconSizeProp);
    return (react_1["default"].createElement("button", { className: exports.cnTabsTab({ size: size, checked: checked, onlyIcon: onlyIcon }, [MixFocus_1.cnMixFocus({ before: true }), className]), onClick: checked ? undefined : onChange, ref: ref, role: "tab", type: "button", title: onlyIcon ? label : undefined },
        Icon && react_1["default"].createElement(Icon, { className: exports.cnTabsTab('Icon'), size: iconSize }),
        !onlyIcon && label));
});
